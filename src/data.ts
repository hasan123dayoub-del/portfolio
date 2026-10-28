export const profile = {
  name: 'Hasan Samer Dayoub',
  title: 'Full-Stack Developer',
  stack: 'PHP · Laravel · Node.js · React',
  location: 'Damascus, Syria',
  email: 'hasan123dayoub@gmail.com',
  phone: '+963 991 328 880',
  linkedin: 'https://linkedin.com/in/hasan-dayoub-297ba4420',
  github: 'https://github.com/hasan123dayoub-del',
  // Public Web3Forms access key (safe to expose, it only allows sending to the owner's inbox).
  // Leave empty to fall back to opening the visitor's mail app.
  contactAccessKey: 'ea64e7ac-6878-4cf8-b3a4-1b3f5dc6fad7',
  summary:
    'Full-Stack Developer with one year of project-based training, working across PHP/Laravel and JavaScript (Node.js, Express, React, MongoDB). I have designed 95+ RESTful API endpoints across 6 projects using layered architectures, Sanctum/JWT authentication, role-based access control, queued jobs, Redis caching and automated testing, and built React dashboards on top of them. Currently training at Bytes4Future (Aga Khan Foundation).',
}

export const stats = [
  { value: '95+', label: 'REST endpoints designed' },
  { value: '6', label: 'API projects' },
  { value: '1 yr', label: 'project-based training' },
  { value: '3', label: 'certifications' },
]

export const skills = [
  { group: 'Backend', items: ['PHP 8', 'Laravel', 'Node.js', 'Express.js', 'RESTful APIs', 'API versioning'] },
  {
    group: 'Architecture',
    items: ['OOP', 'MVC', 'SOLID', 'Repository & Service patterns', 'Events', 'Queues & jobs', 'Cron scheduling', 'WebSockets (Pusher)'],
  },
  { group: 'Security', items: ['Laravel Sanctum', 'JWT', 'RBAC', 'Policies', 'Form Request', 'Zod'] },
  { group: 'Databases', items: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Eloquent ORM', 'Transactions'] },
  { group: 'Frontend', items: ['JavaScript (ES6+)', 'React', 'Tailwind CSS', 'Blade', 'HTML5', 'CSS3'] },
  {
    group: 'Testing & Tools',
    items: ['Pest', 'PHPUnit', 'Unit testing', 'Postman', 'Git', 'GitHub', 'GitHub Actions', 'Docker'],
  },
]

export const experience = [
  {
    role: 'Full-Stack Developer Trainee',
    company: 'Bytes4Future, Aga Khan Foundation (AKF)',
    period: 'Aug 2026 – Present',
    points: [
      'Training across 3 parallel tracks: full-stack development (JavaScript, Node.js, Express.js, React, Java), Soft Skills and Business, and English.',
      'Co-developed a full-stack academy platform with a team of 3, exposing 34 REST endpoints consumed by a 13-page React dashboard.',
    ],
  },
  {
    role: 'Backend Developer Trainee',
    company: 'focal X',
    period: 'Sep 2025 – Aug 2026',
    points: [
      'Completed two 4-month backend internship tracks (Level 1 and Level 2), building production-style Laravel APIs against real business requirements.',
      'Shipped 60+ REST endpoints across 3 Laravel APIs, applying Repository and Service patterns, domain events, queued jobs and Sanctum authentication.',
      'Collaborated in teams of 2–3 developers via Git and GitHub, documenting all 3 APIs with Postman collections.',
    ],
  },
]

export interface Project {
  name: string;
  subtitle: string;
  kind: 'Individual' | 'Team' | 'Team of 3';
  tech: string[];
  points: string[];
  repo: string;
}

export const projects: Project[] = [
  {
    name: 'HireHub',
    subtitle: 'Freelance Marketplace API',
    kind: 'Individual',
    tech: ['Laravel 12', 'MySQL', 'Sanctum', 'Events'],
    points: [
      'Architected a 21-endpoint API serving 3 roles (client, freelancer, admin) over 10 Eloquent models, with Repository and Service layers and an event-driven proposal flow following the Open/Closed principle.',
      'Eliminated N+1 queries with eager loading and withCount, cached admin analytics for 10 minutes, and logged request latency through custom middleware.',
    ],
    repo: 'https://github.com/hasan123dayoub-del/HireHub',
  },
  {
    name: 'NewsRoom',
    subtitle: 'Headless CMS API',
    kind: 'Individual',
    tech: ['Laravel 11', 'Sanctum', 'Redis', 'MySQL'],
    points: [
      'Engineered 17 endpoints across 2 API versions (web and mobile), decoupled through repository interfaces and contextual binding in the Service Container.',
      'Prevented cache stampedes with Redis atomic locks, rate-limited the API to 60 requests per minute, and scheduled monthly archiving and weekly report jobs.',
    ],
    repo: 'https://github.com/hasan123dayoub-del/NewsRooom',
  },
  {
    name: 'Institute Management System',
    subtitle: 'Full-Stack Platform',
    kind: 'Team of 3',
    tech: ['Node.js', 'Express 5', 'MongoDB', 'React 19', 'Tailwind CSS'],
    points: [
      'Developed an academy platform for 4 roles (admin, secretary, teacher, student) with JWT authentication, Zod validation and MongoDB transactions for multi-document updates.',
      'Automated course closing and student promotion with node-cron jobs, verified by 14 unit tests, and built analytics dashboards with Recharts.',
    ],
    repo: 'https://github.com/hasan123dayoub-del/Institute-Management-System',
  },
  {
    name: 'LazyRoom',
    subtitle: 'Multi-Vendor Ordering API',
    kind: 'Team',
    tech: ['Laravel 12', 'Sanctum', 'MySQL'],
    points: [
      'Implemented the order, wallet and admin modules of a 26-endpoint marketplace API, securing payments with transactions and pessimistic locking to prevent double-spending.',
    ],
    repo: 'https://github.com/hasan123dayoub-del/LazyRoom',
  },
  {
    name: 'Alumni Network',
    subtitle: 'REST API',
    kind: 'Team',
    tech: ['Laravel', 'Sanctum', 'Pusher', 'Redis', 'Pest'],
    points: ['Owned the notifications module: domain events, queued jobs and real-time Pusher delivery, covered by Pest tests.'],
    repo: 'https://github.com/hasan123dayoub-del/Alumni-Network',
  },
  {
    name: 'Property Management System',
    subtitle: 'Booking Platform',
    kind: 'Team',
    tech: ['Laravel', 'Blade', 'Tailwind CSS', 'MySQL'],
    points: ['Created booking workflows, role-based authorization for 3 roles, reviews and ratings, and paginated dashboards.'],
    repo: 'https://github.com/hasan123dayoub-del/property-management',
  },
]

export const certifications = [
  {
    name: 'Professional Program in Web Development',
    detail: 'Passed with Distinction (55 hours) · American Institute for Applied Education (AIAE), CertiPro · Authorized Training Center: focal X',
    date: 'Jul 2026',
  },
  { name: 'Web Development, Back-end Level 2', detail: 'focal X · 4-month internship program', date: 'Aug 2026' },
  { name: 'Web Development, Back-end Level 1', detail: 'focal X · 4-month internship program', date: '' },
]

export const education = {
  degree: 'Bachelor of Engineering, Informatics Engineering (Software Engineering)',
  school: 'University of Latakia, Syria',
  period: '2022 – 2027 (expected)',
}

export const volunteering = {
  role: 'Youth Volunteer · United Nations (UN)',
  period: '2020 – 2022',
  text: 'Co-organized community activities for people with special needs, food-distribution drives and awareness theater performances over 2 years.',
}

export const languages = [
  { name: 'Arabic', level: 'Native' },
  { name: 'English', level: 'Elementary, actively improving through the Bytes4Future English track' },
]
