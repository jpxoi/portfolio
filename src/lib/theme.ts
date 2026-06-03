type Theme = 'light' | 'dark'

const DARK_CLASS = 'dark'
const THEME_STORAGE_KEY = 'selected-theme'
const DEFAULT_THEME: Theme = 'dark'

const VALID_THEMES: readonly Theme[] = ['light', 'dark']

const resolveThemeFromStorage = (stored: string | null): Theme =>
  stored !== null && (VALID_THEMES as readonly string[]).includes(stored) ? (stored as Theme) : DEFAULT_THEME

/** Inline IIFE for <head>: mirrors resolveThemeFromStorage; short vars keep the HTML small. */
export const buildThemeHeadScript = (): string =>
  `;(function(){var k=${JSON.stringify(THEME_STORAGE_KEY)};var d=${JSON.stringify(DEFAULT_THEME)};var s=localStorage.getItem(k);var t=${VALID_THEMES.map((v) => `s===${JSON.stringify(v)}`).join('||')}?s:d;var e=document.documentElement;e.classList.toggle(${JSON.stringify(DARK_CLASS)},t==="dark");e.classList.add("theme-init");function r(){requestAnimationFrame(function(){e.classList.remove("theme-init")})}window.addEventListener("load",r,{once:true})})();`

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
