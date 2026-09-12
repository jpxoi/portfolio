import { Book, CodeAlt, HomeAlt, PaperPlane, User } from '@boxicons/react'
import type { NavItem } from '../types'

export const NAV_ITEMS: NavItem[] = [
  {
    route: '#home',
    label: 'Home',
    alt: 'Go to home',
    icon: HomeAlt,
    defaultActive: true,
  },
  {
    route: '#projects',
    label: 'Projects',
    alt: 'Go to projects',
    icon: CodeAlt,
  },
  {
    route: '#about',
    label: 'About',
    alt: 'Go to about',
    icon: User,
  },
  {
    route: '#skills',
    label: 'Skills',
    alt: 'Go to skills',
    icon: Book,
  },
  {
    route: '#contact',
    label: 'Contact',
    alt: 'Go to contact',
    icon: PaperPlane,
  },
]
