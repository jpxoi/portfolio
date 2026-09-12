import type { Project } from '../types'

export const projects: Project[] = [
  {
    id: 'fortuna-raffle',
    name: 'Fortuna Grifo',
    tagline: 'Loyalty & Campaign Management Platform',
    description:
      'Customer and admin platform for validating fuel purchases, managing loyalty entries and running compliant promotional campaigns.',
    link: 'https://sorteo.fortuna.pe',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Drizzle ORM', 'PostgreSQL', 'Redis'],
    caseStudy: {
      challenge:
        'Fortuna needed to connect an existing fuel-sales operation with a customer-facing promotional campaign. Receipt data could be delayed or incomplete upstream, so the experience had to remain simple for participants while preserving validation rules, traceability and operational control.',
      solution:
        'The platform combines guided onboarding, receipt registration, campaign entries and a self-service customer portal with the workflows needed to review and resolve exceptional cases. Valid receipts can progress immediately, while unavailable electronic receipts enter a controlled pending-validation lifecycle instead of becoming a dead end for the customer.',
      highlights: [
        {
          title: 'Customer onboarding',
          description:
            'Authenticated registration with identity lookup, validated participant data and a portal designed around repeat campaign participation.',
        },
        {
          title: 'Receipt validation',
          description:
            'Business rules connect submitted receipt identifiers to the external sales provider before issuing promotional entries.',
        },
        {
          title: 'Pending workflows',
          description:
            'Receipts that are not yet available upstream remain traceable and are retried through controlled background workflows.',
        },
        {
          title: 'Operational visibility',
          description:
            'Campaign activity, receipt states and customer records are structured for support, compliance and day-to-day administration.',
        },
      ],
      engineering: [
        'Next.js App Router with server-rendered portal flows, server actions and dedicated API routes.',
        'PostgreSQL and Drizzle ORM as the transactional source of truth for participants, receipts and campaign entries.',
        'Upstash Redis, QStash and Workflow for locks, scheduled processing and asynchronous receipt validation.',
        'Clerk for identity, PostHog for product analytics and Better Stack for server-side operational logging.',
      ],
    },
  },
  {
    id: 'bioeasy-galenos',
    imageId: 'bg-landing',
    name: 'Bioeasy Galenos',
    tagline: 'Marketing Site & Learning Platform',
    description:
      'A connected digital experience for course discovery, lead capture and secure delivery of academic content to medical students.',
    link: 'https://bgmedicina.com',
    github: 'https://github.com/jpxoi/bioeasy-landing',
    githubLabel: 'Landing source',
    stack: ['Astro', 'Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL', 'Cloudflare R2'],
    caseStudy: {
      challenge:
        'Bioeasy Galenos needed more than a marketing presence. The academy had to present its programmes and faculty clearly, capture prospective-student interest and provide enrolled students with controlled access to courses, documents and video from one coherent digital ecosystem.',
      solution:
        'The work spans a fast public website and a private campus. The marketing layer supports discovery and enquiries, while the LMS handles onboarding, student identities, enrolments, structured course content, progress and administration without exposing protected academic resources.',
      highlights: [
        {
          title: 'Public acquisition experience',
          description:
            'A content-first site presents the academy, course catalogue and faculty while directing prospective students into a focused enquiry flow.',
        },
        {
          title: 'Student onboarding',
          description:
            'Authenticated students complete their profile and receive a unique student identifier before entering the campus.',
        },
        {
          title: 'Course operations',
          description:
            'Administrators manage users, enrolments, courses, modules, sections and resources from the same platform students use.',
        },
        {
          title: 'Protected learning content',
          description:
            'Private PDFs and token-protected video are released only to students with an active enrolment in a published course.',
        },
      ],
      engineering: [
        'Astro keeps the public marketing experience fast and content-led with minimal client-side runtime.',
        'The campus uses Next.js App Router, React and a server-first authorization model for student and administrator workflows.',
        'PostgreSQL with Drizzle ORM models users, student profiles, courses, enrolments, content structure and progress.',
        'Cloudflare R2, short-lived signed URLs, Bunny Stream tokens and Upstash rate limiting protect academic resources.',
        'Health checks, structured logging, product analytics and automated retention tasks support production operations.',
      ],
    },
  },
  {
    id: 'apeula-app',
    name: 'APEULA',
    tagline: 'Association Operations Platform',
    description:
      'Private association platform for member records, document storage, event check-in, attendance tracking and printable rosters.',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Drizzle ORM', 'PostgreSQL'],
    caseStudy: {
      challenge:
        'APEULA manages formal membership records that cross digital data, physical registry books, signed documents and in-person events. The platform had to preserve the rules of those physical processes while making every sensitive operation permission-aware and traceable.',
      solution:
        'The intranet brings the membership lifecycle into one system: applications, personal and family data, registry-book inventory, original-form printing, signed evidence, event attendance and audit history. Operational rules are enforced in the workflow instead of depending on staff memory.',
      highlights: [
        {
          title: 'Member lifecycle',
          description:
            'Structured applications, approval and rejection flows, formal membership states and eligibility conditions.',
        },
        {
          title: 'Registry books and folios',
          description:
            'Inventory for physical books, authorised ranges and folio states from availability through printing or voiding.',
        },
        {
          title: 'Controlled printing',
          description:
            'A single active print queue coordinates folio reservation, immutable PDFs, failures and signed-document evidence.',
        },
        {
          title: 'Event attendance',
          description:
            'Event lifecycles, continuous DNI-based check-in, eligibility rules, attendance rosters and exemptions.',
        },
      ],
      engineering: [
        'A relational PostgreSQL model represents membership, applications, registry inventory, printing and event history.',
        'Centralized role-based access uses explicit business permissions and denial by default.',
        'Cloudflare R2 stores private signed evidence and generated documents behind temporary signed URLs.',
        'Server-side validation, append-only operational events and audit logs protect high-impact transitions.',
      ],
    },
  },
  {
    id: 'onvoice',
    name: 'Onvoice',
    tagline: 'Real-Time Lecture Transcription',
    description:
      'AI-powered platform for live transcription, real-time translation, audience access and automatic post-session summaries.',
    link: 'https://beta.onvoice.uk',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'PostgreSQL'],
    caseStudy: {
      challenge:
        'Live lectures and presentations are difficult to follow when audio quality, accessibility or language becomes a barrier. A useful solution had to work for both the host and a large audience without requiring every attendee to create an account or configure software.',
      solution:
        'Onvoice gives hosts a short path from creating a session to sharing it. Attendees join through a QR code, follow the transcript and translation in real time, and the completed session is transformed into a structured AI-generated summary with key points and engagement insights.',
      highlights: [
        {
          title: 'Fast session setup',
          description: 'Hosts can create and begin sharing a live session through a focused, low-friction workflow.',
        },
        {
          title: 'Audience access',
          description: 'A QR-based entry flow lets attendees join the live experience from their own devices.',
        },
        {
          title: 'Live language layer',
          description: 'Streaming transcription and translation make spoken content easier to follow as it happens.',
        },
        {
          title: 'Post-session intelligence',
          description: 'AI-generated summaries turn a completed lecture into reusable key points and session insights.',
        },
      ],
      engineering: [
        'A real-time product flow coordinates host state, audience access and continuously changing transcript content.',
        'The interface separates host controls from the lightweight attendee experience while keeping both synchronized.',
        'Persistent sessions support post-event processing and access to generated summaries after the live stream ends.',
        'The architecture isolates AI processing from the core session experience so each can evolve independently.',
      ],
    },
  },
  {
    id: 'yupay-dev',
    slug: 'yupay',
    name: 'Yupay',
    tagline: 'Peruvian Data API',
    description:
      'Developer platform for Peruvian identity, tax, vehicle, insurance and official exchange-rate data through one API.',
    link: 'https://www.yupay.dev',
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Hono', 'Turso'],
    caseStudy: {
      challenge:
        'Peruvian identity, company, vehicle and exchange-rate data comes from different sources with different formats and availability. Product teams need a stable integration surface without rebuilding provider-specific validation, caching and error handling in every application.',
      solution:
        'Yupay provides a consistent REST API and developer experience around DNI, RUC, vehicle plate, SOAT and official exchange-rate queries. A web dashboard brings together documentation, API keys, usage visibility and credit purchasing for both local and international customers.',
      highlights: [
        {
          title: 'Unified public-data API',
          description: 'Consistent endpoints cover identity, taxpayer, vehicle, insurance and exchange-rate use cases.',
        },
        {
          title: 'Developer onboarding',
          description:
            'Documentation, request examples and API-key management shorten the path to a first integration.',
        },
        {
          title: 'Usage controls',
          description:
            'Authentication, request analytics, credit balances and rate limiting support controlled consumption.',
        },
        {
          title: 'Regional billing',
          description:
            'Stripe and Mercado Pago checkout flows support international cards and payment methods familiar in Peru.',
        },
      ],
      engineering: [
        'A Hono API normalizes upstream responses and validates Peruvian DNI and RUC formats before external work.',
        'Turso and Drizzle persist accounts, keys, query results, usage and credit transactions close to the API layer.',
        'Redis-backed rate limiting and caching protect upstream providers and keep repeated lookups responsive.',
        'Signed payment webhooks reconcile credit purchases independently from the checkout user interface.',
      ],
    },
  },
  {
    id: 'prgen',
    name: 'prgen',
    tagline: 'AI Pull Request Generator',
    description:
      'Developer CLI that turns git diffs and recent commits into structured pull request content across multiple LLM providers.',
    link: 'https://pypi.org/project/prgen-cli',
    github: 'https://github.com/jpxoi/prgen',
    stack: ['Python', 'CLI', 'LLMs', 'OpenAI', 'Gemini', 'Ollama'],
    caseStudy: {
      challenge:
        'Writing a useful pull request description requires reconstructing intent from code changes and commit history. The repetitive part can be automated, but the result still needs enough repository context to be accurate and useful during review.',
      solution:
        'prgen reads the current Git state, compares it with a selected base and turns the diff and commit history into a paste-ready title and description. Its provider layer supports hosted and local models without tying the workflow to a single AI vendor.',
      highlights: [
        {
          title: 'Git-aware generation',
          description: 'Repository diffs and recent commits become the source context for the generated pull request.',
        },
        {
          title: 'Multiple model providers',
          description:
            'OpenAI, Gemini and Ollama can be selected according to quality, cost or local-processing needs.',
        },
        {
          title: 'Repository configuration',
          description: 'Local configuration and presets keep output aligned with the conventions of each project.',
        },
        {
          title: 'Simple distribution',
          description: 'The package is published on PyPI and can be installed as an isolated command with uv.',
        },
      ],
      engineering: [
        'A provider-neutral interface keeps prompt orchestration separate from vendor-specific model clients.',
        'Git context is gathered locally and scoped to the selected repository and comparison base.',
        'CLI options allow the same tool to work interactively or as part of an existing development workflow.',
        'Packaging, release automation and verified PyPI publishing make the tool reproducible to install.',
      ],
    },
  },
  {
    id: 'wa-transcriber',
    name: 'WA Transcriber',
    tagline: 'Local WhatsApp Voice Note Transcription',
    description:
      'Privacy-first CLI that transcribes WhatsApp voice notes locally with Whisper and hardware acceleration, keeping audio on-device.',
    link: 'https://pypi.org/project/wa-transcriber',
    github: 'https://github.com/jpxoi/wa-transcriber',
    stack: ['Python', 'CLI', 'OpenAI'],
    caseStudy: {
      challenge:
        'WhatsApp voice notes are not always convenient or accessible, and sending personal audio to another transcription service introduces latency and privacy concerns. A desktop tool also has to cope with different file locations and very different hardware limits.',
      solution:
        'WA Transcriber watches WhatsApp Desktop for downloaded voice notes, processes them locally with Whisper and places the result directly on the clipboard. Guided setup and system diagnostics adapt the model choice to the available memory and acceleration hardware.',
      highlights: [
        {
          title: 'Automatic monitoring',
          description:
            'A background file watcher detects new voice notes and backfills recently missed downloads at startup.',
        },
        {
          title: 'Local transcription',
          description: 'Audio stays on the device while Whisper produces text for the clipboard and daily logs.',
        },
        {
          title: 'Hardware-aware setup',
          description: 'Health checks detect MPS, CUDA or CPU constraints and recommend a suitable model size.',
        },
        {
          title: 'Storage maintenance',
          description: 'Unused model weights can be cleaned automatically to control the tool’s disk footprint.',
        },
      ],
      engineering: [
        'Watchdog provides responsive filesystem monitoring without polling or blocking the desktop session.',
        'The transcription pipeline supports Apple Silicon acceleration, NVIDIA CUDA and CPU fallback.',
        'A dedicated health command checks FFmpeg, available memory and model compatibility before long-running use.',
        'The Python package is distributed through PyPI with a focused CLI for setup, health, config, logs and reset.',
      ],
    },
  },
  {
    id: 'pastoral-digital-app',
    name: 'Pastoral Digital App',
    tagline: 'Digital ID & Attendance Platform',
    description:
      'Progressive web app with digital member profiles, QR-based identification and attendance history for pastoral events.',
    link: 'https://id.pastoralmarianaps.net.pe',
    github: 'https://github.com/jpxoi/pastoral-digital-app',
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Drizzle ORM', 'PostgreSQL'],
    caseStudy: {
      challenge:
        'The pastoral community needed a dependable way to identify catechists at activities and give each person visibility into their own attendance record. The experience had to work comfortably from a phone without requiring a native app installation.',
      solution:
        'The progressive web app gives each catechist a personal profile, a QR-based digital ID and a clear history of attendance. Staff can use the same connected system to register participation at catechesis meetings and community events.',
      highlights: [
        {
          title: 'Digital pastoral ID',
          description: 'Each profile includes a QR-based identifier designed for access and attendance workflows.',
        },
        {
          title: 'Personal profile',
          description: 'Catechists can review their core identity information, photograph and account details.',
        },
        {
          title: 'Attendance history',
          description: 'Dates, times and attendance states are available directly to the authenticated participant.',
        },
        {
          title: 'Installable experience',
          description: 'PWA support provides app-like access from a phone or desktop without an app-store release.',
        },
      ],
      engineering: [
        'Next.js and React provide the authenticated application and mobile-first profile experience.',
        'PostgreSQL with Drizzle ORM stores profiles, identifiers and attendance history.',
        'Clerk manages authentication while Upstash supports caching and PostHog captures product analytics.',
        'The application is deployable as a web platform while remaining installable on modern devices.',
      ],
    },
  },
]
