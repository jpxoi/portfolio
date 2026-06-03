export const initSkillsMarqueeVisibility = (): void => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  const rows = document.querySelectorAll('#skills [data-skills-row]')
  if (!rows.length) return

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const row = entry.target as HTMLElement
        row.dataset.inView = entry.isIntersecting ? 'true' : 'false'
      })
    },
    { rootMargin: '0px 0px -6% 0px', threshold: 0.12 },
  )

  rows.forEach((row) => observer.observe(row))
}
