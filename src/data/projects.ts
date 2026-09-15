import type { Project } from '../types'

export const projects: Project[] = [
  {
    id: 'fortuna-raffle',
    name: 'Fortuna Grifo',
    tagline: 'Loyalty & Campaign Management Platform',
    description:
      'Customer portal and operations tools for turning fuel purchases into raffle entries, including the cases that cannot be validated on the spot.',
    media: {
      cover: {
        key: 'cover',
        alt: 'Fortuna Grifo customer and campaign management platform',
      },
      details: [
        {
          key: 'receipt-submission',
          alt: 'Customer receipt submission and validation workflow in Fortuna Grifo',
          caption: 'Customers register a fuel receipt and can see whether it is still pending or already validated.',
        },
        {
          key: 'admin-validation',
          alt: 'Administrative receipt validation interface in Fortuna Grifo',
          caption: 'Staff review a case, apply campaign rules and record a decision or restriction.',
        },
      ],
    },
    link: 'https://sorteo.fortuna.pe',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Drizzle ORM', 'PostgreSQL', 'Redis'],
    caseStudy: {
      challenge:
        'Fortuna already sold fuel. The raffle had to sit on top of those purchases, even when the electronic receipt arrived late or incomplete. Customers needed a simple way in; staff still needed the original checks, restrictions and a clear trail.',
      solution:
        'People register, submit a receipt by hand or QR, and collect campaign entries from a self-service portal. Valid receipts move on immediately. If the tax document is not available yet, the case stays pending and is retried in the background. Restrictions apply to access, receipts and entries together.',
      highlights: [
        {
          title: 'Customer onboarding',
          description:
            'Authenticated sign-up with identity lookup, checked participant data, and a portal built for people who come back for more than one campaign.',
        },
        {
          title: 'Receipt validation',
          description:
            'Manual and QR submissions are checked against identity, issuer, date, amount and payment rules before any raffle entries are issued.',
        },
        {
          title: 'Pending receipts',
          description:
            'If the upstream document is missing, the receipt stays visible and is retried later instead of being rejected on the spot.',
        },
        {
          title: 'Campaign control',
          description:
            'Staff can review cases, restrict a company or participant, and invalidate related receipts and entries with an audit trail.',
        },
        {
          title: 'Customer email',
          description:
            'Delayed rejection, timeout and account-restriction emails are sent once, with delivery state stored so retries do not duplicate them.',
        },
      ],
      decisions: [
        {
          title: 'Pending is better than a dead end',
          description:
            'A receipt that is temporarily missing becomes a visible case, not an instant rejection. Customers can follow it; the validation rule still stands.',
        },
        {
          title: 'Retries have to be safe to repeat',
          description:
            'Background validation is bounded and observable. Receipt state is what matters, so two overlapping jobs cannot issue the same entries twice.',
        },
        {
          title: 'A restriction is one write',
          description:
            'Blocking a participant invalidates eligible receipts and entries and stores the reason in the same database transaction.',
        },
        {
          title: 'Side effects can catch up later',
          description:
            'Session revocation, identity metadata and email can retry after the campaign decision is already saved. Warnings stay visible for follow-up.',
        },
      ],
      engineering: [
        'Next.js App Router with server-rendered portal flows, server actions and dedicated API routes.',
        'PostgreSQL and Drizzle ORM handle state changes for participants, receipts, entries, restrictions and outbound email.',
        'Redis locks and rate limits sit in front of receipt submission. QStash and Upstash Workflow retry pending validation with bounded concurrency.',
        'Cibercont data is normalised before business checks: identity, issue date, amount, payment terms, issuer and voided documents.',
        'AWS SES uses unique idempotency keys and stored delivery states so a workflow retry does not send the same email twice.',
        'Clerk covers identity and session revocation. Correlated audit logs, PII-aware logging, PostHog and Better Stack are used when something needs investigation.',
      ],
    },
  },
  {
    id: 'bioeasy-galenos',
    name: 'Bioeasy Galenos',
    tagline: 'Learning Platform & Digital Experience',
    description:
      'Private learning platform for students, enrolments and protected course content, with a separate public site for the academy.',
    media: {
      cover: {
        key: 'cover',
        alt: 'Bioeasy Galenos learning campus',
      },
      details: [
        {
          key: 'learning-content',
          alt: 'Protected learning content inside the Bioeasy Galenos campus',
          caption: 'Students open course resources according to their enrolment and the permissions on each file.',
        },
        {
          key: 'campus-administration',
          alt: 'Bioeasy Galenos campus administration interface',
          caption: 'Staff arrange modules, sections and resources, then publish and reorder them from the same campus.',
        },
      ],
    },
    link: 'https://campus.bgmedicina.com',
    linkLabel: 'Open campus',
    secondaryLink: 'https://bgmedicina.com',
    secondaryLinkLabel: 'Marketing site',
    stack: ['Next.js', 'Astro', 'TypeScript', 'PostgreSQL', 'Cloudflare R2', 'Bunny Stream'],
    caseStudy: {
      challenge:
        'The academy already had a way of enrolling and supporting medical students. They needed software that matched that process: practical for staff, strict with paid material, and usable on a phone.',
      solution:
        'The campus is a private LMS for profiles, student numbers, enrolments, course structure, progress and administration. A lighter public site presents the academy and courses and sends enquiries in, without sharing the authenticated stack.',
      highlights: [
        {
          title: 'Student onboarding',
          description:
            'After signing in, students complete their profile and receive a unique student number before they enter the campus.',
        },
        {
          title: 'Course operations',
          description:
            'Staff manage users, enrol people one by one or in bulk, and reorder course content on the same platform students use.',
        },
        {
          title: 'Protected learning content',
          description:
            'Private PDFs and DRM-protected video are only released after course, enrolment and resource checks pass.',
        },
        {
          title: 'Access review',
          description:
            'Admin views show which resource requests were granted or denied, which is useful when support has to explain a blocked file.',
        },
        {
          title: 'Public site',
          description:
            'A separate marketing site covers the academy, catalogue and faculty, then points prospective students to an enquiry form.',
        },
      ],
      decisions: [
        {
          title: 'Model this academy, not a generic LMS',
          description:
            'Staff control enrolments, students get a formal identifier, and content is organised as courses, modules, sections and resources.',
        },
        {
          title: 'Check access on every request',
          description:
            'Being signed in is not enough. Publication, enrolment and resource rules are checked before short-lived access is issued, and denials stay visible to staff.',
        },
        {
          title: 'Keep the public site out of the campus',
          description:
            'The marketing site can stay fast and easy to find. The campus can grow around login, state and tighter security without dragging the public pages with it.',
        },
        {
          title: 'Do not mix academic records with login profiles',
          description:
            'Names and student records in PostgreSQL are the academic record. Clerk handles accounts and presentation, and does not overwrite those records.',
        },
      ],
      engineering: [
        'The campus is a Next.js App Router app with server-side checks for student and staff actions.',
        'PostgreSQL and Drizzle ORM store student records, enrolments, course structure and progress per resource.',
        'Cloudflare R2 signed URLs, Bunny Stream tokens with DRM and Upstash rate limiting sit in front of paid content.',
        'Clerk webhooks keep accounts in sync and cap concurrent sessions, without replacing academic records.',
        'Resource-access logs, health checks, structured logging and product analytics make production behaviour visible.',
        'Scheduled jobs back up the database and retain access logs for a defined period.',
        'Astro keeps the public site fast, with little client-side JavaScript.',
      ],
    },
  },
  {
    id: 'apeula-app',
    name: 'APEULA',
    tagline: 'Association Operations Platform',
    description:
      'Intranet for APEULA’s member register: applications, registry books, original-form printing, signed evidence, and live event check-in and check-out.',
    media: {
      cover: {
        key: 'cover',
        alt: 'APEULA association operations platform',
      },
      details: [
        {
          key: 'live-attendance',
          alt: 'Real-time event attendance workspace in APEULA',
          caption:
            'Operators register attendance by DNI while the event is open, with the roster updating as people arrive.',
        },
        {
          key: 'printing-workflow',
          alt: 'Registry-book printing workflow in APEULA',
          caption:
            'The print queue stays in sync with attendance: who is present, what is pending, and how far printing has got.',
        },
        {
          key: 'audit-trail',
          alt: 'Operational audit trail in APEULA',
          caption: 'Sensitive membership, printing and attendance actions are stored with who did them and when.',
        },
      ],
    },
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Drizzle ORM', 'PostgreSQL', 'Upstash Realtime'],
    caseStudy: {
      challenge:
        'APEULA’s membership lives on paper as much as in software: registry books, signed enrolment forms, and events where people have to be recorded as they arrive and leave. The intranet had to follow those rules, keep a trail, and still work at a live event.',
      solution:
        'Staff use one system for applications, personal and family data, folio inventory, original-form printing, signed PDFs, events and audit history. Events run in phases: open check-in, close entries, take check-out, then finalise. Check-in and check-out both use an eight-digit DNI, but they never share a scanner.',
      highlights: [
        {
          title: 'Member register',
          description:
            'Applications, personal and family data, employment details and membership states, with eligibility treated as its own condition.',
        },
        {
          title: 'Registry books and folios',
          description:
            'Physical books, authorised ranges and folio states from available through reserved, printed, voided or excluded.',
        },
        {
          title: 'Original-form printing',
          description:
            'One active print job at a time. Confirming a folio stores an immutable PDF; signed evidence later marks the member eligible.',
        },
        {
          title: 'Event check-in and check-out',
          description:
            'People enter while check-in is open. After entries close, only those who checked in can check out, once. Finalising the event locks both.',
        },
        {
          title: 'Live operator views',
          description:
            'SSE keeps check-in, check-out and printing screens aligned: new arrivals, pending exits, roster completion and printed pages.',
        },
      ],
      decisions: [
        {
          title: 'The paper process still counts',
          description:
            'Books, folios and signed forms remain the formal artefacts. The software coordinates them and stores evidence; it does not pretend the physical process went away.',
        },
        {
          title: 'Hard to reach a bad state',
          description:
            'Membership, eligibility, folio availability and event access are explicit rules. A screen convention is not enough to move a sensitive record.',
        },
        {
          title: 'Live updates are signals, not the record',
          description:
            'SSE helps two operators stay in sync. The database is still what happened. If a stream drops, the UI can refresh without changing the outcome.',
        },
        {
          title: 'Attendance and exit are different facts',
          description:
            'Checking in is what counts as attended. Checking out is stored against that check-in. Missing an exit does not turn attendance into an absence; it stays as a separate result after the event is finalised.',
        },
      ],
      engineering: [
        'PostgreSQL holds members, applications, folio inventory, print jobs, check-ins, check-outs and event history. Check-outs sit on their own table, one per check-in.',
        'Events move through named phases: check-in open, check-out open, then finalised. Closing entries blocks new arrivals and opens exits; finalising is irreversible.',
        'Role-based access uses explicit business permissions and denies by default. The same attendance permission covers both scanners; close and finalise are separate.',
        'Cloudflare R2 stores signed evidence and generated PDFs behind temporary signed URLs. Printing remains based on check-ins, so a later exit does not rewrite attendance pages.',
        'Upstash Realtime pushes typed SSE events for check-in, check-out and finalisation on authorised, event-scoped channels.',
        'DNI is validated on client and server. Writes run in a transaction that locks the event, so a checkout cannot land after finalisation, and a duplicate scan cannot create a second exit.',
        'Server-side validation, append-only domain events and correlated audit logs cover high-impact changes, including who checked someone out and the totals at finalisation.',
      ],
    },
  },
  {
    id: 'onvoice',
    name: 'Onvoice',
    tagline: 'Real-Time Lecture Transcription',
    description:
      'Hosts stream a lecture; attendees follow a live transcript, optional translation and Q&A, then keep the session afterwards.',
    media: {
      cover: {
        key: 'cover',
        alt: 'Onvoice real-time lecture transcription platform',
      },
    },
    link: 'https://beta.onvoice.uk',
    stack: ['Next.js', 'TypeScript', 'OpenAI Realtime', 'Convex', 'Gemini', 'Redis'],
    caseStudy: {
      challenge:
        'A live lecture is easy to lose if the audio is poor, the room is mixed-language, or someone needs the words later. The product had to transcribe continuously, keep a changing audience in sync, and still be useful after the speaker stopped.',
      solution:
        'A host starts a session and shares a QR code or short URL. Audio goes straight to OpenAI Realtime. Transcript segments land in Convex, and attendees see updates, presence and on-demand translation. When the session ends, summaries and Q&A stay attached to the full transcript.',
      highlights: [
        {
          title: 'Continuous transcription',
          description:
            'The host’s microphone streams to OpenAI Realtime, with partial text, committed segments and a clear connection state.',
        },
        {
          title: 'Join without an account',
          description:
            'Attendees scan a QR code or open a short link, follow the transcript, and show up in live presence.',
        },
        {
          title: 'Translation on demand',
          description:
            'An attendee can pick one of more than 50 languages. Repeated text reuses a content hash instead of calling the model again.',
        },
        {
          title: 'Questions during the talk',
          description:
            'The audience can ask questions, and an assistant answers against the transcript rather than a generic chat.',
        },
        {
          title: 'After the session',
          description:
            'Background jobs write multilingual summaries while the full transcript stays available to read later.',
        },
        {
          title: 'Saved sessions',
          description:
            'Signed-in users can keep hosted or saved sessions and come back to the transcript and summaries.',
        },
      ],
      decisions: [
        {
          title: 'Two interfaces, one session',
          description:
            'Hosts need controls and status. Attendees need to get in quickly. Both share live state, but each only sees what it needs.',
        },
        {
          title: 'Keep the recording useful afterwards',
          description:
            'Live text helps in the room. Storing the session and generating summaries is what makes it worth opening the next day.',
        },
        {
          title: 'Do not translate until someone asks',
          description: 'Translation starts when an attendee picks a language. Unused languages do not generate cost.',
        },
        {
          title: 'Split the real-time work',
          description:
            'OpenAI carries the audio stream. Convex holds the transcript and presence and fans it out to hosts and attendees.',
        },
        {
          title: 'Rotate the socket without stopping the talk',
          description:
            'Long sessions open a new connection before the old one expires and buffer a short stretch of audio during the swap.',
        },
      ],
      engineering: [
        'The browser captures mono PCM16 at 24 kHz and talks to OpenAI Realtime with short-lived server-issued credentials and voice-activity detection.',
        'A WebSocket rotation opens the next connection first, then closes the previous one, holding a bounded audio buffer during the handover.',
        'Convex stores ordered transcript segments and exposes live subscriptions and presence for host and attendee views.',
        'Convex workflows generate summaries, batch translations and clean up session data.',
        'Content hashes let translations be reused, and unused cached rows can be deleted without breaking references still in use.',
        'Upstash rate-limits the chatbot and applies daily or monthly budgets. A failed AI response puts the allowance back.',
        'The Gemini assistant streams answers from transcript context, behind authentication, bot detection and per-user limits.',
      ],
    },
  },
  {
    id: 'yupay-dev',
    slug: 'yupay',
    name: 'Yupay',
    tagline: 'Peruvian Data API',
    description:
      'One API for Peruvian identity, tax, vehicle, insurance and official exchange-rate lookups, with keys, usage and billing in a dashboard.',
    media: {
      cover: {
        key: 'cover',
        alt: 'Yupay Peruvian data API developer platform',
      },
    },
    link: 'https://www.yupay.dev',
    stack: ['React', 'TypeScript', 'Vite', 'Hono', 'Turso', 'Redis'],
    caseStudy: {
      challenge:
        'DNI, RUC, plates, SOAT and the official exchange rate all come from different places, with different shapes and downtime. Teams were rebuilding the same validation, caching and error handling in every app.',
      solution:
        'Yupay exposes a single REST API for those lookups and a dashboard for docs, keys, usage and credits. Checkout supports Stripe and Mercado Pago, so both international cards and local payment methods work.',
      highlights: [
        {
          title: 'One API for public records',
          description: 'The same contract covers identity, taxpayer, vehicle, insurance and exchange-rate queries.',
        },
        {
          title: 'First integration',
          description:
            'Documentation, request examples and API-key management are meant to get a first call out quickly.',
        },
        {
          title: 'Usage and limits',
          description:
            'Keys, plan-based rate limits, credit balances and per-endpoint analytics sit on the same account.',
        },
        {
          title: 'Billing in Peru and abroad',
          description:
            'Stripe and Mercado Pago cover international cards and the payment methods people in Peru already use.',
        },
        {
          title: 'Caching by source',
          description:
            'Memory and Redis take the repeated hits. Each endpoint has its own TTL, including stricter rules for SOAT and not-found responses.',
        },
        {
          title: 'Request analytics',
          description:
            'Every authenticated call records endpoint, status, latency and cache level, without tying that pipeline to a specific provider.',
        },
      ],
      decisions: [
        {
          title: 'Hide the providers',
          description:
            'Formats, failures and validation stay behind the API. Clients see the same resources and error shapes.',
        },
        {
          title: 'Usage is the product',
          description:
            'Keys, analytics, credits and payment confirmation share one account model, so developers and operations see the same consumption.',
        },
        {
          title: 'Cache to match the source',
          description:
            'A shared L1/L2 path covers common lookups. SOAT and negative responses get their own retention so speed, freshness and provider cost stay in balance.',
        },
        {
          title: 'Credits have to be fast and visible',
          description:
            'Redis decrements credits atomically for the request path, then syncs to storage. Billing webhooks invalidate the cache so the dashboard updates after a purchase.',
        },
      ],
      engineering: [
        'A Turbo monorepo keeps the React and Vite dashboard separate from a Hono API with a stable public contract.',
        'The API validates Peruvian DNI and RUC formats and normalises upstream responses before they leave the boundary.',
        'Turso and Drizzle store accounts, keys, query results, usage and credit transactions next to the API.',
        'In-memory L1, Redis L2, negative caching and per-endpoint TTLs protect upstream providers and speed up repeats.',
        'Redis also holds plan-aware rate limits and atomic credit consumption, with monthly free-tier renewal in the Lima time zone.',
        'Shared middleware records latency, cache behaviour and outcomes for every authenticated request.',
        'Signed Stripe and Mercado Pago webhooks add purchased credits and invalidate cached balances, independent of the checkout UI.',
      ],
    },
  },
  {
    id: 'prgen',
    name: 'prgen',
    tagline: 'AI Pull Request Generator',
    description:
      'CLI that reads a local diff and recent commits, then drafts a title and description through OpenAI, Gemini or Ollama.',
    media: {
      cover: {
        key: 'cover',
        alt: 'prgen generating a pull request from local Git context',
      },
    },
    link: 'https://pypi.org/project/prgen-cli',
    github: 'https://github.com/jpxoi/prgen',
    stack: ['Python', 'CLI', 'LLMs', 'OpenAI', 'Gemini', 'Ollama'],
    caseStudy: {
      challenge:
        'A useful pull request still needs the diff and the commit history. The boring part of writing it can be automated, but only if the model sees that context instead of a blank prompt.',
      solution:
        'prgen reads the current Git state, diffs against a chosen base, and prints a title and body ready to paste. Hosted and local models sit behind the same interface, so the git workflow does not change with the vendor.',
      highlights: [
        {
          title: 'Git context first',
          description:
            'The prompt is built from the three-dot diff and recent commits, not from a generic instruction.',
        },
        {
          title: 'Provider choice',
          description:
            'Automatic selection, quality tiers or an explicit model flag cover OpenAI, Gemini, and local or remote Ollama.',
        },
        {
          title: 'Per-repo defaults',
          description:
            'Settings persist in the repository, API keys are stored separately from ordinary config, and extra prompt context is optional.',
        },
        {
          title: 'Diagnostics off to the side',
          description:
            'Verbose mode reports prompt size, commits, tokens and rate-limit metadata, with credentials stripped out.',
        },
        {
          title: 'Install from PyPI',
          description: 'The package is on PyPI and can be installed as an isolated command with uv.',
        },
      ],
      decisions: [
        {
          title: 'Send the diff, not a wish',
          description:
            'The model sees the actual changes and commit messages, which is what makes the draft usable in review.',
        },
        {
          title: 'Providers should be swappable',
          description:
            'A thin interface sits in front of OpenAI, Gemini and Ollama. Switching models should not mean changing how you run git.',
        },
        {
          title: 'Flags beat saved defaults',
          description:
            'Explicit options override persisted settings. Secrets are handled apart from ordinary config, and model requirements are checked before a call goes out.',
        },
        {
          title: 'Keep the paste-ready output clean',
          description:
            'Progress and usage go to a separate stream from the title and body, so troubleshooting does not pollute what you copy.',
        },
      ],
      engineering: [
        'Prompt orchestration and model tiers stay separate from the OpenAI, Gemini and Ollama clients.',
        'Git context is collected locally from the three-dot diff and commit range against a validated base.',
        'Structured summary and body tags produce paste-ready output, with a fallback if the model ignores the format.',
        'Typer and Rich cover repository targeting, extra context, model downloads and terminal feedback.',
        'Verbose diagnostics redact authorization values and print provider usage, request ids and rate-limit headers.',
        'Packaging, release automation and verified PyPI publishing keep installs reproducible.',
      ],
    },
  },
  {
    id: 'wa-transcriber',
    name: 'WA Transcriber',
    tagline: 'Local WhatsApp Voice Note Transcription',
    description:
      'Desktop CLI that watches WhatsApp for new voice notes, transcribes them on-device with Whisper, and copies the text to the clipboard.',
    media: {
      cover: {
        key: 'cover',
        alt: 'WA Transcriber system health check running in a terminal',
      },
    },
    link: 'https://pypi.org/project/wa-transcriber',
    github: 'https://github.com/jpxoi/wa-transcriber',
    stack: ['Python', 'CLI', 'OpenAI Whisper', 'PyTorch', 'Watchdog', 'FFmpeg'],
    caseStudy: {
      challenge:
        'Voice notes are awkward to replay, and sending them to a third-party service is slow and hard to justify for personal audio. A desktop tool also has to deal with different WhatsApp folders and very different machines.',
      solution:
        'WA Transcriber watches WhatsApp Desktop’s media folder, runs Whisper locally, and puts the transcript on the clipboard. Setup and a health check pick a model size from the available memory and acceleration.',
      highlights: [
        {
          title: 'Watch the folder',
          description:
            'A threaded file watcher picks up new voice notes as they land, and backfills recent files that were missed while it was off.',
        },
        {
          title: 'Audio stays on the machine',
          description:
            'Whisper runs locally. Text goes to the clipboard and to a daily log; the audio is never uploaded.',
        },
        {
          title: 'Hardware-aware setup',
          description: 'Health checks look for MPS, CUDA or CPU limits and suggest a model that will actually fit.',
        },
        {
          title: 'Disk cleanup',
          description: 'Unused model weights can be removed automatically so the install does not grow without bound.',
        },
        {
          title: 'Mac and Windows',
          description:
            'The same setup path covers WhatsApp Desktop on Apple Silicon and on Windows machines with NVIDIA CUDA.',
        },
      ],
      decisions: [
        {
          title: 'Do not send the audio away',
          description:
            'Watching WhatsApp’s local folder and running Whisper on-device avoids uploading personal voice notes to another service.',
        },
        {
          title: 'Pick the model for this computer',
          description:
            'Recommendations come from detected acceleration and free memory, because the gap between supported machines is large.',
        },
        {
          title: 'Check the machine before loading Whisper',
          description:
            'Setup and health commands verify FFmpeg, memory headroom and model compatibility before the service loads a heavy model.',
        },
      ],
      engineering: [
        'A threaded Watchdog observer watches the filesystem without polling or blocking the desktop session.',
        'PyTorch and Whisper run on Metal for Apple Silicon, NVIDIA CUDA on Windows, or CPU if neither is available.',
        'Startup backfill recovers recently downloaded audio before monitoring starts, so a restart does not skip files.',
        'The health command checks FFmpeg, RAM or VRAM headroom, and whether the chosen model can run.',
        'Optional cleanup deletes stale weights. Daily logs keep transcripts and a local history.',
        'Distributed on PyPI as a Typer CLI for setup, health, config, logs and reset.',
      ],
    },
  },
  {
    id: 'pastoral-digital-app',
    name: 'Pastoral Digital App',
    tagline: 'Community Operations & Attendance Platform',
    description: 'Installable web app for member identity, QR check-in, event operations and participation records.',
    media: {
      cover: {
        key: 'cover',
        alt: 'Pastoral Digital mobile community operations platform',
      },
      details: [
        {
          key: 'attendance-records',
          alt: 'Member attendance history and event records in Pastoral Digital',
          caption:
            'Members and coordinators read the same attendance: personal history on one side, the event record on the other.',
        },
        {
          key: 'sunday-participation',
          alt: 'Sunday participation evidence review in Pastoral Digital',
          caption:
            'Coordinators review Sunday participation evidence from the operations desk, against the same member register.',
        },
      ],
    },
    link: 'https://id.pastoralmarianaps.net.pe',
    github: 'https://github.com/jpxoi/pastoral-digital-app',
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Drizzle ORM', 'PostgreSQL'],
    caseStudy: {
      challenge:
        'The community needed one place to identify catechists, run activities and keep attendance across groups and schedules. Members needed something that worked on a phone. Coordinators needed controls without a native app for every device.',
      solution:
        'A PWA gives each member a digital ID and attendance history, and gives coordinators events, QR check-in, records and Sunday participation evidence. Both sides read the same data.',
      highlights: [
        {
          title: 'Digital pastoral ID',
          description:
            'Each member gets a mobile profile and QR tied to their category, schedule and attendance history.',
        },
        {
          title: 'Event operations',
          description:
            'Staff set dated activities, locations and separate attendance times for different pastoral schedules.',
        },
        {
          title: 'QR check-in',
          description:
            'The camera checks the active event and schedule, records punctuality, and gives immediate sound and visual feedback.',
        },
        {
          title: 'Attendance history',
          description:
            'Member and admin views keep status, capture method and the operator who registered each check-in.',
        },
        {
          title: 'Sunday participation',
          description:
            'Members can submit unique file evidence for Sunday participation, and coordinators review it in a verification flow.',
        },
        {
          title: 'Installable on the phone',
          description: 'PWA support gives an app-like home-screen install without an app-store release.',
        },
      ],
      decisions: [
        {
          title: 'One record for both sides',
          description:
            'The QR and personal history live in the member view. Event, scanner and records stay with authorised operators, against the same tables.',
        },
        {
          title: 'Ship it as a website',
          description:
            'A PWA is installable and works across the phones people already have, without maintaining a native release.',
        },
        {
          title: 'Attendance is a record, not a tick',
          description:
            'Each check-in stores the event, status, method, time and operator, so a later review does not depend on present/absent alone.',
        },
        {
          title: 'Time belongs in the rules',
          description:
            'Schedule start times, event windows and Lima-based submission cut-offs are enforced in the workflow, not left to whoever is holding the phone.',
        },
      ],
      engineering: [
        'Next.js and React serve an authenticated, mobile-first app that installs as a PWA.',
        'PostgreSQL and Drizzle ORM model members, categories, schedules, events, locations, attendance and participation evidence.',
        'A unique member-event row prevents duplicate attendance. Role checks protect registration and admin changes.',
        'The browser camera, QR scanning, SWR and immediate sound or visual feedback are used at live check-in.',
        'Clerk handles identity, Yupay helps with DNI onboarding, and UploadThing stores evidence after client-side image processing.',
        'Server-side time-zone rules compute attendance states and limit evidence submission to the relevant window.',
      ],
    },
  },
]
