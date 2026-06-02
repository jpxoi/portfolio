export type Theme = 'light' | 'dark'

const DARK_CLASS = 'dark'
const THEME_STORAGE_KEY = 'selected-theme'
const THEME_CHANGE_EVENT = 'theme-change'
const DEFAULT_THEME: Theme = 'dark'

const VALID_THEMES: readonly Theme[] = ['light', 'dark']

const resolveThemeFromStorage = (stored: string | null): Theme =>
  stored !== null && (VALID_THEMES as readonly string[]).includes(stored) ? (stored as Theme) : DEFAULT_THEME

/** Inline IIFE for <head>: applies `dark` on <html> before first paint (anti-FOUC). */
export const buildThemeHeadScript = (): string =>
  `;(function(){var k=${JSON.stringify(THEME_STORAGE_KEY)};var d=${JSON.stringify(DEFAULT_THEME)};var s=localStorage.getItem(k);var t=${VALID_THEMES.map((t) => `s===${JSON.stringify(t)}`).join('||')}?s:d;document.documentElement.classList.toggle(${JSON.stringify(DARK_CLASS)},t==="dark")})();`

const isDarkTheme = (): boolean => document.documentElement.classList.contains(DARK_CLASS)

export const getTheme = (): Theme => (isDarkTheme() ? 'dark' : 'light')

function applyTheme(theme: Theme): void {
  document.documentElement.classList.toggle(DARK_CLASS, theme === 'dark')
  localStorage.setItem(THEME_STORAGE_KEY, theme)
  window.dispatchEvent(new CustomEvent<{ theme: Theme }>(THEME_CHANGE_EVENT, { detail: { theme } }))
}

export const toggleTheme = (): Theme => (applyTheme(isDarkTheme() ? 'light' : 'dark'), getTheme())

export const initTheme = (): void => applyTheme(resolveThemeFromStorage(localStorage.getItem(THEME_STORAGE_KEY)))

export const subscribeToTheme = (callback: (theme: Theme) => void): (() => void) => {
  const handler = (event: Event) => callback((event as CustomEvent<{ theme: Theme }>).detail?.theme ?? getTheme())
  window.addEventListener(THEME_CHANGE_EVENT, handler)
  return () => window.removeEventListener(THEME_CHANGE_EVENT, handler)
}
