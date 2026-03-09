import type { Contact } from '../types'

export const contactData: Contact[] = [
  {
    id: 'email-contact-card-icon',
    title: 'Email',
    data: 'jeanpaul@jpxoi.com',
    link: 'mailto:jeanpaul@jpxoi.com',
    cta: 'Write me',
    icon: 'bx bx-mail-send contact__card-icon',
  },
  {
    id: 'whatsapp-contact-card-icon',
    title: 'Whatsapp',
    data: '+51 924 999 570',
    link: 'https://api.whatsapp.com/send?phone=51924999570&text=Hello,%20more%20information!',
    cta: 'Write me',
    icon: 'bxl bx-whatsapp contact__card-icon',
  },
  {
    id: 'linkedin-contact-card-icon',
    title: 'LinkedIn',
    data: 'jpxoi',
    link: 'https://linkedin.com/in/jpxoi',
    cta: 'Connect with me',
    icon: 'bxl bx-linkedin contact__card-icon',
  },
]
