export interface Project {
  id: string
  title: string
  description: string
  link?: string
  github?: string
  stack: string[]
}

export interface AboutInfo {
  icon: string
  title: string
  subtitle: string
}

export interface Contact {
  id: string
  title: string
  data: string
  link: string
  cta: string
  icon: string
}

export interface FooterSocial {
  id: string
  title: string
  link: string
  target_blank: boolean
}
