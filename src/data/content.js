export const EMAIL = 'two19labs@gmail.com'
export const PHONE = '+919834722416'

export const nav = [
  { label: 'Services', href: '/#services' },
  { label: 'How We Work', href: '/#process' },
  { label: 'Industries', href: '/#industries' },
  { label: 'FAQ', href: '/#faq' },
]

export const deliver = [
  'Custom Software',
  'AI Automation',
  'CTO-as-a-Service',
  'Web Development',
  'System Integrations',
]

// Clients we've worked with — shown in the scrolling logo marquee.
// To add a client: drop the logo file in `public/clients/` and add an entry
// here. `logo` is the path under /public (e.g. '/clients/acme.svg').
// If `logo` is omitted, the name renders as text instead.
export const clients = [
  { name: 'Ghoomar Village', logo: '/clients/village-logo.png' },
  { name: 'Ashirvad', logo: '/clients/Ashirvad.svg' },
  { name: 'ITC Limited', logo: '/clients/ITC_Limited_Logo.svg.png' },
  { name: 'Client Four' },
  { name: 'Client Five' },
  { name: 'Client Six' },
]

export const stats = [
  { count: 100, suffix: '%', label: 'Bespoke builds. No templates.' },
  { count: 3, suffix: 'X', label: 'Average efficiency gain for clients.' },
  { count: 7, suffix: '', label: 'Core service areas, end to end.' },
]

export const services = [
  {
    n: '01',
    slug: 'custom-software-development',
    title: 'Custom Software Development',
    body: 'ERP, CRM, SaaS platforms, customer portals & enterprise apps tailored to your operations.',
  },
  {
    n: '02',
    slug: 'cto-as-a-service',
    title: 'CTO-as-a-Service',
    body: 'Strategic tech leadership, scalable architecture, stack selection & team oversight.',
  },
  {
    n: '03',
    slug: 'ai-automation',
    title: 'AI & Automation',
    body: 'AI sales assistants, chatbots, workflow automation & intelligent knowledge bases.',
  },
  {
    n: '04',
    slug: 'web-development',
    title: 'Web Development',
    body: 'High-performance marketing sites, web apps, dashboards & e-commerce storefronts.',
  },
  {
    n: '05',
    slug: 'system-integrations',
    title: 'System Integrations',
    body: 'API development, payment gateways, CRM/ERP connectivity & cloud migrations.',
  },
  {
    n: '06',
    slug: 'support-maintenance',
    title: 'Support & Maintenance',
    body: 'Performance monitoring, security patches, feature upgrades & dedicated accounts.',
  },
]

// Per-service subpage content, keyed by slug. Sections render only when present,
// so services can be filled in incrementally.
export const serviceDetails = {
  'custom-software-development': {
    promise: 'Software built around how you actually work — not the other way round.',
    overview:
      'Off-the-shelf tools force your business to bend to their assumptions. We do the opposite: we map your real workflows, then engineer software that fits them exactly. From internal ERP and CRM systems to multi-tenant SaaS platforms and customer portals, every build is bespoke, owned by you, and designed to scale with the business behind it.',
    included: [
      {
        title: 'ERP & Internal Systems',
        body: 'Operations, inventory, finance and HR tools unified into one system your team actually wants to use.',
      },
      {
        title: 'CRM & Customer Portals',
        body: 'Pipelines, client dashboards and self-serve portals tailored to your sales and support motion.',
      },
      {
        title: 'SaaS Platforms',
        body: 'Multi-tenant products with billing, roles, analytics and everything required to sell software.',
      },
      {
        title: 'Enterprise Web Apps',
        body: 'Complex line-of-business applications that replace spreadsheets and manual process.',
      },
      {
        title: 'Workflow Automation',
        body: 'Approvals, notifications and data flows automated end-to-end across your stack.',
      },
      {
        title: 'Data & Reporting',
        body: 'Live dashboards and reporting layers that turn scattered data into decisions.',
      },
    ],
    steps: [
      { n: '01', title: 'Discovery & Requirements', body: 'We map your workflows, pain points and existing systems before a line of code is written.' },
      { n: '02', title: 'Architecture & Scope', body: 'A clear technical blueprint, fixed scope and milestone plan aligned to your goals.' },
      { n: '03', title: 'Iterative Build', body: 'Focused sprints with working software and demos every step — never static mockups.' },
      { n: '04', title: 'QA & Hardening', body: 'Functional, performance and security testing before anything reaches production.' },
      { n: '05', title: 'Launch & Handover', body: 'Deployment, documentation and team onboarding. You own the code, fully.' },
    ],
    stack: [
      { group: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind'] },
      { group: 'Backend', items: ['Node.js', 'Python', 'PostgreSQL', 'Redis'] },
      { group: 'Infra', items: ['AWS', 'Docker', 'Vercel', 'CI/CD'] },
    ],
    useCases: [
      {
        title: 'Replaced 6 spreadsheets with one ERP',
        body: 'A logistics operator ran scheduling, inventory and billing across disconnected sheets. We unified it into a single system — manual data entry dropped to near zero.',
      },
      {
        title: 'Custom CRM for a non-standard sales motion',
        body: 'Generic CRMs could not model a multi-stage, multi-party deal flow. A bespoke pipeline matched the real process and cut admin time by ~40%.',
      },
      {
        title: 'SaaS MVP to paying customers',
        body: 'A founder needed a multi-tenant platform with billing and roles. We shipped a production MVP that onboarded its first paying users within weeks.',
      },
    ],
    faqs: [
      {
        q: 'How is custom software better than off-the-shelf tools?',
        a: 'Off-the-shelf tools cover the average case and force workarounds for everything specific to you. Custom software fits your exact process, removes manual steps, and has no per-seat lock-in. You own it outright and can extend it whenever the business changes.',
      },
      {
        q: 'How long does a custom build take?',
        a: 'We scope tightly and build iteratively, so you see working software early. A focused internal tool can land in weeks; a full SaaS platform takes longer. You get a clear milestone timeline before we start.',
      },
      {
        q: 'Do we own the code?',
        a: 'Yes — completely. On handover you receive the full codebase, documentation and infrastructure. There is no lock-in and no dependency on us to keep running.',
      },
      {
        q: 'Can you work with our existing systems?',
        a: 'Absolutely. Most builds integrate with tools you already use — payment providers, CRMs, ERPs and internal databases. We design around your current stack rather than replacing everything at once.',
      },
    ],
  },

  'cto-as-a-service': {
    promise: 'Senior technical leadership — without a full-time CTO salary.',
    overview:
      'Most growing companies hit a point where decisions about architecture, hiring and roadmap outpace in-house expertise. We embed as your fractional CTO: setting technical strategy, choosing the right stack, designing for scale, and steering your engineers — so you ship the right things in the right order and avoid the expensive mistakes that stall growth.',
    included: [
      { title: 'Technical Strategy', body: 'A roadmap that ties engineering decisions directly to business goals and budget.' },
      { title: 'Architecture Review', body: 'Audit of your current systems with a clear plan to scale, harden and simplify.' },
      { title: 'Stack Selection', body: 'Pragmatic technology choices — proven tools over hype, fit over fashion.' },
      { title: 'Team Oversight', body: 'Hands-on guidance for your developers: code standards, reviews and direction.' },
      { title: 'Hiring & Vetting', body: 'Help defining roles, screening candidates and building the right engineering team.' },
      { title: 'Vendor & Cost Control', body: 'Rein in cloud spend, tooling sprawl and risky vendor lock-in.' },
    ],
    steps: [
      { n: '01', title: 'Audit & Assessment', body: 'We review your systems, team, roadmap and pain points to find what is actually blocking you.' },
      { n: '02', title: 'Strategy & Roadmap', body: 'A prioritised technical plan tied to business outcomes — what to build, fix and hire for.' },
      { n: '03', title: 'Embed & Lead', body: 'We work alongside your team, setting standards and steering day-to-day decisions.' },
      { n: '04', title: 'Scale & Optimise', body: 'Architecture, performance and cost tuned as you grow; risks removed before they bite.' },
      { n: '05', title: 'Handover & Continuity', body: 'Documentation and a strengthened team so progress holds with or without us.' },
    ],
    stack: [
      { group: 'Cloud', items: ['AWS', 'GCP', 'Azure', 'Cloudflare'] },
      { group: 'Practices', items: ['CI/CD', 'IaC', 'Observability', 'Security'] },
      { group: 'Delivery', items: ['Agile', 'Roadmapping', 'Code Review', 'Mentoring'] },
    ],
    useCases: [
      { title: 'Untangled a stalling architecture', body: 'A scaling startup kept hitting outages. An architecture overhaul and clear standards cut incidents sharply and unblocked the roadmap.' },
      { title: 'Built the first real eng team', body: 'A founder-led product needed structure. We defined roles, vetted hires and set process — turning solo code into a functioning team.' },
      { title: 'Cut cloud spend without losing speed', body: 'Runaway infrastructure costs were eating margin. A focused review reduced monthly spend materially while keeping performance.' },
    ],
    faqs: [
      { q: 'What is a fractional CTO?', a: 'A senior technology leader who works with you part-time — setting strategy, guiding your team and making the calls a full-time CTO would, at a fraction of the cost and commitment.' },
      { q: 'How much of your time do we get?', a: 'It flexes to your stage — from a few days a month of strategic oversight to deep weekly involvement during a critical build or transition. We scope it to what you actually need.' },
      { q: 'Will you manage our existing developers?', a: 'Yes. We can lead your current engineers directly — setting standards, running reviews and giving them direction — or advise your team lead, depending on what fits.' },
      { q: 'What happens when the engagement ends?', a: 'You keep a documented strategy, cleaner architecture and a stronger team. The goal is to leave you more capable, not dependent on us.' },
    ],
  },

  'ai-automation': {
    promise: 'Put the repetitive work on autopilot — and let AI do the heavy lifting.',
    overview:
      'Your team spends hours on tasks software should handle: data entry, triage, follow-ups, lookups, reporting. We build AI assistants and automated workflows that take that work off their plate — answering customers, processing documents, routing leads and surfacing answers from your own knowledge — so people focus on what actually needs a human.',
    included: [
      { title: 'AI Sales Assistants', body: 'Qualify leads, book meetings and follow up automatically, around the clock.' },
      { title: 'Custom Chatbots', body: 'Support and FAQ bots trained on your business — not generic, off-the-shelf answers.' },
      { title: 'Workflow Automation', body: 'Connect your tools so data, approvals and notifications flow without manual steps.' },
      { title: 'Knowledge Bases (RAG)', body: 'Ask questions of your own docs and data and get accurate, sourced answers.' },
      { title: 'Document Processing', body: 'Extract, classify and route information from invoices, forms and emails.' },
      { title: 'Predictive Insights', body: 'Turn your data into forecasts, scoring and alerts that drive decisions.' },
    ],
    steps: [
      { n: '01', title: 'Find the Bottlenecks', body: 'We map where time leaks — the repetitive, manual tasks ripe for automation.' },
      { n: '02', title: 'Design the Workflow', body: 'A clear plan for what to automate, the guardrails, and where humans stay in the loop.' },
      { n: '03', title: 'Build & Train', body: 'We build the agents and automations, grounded in your data and tools.' },
      { n: '04', title: 'Test & Tune', body: 'Accuracy, edge cases and safety checked before anything touches real customers.' },
      { n: '05', title: 'Deploy & Monitor', body: 'Go live with monitoring and ongoing tuning as your needs evolve.' },
    ],
    stack: [
      { group: 'Models', items: ['Claude', 'GPT', 'Embeddings', 'Fine-tuning'] },
      { group: 'Retrieval', items: ['Pinecone', 'pgvector', 'RAG', 'LangChain'] },
      { group: 'Automation', items: ['Webhooks', 'Zapier', 'n8n', 'Custom APIs'] },
    ],
    useCases: [
      { title: 'Cut response time to seconds', body: 'A support team drowned in repetitive tickets. An AI assistant resolved the common cases instantly and escalated the rest with context.' },
      { title: 'Automated lead follow-up', body: 'Leads went cold while reps were busy. An AI SDR qualified and followed up 24/7, lifting booked meetings without extra headcount.' },
      { title: 'Answers from scattered docs', body: 'Staff wasted time hunting through wikis and PDFs. A RAG knowledge base gave instant, sourced answers from internal content.' },
    ],
    faqs: [
      { q: 'What is AI automation, in plain terms?', a: 'Using AI to handle work that normally needs a person — answering questions, processing documents, following up, making routine decisions — so your team is freed for higher-value work.' },
      { q: 'Will the AI give wrong or made-up answers?', a: 'We ground assistants in your own data (retrieval) and add guardrails, testing and human-in-the-loop checks for sensitive steps, so answers stay accurate and on-brand.' },
      { q: 'Does this replace our staff?', a: 'No — it removes the drudge work. People stay for judgement, relationships and the cases AI should not handle alone. Teams get more done, not smaller.' },
      { q: 'Which tasks are worth automating first?', a: 'High-volume, repetitive, rules-based work with clear inputs — support triage, data entry, follow-ups, reporting. We help you pick the highest-ROI starting point.' },
    ],
  },

  'web-development': {
    promise: 'Fast, polished web experiences that convert — not just look good.',
    overview:
      'Your website is often the first real impression — and frequently the bottleneck. We build high-performance marketing sites, web apps, dashboards and storefronts that load fast, rank well and turn visitors into customers. Every build is responsive, accessible and engineered for speed, with a design that actually reflects your brand.',
    included: [
      { title: 'Marketing Sites', body: 'Conversion-focused sites that load fast, rank well and reflect your brand.' },
      { title: 'Web Applications', body: 'Interactive, app-like experiences with real functionality, not just pages.' },
      { title: 'Dashboards', body: 'Clear, data-rich admin and analytics interfaces your team will use daily.' },
      { title: 'E-Commerce', body: 'Storefronts and checkout flows built to sell and easy to manage.' },
      { title: 'Headless CMS', body: 'Edit content yourself with a flexible CMS wired to a fast front-end.' },
      { title: 'Performance & SEO', body: 'Core Web Vitals, accessibility and technical SEO baked in from the start.' },
    ],
    steps: [
      { n: '01', title: 'Discovery & Goals', body: 'We pin down your audience, goals and what success looks like before designing.' },
      { n: '02', title: 'Design & Prototype', body: 'On-brand design and an interactive prototype you can react to early.' },
      { n: '03', title: 'Build', body: 'Fast, responsive, accessible front-end engineering with clean, maintainable code.' },
      { n: '04', title: 'Optimise & Test', body: 'Speed, SEO, cross-device and accessibility checks before launch.' },
      { n: '05', title: 'Launch & Iterate', body: 'Go live, then refine based on real analytics and user behaviour.' },
    ],
    stack: [
      { group: 'Frontend', items: ['React', 'Next.js', 'Astro', 'Tailwind'] },
      { group: 'Content', items: ['Sanity', 'Contentful', 'Shopify', 'WordPress'] },
      { group: 'Hosting', items: ['Vercel', 'Netlify', 'Cloudflare', 'CDN'] },
    ],
    useCases: [
      { title: 'Site speed that lifted rankings', body: 'A slow, dated site bled traffic. A rebuilt, performance-first site improved Core Web Vitals and organic visibility.' },
      { title: 'Storefront that converts', body: 'A clunky checkout lost sales. A streamlined storefront and checkout flow raised conversion and cut cart abandonment.' },
      { title: 'Dashboard teams actually use', body: 'Reporting lived in spreadsheets. A clean, live dashboard put the numbers in one place and sped up decisions.' },
    ],
    faqs: [
      { q: 'How is this different from a website builder?', a: 'Builders trade speed and flexibility for convenience. We hand-build fast, custom sites with clean code, real SEO and design tailored to your brand — and no platform lock-in.' },
      { q: 'Can we update the content ourselves?', a: 'Yes. We wire in a headless CMS so your team can edit pages, posts and products without touching code or waiting on us.' },
      { q: 'Will it work well on mobile?', a: 'Every build is mobile-first, responsive and accessibility-checked, so it looks and performs well on any device.' },
      { q: 'Do you handle SEO and performance?', a: 'Yes — technical SEO, Core Web Vitals and accessibility are built in from the start, not bolted on later.' },
    ],
  },

  'system-integrations': {
    promise: 'Make your tools talk to each other — and kill the manual busywork.',
    overview:
      'Disconnected systems force your team to copy data between tools, reconcile mismatches and chase errors. We connect your stack — CRMs, ERPs, payment providers, internal databases and third-party APIs — so data flows automatically, stays consistent, and your software works as one. Plus clean migrations when it is time to move.',
    included: [
      { title: 'API Development', body: 'Robust, documented APIs to connect and extend your systems securely.' },
      { title: 'Third-Party Integrations', body: 'Wire in the SaaS tools you already rely on so data moves automatically.' },
      { title: 'Payment Gateways', body: 'Stripe, PayPal and more, integrated with billing, invoicing and reconciliation.' },
      { title: 'CRM / ERP Connectivity', body: 'Sync customers, orders and inventory across your core business systems.' },
      { title: 'Data Sync & Pipelines', body: 'Reliable, real-time or scheduled data flows that keep everything consistent.' },
      { title: 'Cloud Migrations', body: 'Move systems and data to the cloud safely, with minimal downtime.' },
    ],
    steps: [
      { n: '01', title: 'Map the Systems', body: 'We chart your tools, data and where the manual gaps and errors live.' },
      { n: '02', title: 'Integration Plan', body: 'A clear design for how systems connect, sync and stay reliable.' },
      { n: '03', title: 'Build the Connections', body: 'APIs, pipelines and integrations built with error handling and security in mind.' },
      { n: '04', title: 'Test & Validate', body: 'Data integrity, edge cases and failure modes verified before going live.' },
      { n: '05', title: 'Launch & Monitor', body: 'Cutover with monitoring and alerting so issues are caught early.' },
    ],
    stack: [
      { group: 'Integration', items: ['REST', 'GraphQL', 'Webhooks', 'Message Queues'] },
      { group: 'Data', items: ['PostgreSQL', 'ETL', 'Airbyte', 'Kafka'] },
      { group: 'Platforms', items: ['Stripe', 'Salesforce', 'HubSpot', 'NetSuite'] },
    ],
    useCases: [
      { title: 'Ended double data entry', body: 'Staff re-keyed orders between systems daily. A two-way sync removed the duplication and the errors that came with it.' },
      { title: 'Unified payments and billing', body: 'Payments and invoicing lived apart, causing reconciliation headaches. An integration tied them together and automated matching.' },
      { title: 'Migrated to the cloud cleanly', body: 'A legacy on-prem system limited growth. A staged migration moved data and workloads with minimal downtime.' },
    ],
    faqs: [
      { q: 'Can you connect tools that have no native integration?', a: 'Usually yes. If a tool exposes an API — or even just exports — we can build a custom integration or pipeline to bridge it with the rest of your stack.' },
      { q: 'Will integrating risk our data?', a: 'We build with validation, error handling and security throughout, and test data integrity thoroughly before cutover. Your data stays consistent and protected.' },
      { q: 'How do you handle a system migration?', a: 'In stages, with backups and validation at each step, so we move data and workloads with minimal downtime and a clear rollback if needed.' },
      { q: 'Do integrations need ongoing maintenance?', a: 'APIs and tools change over time, so we add monitoring and can maintain the connections — catching breakages before they affect operations.' },
    ],
  },

  'support-maintenance': {
    promise: 'Keep your software fast, secure and improving — long after launch.',
    overview:
      'Software is never truly finished. Without upkeep, performance drifts, security holes open and small issues snowball. We keep your systems healthy with proactive monitoring, security patching, performance tuning and steady feature work — backed by a dedicated point of contact who actually knows your product.',
    included: [
      { title: 'Performance Monitoring', body: 'Proactive monitoring and alerting that catches issues before users do.' },
      { title: 'Security Patches', body: 'Regular updates and dependency patching to close vulnerabilities fast.' },
      { title: 'Bug Fixes', body: 'Rapid diagnosis and resolution when something breaks, with clear SLAs.' },
      { title: 'Feature Upgrades', body: 'Steady improvements and new functionality as your needs grow.' },
      { title: 'Backups & Recovery', body: 'Reliable backups and tested recovery so you are protected from the worst.' },
      { title: 'Dedicated Account', body: 'A consistent point of contact who knows your system and your business.' },
    ],
    steps: [
      { n: '01', title: 'Onboarding & Audit', body: 'We learn your system, document it and assess health, risks and quick wins.' },
      { n: '02', title: 'Monitoring Setup', body: 'Alerting, backups and dashboards so problems surface early, not late.' },
      { n: '03', title: 'Proactive Upkeep', body: 'Ongoing patching, tuning and dependency updates to keep things solid.' },
      { n: '04', title: 'Respond & Resolve', body: 'Fast, SLA-backed fixes when issues arise — with clear communication.' },
      { n: '05', title: 'Improve & Report', body: 'Regular feature work plus reports on uptime, performance and what changed.' },
    ],
    stack: [
      { group: 'Monitoring', items: ['Sentry', 'Datadog', 'Uptime', 'Logging'] },
      { group: 'Reliability', items: ['Backups', 'CI/CD', 'Staging', 'Rollbacks'] },
      { group: 'Security', items: ['Patching', 'Audits', 'Dependencies', 'Access Control'] },
    ],
    useCases: [
      { title: 'Caught outages before customers', body: 'A product failed silently between releases. Monitoring and alerting now surface issues early — uptime climbed and surprises stopped.' },
      { title: 'Closed a security backlog', body: 'Years of unpatched dependencies left exposure. A structured patching cadence cleared the backlog and keeps it from returning.' },
      { title: 'Steady improvements, no firefighting', body: 'A team stuck reacting to breakage gained a stable cadence of fixes and features instead of constant emergencies.' },
    ],
    faqs: [
      { q: 'We did not build it with you — can you still maintain it?', a: 'Yes. We start with an audit to learn and document the system, then take over monitoring, patching and improvements regardless of who built it.' },
      { q: 'How fast do you respond to issues?', a: 'Response times are set by your plan and severity, with clear SLAs. Critical issues are prioritised, and monitoring often lets us act before you even notice.' },
      { q: 'What does a maintenance plan include?', a: 'Monitoring, security patching, backups, bug fixes and a set allocation of feature work each month — plus a dedicated contact and regular reporting.' },
      { q: 'Can we scale support up or down?', a: 'Yes. Plans flex with your needs — quieter months stay light, and we scale up around launches, growth or busy periods.' },
    ],
  },
}

export const industriesRow1 = [
  'Music & Entertainment',
  'Healthcare & Clinics',
  'Creative Studios',
  'D2C E-Commerce',
  'Streetwear & Fashion',
  'Logistics & Ops',
  'AI & Productivity Tools',
  'Independent Labels',
]

export const industriesRow2 = [
  'Enterprise SaaS',
  'FinTech',
  'Real Estate',
  'EdTech',
  'Supply Chain',
  'Marketplaces',
  'Internal Tools',
  'Customer Portals',
]

export const process = [
  { n: '01', title: 'Discovery & Requirements', body: 'Deep-dive into your business, goals, pain points, and existing systems.' },
  { n: '02', title: 'Strategy & Architecture', body: 'A tailored technology strategy and system architecture aligned to your objectives.' },
  { n: '03', title: 'Proposal & Alignment', body: 'A detailed proposal covering scope, timelines, deliverables, and investment.' },
  { n: '04', title: 'Design & Development', body: 'Building and iterating in focused sprints with regular demos and direct access.' },
  { n: '05', title: 'Quality Assurance & Testing', body: 'Rigorous functional, performance, security & user-acceptance testing pre-launch.' },
  { n: '06', title: 'Deployment & Handover', body: 'Full deployment, go-live coordination, documentation and team onboarding.' },
  { n: '07', title: 'Ongoing Partnership', body: 'Post-launch monitoring, improvements, and scaling as your business grows.' },
]

export const faqs = [
  {
    q: 'What does Two19 Labs actually do?',
    a: 'We build tailored software solutions from scratch — internal tools, automated workflows, CRMs, booking systems, e-commerce platforms, and AI-powered applications. Every solution is designed around your specific workflows, processes, and goals rather than forcing you into off-the-shelf tools.',
  },
  {
    q: 'How is your approach different?',
    a: 'We start with your problem, not our tech stack. Every solution is 100% bespoke with zero templates. We deliver working prototypes early, keep you in regular demos, and when the project is done, you own everything — no lock-in.',
  },
  {
    q: 'What is AI automation and how can it help?',
    a: 'AI automation uses artificial intelligence to handle repetitive tasks, make decisions, and streamline workflows that would otherwise need manual effort — automated data entry, smart scheduling, AI customer communication, document processing, and predictive analytics.',
  },
  {
    q: 'How long does it take to build custom software?',
    a: 'We deliver a working prototype quickly and most projects reach full production in a matter of weeks depending on complexity. We move fast because we scope tightly and build iteratively — you test real software early, not static mockups.',
  },
  {
    q: 'Do you work with clients outside your city?',
    a: 'Yes. Our process is fully remote-friendly with async communication, regular demos, and complete documentation. We deliver projects for clients across regions and time zones.',
  },
  {
    q: 'How much does custom software cost?',
    a: 'Every project is scoped individually based on complexity, timeline, and requirements. We offer transparent, fixed-price proposals after an initial discovery call — no hidden fees, no hourly billing surprises.',
  },
]

export const footerCols = [
  {
    heading: 'Navigate',
    links: [
      { label: 'Services', href: '/#services' },
      { label: 'How We Work', href: '/#process' },
      { label: 'Industries', href: '/#industries' },
      { label: 'FAQ', href: '/#faq' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About', href: '#' },
      { label: 'Portfolio', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Contact', href: '#' },
    ],
  },
]
