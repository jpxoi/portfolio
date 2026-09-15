import { CDN_URL } from '../constants'
import type { Project } from '../types'

const PROJECT_IMAGE_WIDTHS = [768, 1280, 1920] as const

export function getProjectAssetSlug(project: Pick<Project, 'id' | 'slug'>) {
  return project.slug ?? project.id
}

export function getProjectImageSources(project: Pick<Project, 'id' | 'slug'>, imageKey: string) {
  const baseUrl = `${CDN_URL}/projects/${getProjectAssetSlug(project)}/${imageKey}`

  return {
    avifSrcSet: PROJECT_IMAGE_WIDTHS.map((width) => `${baseUrl}-${width}.avif ${width}w`).join(', '),
    fallback: `${baseUrl}-1920.webp`,
    webpSrcSet: PROJECT_IMAGE_WIDTHS.map((width) => `${baseUrl}-${width}.webp ${width}w`).join(', '),
  }
}
