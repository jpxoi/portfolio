export const LIGHT_THEME_CLASS = 'light-theme'
export const THEME_STORAGE_KEY = 'selected-theme'
export const THEME_STORAGE_VERSION_KEY = 'theme-storage-version'
export const THEME_STORAGE_VERSION = '2'
export const THEME_CHANGE_EVENT = 'theme-change'
const LEGACY_ICON_KEY = 'selected-icon'

export type Theme = 'light' | 'dark'

export function isLightTheme(): boolean {
  return document.body.classList.contains(LIGHT_THEME_CLASS)
}

export function getTheme(): Theme {
  return isLightTheme() ? 'light' : 'dark'
}

export function applyTheme(theme: Theme): void {
  document.body.classList.toggle(LIGHT_THEME_CLASS, theme === 'light')
  localStorage.setItem(THEME_STORAGE_KEY, theme)
  localStorage.setItem(THEME_STORAGE_VERSION_KEY, THEME_STORAGE_VERSION)
  window.dispatchEvent(new CustomEvent<{ theme: Theme }>(THEME_CHANGE_EVENT, { detail: { theme } }))
}

export function toggleTheme(): Theme {
  const next: Theme = isLightTheme() ? 'dark' : 'light'
  applyTheme(next)
  return next
}

/** Reads persisted theme, migrating legacy inverted `selected-theme` values. */
export function readStoredTheme(): Theme | null {
  const stored = localStorage.getItem(THEME_STORAGE_KEY)
  if (!stored) return null

  const version = localStorage.getItem(THEME_STORAGE_VERSION_KEY)
  if (version === THEME_STORAGE_VERSION) {
    return stored === 'light' || stored === 'dark' ? stored : null
  }

  localStorage.removeItem(LEGACY_ICON_KEY)
  if (stored === 'dark') return 'light'
  if (stored === 'light') return 'dark'
  return null
}

export function initTheme(): void {
  const stored = readStoredTheme()
  if (stored) {
    applyTheme(stored)
    return
  }
  localStorage.setItem(THEME_STORAGE_VERSION_KEY, THEME_STORAGE_VERSION)
}

export function subscribeToTheme(callback: (theme: Theme) => void): () => void {
  const handler = (event: Event) => {
    const custom = event as CustomEvent<{ theme: Theme }>
    callback(custom.detail?.theme ?? getTheme())
  }
  window.addEventListener(THEME_CHANGE_EVENT, handler)
  return () => window.removeEventListener(THEME_CHANGE_EVENT, handler)
}
