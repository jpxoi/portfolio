import { Alarm, Envelope, Linkedin } from '@boxicons/react'
import type { Contact } from '../types'
import { CAL_BOOKING_URL } from '../constants'

export const contactData: Contact[] = [
  {
    id: 'email-contact-card-icon',
    title: 'Email',
    link: 'mailto:hello@jpxoi.com',
    cta: 'Write me',
    icon: Envelope,
  },
  {
    id: 'linkedin-contact-card-icon',
    title: 'LinkedIn',
    link: 'https://linkedin.com/in/jpxoi',
    cta: 'Connect with me',
    icon: Linkedin,
  },
  {
    id: 'calendar-contact-card-icon',
    title: "Let's Talk",
    link: CAL_BOOKING_URL,
    cta: 'Book a 15-min intro',
    icon: Alarm,
  },
]
