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
    title: 'WhatsApp',
    link: 'https://api.whatsapp.com/send?phone=519895939660&text=Hello,%20I%20saw%20your%20portfolio!',
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
