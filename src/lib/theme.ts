type Theme = 'light' | 'dark'

const DARK_CLASS = 'dark'
const THEME_STORAGE_KEY = 'selected-theme'
const DEFAULT_THEME: Theme = 'dark'

const VALID_THEMES: readonly Theme[] = ['light', 'dark']

const resolveThemeFromStorage = (stored: string | null): Theme =>
  stored !== null && (VALID_THEMES as readonly string[]).includes(stored) ? (stored as Theme) : DEFAULT_THEME

/** Matches --body-color in global.css so the page background is correct before CSS loads. */
export const buildCriticalThemeStyle = (): string =>
  `html{background-color:hsl(219,48%,8%);color-scheme:dark}html:not(.${DARK_CLASS}){background-color:hsl(219,100%,99%);color-scheme:light}`

/** Inline IIFE for <head>: mirrors resolveThemeFromStorage; short vars keep the HTML small. */
export const buildThemeHeadScript = (): string =>
  `;(function(){var k=${JSON.stringify(THEME_STORAGE_KEY)};var d=${JSON.stringify(DEFAULT_THEME)};var s=localStorage.getItem(k);var t=${VALID_THEMES.map((v) => `s===${JSON.stringify(v)}`).join('||')}?s:d;var e=document.documentElement;e.classList.toggle(${JSON.stringify(DARK_CLASS)},t==="dark");e.classList.add("theme-init");requestAnimationFrame(function(){requestAnimationFrame(function(){e.classList.remove("theme-init")})})})();`

const isDarkTheme = (): boolean => document.documentElement.classList.contains(DARK_CLASS)

function syncThemeClass(theme: Theme): void {
  document.documentElement.classList.toggle(DARK_CLASS, theme === 'dark')
}

function applyTheme(theme: Theme): void {
  syncThemeClass(theme)
  localStorage.setItem(THEME_STORAGE_KEY, theme)
}

export const toggleTheme = (): void => applyTheme(isDarkTheme() ? 'light' : 'dark')

export const initTheme = (): void => syncThemeClass(resolveThemeFromStorage(localStorage.getItem(THEME_STORAGE_KEY)))
