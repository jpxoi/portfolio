import type { Project } from '../types'

export const projects: Project[] = [
  {
    id: 'fortuna-raffle',
    name: 'Fortuna Grifo',
    tagline: 'Loyalty & Campaign Management Platform',
    description:
      'Customer and operations platform for validating fuel purchases, issuing campaign entries and resolving exceptional cases safely.',
    link: 'https://sorteo.fortuna.pe',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Drizzle ORM', 'PostgreSQL', 'Redis'],
    caseStudy: {
      challenge:
        'Fortuna needed to connect an existing fuel-sales operation with a customer-facing promotional campaign. Receipt data could be delayed or incomplete upstream, so the experience had to remain simple for participants while preserving validation rules, traceability and operational control.',
      solution:
        'The platform combines guided onboarding, manual or QR receipt registration, campaign entries and a self-service portal with the administrative workflows needed to resolve exceptional cases. Valid receipts progress immediately, unavailable electronic receipts enter a controlled validation lifecycle, and campaign restrictions propagate consistently across access, receipts and entries.',
      highlights: [
        {
          title: 'Customer onboarding',
          description:
            'Authenticated registration with identity lookup, validated participant data and a portal designed around repeat campaign participation.',
        },
        {
          title: 'Receipt validation',
          description:
            'Manual and QR submissions are checked against identity, issuer, date, amount and payment rules before promotional entries are issued.',
        },
        {
          title: 'Pending workflows',
          description:
            'Receipts that are not yet available upstream remain traceable and are retried through controlled background workflows.',
        },
        {
          title: 'Campaign governance',
          description:
            'Administrative review, company and participant restrictions, audit history and transactional invalidation support campaign enforcement.',
        },
        {
          title: 'Customer communication',
          description:
            'Tracked, idempotent email workflows communicate delayed rejection, timeout and account-restriction outcomes.',
        },
      ],
      decisions: [
        {
          title: 'Keep the customer moving',
          description:
            'An upstream receipt that is temporarily unavailable becomes a visible pending case rather than an immediate rejection. This keeps the campaign understandable for customers while preserving the validation requirement.',
        },
        {
          title: 'Treat retries as a workflow',
          description:
            'Asynchronous validation is bounded, observable and safe to repeat. Receipt state remains the source of truth so duplicate or overlapping jobs cannot issue campaign entries twice.',
        },
        {
          title: 'Apply restrictions as one transaction',
          description:
            'Restricting a participant invalidates eligible receipts and entries and records the reason in the same database transaction, preventing partially enforced campaign decisions.',
        },
        {
          title: 'Recover non-critical side effects',
          description:
            'Session revocation, identity metadata and customer notifications can retry independently after the campaign decision commits, with warnings preserved for operational follow-up.',
        },
      ],
      engineering: [
        'Next.js App Router with server-rendered portal flows, server actions and dedicated API routes.',
        'PostgreSQL and Drizzle ORM provide guarded, transactional state transitions for participants, receipts, entries, restrictions and outbound communication.',
        'Redis locks and rate limits protect receipt submission, while QStash and Upstash Workflow apply bounded concurrency to pending validation.',
        'Cibercont data is normalized before business validation, including identity, issue date, amount, payment terms, issuer and voided-document checks.',
        'AWS SES notifications use unique idempotency keys and persisted delivery states so workflow retries do not intentionally send the same outcome twice.',
        'Clerk handles identity and session revocation; correlated audit logs, PII-aware logging, PostHog and Better Stack support operational investigation.',
      ],
    },
  },
  {
    id: 'bioeasy-galenos',
    imageId: 'bg-landing',
    name: 'Bioeasy Galenos',
    tagline: 'Learning Platform & Digital Experience',
    description:
      'A secure LMS for managing students, enrolments and protected academic content, supported by a public marketing experience.',
    link: 'https://campus.bgmedicina.com',
    linkLabel: 'Open campus',
    secondaryLink: 'https://bgmedicina.com',
    secondaryLinkLabel: 'Marketing site',
    stack: ['Next.js', 'Astro', 'TypeScript', 'PostgreSQL', 'Cloudflare R2', 'Bunny Stream'],
    caseStudy: {
      challenge:
        'Bioeasy Galenos needed a learning platform aligned with the way the academy already enrols and supports medical students. It had to make course administration practical for staff, keep paid academic resources protected and remain straightforward for students accessing content from mobile devices.',
      solution:
        'The core product is a private LMS that handles onboarding, student identities, enrolments, structured course content, progress and administration. A separate, lightweight public website complements the campus by presenting the academy, courses and faculty and directing prospective students into the enquiry process.',
      highlights: [
        {
          title: 'Student onboarding',
          description:
            'Authenticated students complete their profile and receive a unique student identifier before entering the campus.',
        },
        {
          title: 'Course operations',
          description:
            'Administrators manage users, individual or bulk enrolments and reorderable course content from the same platform students use.',
        },
        {
          title: 'Protected learning content',
          description:
            'Private PDFs and DRM-protected video are released only after course, enrolment and resource-level access checks.',
        },
        {
          title: 'Access oversight',
          description:
            'Administrative security views expose granted and denied resource access for support and operational review.',
        },
        {
          title: 'Public acquisition experience',
          description:
            'A content-first marketing site presents the academy, course catalogue and faculty and directs prospective students into a focused enquiry flow.',
        },
      ],
      decisions: [
        {
          title: 'Model the academy, not a generic LMS',
          description:
            'The campus follows Bioeasy Galenos’ operating model: staff control enrolments, students receive a formal identifier and content is organised as courses, modules, sections and resources.',
        },
        {
          title: 'Protect resources at every request',
          description:
            'Authentication alone is not enough. Publication, enrolment and resource authorization are checked before issuing short-lived access, while denials remain visible to administrators.',
        },
        {
          title: 'Separate acquisition from learning',
          description:
            'The public site stays fast and easy to discover, while the campus can evolve around authenticated workflows, richer state and stricter security without coupling both experiences.',
        },
        {
          title: 'Separate formal and social identity',
          description:
            'Names and student records in PostgreSQL remain the academic source of truth, while Clerk profile data handles authentication and account presentation without overwriting formal records.',
        },
      ],
      engineering: [
        'The campus uses Next.js App Router, React and a server-first authorization model for student and administrator workflows.',
        'PostgreSQL with Drizzle ORM models formal student records, traced enrolments, course structure and resource-level progress.',
        'Cloudflare R2 signed URLs, Bunny Stream tokens with DRM and Upstash rate limiting form a layered content-protection model.',
        'Clerk webhooks synchronize account changes and enforce an operational session limit without replacing academic records.',
        'Resource-access logs, health checks, structured logging and product analytics make security and production behaviour observable.',
        'Automated database backups and access-log retention jobs support recovery and responsible data lifecycle management.',
        'Astro keeps the supporting marketing experience fast and content-led with minimal client-side runtime.',
      ],
    },
  },
  {
    id: 'apeula-app',
    name: 'APEULA',
    tagline: 'Association Operations Platform',
    description:
      'Operations platform for formal member records, controlled printing, signed evidence and real-time event attendance.',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Drizzle ORM', 'PostgreSQL', 'Upstash Realtime'],
    caseStudy: {
      challenge:
        'APEULA manages formal membership records that cross digital data, physical registry books, signed documents and in-person events. The platform had to preserve the rules of those physical processes while making every sensitive operation permission-aware and traceable.',
      solution:
        'The intranet brings the membership lifecycle into one system: applications, personal and family data, registry-book inventory, original-form printing, signed evidence, event attendance and audit history. Operational rules are enforced in the workflow instead of depending on staff memory, while event-scoped real-time channels keep check-in and printing operators synchronized.',
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
        {
          title: 'Live operational views',
          description:
            'SSE updates synchronize new check-ins, roster completion and printed pages across attendee and printing workspaces.',
        },
      ],
      decisions: [
        {
          title: 'Preserve the physical source of truth',
          description:
            'Books, folios and signed forms remain formal physical artefacts. The software coordinates their lifecycle and evidence instead of pretending the underlying administrative process no longer exists.',
        },
        {
          title: 'Make invalid states difficult to reach',
          description:
            'Membership, eligibility, folio availability and event access are expressed as explicit rules so sensitive transitions cannot depend on interface conventions alone.',
        },
        {
          title: 'Treat real-time events as signals',
          description:
            'Live updates improve coordination, but persisted records remain authoritative. A delayed or interrupted stream can refresh the interface without changing the outcome of an operation.',
        },
        {
          title: 'Separate eligibility from attendance',
          description:
            'Membership condition, attendance obligations, exemptions and check-ins are modelled independently so the system can preserve the reason behind each result instead of flattening it into one status.',
        },
      ],
      engineering: [
        'A relational PostgreSQL model represents membership, applications, registry inventory, printing and event history.',
        'Centralized role-based access uses explicit business permissions and denial by default.',
        'Cloudflare R2 stores private signed evidence and generated documents behind temporary signed URLs.',
        'Upstash Realtime combines Redis Streams and SSE in authorized, event-scoped channels with typed payloads for check-in and printing operations.',
        'Attendee updates are debounced, printing state updates locally where possible, and bounded retry handling makes live views resilient without excessive refreshes.',
        'Server-side validation, append-only domain events and correlated audit logs protect high-impact transitions.',
      ],
    },
  },
  {
    id: 'onvoice',
    name: 'Onvoice',
    tagline: 'Real-Time Lecture Transcription',
    description:
      'AI-powered platform for continuous live transcription, multilingual audience access, contextual Q&A and post-session intelligence.',
    link: 'https://beta.onvoice.uk',
    stack: ['Next.js', 'TypeScript', 'OpenAI Realtime', 'Convex', 'Gemini', 'Redis'],
    caseStudy: {
      challenge:
        'Live lectures become difficult to follow when audio quality, accessibility or language creates friction. The platform had to stream speech continuously, keep a changing audience synchronized, control AI usage and preserve enough context to remain useful after the speaker finished.',
      solution:
        'Onvoice gives hosts a short path from session setup to a shareable QR code or short URL. Audio streams directly to OpenAI Realtime, transcript segments persist through Convex and attendees receive live updates, presence and on-demand translation. Completed sessions become searchable learning artefacts with multilingual summaries and transcript-aware Q&A.',
      highlights: [
        {
          title: 'Continuous transcription',
          description:
            'Microphone audio streams to OpenAI Realtime with partial text, committed segments and connection-state feedback for the host.',
        },
        {
          title: 'Live audience access',
          description:
            'QR codes and short links let attendees join without an account, follow transcript updates and contribute to live presence.',
        },
        {
          title: 'On-demand language layer',
          description:
            'Attendees can request translation across more than 50 languages, with content-addressed caching shared across repeated text.',
        },
        {
          title: 'Contextual participation',
          description:
            'Audience questions and a transcript-aware AI assistant turn the live transcript into an interactive session resource.',
        },
        {
          title: 'Post-session intelligence',
          description:
            'Background workflows generate categorized, multilingual summaries while preserving the complete transcript for review.',
        },
        {
          title: 'Personal session library',
          description:
            'Authenticated users can retain hosted or saved sessions and return to transcripts, summaries and generated insights.',
        },
      ],
      decisions: [
        {
          title: 'Design two experiences around one session',
          description:
            'Hosts need control and visibility, while attendees need immediate access with almost no setup. Both views share live session state but expose only the controls relevant to each audience.',
        },
        {
          title: 'Turn a live moment into a reusable artefact',
          description:
            'Transcription is valuable during the session, but persistence and post-processing extend that value through summaries and key points after the event ends.',
        },
        {
          title: 'Translate only when there is demand',
          description:
            'Translation begins when an attendee requests a language and reuses cached content hashes, avoiding eager AI work for languages nobody is viewing.',
        },
        {
          title: 'Separate the real-time responsibilities',
          description:
            'OpenAI carries the audio transcription stream, while Convex distributes persistent transcript and presence state to hosts and attendees. Each channel is optimized for a different job.',
        },
        {
          title: 'Hide connection lifetime from the speaker',
          description:
            'Long-running transcription sessions rotate to a fresh socket before expiry, queueing audio briefly during an atomic swap so infrastructure limits do not become a presentation interruption.',
        },
      ],
      engineering: [
        'The browser captures mono PCM16 audio at 24 kHz and connects directly to OpenAI Realtime with short-lived server-issued credentials and voice-activity detection.',
        'A seamless WebSocket rotation opens the next connection before closing the previous one and buffers bounded audio chunks during the handover.',
        'Convex persists ordered transcript segments and provides live subscriptions and participant presence across host and attendee interfaces.',
        'Convex workflows coordinate summary generation, batch translation, multilingual persistence and cleanup of session-related data.',
        'Content hashes and reference-aware translation records reuse generated text while allowing unused cached translations to be removed safely.',
        'Upstash applies chatbot rate limits and daily or monthly usage budgets; failed AI responses restore consumed allowance.',
        'The Gemini chatbot streams answers against transcript context behind authentication, bot detection and per-user limits.',
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
    stack: ['React', 'TypeScript', 'Vite', 'Hono', 'Turso', 'Redis'],
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
            'API keys, plan-aware rate limits, credit balances and per-endpoint analytics support controlled consumption.',
        },
        {
          title: 'Regional billing',
          description:
            'Stripe and Mercado Pago checkout flows support international cards and payment methods familiar in Peru.',
        },
        {
          title: 'Layered data delivery',
          description:
            'Memory and Redis caches reduce upstream dependency while endpoint-specific TTLs keep identity, vehicle and insurance responses appropriately fresh.',
        },
        {
          title: 'Operational API visibility',
          description:
            'Usage events capture endpoint, response status, latency and cache level without coupling analytics to each data provider.',
        },
      ],
      decisions: [
        {
          title: 'Expose one stable contract',
          description:
            'Provider-specific formats, failures and validation rules stay behind the API boundary so client applications integrate with consistent resources and error responses.',
        },
        {
          title: 'Connect usage directly to the business model',
          description:
            'API keys, request analytics, credits and payment confirmation share the same account model, making consumption visible to both developers and platform operations.',
        },
        {
          title: 'Cache according to source behaviour',
          description:
            'A shared L1/L2 strategy handles common lookups, while SOAT results and not-found responses receive dedicated retention rules to balance speed, freshness and provider cost.',
        },
        {
          title: 'Make quota state immediately useful',
          description:
            'Credits are decremented atomically in Redis for fast request decisions, synchronized to persistent storage and invalidated after billing changes so the dashboard reflects purchases quickly.',
        },
      ],
      engineering: [
        'A Turbo monorepo separates the React and Vite developer experience from a Hono API with a stable public contract.',
        'The API normalizes upstream responses and validates Peruvian DNI and RUC formats before external work.',
        'Turso and Drizzle persist accounts, keys, query results, usage and credit transactions close to the API layer.',
        'An in-memory L1 backed by Redis L2, negative caching and endpoint-specific TTLs protect upstream providers and accelerate repeated lookups.',
        'Redis coordinates plan-aware rate limits and atomic credit consumption, including monthly free-tier renewal in the Lima time zone.',
        'A shared analytics middleware records latency, cache behaviour and response outcomes for every authenticated API request.',
        'Signed Stripe and Mercado Pago webhooks allocate purchased credits and invalidate cached balances independently from checkout UI state.',
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
          title: 'Provider routing',
          description:
            'Automatic selection, quality tiers and explicit model overrides cover OpenAI, Gemini and local or remote Ollama.',
        },
        {
          title: 'Repository configuration',
          description:
            'Persistent defaults, secret-aware API-key storage and optional prompt context adapt the CLI to each workflow.',
        },
        {
          title: 'Useful diagnostics',
          description:
            'Verbose output reports prompt size, commits, token usage and rate-limit metadata while redacting credentials.',
        },
        {
          title: 'Simple distribution',
          description: 'The package is published on PyPI and can be installed as an isolated command with uv.',
        },
      ],
      decisions: [
        {
          title: 'Use repository context before prompting',
          description:
            'The model receives the actual diff and commit history rather than a generic request, improving the chance that the generated description reflects both implementation and intent.',
        },
        {
          title: 'Keep providers interchangeable',
          description:
            'A provider-neutral core lets developers choose hosted or local models without changing the Git workflow or repository configuration around them.',
        },
        {
          title: 'Keep configuration predictable',
          description:
            'Explicit flags override persisted defaults, secrets receive different treatment from ordinary settings and model-specific requirements are validated before generation.',
        },
        {
          title: 'Put diagnostics outside generated content',
          description:
            'Progress, usage and transport metadata are written separately from the paste-ready result, preserving a clean output while still supporting troubleshooting.',
        },
      ],
      engineering: [
        'A provider-neutral interface keeps prompt orchestration and model tiers separate from OpenAI, Gemini and Ollama clients.',
        'Git context is gathered locally from the three-dot diff and commit range against a validated base reference.',
        'Structured summary and body tags produce paste-ready output with a graceful fallback for unstructured model responses.',
        'Typer and Rich support repository targeting, additional context, model downloads and interactive terminal feedback.',
        'Verbose diagnostics redact authorization values and surface provider usage, request identifiers and rate-limit information.',
        'Packaging, release automation and verified PyPI publishing make the tool reproducible to install.',
      ],
    },
  },
  {
    id: 'wa-transcriber',
    name: 'WA Transcriber',
    tagline: 'Local WhatsApp Voice Note Transcription',
    description:
      'Cross-platform CLI that detects and transcribes WhatsApp voice notes locally with hardware-accelerated Whisper, keeping audio on-device.',
    link: 'https://pypi.org/project/wa-transcriber',
    github: 'https://github.com/jpxoi/wa-transcriber',
    stack: ['Python', 'CLI', 'OpenAI Whisper', 'PyTorch', 'Watchdog', 'FFmpeg'],
    caseStudy: {
      challenge:
        'WhatsApp voice notes are not always convenient or accessible, and sending personal audio to another transcription service introduces latency and privacy concerns. A desktop tool also has to cope with different file locations and very different hardware limits.',
      solution:
        'WA Transcriber watches WhatsApp Desktop for downloaded voice notes, processes them locally with Whisper and places the result directly on the clipboard. Guided setup and system diagnostics adapt the model choice to the available memory and acceleration hardware.',
      highlights: [
        {
          title: 'Automatic monitoring',
          description:
            'A threaded file watcher detects new voice notes instantly and backfills recently missed downloads at startup.',
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
        {
          title: 'Desktop portability',
          description:
            'The same guided workflow supports WhatsApp Desktop on Apple Silicon Macs and CUDA-capable Windows machines.',
        },
      ],
      decisions: [
        {
          title: 'Keep audio local by design',
          description:
            'Watching WhatsApp’s local media folder and running Whisper on-device removes the need to upload personal voice notes to another transcription service.',
        },
        {
          title: 'Adapt to the machine',
          description:
            'Model recommendations are based on detected acceleration and available memory so setup acknowledges the wide performance gap between supported computers.',
        },
        {
          title: 'Diagnose before long-running work',
          description:
            'Setup and health checks validate dependencies, memory headroom and model compatibility before the background service loads a costly transcription model.',
        },
      ],
      engineering: [
        'A threaded Watchdog observer provides responsive filesystem monitoring without polling or blocking the desktop session.',
        'PyTorch and Whisper support Metal acceleration on Apple Silicon, NVIDIA CUDA on Windows and CPU fallback.',
        'Startup backfill recovers recently downloaded audio before monitoring begins, reducing gaps after restarts.',
        'A dedicated health command checks FFmpeg, RAM or VRAM headroom and model compatibility before long-running use.',
        'Configurable cleanup removes stale model weights while daily logs preserve transcripts and operational history locally.',
        'The package is distributed through PyPI with a focused Typer CLI for setup, health, config, logs and reset.',
      ],
    },
  },
  {
    id: 'pastoral-digital-app',
    name: 'Pastoral Digital App',
    tagline: 'Community Operations & Attendance Platform',
    description:
      'Progressive web app for member identity, QR attendance, event operations and evidence-based participation records.',
    link: 'https://id.pastoralmarianaps.net.pe',
    github: 'https://github.com/jpxoi/pastoral-digital-app',
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Drizzle ORM', 'PostgreSQL'],
    caseStudy: {
      challenge:
        'The pastoral community needed one dependable way to identify catechists, coordinate activities and maintain attendance records across different groups and schedules. Members needed a simple mobile experience, while administrators required operational controls without introducing a separate native application.',
      solution:
        'The progressive web app connects a member-facing digital ID and attendance history with administrative workflows for events, QR check-in, records and participation evidence. The same data model supports day-to-day community access and the structured oversight needed by coordinators.',
      highlights: [
        {
          title: 'Digital pastoral ID',
          description:
            'Each member receives a mobile profile and QR identifier connected to their category, schedule and attendance record.',
        },
        {
          title: 'Event operations',
          description:
            'Administrators coordinate dated activities, locations and separate attendance times for different pastoral schedules.',
        },
        {
          title: 'QR attendance workflow',
          description:
            'Camera-based scanning validates the active event and schedule, calculates punctuality and gives immediate audiovisual feedback.',
        },
        {
          title: 'Attendance oversight',
          description:
            'Member history and administrative records preserve status, capture method and the operator responsible for each check-in.',
        },
        {
          title: 'Participation evidence',
          description:
            'Sunday participation can be submitted with unique file evidence and reviewed through a verification workflow.',
        },
        {
          title: 'Installable experience',
          description: 'PWA support provides app-like access from a phone or desktop without an app-store release.',
        },
      ],
      decisions: [
        {
          title: 'Connect both sides of the operation',
          description:
            'The QR credential and personal history live in the member experience, while event, scanner and record controls remain available to authorized operators over the same source of truth.',
        },
        {
          title: 'Deliver through the web',
          description:
            'A PWA provides installable, app-like access while keeping distribution simple for a defined community across different mobile devices.',
        },
        {
          title: 'Model attendance as evidence',
          description:
            'Attendance keeps its event, status, method, timestamp and registering operator so later review does not depend on a single present-or-absent flag.',
        },
        {
          title: 'Make time part of the domain',
          description:
            'Schedule-specific start times, event boundaries and Lima-aware submission windows are enforced in the workflow instead of left to manual interpretation.',
        },
      ],
      engineering: [
        'Next.js and React provide an authenticated, mobile-first application that remains installable as a PWA.',
        'PostgreSQL with Drizzle ORM models members, categories, schedules, events, locations, attendance and participation evidence.',
        'Unique member-event records prevent duplicate attendance while role checks protect registration and administrative changes.',
        'The browser camera, QR scanning, SWR state and immediate sound or visual feedback support fast check-in at live activities.',
        'Clerk manages identity, Yupay assists DNI onboarding and UploadThing stores evidence after client-side image processing.',
        'Server-side time-zone rules calculate attendance states and constrain evidence submission to the relevant operational window.',
      ],
    },
  },
]
