import { Book, CodeAlt, HomeAlt, PaperPlane, User } from '@boxicons/react'
import type { NavItem } from '../types'

export const NAV_ITEMS: NavItem[] = [
  {
    route: '#home',
    alt: 'home button',
    icon: HomeAlt,
    defaultActive: true,
  },
  {
    route: '#about',
    alt: 'about button',
    icon: User,
  },
  {
    route: '#projects',
    alt: 'projects button',
    icon: CodeAlt,
  },
  {
    route: '#skills',
    alt: 'skills button',
    icon: Book,
  },
  {
    route: '#contact',
    alt: 'contact button',
    icon: PaperPlane,
  },
]
