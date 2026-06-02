const DARK_CLASS = 'dark'
const THEME_STORAGE_KEY = 'selected-theme'
const THEME_CHANGE_EVENT = 'theme-change'

export type Theme = 'light' | 'dark'

function isDarkTheme(): boolean {
  return document.documentElement.classList.contains(DARK_CLASS)
}

export function getTheme(): Theme {
  return isDarkTheme() ? 'dark' : 'light'
}

function applyTheme(theme: Theme): void {
  document.documentElement.classList.toggle(DARK_CLASS, theme === 'dark')
  localStorage.setItem(THEME_STORAGE_KEY, theme)
  window.dispatchEvent(new CustomEvent<{ theme: Theme }>(THEME_CHANGE_EVENT, { detail: { theme } }))
}

export function toggleTheme(): Theme {
  const next: Theme = isDarkTheme() ? 'light' : 'dark'
  applyTheme(next)
  return next
}

function readStoredTheme(): Theme | null {
  const stored = localStorage.getItem(THEME_STORAGE_KEY)
  return stored === 'light' || stored === 'dark' ? stored : null
}

export function initTheme(): void {
  const stored = readStoredTheme()
  applyTheme(stored ?? 'dark')
}

export function subscribeToTheme(callback: (theme: Theme) => void): () => void {
  const handler = (event: Event) => {
    const custom = event as CustomEvent<{ theme: Theme }>
    callback(custom.detail?.theme ?? getTheme())
  }
  window.addEventListener(THEME_CHANGE_EVENT, handler)
  return () => window.removeEventListener(THEME_CHANGE_EVENT, handler)
}
