import type { Contact } from '../types'
import { Envelope, Linkedin, Whatsapp } from '@boxicons/react'

export const contactData: Contact[] = [
  {
    id: 'email-contact-card-icon',
    title: 'Email',
    link: 'mailto:hello@jpxoi.com',
    cta: 'Write me',
    icon: Envelope,
  },
  {
    id: 'whatsapp-contact-card-icon',
    title: 'Whatsapp',
    link: 'https://api.whatsapp.com/send?phone=51924999570&text=Hello,%20more%20information!',
    cta: 'Write me',
    icon: Whatsapp,
  },
  {
    id: 'linkedin-contact-card-icon',
    title: 'LinkedIn',
    link: 'https://linkedin.com/in/jpxoi',
    cta: 'Connect with me',
    icon: Linkedin,
  },
]
