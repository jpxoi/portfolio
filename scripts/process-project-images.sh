#!/usr/bin/env bash

set -euo pipefail

readonly SOURCE_WIDTH=1920
readonly SOURCE_HEIGHT=1080
readonly AVIF_QUALITY=60
readonly WEBP_QUALITY=82
readonly WIDTHS=(768 1280 1920)

usage() {
  cat <<'EOF'
Usage:
  pnpm images:projects [--clean] [--dry-run] <input-directory> [output-directory]

Processes every PNG below the input directory and preserves its relative path.
The output directory defaults to a sibling directory named "processed".

Example:
  raw/fortuna-raffle/cover.png
  raw/fortuna-raffle/receipt-submission.png

becomes:
  processed/fortuna-raffle/cover.png
  processed/fortuna-raffle/cover-{768,1280,1920}.{avif,webp}
  processed/fortuna-raffle/receipt-submission.png
  processed/fortuna-raffle/receipt-submission-{768,1280,1920}.{avif,webp}

Every source image must be exactly 1920x1080 pixels.

The output directory must not contain unexpected files. macOS metadata such as
.DS_Store and ._* is ignored. Pass --clean to remove previously generated PNG
copies plus AVIF and WebP files before processing; unexpected files are never
deleted. --clean asks for confirmation unless --dry-run is also passed.

Pass --dry-run to validate inputs and print the actions that would run without
writing, deleting, or creating directories.
EOF
}

require_magick_write_format() {
  local format=$1
  local format_line

  format_line=$(
    magick -list format | awk -v fmt="$format" '
      {
        name = $1
        sub(/\*$/, "", name)
        if (toupper(name) == toupper(fmt)) {
          print
          exit
        }
      }
    '
  )

  if [[ -z $format_line ]]; then
    echo "Error: ImageMagick has no ${format} delegate. Install a build with ${format} support." >&2
    exit 1
  fi

  if ! awk '
    {
      for (i = 2; i <= NF; i++) {
        if ($i ~ /^[r-][w-][+]?$/) {
          if ($i ~ /w/) exit 0
          exit 1
        }
      }
      exit 1
    }
  ' <<<"$format_line"; then
    echo "Error: ImageMagick cannot write ${format} files. Install a build with ${format} write support." >&2
    exit 1
  fi
}

first_blocking_output_file() {
  local skip_generated=$1
  local find_args=(
    "$output_directory"
    -type f
    ! -name '.DS_Store'
    ! -name '._*'
  )

  if [[ $skip_generated == true ]]; then
    find_args+=(! -iname '*.png' ! -iname '*.avif' ! -iname '*.webp')
  fi

  find_args+=(-print -quit)
  find "${find_args[@]}"
}

destination_directory_for() {
  local relative_directory=$1

  if [[ $relative_directory == '.' ]]; then
    printf '%s' "$output_directory"
  else
    printf '%s/%s' "$output_directory" "$relative_directory"
  fi
}

# Canonicalize a path that may not exist yet, without creating directories.
# Walks up to the nearest existing ancestor, resolves it with pwd -P, then
# re-appends the missing components. This matches mkdir -p for dry runs
# whose immediate parent has not been created yet.
resolve_missing_directory() {
  local path=$1
  local missing_suffix=
  local current=$path
  local parent

  while [[ ! -d $current ]]; do
    if [[ $current == '/' || $current == '.' ]]; then
      echo "Error: cannot resolve output directory: $path" >&2
      exit 1
    fi

    parent=$(dirname "$current")
    if [[ $parent == "$current" ]]; then
      echo "Error: cannot resolve output directory: $path" >&2
      exit 1
    fi

    if [[ -n $missing_suffix ]]; then
      missing_suffix="$(basename "$current")/$missing_suffix"
    else
      missing_suffix=$(basename "$current")
    fi

    current=$parent
  done

  printf '%s/%s' "$(cd "$current" && pwd -P)" "$missing_suffix"
}

clean_output=false
dry_run=false
positional_arguments=()

while [[ $# -gt 0 ]]; do
  case $1 in
    --)
      ;;
    --clean)
      clean_output=true
      ;;
    --dry-run)
      dry_run=true
      ;;
    -h | --help)
      usage
      exit 0
      ;;
    -*)
      echo "Error: unknown option: $1" >&2
      usage >&2
      exit 1
      ;;
    *)
      positional_arguments+=("$1")
      ;;
  esac
  shift
done

if [[ ${#positional_arguments[@]} -gt 0 ]]; then
  set -- "${positional_arguments[@]}"
else
  set --
fi

if [[ $# -lt 1 || $# -gt 2 ]]; then
  usage >&2
  exit 1
fi

if ! command -v magick >/dev/null 2>&1; then
  echo 'Error: ImageMagick 7 is required, but the "magick" command was not found.' >&2
  exit 1
fi

require_magick_write_format AVIF
require_magick_write_format WEBP

input_directory=${1%/}

if [[ -z $input_directory || $input_directory == '/' || ! -d $input_directory ]]; then
  echo "Error: input directory does not exist: $input_directory" >&2
  exit 1
fi

if [[ $# -eq 2 ]]; then
  output_directory=${2%/}
else
  input_parent=$(dirname "$input_directory")
  output_directory="$input_parent/processed"
fi

if [[ -z $output_directory || $output_directory == '/' ]]; then
  echo 'Error: refusing to use the filesystem root as the output directory.' >&2
  exit 1
fi

png_count=0
while IFS= read -r -d '' source_file; do
  png_count=$((png_count + 1))

  relative_path=${source_file#"$input_directory"/}
  if [[ ! $relative_path =~ ^([a-z0-9]+(-[a-z0-9]+)*/)*[a-z0-9]+(-[a-z0-9]+)*\.png$ ]]; then
    echo "Error: PNG paths must use lowercase kebab-case: $relative_path" >&2
    exit 1
  fi

  dimensions=$(magick identify -format '%wx%h' "$source_file")
  if [[ $dimensions != "${SOURCE_WIDTH}x${SOURCE_HEIGHT}" ]]; then
    echo "Error: expected ${SOURCE_WIDTH}x${SOURCE_HEIGHT}, got $dimensions: $source_file" >&2
    exit 1
  fi
done < <(find "$input_directory" -type f -iname '*.png' -print0)

if [[ $png_count -eq 0 ]]; then
  echo "Error: no PNG files found below: $input_directory" >&2
  exit 1
fi

input_directory=$(cd "$input_directory" && pwd -P)

if [[ -d $output_directory ]]; then
  output_directory=$(cd "$output_directory" && pwd -P)
elif [[ $dry_run == true ]]; then
  output_directory=$(resolve_missing_directory "$output_directory")
else
  mkdir -p "$output_directory"
  output_directory=$(cd "$output_directory" && pwd -P)
fi

case "$output_directory/" in
  "$input_directory/"*)
    echo 'Error: the output directory cannot be the input directory or live inside it.' >&2
    exit 1
    ;;
esac

case "$input_directory/" in
  "$output_directory/"*)
    echo 'Error: the input directory cannot live inside the output directory.' >&2
    exit 1
    ;;
esac

if [[ -d $output_directory && $clean_output == true ]]; then
  clean_files=()
  while IFS= read -r -d '' generated_file; do
    clean_files+=("$generated_file")
  done < <(find "$output_directory" -type f \( -iname '*.png' -o -iname '*.avif' -o -iname '*.webp' \) -print0)

  if [[ ${#clean_files[@]} -gt 0 ]]; then
    if [[ $dry_run == true ]]; then
      echo "Would delete ${#clean_files[@]} PNG, AVIF and WebP file(s) from $output_directory"
    else
      echo "This will delete ${#clean_files[@]} PNG, AVIF and WebP file(s) from $output_directory"
    fi

    for generated_file in "${clean_files[@]}"; do
      echo "  $generated_file"
    done

    if [[ $dry_run == false ]]; then
      echo
      read -r -p 'Continue? [y/N] ' reply || true
      case ${reply:-} in
        y | Y | yes | Yes | YES) ;;
        *)
          echo 'Aborted.' >&2
          exit 1
          ;;
      esac

      find "$output_directory" -type f \( -iname '*.png' -o -iname '*.avif' -o -iname '*.webp' \) -delete
      find "$output_directory" -depth -mindepth 1 -type d -empty -delete
    fi
  fi
fi

if [[ -d $output_directory ]]; then
  skip_generated=false
  if [[ $dry_run == true && $clean_output == true ]]; then
    skip_generated=true
  fi

  blocking_file=$(first_blocking_output_file "$skip_generated")
  if [[ -n $blocking_file ]]; then
    echo "Error: output directory is not empty: $output_directory" >&2
    echo "Unexpected file: $blocking_file" >&2
    echo 'Use an empty directory or pass --clean to remove generated PNG, AVIF and WebP files.' >&2
    exit 1
  fi
fi

if [[ $dry_run == true ]]; then
  echo "Dry run: no files will be written."
  echo "Would process $png_count PNG image(s) from $input_directory"
  echo "Would write source PNG copies and responsive AVIF and WebP variants to $output_directory"
else
  echo "Processing $png_count PNG image(s) from $input_directory"
  echo "Writing source PNG copies and responsive AVIF and WebP variants to $output_directory"
fi

while IFS= read -r -d '' source_file; do
  relative_path=${source_file#"$input_directory"/}
  relative_directory=$(dirname "$relative_path")
  filename=$(basename "$relative_path")
  filename_without_extension=${filename%.*}
  destination_directory=$(destination_directory_for "$relative_directory")

  if [[ $dry_run == false ]]; then
    mkdir -p "$destination_directory"
  fi

  png_copy="$destination_directory/$filename"
  if [[ $dry_run == true ]]; then
    echo "  Would copy $png_copy"
  else
    cp "$source_file" "$png_copy"
    echo "  Copied $png_copy"
  fi

  for width in "${WIDTHS[@]}"; do
    height=$((width * SOURCE_HEIGHT / SOURCE_WIDTH))
    output_base="$destination_directory/${filename_without_extension}-${width}"

    if [[ $dry_run == false ]]; then
      magick "$source_file" \
        -auto-orient \
        -strip \
        -colorspace sRGB \
        -filter Lanczos \
        -resize "${width}x${height}" \
        -define heic:speed=6 \
        -quality "$AVIF_QUALITY" \
        "$output_base.avif"

      magick "$source_file" \
        -auto-orient \
        -strip \
        -colorspace sRGB \
        -filter Lanczos \
        -resize "${width}x${height}" \
        -define webp:method=6 \
        -quality "$WEBP_QUALITY" \
        "$output_base.webp"
    fi

    if [[ $dry_run == true ]]; then
      echo "  Would create ${output_base}.{avif,webp} (${width}x${height})"
    else
      echo "  Created ${output_base}.{avif,webp} (${width}x${height})"
    fi
  done
done < <(find "$input_directory" -type f -iname '*.png' -print0)

if [[ $dry_run == true ]]; then
  echo 'Dry run complete. No files were written.'
else
  echo 'Done.'
fi
