import type { Project } from '../types'

export const projects: Project[] = [
  {
    id: 'fortuna-raffle',
    title: 'Fortuna Grifo — Loyalty & Campaign Management Platform',
    description:
      'Loyalty and promotional program for Fortuna Grifo: customers register fuel purchases, submit receipt identifiers for tax-authority validation, accrue draw entries, and use a self-service area plus an admin console for campaign operations and compliance.',
    link: 'https://sorteo.fortuna.pe',
    stack: ['NextJS', 'React', 'TypeScript', 'TailwindCSS', 'Clerk', 'Drizzle ORM', 'PostgreSQL', 'Redis'],
  },
  {
    id: 'apeula-app',
    title: 'APEULA — Association Operations Platform',
    description:
      'Private platform for running an association end to end: member records, document vault, event check-in, attendance history, and printable rosters, with strong validation at capture and object storage for files.',
    stack: ['NextJS', 'React', 'TypeScript', 'TailwindCSS', 'Clerk', 'Drizzle ORM', 'PostgreSQL', 'Cloudflare'],
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
      'REST API for live Peruvian public data: DNI-style lookup, RUC and tax information from SUNAT, and official USD and PEN buy, sell, and reference rates (SUNAT and SBS), optimized for low-latency, edge-style consumption.',
    link: 'https://www.yupay.dev',
    stack: ['React', 'Vite', 'Hono', 'TailwindCSS', 'TypeScript', 'TursoDB'],
  },
  {
    id: 'prgen',
    title: 'prgen — AI Pull Request Generator',
    description:
      'Developer CLI that turns git diffs and recent commits into paste-ready pull request titles and bodies. Pluggable model backends, repo-local config and presets, and install via pip, pipx, or uv.',
    link: 'https://pypi.org/project/prgen-cli',
    github: 'https://github.com/jpxoi/prgen',
    stack: ['Python', 'LLMs', 'OpenAI', 'Gemini', 'Ollama', 'CLI'],
  },
  {
    id: 'wa-transcriber',
    title: 'WA Transcriber — Local WhatsApp Voice Note Transcription',
    description:
      'Privacy-focused CLI that watches WhatsApp Desktop voice notes, runs Whisper on-device, and copies transcripts to the clipboard, fully offline. Apple Silicon and CUDA acceleration, interactive setup, a model health check, and cleanup of unused weights to free disk space.',
    link: 'https://pypi.org/project/wa-transcriber',
    github: 'https://github.com/jpxoi/wa-transcriber',
    stack: ['Python', 'OpenAI', 'CLI'],
  },
  {
    id: 'pastoral-digital-app',
    title: 'Pastoral Digital App — Digital ID & Attendance Platform',
    description:
      'Progressive web app for the Pastoral Mariana community: a digital profile, QR-based Pastoral ID, and a clear attendance history for catechesis and other pastoral events.',
    link: 'https://id.pastoralmarianaps.net.pe',
    github: 'https://github.com/jpxoi/pastoral-digital-app',
    stack: ['NextJS', 'React', 'TypeScript', 'TailwindCSS', 'Clerk', 'Drizzle ORM', 'PostgreSQL'],
  },
  {
    id: 'bg-landing',
    title: 'Bioeasy Galenos Landing Page',
    description:
      'Marketing site for a medical-prep academy: programmes, faculty and institutional story, and lead capture, with a fast, content-first experience and a minimal client runtime.',
    link: 'https://bgmedicina.com',
    github: 'https://github.com/jpxoi/bioeasy-landing',
    stack: ['Astro', 'TailwindCSS', 'TypeScript', 'TursoDB'],
  },
]
