// Single source of truth: the website and the CV are both generated from this file.
// After editing, run `npm run update` (regenerates the CV PDF and prints the LinkedIn text), then git push.
export const profile = {
  name: 'Hasan Samer Dayoub',
  title: 'Backend-focused Full-Stack Developer',
  // Used only on the CV.
  cvTitle: 'Backend-focused Full-Stack Developer',
  stack: 'Laravel · Node.js · TypeScript · React · Next.js',
  availability: 'Available now for part-time work and full-time from Aug 2027 (remote or on-site; open to relocation).',
  location: 'Damascus, Syria',
  email: 'hasan123dayoub@gmail.com',
  phone: '+963 991 328 880',
  linkedin: 'https://linkedin.com/in/hasan-dayoub-297ba4420',
  github: 'https://github.com/hasan123dayoub-del',
  site: 'https://hasan123dayoub-del.github.io/portfolio/',
  // Public Web3Forms access key (safe to expose, it only allows sending to the owner's inbox).
  // Leave empty to fall back to opening the visitor's mail app.
  contactAccessKey: 'ea64e7ac-6878-4cf8-b3a4-1b3f5dc6fad7',
  summary:
    'Backend-focused full-stack developer with 14 months of project-based training in PHP/Laravel and JavaScript/TypeScript (Node.js, Express, React, Next.js). I built 4 projects on my own (3 Laravel APIs and a full-stack TypeScript platform, 116 REST endpoints in total) and contributed to 3 more team projects, using layered architectures, Sanctum/JWT authentication, role-based access control, queued jobs, Redis caching, Docker and automated tests. Currently training on-site at Bytes4Future (Aga Khan Foundation).',
  cvSummary:
    'Junior backend-focused full-stack developer with 14 months of project-based training in Laravel and Node.js/TypeScript/React. Built 4 projects on my own (3 Laravel APIs and a full-stack TypeScript platform with Next.js and PostgreSQL, 116 REST endpoints in total) and contributed to 3 more team projects, using layered architectures, Sanctum/JWT authentication, role-based access control, queued jobs, Redis caching, Docker and automated tests. Currently training on-site at Bytes4Future (Aga Khan Foundation). Seeking a junior backend or full-stack role: available now part-time, full-time from Aug 2027 (remote or on-site; open to relocation).',
}

export const stats = [
  { value: '116', label: 'REST endpoints I built on my own' },
  { value: '7', label: 'projects (4 built solo)' },
  { value: '14 mo', label: 'project-based training' },
  { value: '2', label: 'certified internship levels' },
]

export const skills = [
  { group: 'Backend', items: ['PHP 8', 'Laravel', 'Node.js', 'TypeScript', 'Express.js', 'RESTful APIs', 'API versioning', 'OpenAPI (Swagger)'] },
  {
    group: 'Architecture',
    items: ['OOP', 'MVC', 'SOLID', 'Repository & Service patterns', 'Events', 'Queues & jobs', 'Cron scheduling', 'WebSockets (Pusher)'],
  },
  { group: 'Security', items: ['Laravel Sanctum', 'JWT', 'RBAC', 'Policies', 'Form Request', 'Zod'] },
  { group: 'Databases', items: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Eloquent ORM', 'Prisma', 'Transactions'] },
  { group: 'Frontend', items: ['JavaScript (ES6+)', 'React', 'Next.js', 'Tailwind CSS', 'Blade', 'HTML5', 'CSS3'] },
  { group: 'Testing & DevOps', items: ['Pest', 'PHPUnit', 'Vitest', 'Postman', 'Docker', 'Git', 'GitHub Actions (CI)'] },
]

// What you are learning right now. Add one line per topic, newest first.
export const learning = [
  { topic: 'Next.js & TypeScript', since: 'Nov 2026', note: 'Full-stack TypeScript' },
  { topic: 'English', since: 'Aug 2026', note: 'Bytes4Future English track' },
]

export const experience = [
  {
    role: 'Full-Stack Developer Trainee',
    company: 'Bytes4Future, Aga Khan Foundation (AKF)',
    mode: 'On-site',
    period: 'Aug 2026 – Present',
    points: [
      'Training across 3 parallel tracks: full-stack development (JavaScript, TypeScript, Node.js, Express.js, React, Next.js, PostgreSQL), Soft Skills and Business, and English.',
      'Co-developed the Institute Management System (see Projects) with a team of 3: a Node.js REST API consumed by a 13-page React dashboard.',
      'Applied the track on my own in the Movies Platform (see Projects): a TypeScript API with Prisma and PostgreSQL behind a Next.js site, deployed with Docker.',
    ],
  },
  {
    role: 'Backend Developer Trainee',
    company: 'focal X',
    mode: 'Remote',
    period: 'Sep 2025 – Aug 2026',
    points: [
      'Completed two 4-month remote backend internship tracks, Level 1 (Sep – Dec 2025) and Level 2 (Mar – Jul 2026), building production-style Laravel APIs against real business requirements.',
      'Built 5 Laravel projects: HireHub and NewsRoom (solo), LazyRoom (sole backend developer in a team project), Alumni Network and Property Management System (team), applying Repository and Service patterns, domain events, queued jobs and Sanctum authentication.',
      'Collaborated in teams through Git and GitHub (personal and feature branches, pull requests) and documented the APIs with Postman collections.',
    ],
  },
]

const renderNote = 'Free hosting: the demo sleeps when idle, so the first load can take up to a minute.';

// Add new projects at the TOP of the list (newest first). The LinkedIn helper prints the first one.
export interface Project {
  name: string;
  subtitle: string;
  kind: 'Individual' | 'Team' | 'Team of 3';
  date: string;
  tech: string[];
  // One short line for the project card (keep it to about 170 characters so the cards line up).
  summary: string;
  // Full details: shown under "Details" on the site and in full on the CV.
  points: string[];
  repo: string;
  live?: string;
  // Shown under the links, e.g. for free hosting that sleeps when idle.
  liveNote?: string;
  docs?: string;
  // Screenshot under public/, e.g. 'projects/name.jpg' (1280x800). After adding one, run `npm run covers`.
  image?: string;
  // Small caption on the screenshot, e.g. who built that part of the UI.
  imageCaption?: string;
  // Card cover for projects without a screenshot: a real request and what the API answers.
  terminal?: { request: string; response: string };
}

export const projects: Project[] = [
  {
    name: 'Movies Platform',
    subtitle: 'Full-Stack Platform',
    kind: 'Individual',
    date: 'Nov 2026',
    tech: ['TypeScript', 'Node.js', 'PostgreSQL', 'Prisma', 'Next.js 16'],
    summary:
      'Movies, series and actors platform built end to end: a 50-endpoint Express + Prisma API on PostgreSQL with Swagger docs, and a Next.js 16 site with reviews and video streaming.',
    points: [
      'Built a 50-endpoint REST API (Express 5, TypeScript, Zod, Prisma) over 10 PostgreSQL tables: JWT auth (httpOnly cookie), USER/ADMIN roles, ratings, reviews, a watchlist and Swagger docs generated from Zod.',
      'Built the Next.js 16 site (Server Components, Server Actions, live search) with adaptive HLS video; 76 API tests (Vitest + Supertest) in GitHub Actions; two Docker services on Render with Neon PostgreSQL.',
    ],
    repo: 'https://github.com/hasan123dayoub-del/movies-platform',
    image: 'projects/movies-platform.jpg',
    live: 'https://movies-platform-web.onrender.com',
    liveNote: renderNote,
    docs: 'https://movies-platform-api.onrender.com/docs',
  },
  {
    name: 'Institute Management System',
    subtitle: 'Full-Stack Platform',
    kind: 'Team of 3',
    date: 'Oct 2026',
    tech: ['Node.js', 'Express 5', 'MongoDB', 'React 19', 'Tailwind CSS'],
    summary:
      'Academy platform for 4 roles with JWT auth, Zod validation and MongoDB transactions; scheduled jobs close courses and promote students automatically.',
    points: [
      'Developed an academy platform for 4 roles (admin, secretary, teacher, student) with JWT authentication, Zod validation and MongoDB transactions for multi-document updates.',
      'Automated course closing and student promotion with node-cron jobs, covered by unit tests, and built analytics dashboards with Recharts.',
    ],
    repo: 'https://github.com/hasan123dayoub-del/Institute-Management-System',
    image: 'projects/institute-admin.jpg',
    live: 'https://institute-dashboard-gnsa.onrender.com',
    liveNote: renderNote,
  },
  {
    name: 'Alumni Network',
    subtitle: 'REST API',
    kind: 'Team',
    date: 'Jul – Aug 2026',
    tech: ['Laravel 13', 'Sanctum', 'Pusher', 'Redis', 'Pest'],
    summary:
      'My part of a university alumni API: the events module, real-time notifications with queued jobs and Pusher, and password reset, all covered by Pest tests.',
    image: 'projects/alumni-home.jpg',
    points: [
      'Built the university events module (CRUD, registration, attendance, reminders), notifications management (endpoints, queued jobs, real-time Pusher delivery) and password reset/change.',
      'Covered the events, notifications and password features with Pest feature tests.',
    ],
    repo: 'https://github.com/hasan123dayoub-del/Alumni-Network',
    live: 'https://alumni-network-api-08ia.onrender.com',
    liveNote: renderNote,
    docs: 'https://alumni-network-api-08ia.onrender.com/docs/api',
  },
  {
    name: 'LazyRoom',
    subtitle: 'Multi-Vendor Ordering API',
    kind: 'Team',
    date: 'May 2026',
    tech: ['Laravel 12', 'Sanctum', 'MySQL'],
    summary:
      'Built the whole backend: orders, suppliers and an in-app wallet. Row locking keeps payments safe: 20 parallel requests on one order charge it exactly once.',
    image: 'projects/lazyroom-app.jpg',
    imageCaption: 'Mobile app by a teammate (Flutter)',
    points: [
      'Built the entire backend on my own: customers, suppliers and admins, an order state machine, and wallet payments kept safe under concurrency with database transactions and row locking (pessimistic locking); measured with 20 parallel requests on one order (charged once) and 50 parallel requests across orders (never overdrawn).',
    ],
    repo: 'https://github.com/hasan123dayoub-del/LazyRoom',
    live: 'https://lazyroom-api.onrender.com',
    liveNote: renderNote,
    docs: 'https://lazyroom-api.onrender.com/docs/api',
  },
  {
    name: 'NewsRoom',
    subtitle: 'Headless CMS API',
    kind: 'Individual',
    date: 'May 2026',
    tech: ['Laravel 12', 'Sanctum', 'Redis', 'MySQL'],
    summary:
      'Headless CMS with versioned APIs (v1/v2), contextual binding, Redis atomic locks against cache stampedes, rate limiting and scheduled report jobs.',
    image: 'projects/newsroom-home.jpg',
    points: [
      'Served web and mobile clients from one codebase via versioned APIs (v1/v2), swapping implementations with contextual binding instead of duplicating controllers.',
      'Prevented cache stampedes with Redis atomic locks, rate-limited the API to 60 requests per minute, and scheduled monthly archiving and weekly report jobs.',
    ],
    repo: 'https://github.com/hasan123dayoub-del/NewsRoom',
    live: 'https://newsroom-api-rmwa.onrender.com',
    liveNote: renderNote,
    docs: 'https://newsroom-api-rmwa.onrender.com/docs/api',
  },
  {
    name: 'HireHub',
    subtitle: 'Freelance Marketplace API',
    kind: 'Individual',
    date: 'Apr 2026',
    tech: ['Laravel 12', 'MySQL', 'Sanctum', 'Events'],
    summary:
      'Freelance marketplace API for 3 roles with Repository and Service layers and events. Eager loading cut the project listing from 48 to 5 queries per page.',
    image: 'projects/hirehub-home.jpg',
    points: [
      'Architected an API serving 3 roles (client, freelancer, admin) over 10 Eloquent models, with Repository and Service layers and an event-driven proposal flow that can be extended without rewriting existing code (Open/Closed principle).',
      'Cut the project listing from 48 to 5 queries per page (15 projects, measured) by eliminating N+1 queries with eager loading and withCount and cached admin analytics for 10 minutes.',
    ],
    repo: 'https://github.com/hasan123dayoub-del/HireHub',
    live: 'https://hirehub-api-dy61.onrender.com',
    liveNote: renderNote,
    docs: 'https://hirehub-api-dy61.onrender.com/docs/api',
  },
  {
    name: 'Property Management System',
    subtitle: 'Booking Platform',
    kind: 'Team',
    date: 'Dec 2025 – Jan 2026',
    tech: ['Laravel 12', 'Blade', 'Tailwind CSS', 'MySQL'],
    summary:
      'Team booking platform for 3 roles. My part: admin user management, booking messages, customer ratings, and property and booking reports.',
    image: 'projects/property-dashboard.jpg',
    imageCaption: 'Admin dashboard (team UI)',
    points: [
      'Team: booking workflows, role-based authorization for 3 roles, reviews and ratings, and paginated dashboards.',
      'My part: admin user management (create employees, change roles, activate and deactivate accounts), employee-to-customer booking messages, customer ratings, and property and booking reports.',
    ],
    repo: 'https://github.com/hasan123dayoub-del/property-management',
    live: 'https://property-management-xs68.onrender.com/login',
    liveNote: renderNote,
  },
]

// Dates and IDs are as printed on the certificates and recommendation letters.
export const certifications = [
  {
    name: 'focal X Backend Internship, Levels 1 & 2',
    detail: 'Two 4-month tracks · certified by the American Institute for Applied Education (AIAE, CertiPro), Passed with Distinction',
    date: 'Aug 2026',
    credential: 'Level 1: CERT-09-UI-8396 · Level 2: CERT-10-UI-3069 · AIAE: TPCSY26-0000104603',
    verify: 'aiae.us/verification',
  },
]

export const education = {
  degree: 'Bachelor of Engineering, Informatics Engineering (Software Engineering)',
  school: 'University of Latakia (formerly Tishreen University), Syria',
  period: '2022 – 2027 (expected)',
}

export const languages = [
  { name: 'Arabic', level: 'Native' },
  { name: 'English', level: 'B1, actively improving through the Bytes4Future English track' },
]
