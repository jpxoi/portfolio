import type { Project } from '../types'

export const projects: Project[] = [
  {
    id: 'fortuna-raffle',
    title: 'Fortuna Grifo — Loyalty & Campaign Management Platform',
    description:
      'Full-stack loyalty platform for Fortuna Grifo, allowing customers to register purchases, validate CPE receipt data against SUNAT, track campaign entries, and manage participation in a grand-prize promotion. Includes member onboarding, a customer portal, and an admin dashboard for operations and compliance.',
    link: 'https://sorteo.fortuna.pe',
    stack: ['NextJS', 'React', 'TypeScript', 'TailwindCSS', 'Clerk', 'Drizzle ORM', 'Neon', 'Upstash'],
  },
  {
    id: 'onvoice',
    title: 'Onvoice — Real-Time Lecture Transcription',
    description:
      'A platform for live speech transcription, real-time translation, and session sharing powered by AI. Hosts can go live in under 2 minutes, share a QR code for instant audience access, and receive AI-generated summaries with key points and engagement insights at the end of each session.',
    link: 'https://beta.onvoice.uk',
    stack: ['NextJS', 'TailwindCSS', 'TypeScript', 'PostgreSQL'],
  },
  {
    id: 'yupay-dev',
    title: 'Yupay — Peruvian Data API',
    description:
      'REST API for querying Peruvian public data, including DNI lookup, RUC information from SUNAT, and official exchange rates from SUNAT and SBS. Built with Hono, TypeScript, and TursoDB for fast edge-based access.',
    link: 'https://www.yupay.dev',
    stack: ['ReactJS', 'Vite', 'Hono', 'TailwindCSS', 'TypeScript', 'TursoDB'],
  },
  {
    id: 'wa-transcriber',
    title: 'WA Transcriber — Local WhatsApp Voice Note Transcription',
    description:
      'A privacy-focused CLI tool that automatically transcribes WhatsApp Desktop voice notes to your clipboard using OpenAI Whisper — entirely offline. Supports hardware acceleration via Apple Silicon MPS and NVIDIA CUDA, includes an interactive setup wizard, system health check to recommend the optimal Whisper model, and auto-cleanup of unused models to save disk space.',
    github: 'https://github.com/jpxoi/wa-transcriber',
    stack: ['Python'],
  },
  {
    id: 'pastoral-digital-app',
    title: 'Pastoral Digital App — Digital ID & Attendance Platform',
    description:
      'A Progressive Web App for the Pastoral Mariana community, giving catechists a digital profile, QR-based Pastoral Digital ID, and access to their attendance history for catechesis meetings and pastoral activities. Built with Next.js, Clerk authentication, PostgreSQL, Drizzle ORM, and Uploadthing.',
    link: 'https://id.pastoralmarianaps.net.pe',
    github: 'https://github.com/jpxoi/pastoral-digital-app',
    stack: ['NextJS', 'React', 'TypeScript', 'TailwindCSS', 'Clerk', 'Drizzle ORM', 'PostgreSQL', 'Uploadthing'],
  },
  {
    id: 'bg-landing',
    title: 'Bioeasy Galenos Landing Page',
    description:
      'A responsive marketing website for Bioeasy Galenos, a medical education academy, built with Astro, React, and TailwindCSS. The site presents institutional information, programmes, and lead-generation content with a fast, content-focused frontend.',
    link: 'https://bgmedicina.com',
    github: 'https://github.com/jpxoi/bioeasy-landing',
    stack: ['Astro', 'TailwindCSS', 'TypeScript', 'TursoDB'],
  },
]
