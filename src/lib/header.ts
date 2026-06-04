const HEADER_OFFSET = 58

type SectionBounds = {
  id: string
  top: number
  bottom: number
}

const getNavLinks = (navMenu: Element): Map<string, HTMLAnchorElement> =>
  new Map(
    [...navMenu.querySelectorAll('a[href^="#"]')]
      .map((link) => {
        const id = link.getAttribute('href')?.slice(1)
        return id ? ([id, link] as const) : null
      })
      .filter((entry): entry is [string, HTMLAnchorElement] => entry !== null),
  )

const measureSections = (sections: HTMLElement[]): SectionBounds[] =>
  sections.map((section) => {
    const top = section.offsetTop - HEADER_OFFSET
    return { id: section.id, top, bottom: top + section.offsetHeight }
  })

const applyActiveLink = (
  navLinks: Map<string, HTMLAnchorElement>,
  sectionBounds: SectionBounds[],
  scrollY: number,
): void => {
  let activeId: string | null = null

  for (const section of sectionBounds) {
    if (scrollY > section.top && scrollY <= section.bottom) activeId = section.id
  }

  navLinks.forEach((link, id) => {
    const isActive = id === activeId
    link.classList.toggle('active-link', isActive)
    if (isActive) link.setAttribute('aria-current', 'location')
    else link.removeAttribute('aria-current')
  })
}

export const initHeaderActiveLink = (): void => {
  const navMenu = document.querySelector('[data-nav-menu]')
  if (!navMenu) return

  const sections = [...document.querySelectorAll('section[id]')] as HTMLElement[]
  if (!sections.length) return

  const navLinks = getNavLinks(navMenu)

  let ticking = false
  let recalcQueued = false
  let sectionBounds = measureSections(sections)

  function updateOnScroll() {
    applyActiveLink(navLinks, sectionBounds, window.scrollY)
    ticking = false
  }

  function requestScrollUpdate() {
    if (ticking) return
    ticking = true
    requestAnimationFrame(updateOnScroll)
  }

  function recalculateSectionBounds() {
    sectionBounds = measureSections(sections)
    recalcQueued = false
    applyActiveLink(navLinks, sectionBounds, window.scrollY)
  }

  function requestSectionRecalc() {
    if (recalcQueued) return
    recalcQueued = true
    requestAnimationFrame(recalculateSectionBounds)
  }

  const resizeObserver = new ResizeObserver(requestSectionRecalc)
  sections.forEach((section) => resizeObserver.observe(section))

  requestSectionRecalc()
  window.addEventListener('scroll', requestScrollUpdate, { passive: true })
  window.addEventListener('resize', requestSectionRecalc, { passive: true })
}
