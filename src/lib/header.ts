type SectionBounds = {
  id: string
  top: number
  bottom: number
}

const getHeaderOffset = (): number => {
  const nav = document.querySelector('#header nav')
  return nav ? Math.round(nav.getBoundingClientRect().height) : 56
}

const resolveActiveNavId = (
  scrollY: number,
  bounds: SectionBounds[],
  linkById: Map<string, HTMLAnchorElement>,
): string | null => {
  if (!bounds.length) return null

  let sectionIndex = -1
  for (let i = 0; i < bounds.length; i++) {
    if (scrollY > bounds[i].top) sectionIndex = i
    else break
  }

  if (sectionIndex === -1) return null

  for (let i = sectionIndex; i >= 0; i--) {
    const id = bounds[i].id
    if (linkById.has(id)) return id
  }

  return null
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
  let lastActiveId: string | null = null

  const measure = () => {
    return sections.map((section) => {
      const top = section.offsetTop - getHeaderOffset()
      return { id: section.id, top, bottom: top + section.offsetHeight }
    })
  }

  const setActive = (scrollY: number) => {
    const activeId = resolveActiveNavId(scrollY, bounds, linkById)
    if (activeId === lastActiveId) return

    lastActiveId = activeId
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
    lastActiveId = null
    setActive(window.scrollY)
  }

  bounds = measure()
  setActive(window.scrollY)

  const resizeObserver = new ResizeObserver(remeasure)
  sections.forEach((section) => resizeObserver.observe(section))
  const nav = document.querySelector('#header nav')
  if (nav) resizeObserver.observe(nav)

  window.addEventListener('scroll', scheduleUpdate, { passive: true })

  requestAnimationFrame(remeasure)
}
