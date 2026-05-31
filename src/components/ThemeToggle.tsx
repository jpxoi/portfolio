import { Moon, Sun } from '@boxicons/react'
import { useEffect, useState } from 'react'
import { getTheme, initTheme, subscribeToTheme, toggleTheme, type Theme } from '../lib/theme'

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>('dark')

  useEffect(() => {
    initTheme()
    setTheme(getTheme())
    return subscribeToTheme(setTheme)
  }, [])

  const Icon = theme === 'light' ? Sun : Moon

  return (
    <button
      type='button'
      id='theme-button'
      className='change-theme'
      aria-label={theme === 'light' ? 'Activate dark theme' : 'Activate light theme'}
      onClick={() => toggleTheme()}
    >
      <Icon className='size-5' color='var(--text-color)' />
    </button>
  )
}
