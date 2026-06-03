type Theme = 'light' | 'dark'

const DARK_CLASS = 'dark'
const THEME_STORAGE_KEY = 'selected-theme'
const DEFAULT_THEME: Theme = 'dark'

const VALID_THEMES: readonly Theme[] = ['light', 'dark']

const isDarkTheme = (): boolean => document.documentElement.classList.contains(DARK_CLASS)

function syncThemeClass(theme: Theme): void {
  document.documentElement.classList.toggle(DARK_CLASS, theme === 'dark')
}

function applyTheme(theme: Theme): void {
  syncThemeClass(theme)
  localStorage.setItem(THEME_STORAGE_KEY, theme)
}

/**
 * Inline IIFE for `<head>`: syncs `.dark` before first paint and suppresses
 * theme transitions until load. Module scripts run too late for that.
 */
export const buildThemeHeadScript = (): string =>
  `;(function(){var k=${JSON.stringify(THEME_STORAGE_KEY)};var d=${JSON.stringify(DEFAULT_THEME)};var s=localStorage.getItem(k);var t=${VALID_THEMES.map((v) => `s===${JSON.stringify(v)}`).join('||')}?s:d;var e=document.documentElement;e.classList.toggle(${JSON.stringify(DARK_CLASS)},t==="dark");e.classList.add("theme-init");function r(){requestAnimationFrame(function(){e.classList.remove("theme-init")})}window.addEventListener("load",r,{once:true})})();`

export const toggleTheme = (): void => applyTheme(isDarkTheme() ? 'light' : 'dark')
