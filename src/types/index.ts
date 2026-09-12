import type { BoxIconProps } from '@boxicons/react'

export type BoxIcon = React.ForwardRefExoticComponent<BoxIconProps & React.RefAttributes<SVGSVGElement>>

export interface NavItem {
  route: string
  label: string
  alt: string
  icon: BoxIcon
  defaultActive?: boolean
}

export interface Project {
  id: string
  slug?: string
  imageId?: string
  name: string
  tagline: string
  description: string
  link?: string
  linkLabel?: string
  secondaryLink?: string
  secondaryLinkLabel?: string
  github?: string
  githubLabel?: string
  stack: string[]
  caseStudy: {
    challenge: string
    solution: string
    highlights: {
      title: string
      description: string
    }[]
    decisions: {
      title: string
      description: string
    }[]
    engineering: string[]
  }
}

export interface Contact {
  id: string
  title: string
  link: string
  cta: string
  icon: BoxIcon
}

export interface HeroSocialLink {
  route: string
  icon: BoxIcon
  aria_label: string
  label: string
}
