const HEADER_OFFSET = 58

export const initHeaderActiveLink = (): void => {
  const navMenu = document.querySelector('.nav__menu')
  if (!navMenu) return

  const sections = [...document.querySelectorAll('section[id]')] as HTMLElement[]
  if (!sections.length) return

  const navLinks = new Map(
    [...navMenu.querySelectorAll('a[href^="#"]')]
      .map((link) => {
        const id = link.getAttribute('href')?.slice(1)
        return id ? ([id, link] as const) : null
      })
      .filter((entry): entry is [string, HTMLAnchorElement] => entry !== null),
  )

  let ticking = false
  let recalcQueued = false
  let sectionBounds: { id: string; top: number; bottom: number }[] = []

  function updateActiveLink(scrollY = window.scrollY) {
    if (!sectionBounds.length) return

    let activeId: string | null = null

    for (const section of sectionBounds) {
      if (scrollY > section.top && scrollY <= section.bottom) {
        activeId = section.id
      }
    }

    navLinks.forEach((link, id) => {
      link.classList.toggle('active-link', id === activeId)
    })
  }

  function updateOnScroll() {
    updateActiveLink()
    ticking = false
  }

  function requestScrollUpdate() {
    if (ticking) return
    ticking = true
    requestAnimationFrame(updateOnScroll)
  }

  function recalculateSectionBounds() {
    sectionBounds = sections.map((section) => {
      const top = section.offsetTop - HEADER_OFFSET
      return {
        id: section.id,
        top,
        bottom: top + section.offsetHeight,
      }
    })

    recalcQueued = false
    updateActiveLink()
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
