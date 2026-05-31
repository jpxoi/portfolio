import type { BoxIconProps } from '@boxicons/react'

export interface NavItem {
  route: string
  alt: string
  icon: React.ForwardRefExoticComponent<BoxIconProps & React.RefAttributes<SVGSVGElement>>
  defaultActive?: boolean
}

export interface Project {
  id: string
  title: string
  description: string
  link?: string
  github?: string
  stack: string[]
}

export interface AboutInfo {
  icon: React.ForwardRefExoticComponent<BoxIconProps & React.RefAttributes<SVGSVGElement>>
  title: string
  subtitle: string
}

export interface Contact {
  id: string
  title: string
  link: string
  cta: string
  icon: React.ForwardRefExoticComponent<BoxIconProps & React.RefAttributes<SVGSVGElement>>
}

export interface FooterSocial {
  id: string
  title: string
  link: string
  target_blank: boolean
}
