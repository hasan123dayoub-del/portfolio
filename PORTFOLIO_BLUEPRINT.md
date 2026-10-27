# 🧭 Portfolio Blueprint — Hasan Samer Dayoub

> مخطط كامل للبورتفوليو: الهوية، التقنيات، الأقسام، التصميم، هيكل الملفات، البيانات الجاهزة، وخطة التنفيذ خطوة بخطوة.
> كل البيانات بهالملف مأخوذة من الـ CV والشهادات وحسابك على GitHub — فيك تنسخها مباشرة للكود.

---

## 1. الفكرة والهوية (Positioning)

**الرسالة الأساسية بجملة وحدة:**
> *Backend Developer who designs clean, scalable APIs — Laravel today, full-stack JavaScript tomorrow.*

**الجمهور المستهدف:** مسؤولي توظيف (HR) + Tech Leads بشركات وستارت-أبس، وعملاء freelance.

**شو لازم يطلع منه الزائر خلال 10 ثواني:**
1. إنت Backend Developer (Laravel + Node.js).
2. عندك مشاريع حقيقية بمعمارية نظيفة (Repository / Service / Events / Transactions).
3. عندك شهادات معتمدة + تدريب عملي (focal X + Bytes4Future).
4. كيف يتواصل معك ويحمّل الـ CV.

**العنصر المميز (Signature):** بدل الـ Hero التقليدي، كرت على شكل **API response** —
كأن الزائر عمل `GET /api/v1/hasan` ورجعله JSON فيه معلوماتك. هاد بيحكي "Backend" فوراً بدون ما تكتبها.

```http
GET /api/v1/developers/hasan-dayoub   200 OK · 42ms
```
```json
{
  "name": "Hasan Samer Dayoub",
  "role": "Backend Developer",
  "stack": ["PHP", "Laravel", "Node.js", "Express", "MySQL", "MongoDB", "Redis"],
  "location": "Damascus, Syria",
  "status": "open_to_work",
  "currently": "Full-Stack Trainee @ Bytes4Future (AKF)"
}
```
(الـ JSON بينكتب حرف حرف كأنو typing animation، وبعدين بيظهر زرّين: **View Projects** و **Download CV**)

---

## 2. التقنيات (Tech Stack)

| الطبقة | الاختيار | ليش |
|---|---|---|
| Framework | **Next.js 15 (App Router)** | SEO ممتاز، Static Export، وبيكمّل على React يلي عم تتعلمه |
| اللغة | JavaScript (JSX) ← لاحقاً TypeScript | ابدأ بالي بتعرفه، وحوّل لـ TS بالمرحلة 4 كنقطة قوة إضافية |
| Styling | **Tailwind CSS v4** | نفس يلي استخدمته بـ Institute Management System |
| Animations | **Motion** (`motion/react`) | Scroll reveal + hover + page transitions |
| Icons | **lucide-react** + `simple-icons` (لوغوهات التقنيات) | |
| Theme | `next-themes` | Dark / Light |
| i18n (اختياري، مرحلة 3) | `next-intl` | عربي/إنكليزي مع RTL — نقطة مميزة جداً |
| Contact Form | Route Handler بـ Next.js + **Resend** (أو Formspree كبداية) | |
| Deploy | **Vercel** (مجاني) + دومين `hasandayoub.dev` اختياري | |
| Analytics | Vercel Analytics | |

> 💡 **فكرة قوية كـ Backend Dev (المرحلة 4):** اعمل الـ Contact API كخدمة منفصلة بـ **Laravel** (أو Express) — validation + rate limiting + queue لإرسال الإيميل — وانشرها على Render/Railway، وحط رابطها بالبورتفوليو: *"This form is powered by my own Laravel API"*. هيك البورتفوليو نفسه بيصير مشروع backend.

---

## 3. خريطة الموقع (Sitemap)

```
/                       → الصفحة الرئيسية (One-page مع أقسام)
/projects               → كل المشاريع مع فلترة (Laravel / Node / Full-stack / Team / Solo)
/projects/[slug]        → Case Study لكل مشروع مميز
/certificates           → (اختياري) صفحة الشهادات بالحجم الكامل
/resume                 → عرض الـ CV + زر تحميل PDF
```

### أقسام الصفحة الرئيسية بالترتيب

| # | القسم | المحتوى | ملاحظات تصميم |
|---|---|---|---|
| 1 | **Navbar** | Logo `HD`، روابط الأقسام، Theme toggle، زر `Resume` | Sticky + blur، بيصغر مع السكرول، Active link حسب القسم |
| 2 | **Hero** | الاسم، الدور، جملة تعريف، كرت الـ API response، زرّين CTA، روابط GitHub/LinkedIn/Email | Badge صغير: 🟢 *Open to work* |
| 3 | **Stats strip** | `6+ Projects` · `1 Year Hands-on` · `3 Certifications` · `2 Training Programs` | أرقام بتعد (count-up) |
| 4 | **About** | فقرة قصيرة + صورة شخصية + "What I care about": Clean Architecture · Performance · Testing | |
| 5 | **Skills** | Groups: Backend / Architecture / Databases / Security / Frontend / Tools | Chips مع لوغو كل تقنية، مو progress bars (الـ % ما إلها معنى) |
| 6 | **Experience** | Timeline: Bytes4Future ← focal X | Vertical timeline مع نقطة متوهجة للحالي |
| 7 | **Featured Projects** | 3 مشاريع كبيرة: HireHub · NewsRoom · Institute Management System | كرت كبير: صورة/diagram، وصف، Highlights، tech chips، أزرار Code / Case Study |
| 8 | **More Projects** | Grid صغير لباقي المشاريع | |
| 9 | **Certificates** | 3 كروت مع صورة الشهادة + Credential ID + زر Verify | Lightbox عند الضغط |
| 10 | **GitHub Activity** | Contribution graph + أكثر اللغات استخداماً | `react-github-calendar` |
| 11 | **Contact** | فورم (Name / Email / Message) + معلومات تواصل مباشرة | Toast عند النجاح (`sonner`) |
| 12 | **Footer** | © 2026، روابط، "Built with Next.js & ☕" | |

---

## 4. نظام التصميم (Design System)

### الألوان — Dark-first (نفس لون الـ CV للتناسق)

```css
/* app/globals.css */
@import "tailwindcss";

@theme {
  --color-bg:        #0a0f1a;   /* الخلفية */
  --color-surface:   #111827;   /* الكروت */
  --color-surface-2: #1a2233;   /* hover / nested */
  --color-border:    #1f2a3d;
  --color-text:      #e5e7eb;
  --color-muted:     #94a3b8;
  --color-accent:    #22d3ee;   /* cyan — اللون الأساسي */
  --color-accent-2:  #0e7490;   /* نفس accent الـ CV */
  --color-success:   #34d399;   /* status: open to work / 200 OK */
  --color-warning:   #fbbf24;   /* JSON strings */

  --font-sans: "Inter", system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;
  --font-arabic: "IBM Plex Sans Arabic", sans-serif;
}

/* Light mode */
.light {
  --color-bg: #f8fafc; --color-surface: #ffffff; --color-surface-2: #f1f5f9;
  --color-border: #e2e8f0; --color-text: #0f172a; --color-muted: #64748b;
  --color-accent: #0e7490;
}
```

### الخطوط
- **Inter** للنصوص (400/500/600/800).
- **JetBrains Mono** للكود، الـ JSON، الـ badges، وأرقام الإحصائيات.
- **IBM Plex Sans Arabic** للنسخة العربية.

### قواعد التصميم
- **Spacing:** كل قسم `py-24 md:py-32`، الـ container `max-w-6xl mx-auto px-4 md:px-6`.
- **Radius:** كروت `rounded-2xl`، أزرار `rounded-xl`، chips `rounded-full`.
- **Section header pattern:** رقم صغير mono + عنوان كبير:
  `01. ── About me` (الرقم بلون accent).
- **Motion:** fade-up بسيط (`y: 24 → 0`, `opacity 0 → 1`, `0.5s`)، stagger للكروت `0.08s`. احترم `prefers-reduced-motion`.
- **Background:** grid pattern خفيف + radial glow cyan خلف الـ Hero (بدون مبالغة).
- **Responsive:** Mobile-first. Breakpoints: `sm 640` · `md 768` · `lg 1024`.

---

## 5. هيكل المشروع (Folder Structure)

```
hasan-portfolio/
├── app/
│   ├── layout.jsx              # fonts, ThemeProvider, Navbar, Footer, metadata
│   ├── page.jsx                # يجمع أقسام الصفحة الرئيسية
│   ├── globals.css
│   ├── projects/
│   │   ├── page.jsx            # كل المشاريع + فلترة
│   │   └── [slug]/page.jsx     # Case study (generateStaticParams)
│   ├── resume/page.jsx
│   ├── api/contact/route.js    # POST → Resend
│   ├── sitemap.js
│   ├── robots.js
│   └── opengraph-image.jsx     # صورة المشاركة تلقائياً
├── components/
│   ├── layout/   Navbar.jsx · Footer.jsx · ThemeToggle.jsx · MobileMenu.jsx
│   ├── sections/ Hero.jsx · Stats.jsx · About.jsx · Skills.jsx · Experience.jsx
│   │             FeaturedProjects.jsx · MoreProjects.jsx · Certificates.jsx
│   │             GithubActivity.jsx · Contact.jsx
│   └── ui/       SectionHeader.jsx · ProjectCard.jsx · TechChip.jsx · Button.jsx
│                 ApiResponseCard.jsx · TimelineItem.jsx · CertificateCard.jsx
│                 Lightbox.jsx · Reveal.jsx (wrapper للأنيميشن)
├── data/
│   ├── profile.js · skills.js · experience.js · projects.js · certificates.js
├── lib/
│   └── utils.js                # cn() = clsx + tailwind-merge
├── public/
│   ├── cv/Hasan_Dayoub_CV.pdf
│   ├── certificates/  certipro-web-development.jpg · focalx-backend-level-1.jpg · focalx-backend-level-2.jpg
│   ├── projects/      hirehub.png · newsroom.png · ims.png · ...
│   └── avatar.jpg
└── .env.local                  # RESEND_API_KEY=...
```

> **مبدأ مهم:** كل المحتوى بـ `data/` — الكومبوننتات ما فيها ولا نص hardcoded. لما تضيف مشروع جديد، بتعدّل ملف واحد بس.

---

## 6. البيانات الجاهزة (انسخها كما هي)

### `data/profile.js`
```js
export const profile = {
  name: "Hasan Samer Dayoub",
  shortName: "Hasan Dayoub",
  role: "Backend Developer",
  tagline: "I design clean, scalable APIs — Laravel today, full-stack JavaScript tomorrow.",
  location: "Damascus, Syria",
  email: "hasan123dayoub@gmail.com",
  phone: "+963 991 328 880",
  openToWork: true,
  socials: {
    github: "https://github.com/hasan123dayoub-del",
    linkedin: "https://www.linkedin.com/in/hasan-dayoub-297ba4420",
  },
  resume: "/cv/Hasan_Dayoub_CV.pdf",
  about: [
    "I'm a Backend Developer specializing in PHP and Laravel, with a year of hands-on, project-based training building RESTful APIs and layered architectures.",
    "I care about code that scales: Repository & Service layers, event-driven design, database transactions, and tests that make refactoring safe.",
    "Right now I'm expanding into full-stack JavaScript — Node.js, Express, React and MongoDB — through the Aga Khan Foundation's Bytes4Future program.",
  ],
  stats: [
    { value: 6, suffix: "+", label: "Backend projects" },
    { value: 1, suffix: " yr", label: "Hands-on training" },
    { value: 3, suffix: "", label: "Certifications" },
    { value: 2, suffix: "", label: "Training programs" },
  ],
};
```

### `data/skills.js`
```js
export const skills = [
  { group: "Backend",      items: ["PHP", "Laravel", "Node.js", "Express.js", "REST APIs", "API Versioning"] },
  { group: "Architecture", items: ["MVC", "Repository Pattern", "Service Layer", "SOLID", "Events & Listeners", "Queues & Jobs"] },
  { group: "Databases",    items: ["MySQL", "PostgreSQL", "MariaDB", "MongoDB", "Redis", "Eloquent ORM"] },
  { group: "Security",     items: ["Sanctum", "JWT", "RBAC", "Form Requests", "Zod", "bcrypt"] },
  { group: "Frontend",     items: ["JavaScript", "React", "Tailwind CSS", "Blade", "Livewire", "HTML/CSS"] },
  { group: "Testing & Tools", items: ["Pest", "PHPUnit", "Postman", "Git", "GitHub", "Docker", "GitHub Actions"] },
];
```

### `data/experience.js`
```js
export const experience = [
  {
    role: "Full-Stack Developer Trainee",
    company: "Bytes4Future · Aga Khan Foundation (AKF)",
    period: "Aug 2026 — Present",
    current: true,
    points: [
      "Intensive full-stack track: JavaScript, Node.js, Express.js, React and Java.",
      "Building full-stack apps end-to-end: Express & MongoDB APIs consumed by React front-ends.",
      "Parallel tracks in Soft Skills & Business and professional English.",
    ],
    stack: ["JavaScript", "Node.js", "Express", "React", "MongoDB", "Java"],
  },
  {
    role: "Backend Developer Intern",
    company: "focal X",
    period: "Sep 2025 — Sep 2026",
    current: false,
    points: [
      "Completed two consecutive 4-month back-end internship tracks (Level 1 & Level 2).",
      "Delivered REST APIs with Eloquent, middleware, Form Requests, API Resources and Sanctum across 5+ projects.",
      "Applied Repository & Service patterns, domain events and queued jobs to keep controllers thin.",
    ],
    stack: ["PHP", "Laravel", "MySQL", "Redis", "Pest", "Git"],
  },
];
```

### `data/projects.js`
```js
export const projects = [
  {
    slug: "hirehub",
    title: "HireHub",
    subtitle: "Freelance Marketplace API",
    featured: true,
    type: "Solo",
    category: ["Laravel", "Backend"],
    stack: ["Laravel 12", "PHP 8.2", "MySQL", "Sanctum", "Events"],
    repo: "https://github.com/hasan123dayoub-del/HireHub",
    image: "/projects/hirehub.png",
    summary: "An Upwork-style API connecting clients with verified freelancers, built for architectural integrity and performance.",
    highlights: [
      "Repository + Service layer — controllers stay thin and logic is unit-testable with mocks",
      "Event-driven proposal flow (ProposalAccepted → listeners) following the Open/Closed principle",
      "Proposal submission wrapped in database transactions",
      "N+1 eliminated via eager loading and withCount(); cached admin stats",
      "Custom RBAC middleware (IsVerifiedFreelancer) + request-latency logging middleware",
    ],
    caseStudy: {
      problem: "Clients need a reliable way to post projects, receive proposals and hire verified freelancers without data inconsistencies.",
      approach: "Layered architecture (Controller → Service → Repository), domain events for side-effects, polymorphic attachments & reviews.",
      challenge: "Accepting one proposal must reject all competing proposals and notify the freelancer — handled in ProposalService with a ProposalAccepted event.",
      result: "A documented, Postman-tested API ready for a web or mobile client.",
    },
  },
  {
    slug: "newsroom",
    title: "NewsRoom",
    subtitle: "Headless CMS API",
    featured: true,
    type: "Solo",
    category: ["Laravel", "Backend"],
    stack: ["Laravel", "Sanctum", "Redis", "MySQL"],
    repo: "https://github.com/hasan123dayoub-del/NewsRooom",
    image: "/projects/newsroom.png",
    summary: "A decoupled enterprise CMS API with versioned endpoints for web and mobile clients.",
    highlights: [
      "Repository interfaces bound via the Service Container — controllers are blind to Eloquent",
      "Contextual binding to route notifications per role without if/else chains",
      "API versioning: v1 (web) and v2 (mobile, richer payloads) via JsonResources",
      "Cache-stampede protection with Redis atomic locks",
      "After-response telemetry using middleware terminate()",
      "Architecture documented as ADRs + Postman collection",
    ],
    caseStudy: {
      problem: "Web and mobile clients need different payloads from the same content without breaking each other.",
      approach: "Inheritance-based V1/V2 controllers with polymorphic resources; repository + service layers.",
      challenge: "Dashboard cache expiry under load could hammer the DB — solved with Redis $lock->block().",
      result: "Scalable, loosely coupled API with clear architectural decision records.",
    },
  },
  {
    slug: "institute-management-system",
    title: "Institute Management System",
    subtitle: "Full-Stack Academy Platform",
    featured: true,
    type: "Team",
    category: ["Node.js", "React", "Full-stack"],
    stack: ["Node.js", "Express 5", "MongoDB", "JWT", "Zod", "React 19", "Tailwind", "Recharts"],
    repo: "https://github.com/hasan123dayoub-del/Institute-Management-System",
    image: "/projects/ims.png",
    summary: "A team-built, role-based platform for an English academy: classes, schedules, grades, results and staff management.",
    highlights: [
      "4 roles (admin, secretary, teacher, student) with authenticate/authorize/ownsClass middleware",
      "Controller → Service → Model architecture with centralized AppError handling",
      "Zod request validation and JWT authentication",
      "node-cron jobs to auto-finish classes and reset salaries",
      "Tests with Node's built-in test runner",
      "React 19 dashboard with Recharts analytics and protected routes",
    ],
  },
  {
    slug: "alumni-network",
    title: "Alumni Network",
    subtitle: "Backend API",
    featured: false,
    type: "Team",
    category: ["Laravel", "Backend"],
    stack: ["Laravel", "Sanctum", "Pusher", "Redis", "Pest"],
    repo: "https://github.com/khederAlkhateeb/Alumni-Network",
    summary: "Platform connecting alumni, students and mentorship programs. I owned the notifications & events module.",
    highlights: ["Domain events + queued jobs", "Real-time notifications via Pusher", "Pest tests for every feature"],
  },
  {
    slug: "lazyroom",
    title: "LazyRoom",
    subtitle: "Multi-Vendor Ordering API",
    featured: false,
    type: "Team",
    category: ["Laravel", "Backend"],
    stack: ["Laravel 12", "Sanctum", "MySQL"],
    repo: "https://github.com/hasan123dayoub-del/LazyRoom",
    summary: "Marketplace API where customers order from suppliers and pay through an in-app wallet managed by admins.",
    highlights: ["Order state machine with stock control", "Wallet transfers in transactions with lockForUpdate()", "Role-based access: customer / supplier / admin"],
  },
  {
    slug: "property-management",
    title: "Property Management System",
    subtitle: "Role-based Booking Platform",
    featured: false,
    type: "Team",
    category: ["Laravel", "Full-stack"],
    stack: ["Laravel", "Blade", "Tailwind", "MySQL"],
    repo: "https://github.com/Ebla-a/property-management",
    summary: "Admin / employee / client platform for property listings and bookings.",
    highlights: ["Booking status workflows", "Role-based authorization", "Reviews & ratings"],
  },
  {
    slug: "logistics-courier",
    title: "Logistics & Courier System",
    subtitle: "Modular Laravel 13 (in progress)",
    featured: false,
    type: "Solo",
    category: ["Laravel", "Backend"],
    stack: ["Laravel 13", "Modules", "PHP 8.3"],
    repo: "https://github.com/hasan123dayoub-del/Logistics-Courier-Management-System2",
    summary: "Courier management system built on a modular (domain-module) Laravel architecture.",
    highlights: ["Modular monolith structure", "Auth module"],
    status: "In progress",
  },
];
```

### `data/certificates.js`
```js
export const certificates = [
  {
    title: "Professional Program in Web Development",
    issuer: "American Institute for Applied Education (AIAE) · CertiPro",
    detail: "55 hours · Passed with Distinction · Authorized TC: focal X",
    date: "Jul 2026",
    credentialId: "TPCSY26-0000104603",
    verifyUrl: "https://www.aiae.us/verification",
    image: "/certificates/certipro-web-development.jpg",
  },
  {
    title: "Web Development | Back-end — Level 2",
    issuer: "focal X",
    detail: "4-month internship program",
    date: "Aug 2026",
    credentialId: "CERT-10-UI-3069",
    image: "/certificates/focalx-backend-level-2.jpg",
  },
  {
    title: "Web Development | Back-end — Level 1",
    issuer: "focal X",
    detail: "4-month internship program",
    image: "/certificates/focalx-backend-level-1.jpg",
  },
];
```

---

## 7. مواصفات الكومبوننتات الأساسية

| Component | Props | السلوك |
|---|---|---|
| `SectionHeader` | `index`, `title`, `subtitle?` | `01. About me` + خط متدرج |
| `Reveal` | `children`, `delay?` | `motion.div` مع `whileInView`, `viewport={{ once: true }}` |
| `ApiResponseCard` | `data` (object) | Header فيه `GET` + URL + `200 OK`، JSON ملوّن (keys cyan، strings amber)، typing effect |
| `TechChip` | `name`, `icon?` | `rounded-full` mono صغير، hover بيضوي |
| `ProjectCard` | `project`, `variant: "featured" \| "compact"` | Featured: صورة + highlights + أزرار. Compact: عنوان + stack + رابط |
| `TimelineItem` | `item` | نقطة نابضة إذا `current: true` |
| `CertificateCard` | `cert` | صورة مصغرة، ID بخط mono، زر Verify إذا في `verifyUrl`، يفتح `Lightbox` |
| `Contact` | — | Client component، `fetch("/api/contact")`، حالات loading/success/error، honeypot ضد السبام |

### مثال: `components/ui/Reveal.jsx`
```jsx
"use client";
import { motion, useReducedMotion } from "motion/react";

export default function Reveal({ children, delay = 0, className }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
```

### مثال: `app/api/contact/route.js`
```js
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  const { name, email, message, company } = await req.json();
  if (company) return Response.json({ ok: true });            // honeypot
  if (!name || !email?.includes("@") || !message || message.length > 3000)
    return Response.json({ error: "Invalid input" }, { status: 422 });

  await resend.emails.send({
    from: "Portfolio <onboarding@resend.dev>",
    to: "hasan123dayoub@gmail.com",
    replyTo: email,
    subject: `New message from ${name}`,
    text: message,
  });
  return Response.json({ ok: true });
}
```

---

## 8. قالب صفحة Case Study (`/projects/[slug]`)

```
← Back to projects
[Title]  [Solo/Team badge]  [Repo ↗]
Subtitle + summary

┌ Tech stack chips ┐

## The Problem          ← caseStudy.problem
## Architecture         ← diagram (Controller → Service → Repository → DB) + caseStudy.approach
## Key Highlights       ← highlights (قائمة مع أيقونات ✓)
## Hardest Challenge    ← caseStudy.challenge + code snippet صغير من المشروع
## Result               ← caseStudy.result
## API Endpoints        ← جدول مختصر (Method / Endpoint / Auth)

[ ← Previous project ]                [ Next project → ]
```

> 💡 الـ **Architecture diagram + code snippet** هي يلي بتفرّقك عن أي Junior تاني — الـ Tech Lead بدو يشوف كيف بتفكر، مو بس شو استخدمت.

---

## 9. SEO · Performance · Accessibility — Checklist

- [ ] `metadata` بـ `layout.jsx`: title template `%s | Hasan Dayoub`، description، keywords، `openGraph`، `twitter`.
- [ ] `opengraph-image.jsx` (اسمك + الدور + خلفية الهوية).
- [ ] `sitemap.js` + `robots.js`.
- [ ] JSON-LD من نوع `Person` (name, jobTitle, sameAs: GitHub/LinkedIn).
- [ ] كل الصور عبر `next/image` بصيغة WebP وبأبعاد صحيحة.
- [ ] الخطوط عبر `next/font` (بدون layout shift).
- [ ] Lighthouse ≥ 95 بكل الفئات.
- [ ] تباين ألوان AA، `alt` لكل صورة، focus ring واضح، تنقّل كامل بالكيبورد.
- [ ] `prefers-reduced-motion` محترم.
- [ ] Favicon + `apple-touch-icon`.

---

## 10. تحسينات لازم تعملها على GitHub قبل الإطلاق ⚠️

البورتفوليو رح يحوّل الزوار لـ GitHub — فلازم يكون مرتب. لاحظت هالنقاط:

| المشكلة | الحل |
|---|---|
| البروفايل ما فيه **bio / location / website** | Bio: `Backend Developer · Laravel & Node.js · Damascus 🇸🇾` + رابط البورتفوليو |
| ما في **Profile README** | اعمل repo باسم `hasan123dayoub-del` فيه README: مقدمة، tech stack badges، المشاريع المثبتة، GitHub stats |
| ولا repo فيه **description** أو **topics** | ضيف وصف سطر واحد + topics (`laravel`, `rest-api`, `php`, `mysql`...) لكل repo |
| ~~README الافتراضي بـ LazyRoom و Logistics، اسم `READMI.md` بـ HireHub، ترميز UTF-16 بـ IMS و Bytes4Future، رابط clone غلط بـ NewsRoom~~ | ✅ **انحلّت كلها** — README جديد لكل مشروع (2026-10-23) |
| **Logistics**: `composer.json` ما فيه `nwidart/laravel-modules` و `spatie/laravel-permission` مع إنهم بـ `composer.lock` | نفّذ `composer require nwidart/laravel-modules spatie/laravel-permission laravel/sanctum` وارفع `composer.json` |
| ما في **Pinned repos** | ثبّت: HireHub · NewsRooom · Institute-Management-System · LazyRoom · Alumni-Network (fork أو رابط) |
| ما في screenshots أو Live demos | ضيف صورة/GIF لكل مشروع بالـ README، وانشر الـ IMS frontend على Vercel كـ live demo |

---

## 11. خطة التنفيذ (Roadmap)

### المرحلة 0 — تحضير (يوم)
- [ ] صلّح GitHub حسب القسم 10.
- [ ] جهّز صورة شخصية احترافية (خلفية بسيطة).
- [ ] خُد screenshots للمشاريع (Postman responses / ERD / dashboard الـ IMS).
- [ ] حوّل شهادات focal X من PDF لـ JPG (للعرض)، وحط كل شي بـ `public/`.

### المرحلة 1 — الأساس (2–3 أيام)
```bash
npx create-next-app@latest hasan-portfolio --js --tailwind --app --eslint --no-src-dir
cd hasan-portfolio
npm i motion lucide-react next-themes clsx tailwind-merge sonner
```
- [ ] Design tokens بـ `globals.css` + الخطوط بـ `layout.jsx`.
- [ ] `Navbar` + `Footer` + `ThemeToggle`.
- [ ] ملفات `data/` كاملة (انسخها من القسم 6).
- [ ] `Hero` مع `ApiResponseCard`.

### المرحلة 2 — المحتوى (3–4 أيام)
- [ ] Stats · About · Skills · Experience.
- [ ] Featured Projects + More Projects.
- [ ] Certificates + Lightbox.
- [ ] Contact (Formspree مؤقتاً أو Resend).
- [ ] Responsive لكل الأقسام (اختبر على 375px).

### المرحلة 3 — العمق (2–3 أيام)
- [ ] `/projects` مع فلترة + `/projects/[slug]` case studies.
- [ ] GitHub Activity.
- [ ] SEO checklist كامل + OG image.
- [ ] (اختياري) عربي/إنكليزي مع RTL عبر `next-intl`.

### المرحلة 4 — الإطلاق والتميّز
- [ ] Deploy على Vercel + دومين.
- [ ] Lighthouse ≥ 95.
- [ ] حط رابط البورتفوليو بـ: الـ CV، GitHub bio، LinkedIn.
- [ ] (Bonus) Contact API بـ Laravel منفصل + نشره → اكتب عنه case study.
- [ ] (Bonus) التحويل لـ TypeScript.

---

## 12. ملفات جاهزة بهالمجلد

```
Hasan-Portfolio-Kit/
├── PORTFOLIO_BLUEPRINT.md              ← هالملف
├── cv/
│   ├── Hasan_Dayoub_CV.pdf             ← الـ CV الجديد (انسخه لـ public/cv/)
│   └── Hasan_Dayoub_CV.html            ← مصدر الـ CV (عدّل عليه وأعد الطباعة لـ PDF)
└── assets/certificates/
    ├── certipro-web-development.jpg
    ├── focalx-backend-level-1.pdf
    └── focalx-backend-level-2.pdf
```

> لتعديل الـ CV: افتح `Hasan_Dayoub_CV.html` بالمتصفح ← `Ctrl+P` ← *Save as PDF* ← Margins: Default، وفعّل *Background graphics*.
