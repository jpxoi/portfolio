import type { Project } from '../types'

export const projects: Project[] = [
  {
    id: 'yupay-dev',
    title: 'Yupay — API de Datos Peruanos',
    description:
      'API REST para consultar datos peruanos en tiempo real. Permite obtener información de personas por DNI, empresas por RUC desde SUNAT, y tipo de cambio oficial de SUNAT y SBS. Construida con Hono sobre un backend rápido y base de datos edge con TursoDB.',
    link: 'https://www.yupay.dev',
    stack: ['ReactJS', 'Vite', 'Hono', 'TailwindCSS', 'TypeScript', 'TursoDB'],
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
    id: 'pastoral-digital-app',
    title: 'Pastoral Digital App',
    description:
      'A web application designed to facilitate the management of pastoral activities, including event organization, member registration, and communication. The app is built using NextJS and TailwindCSS, ensuring a responsive and user-friendly experience',
    link: 'https://pastoralid.jpxoi.com',
    github: 'https://github.com/jpxoi/pastoral-digital-app',
    stack: ['NextJS', 'TailwindCSS', 'PostgreSQL', 'TypeScript'],
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
    id: 'bg-landing',
    title: 'Bioeasy Galenos Landing Page',
    description:
      " A fully functional and dynamic landing page that effectively showcases Bioeasy Galenos' commitment to excellence in preparing future healthcare professionals. Bioeasy Galenos is a leading academy in the medical education space",
    link: 'https://bgmedicina.com',
    github: 'https://github.com/jpxoi/bioeasy-landing',
    stack: ['Astro', 'TailwindCSS', 'TypeScript', 'TursoDB'],
  },
  {
    id: 'portf4',
    title: 'Chatsy - A Chat App built with Flask',
    description:
      'A web-based chat application that enables real-time communication between multiple clients in a chat room environment. The application allows users to create new chat rooms or join existing ones, exchange messages with other participants, and stay engaged in dynamic conversations',
    github: 'https://github.com/jpxoi/chatsy',
    stack: ['Flask', 'Python'],
  },
]
