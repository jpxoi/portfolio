const HEADER_OFFSET = 58

type SectionBounds = {
  id: string
  top: number
  bottom: number
}

export const initHeaderActiveLink = (): void => {
  const navMenu = document.querySelector('[data-nav-menu]')
  if (!navMenu) return

  const sections = [...document.querySelectorAll<HTMLElement>('section[id]')]
  const linkById = new Map(
    [...navMenu.querySelectorAll<HTMLAnchorElement>('a[href^="#"]')].flatMap((link) => {
      const id = link.getAttribute('href')?.slice(1)
      return id ? ([[id, link]] as const) : []
    }),
  )

  if (!sections.length || !linkById.size) return

  let bounds: SectionBounds[] = []
  let frame = 0

  const measure = () =>
    sections.map((section) => {
      const top = section.offsetTop - HEADER_OFFSET
      return { id: section.id, top, bottom: top + section.offsetHeight }
    })

  const setActive = (scrollY: number) => {
    let activeId: string | null = null
    for (const section of bounds) {
      if (scrollY > section.top && scrollY <= section.bottom) activeId = section.id
    }

    linkById.forEach((link, id) => {
      const isActive = id === activeId
      link.classList.toggle('active-link', isActive)
      link.ariaCurrent = isActive ? 'location' : null
    })
  }

  const update = () => {
    frame = 0
    setActive(window.scrollY)
  }

  const scheduleUpdate = () => {
    if (!frame) frame = requestAnimationFrame(update)
  }

  const remeasure = () => {
    bounds = measure()
    setActive(window.scrollY)
  }

  bounds = measure()
  setActive(window.scrollY)

  const resizeObserver = new ResizeObserver(remeasure)
  sections.forEach((section) => resizeObserver.observe(section))

  window.addEventListener('scroll', scheduleUpdate, { passive: true })
  window.addEventListener('resize', remeasure, { passive: true })
}
