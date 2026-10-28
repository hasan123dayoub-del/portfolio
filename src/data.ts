// Single source of truth: the website and the CV are both generated from this file.
// After editing, run `npm run update` (regenerates the CV PDF and prints the LinkedIn text), then git push.
export const profile = {
  name: 'Hasan Samer Dayoub',
  title: 'Backend-focused Full-Stack Developer',
  // Used only on the CV.
  cvTitle: 'Backend-focused Full-Stack Developer',
  stack: 'Laravel · Node.js · React',
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
    'Backend-focused full-stack developer with 13 months of project-based training in PHP/Laravel and JavaScript (Node.js, Express, React, MongoDB). I built 3 Laravel APIs on my own (HireHub, NewsRoom and the LazyRoom backend, 64 REST endpoints) and contributed to 3 more team projects, using layered architectures, Sanctum/JWT authentication, role-based access control, queued jobs, Redis caching and automated tests. Currently training on-site at Bytes4Future (Aga Khan Foundation).',
  cvSummary:
    'Junior backend-focused full-stack developer with 13 months of project-based training in Laravel and Node.js/React. Built 3 Laravel APIs on my own (HireHub, NewsRoom and the LazyRoom backend, 64 REST endpoints) and contributed to 3 more team projects, using layered architectures, Sanctum/JWT authentication, role-based access control, queued jobs, Redis caching and automated tests. Currently training on-site at Bytes4Future (Aga Khan Foundation). Seeking a junior backend or full-stack role: available now part-time, full-time from Aug 2027 (remote or on-site; open to relocation).',
}

export const stats = [
  { value: '64', label: 'REST endpoints I built on my own' },
  { value: '6', label: 'projects (3 APIs built solo)' },
  { value: '13 mo', label: 'project-based training' },
  { value: '2', label: 'certified internship levels' },
]

export const skills = [
  { group: 'Backend', items: ['PHP 8', 'Laravel', 'Node.js', 'Express.js', 'RESTful APIs', 'API versioning'] },
  {
    group: 'Architecture',
    items: ['OOP', 'MVC', 'SOLID', 'Repository & Service patterns', 'Events', 'Queues & jobs', 'Cron scheduling', 'WebSockets (Pusher)'],
  },
  { group: 'Security', items: ['Laravel Sanctum', 'JWT', 'RBAC', 'Policies', 'Form Request', 'Zod'] },
  { group: 'Databases', items: ['MySQL', 'MongoDB', 'Redis', 'Eloquent ORM', 'Transactions'] },
  { group: 'Frontend', items: ['JavaScript (ES6+)', 'React', 'Tailwind CSS', 'Blade', 'HTML5', 'CSS3'] },
  { group: 'Testing & Tools', items: ['Pest', 'PHPUnit', 'Unit testing', 'Postman', 'Git', 'GitHub'] },
]

// What you are learning right now. Add one line per topic, newest first.
export const learning = [
  { topic: 'React & Node.js', since: 'Aug 2026', note: 'Full-stack JavaScript' },
  { topic: 'English', since: 'Aug 2026', note: 'Bytes4Future English track' },
]

export const experience = [
  {
    role: 'Full-Stack Developer Trainee',
    company: 'Bytes4Future, Aga Khan Foundation (AKF)',
    mode: 'On-site',
    period: 'Aug 2026 – Present',
    points: [
      'Training across 3 parallel tracks: full-stack development (JavaScript, Node.js, Express.js, React), Soft Skills and Business, and English.',
      'Co-developed the Institute Management System (see Projects) with a team of 3: a Node.js REST API consumed by a 13-page React dashboard.',
    ],
  },
  {
    role: 'Backend Developer Trainee',
    company: 'focal X',
    mode: 'Remote',
    period: 'Sep 2025 – Aug 2026',
    points: [
      'Completed two 4-month remote backend internship tracks, Level 1 (Sep 2025 – Jan 2026) and Level 2 (Mar – Jul 2026), building production-style Laravel APIs against real business requirements.',
      'Built 5 Laravel projects: HireHub and NewsRoom (solo), LazyRoom, Alumni Network and Property Management System (team), applying Repository and Service patterns, domain events, queued jobs and Sanctum authentication.',
      'Collaborated in teams through Git and GitHub (personal and feature branches, pull requests) and documented the APIs with Postman collections.',
    ],
  },
]

// Add new projects at the TOP of the list (newest first). The LinkedIn helper prints the first one.
export interface Project {
  name: string;
  subtitle: string;
  kind: 'Individual' | 'Team' | 'Team of 3';
  date: string;
  tech: string[];
  points: string[];
  repo: string;
  live?: string;
  docs?: string;
}

export const projects: Project[] = [
  {
    name: 'Institute Management System',
    subtitle: 'Full-Stack Platform',
    kind: 'Team of 3',
    date: 'Oct 2026',
    tech: ['Node.js', 'Express 5', 'MongoDB', 'React 19', 'Tailwind CSS'],
    points: [
      'Developed an academy platform for 4 roles (admin, secretary, teacher, student) with JWT authentication, Zod validation and MongoDB transactions for multi-document updates.',
      'Automated course closing and student promotion with node-cron jobs, covered by unit tests, and built analytics dashboards with Recharts.',
    ],
    repo: 'https://github.com/hasan123dayoub-del/Institute-Management-System',
  },
  {
    name: 'Alumni Network',
    subtitle: 'REST API',
    kind: 'Team',
    date: 'Jul – Aug 2026',
    tech: ['Laravel', 'Sanctum', 'Pusher', 'Redis', 'Pest'],
    points: [
      'Built the university events module (CRUD, registration, attendance, reminders), notifications management (endpoints, queued jobs, real-time Pusher delivery) and password reset/change.',
      'Covered the events, notifications and password features with Pest feature tests.',
    ],
    repo: 'https://github.com/hasan123dayoub-del/Alumni-Network',
    docs: 'https://nity0i8ngr.apidog.io',
  },
  {
    name: 'LazyRoom',
    subtitle: 'Multi-Vendor Ordering API',
    kind: 'Team',
    date: 'May 2026',
    tech: ['Laravel 12', 'Sanctum', 'MySQL'],
    points: [
      'Built the entire backend on my own: customers, suppliers and admins, an order state machine, and wallet payments kept safe under concurrency with database transactions and row locking (pessimistic locking) to prevent double charges.',
    ],
    repo: 'https://github.com/hasan123dayoub-del/LazyRoom',
  },
  {
    name: 'NewsRoom',
    subtitle: 'Headless CMS API',
    kind: 'Individual',
    date: 'May 2026',
    tech: ['Laravel 11', 'Sanctum', 'Redis', 'MySQL'],
    points: [
      'Served web and mobile clients from one codebase via versioned APIs (v1/v2), swapping implementations with contextual binding instead of duplicating controllers.',
      'Prevented cache stampedes (many requests rebuilding the same cache at once) with Redis atomic locks, rate-limited the API to 60 requests per minute, and scheduled monthly archiving and weekly report jobs.',
    ],
    repo: 'https://github.com/hasan123dayoub-del/NewsRoom',
  },
  {
    name: 'HireHub',
    subtitle: 'Freelance Marketplace API',
    kind: 'Individual',
    date: 'Apr 2026',
    tech: ['Laravel 12', 'MySQL', 'Sanctum', 'Events'],
    points: [
      'Architected an API serving 3 roles (client, freelancer, admin) over 10 Eloquent models, with Repository and Service layers and an event-driven proposal flow that can be extended without rewriting existing code (Open/Closed principle).',
      'Eliminated N+1 queries with eager loading and withCount, cached admin analytics for 10 minutes, and logged request latency through custom middleware.',
    ],
    repo: 'https://github.com/hasan123dayoub-del/HireHub',
    live: 'https://hirehub-api-dy61.onrender.com/api/projects',
    docs: 'https://github.com/hasan123dayoub-del/HireHub/blob/main/docs/HireHub.postman_collection.json',
  },
  {
    name: 'Property Management System',
    subtitle: 'Booking Platform',
    kind: 'Team',
    date: 'Dec 2025 – Jan 2026',
    tech: ['Laravel', 'Blade', 'Tailwind CSS', 'MySQL'],
    points: [
      'Team: booking workflows, role-based authorization for 3 roles, reviews and ratings, and paginated dashboards.',
      'My part: admin user management (create employees, change roles, activate and deactivate accounts), employee-to-customer booking messages, customer ratings, and property and booking reports.',
    ],
    repo: 'https://github.com/hasan123dayoub-del/property-management',
  },
]

// Dates are as printed on the certificates. Level 1 is left empty until focal X corrects the printed year.
export const certifications = [
  {
    name: 'focal X Backend Internship, Levels 1 & 2',
    detail: 'Two 4-month tracks · certified by the American Institute for Applied Education (AIAE, CertiPro), Passed with Distinction',
    date: 'Aug 2026',
    credential: 'Level 2: CERT-10-UI-3069 · Level 1: 9PED0SS3Z08 · AIAE: TPCSY26-0000104603',
    verify: 'aiae.us/verification',
  },
]

export const education = {
  degree: 'Bachelor of Engineering, Informatics Engineering (Software Engineering)',
  school: 'University of Latakia, Syria',
  period: '2022 – 2027 (expected)',
}

export const languages = [
  { name: 'Arabic', level: 'Native' },
  { name: 'English', level: 'B1, actively improving through the Bytes4Future English track' },
]
