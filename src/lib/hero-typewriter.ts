export const HERO_ROLES = ['Software Engineer', 'Full-stack Developer', 'AI Engineer'] as const

const PAUSE_AFTER_TYPED_MS = 2000
const TYPE_DELAY_MS = [60, 80] as const
const DELETE_DELAY_MS = [80, 100] as const

function randomBetween(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export function initHeroTypewriter(): void {
  const headerEl = document.getElementById('dynamic-header')
  if (!headerEl) return

  const el = headerEl
  const texts = [...HERO_ROLES]

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    el.textContent = texts[0]
    return
  }

  let textIndex = 0
  let charIndex = texts[0].length - 1
  let isDeleting = false

  function typeWriter(): void {
    const fullText = texts[textIndex]
    let delay: number

    if (!isDeleting) {
      el.textContent = fullText.substring(0, charIndex + 1)
      charIndex++
      if (charIndex === fullText.length) {
        isDeleting = true
        setTimeout(typeWriter, PAUSE_AFTER_TYPED_MS)
        return
      }
      delay = randomBetween(TYPE_DELAY_MS[0], TYPE_DELAY_MS[1])
    } else {
      el.textContent = fullText.substring(0, charIndex - 1)
      charIndex--
      if (charIndex === 0) {
        isDeleting = false
        textIndex = (textIndex + 1) % texts.length
      }
      delay = randomBetween(DELETE_DELAY_MS[0], DELETE_DELAY_MS[1])
    }

    setTimeout(typeWriter, delay)
  }

  typeWriter()
}
