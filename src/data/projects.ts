import type { Project } from '@/types';

export const projects: Project[] = [
  {
    slug: 'insurance-agent-management-platform',
    title: 'Insurance Agent Management Platform',
    tagline: 'Enterprise CRM & agent enablement suite for iOS and Android.',
    category: 'Enterprise',
    status: 'flagship',
    year: '2025',
    company: 'Infinijith Apps & Technologies',
    cover: 'insurance',
    accent: '#2563EB',
    overview:
      'A ground-up, enterprise-grade mobile platform that equips insurance agents with a complete CRM, lead pipeline, quoting engine and analytics — architected on a scalable clean-architecture foundation for iOS and Android.',
    problem:
      'Insurance agents worked across fragmented tools with no unified view of leads, appointments, quotes or performance. Manual workflows slowed conversion and made compliance and reporting error-prone.',
    solution:
      'A single cross-platform application unifying agent operations end to end — CRM dashboards, lead lifecycle management, appointment scheduling, quick-quote generation, loans & advances, and live analytics — backed by secure, synchronized REST APIs and resilient offline-aware state management.',
    architecture: [
      'Clean Architecture with clear domain / data / presentation separation',
      'MVVM presentation layer with unidirectional data flow',
      'Repository pattern abstracting REST + local cache sources',
      'Centralized API layer with auth, validation, caching and error handling',
      'Live data synchronization with pull-to-refresh and optimistic updates',
    ],
    techStack: [
      'React Native',
      'TypeScript',
      'Redux Toolkit',
      'RTK Query',
      'REST APIs',
      'Secure Auth',
      'iOS',
      'Android',
    ],
    challenges: [
      {
        title: 'Complex enterprise data models',
        detail:
          'Modeled interdependent entities (agents, leads, customers, quotes, loans) with normalized state and predictable cache invalidation.',
      },
      {
        title: 'Responsive UI across device classes',
        detail:
          'Designed adaptive layouts supporting phones and tablets across both platforms without compromising density or accessibility.',
      },
      {
        title: 'Reliable synchronization',
        detail:
          'Built request validation, caching and conflict-aware sync so agents always see fresh, trustworthy data in the field.',
      },
    ],
    features: [
      'Agent Dashboard',
      'CRM Dashboard',
      'Lead Management',
      'Customer Profile Management',
      'Appointment Scheduler',
      'Follow-up Management',
      'Quick Quote Generation',
      'Loans & Advances',
      'Dynamic Dashboard Analytics',
      'Date-Range Filtering',
      'Common Search Filters',
      'Pull-to-refresh & Live Sync',
    ],
    impact: [
      { label: 'Business modules', value: '12+' },
      { label: 'Platforms', value: 'iOS + Android' },
      { label: 'Delivery lift', value: 'AI-accelerated' },
    ],
    lessons: [
      'Clean architecture pays off fastest on enterprise apps where modules multiply quickly.',
      'A well-designed API layer is the single biggest lever for perceived performance.',
      'AI-assisted development compresses boilerplate so senior time goes to architecture and edge cases.',
    ],
    screens: [
      {
        title: 'Agent Dashboard',
        caption: 'At-a-glance KPIs, pipeline and next actions.',
      },
      { title: 'Lead Pipeline', caption: 'Kanban-style lead lifecycle with filters.' },
      { title: 'Quick Quote', caption: 'Guided quote generation in seconds.' },
      { title: 'Analytics', caption: 'Dynamic, date-range performance dashboards.' },
    ],
  },
  {
    slug: 'agritech-platform',
    title: 'AgriTech Digital Transformation Platform',
    tagline: 'Offline-first field apps digitizing agriculture at global scale.',
    category: 'AgriTech',
    status: 'shipped',
    year: '2015–2025',
    company: 'SourceTrace Systems',
    cover: 'agritech',
    accent: '#22C55E',
    overview:
      'A decade-long body of work delivering 50+ field applications that digitized farmer registration, crop procurement, inspection and certification for 30+ clients across 15+ countries and 4 continents.',
    problem:
      'Agricultural value chains in emerging markets ran on paper, in low-connectivity regions, with no reliable data on farmers, plots, or produce provenance.',
    solution:
      'A suite of offline-first mobile apps with geo-mapping and farm plotting, resilient local storage, and background sync — capturing farmer and farm data at the source and streaming it into enterprise reporting once connectivity returned.',
    architecture: [
      'Offline-first data layer with local SQLite persistence',
      'Deferred background synchronization and conflict resolution',
      'Geo-mapping and polygon farm-plotting modules',
      'Modular feature architecture reused across 50+ client apps',
      'Role-based workflows for farmers, field agents and inspectors',
    ],
    techStack: [
      'React Native',
      'Android',
      'Java',
      'Kotlin',
      'Cordova',
      'SQLite',
      'Geo-Mapping',
      'REST APIs',
    ],
    challenges: [
      {
        title: 'Connectivity-hostile environments',
        detail:
          'Designed for rural areas with intermittent or no network — offline capture had to be lossless and sync had to be idempotent.',
      },
      {
        title: 'Localization at global scale',
        detail:
          'Adapted apps to diverse geographies, languages and crop workflows across 4 continents.',
      },
      {
        title: 'Accurate geospatial capture',
        detail:
          'Built farm plotting and geo-mapping precise enough for procurement and certification decisions.',
      },
    ],
    features: [
      'Farmer & Farm Registration',
      'Crop Sowing, Harvesting & Procurement',
      'Distribution & Farm Inspection',
      'Certification & Training Management',
      'Farm-to-Fork Traceability',
      'Offline Storage & Farm Plotting',
    ],
    impact: [
      { label: 'Applications', value: '50+' },
      { label: 'Clients', value: '30+' },
      { label: 'Countries', value: '15+' },
    ],
    lessons: [
      'Offline-first is an architecture decision, not a feature — it shapes every layer.',
      'Reusable feature modules are what make 50+ apps sustainable for one team.',
      'Data accuracy at the point of capture is worth more than any downstream cleanup.',
    ],
    screens: [
      {
        title: 'Farmer Registration',
        caption: 'Capture identity and household data offline.',
      },
      { title: 'Farm Plotting', caption: 'GPS polygon mapping of plots and boundaries.' },
      { title: 'Procurement', caption: 'Crop intake and weighing in the field.' },
      { title: 'Traceability', caption: 'Farm-to-fork provenance timeline.' },
    ],
  },
  {
    slug: 'farm-to-fork-traceability',
    title: 'Farm-to-Fork Traceability',
    tagline: 'Transparent supply-chain provenance from field to consumer.',
    category: 'AgriTech',
    status: 'shipped',
    year: '2020–2025',
    company: 'SourceTrace Systems',
    cover: 'traceability',
    accent: '#06B6D4',
    overview:
      'A traceability system that stitches every touchpoint — sowing, harvest, procurement, inspection, certification — into a single verifiable provenance record for each batch of produce.',
    problem:
      'Buyers and regulators could not verify where produce came from or how it was handled, undermining trust, pricing and compliance.',
    solution:
      'An event-sourced traceability layer that links farmer, farm plot and every handling event into an immutable chain, surfaced as a consumer-facing provenance timeline.',
    architecture: [
      'Event-based capture at each supply-chain stage',
      'Batch and lot identity linking plot → procurement → distribution',
      'Offline-tolerant event queue with guaranteed delivery',
      'Certification and inspection records bound to each batch',
    ],
    techStack: ['React Native', 'SQLite', 'REST APIs', 'Geo-Mapping', 'Node.js'],
    challenges: [
      {
        title: 'Chain integrity',
        detail:
          'Ensured no event could be lost or reordered across offline captures and retries.',
      },
      {
        title: 'Cross-actor data',
        detail:
          'Reconciled data produced by farmers, agents and inspectors into one coherent record.',
      },
    ],
    features: [
      'Batch & Lot Tracking',
      'Provenance Timeline',
      'Inspection & Certification Binding',
      'Consumer-facing Traceability View',
    ],
    impact: [
      { label: 'Supply chain', value: 'End-to-end' },
      { label: 'Transparency', value: 'Verifiable' },
      { label: 'Compliance', value: 'Audit-ready' },
    ],
    lessons: [
      'Provenance is only as strong as its weakest offline capture.',
      'Immutable event logs simplify reasoning about complex multi-actor workflows.',
    ],
    screens: [
      { title: 'Provenance Timeline', caption: 'Every event from field to fork.' },
      { title: 'Batch Detail', caption: 'Certifications and inspections per lot.' },
    ],
  },
  {
    slug: 'college-erp',
    title: 'College ERP Mobile Platform',
    tagline: 'Institutional data management for students and faculty.',
    category: 'ERP',
    status: 'shipped',
    year: '2025',
    company: 'SKITECH',
    cover: 'erp',
    accent: '#7C3AED',
    overview:
      'A mobile ERP that brings student and faculty data management, tracking and reporting into a single app — improving institutional efficiency and transparency.',
    problem:
      'Institutional workflows were spread across disconnected systems, making student and faculty data hard to track and report on.',
    solution:
      'A mobile-first ERP delivering seamless data management and reporting for students and faculty, with role-based access and real-time dashboards.',
    architecture: [
      'Role-based access for students, faculty and admins',
      'Modular reporting engine with real-time dashboards',
      'MVVM presentation with repository-backed data access',
    ],
    techStack: ['React Native', 'TypeScript', 'Node.js', 'PostgreSQL', 'REST APIs'],
    challenges: [
      {
        title: 'Role complexity',
        detail:
          'Modeled distinct capabilities and data visibility for each institutional role.',
      },
      {
        title: 'Reporting fidelity',
        detail:
          'Delivered accurate, real-time reporting from heterogeneous data sources.',
      },
    ],
    features: [
      'Student Data Management',
      'Faculty Portal',
      'Attendance & Reporting',
      'Role-based Dashboards',
    ],
    impact: [
      { label: 'Efficiency', value: 'Improved' },
      { label: 'Users', value: 'Students + faculty' },
      { label: 'Reporting', value: 'Real-time' },
    ],
    lessons: [
      'ERP UX lives or dies on role-appropriate defaults.',
      'Mobile-first reporting drives adoption far beyond desktop equivalents.',
    ],
    screens: [
      { title: 'Student Dashboard', caption: 'Attendance, grades and notices.' },
      { title: 'Faculty Portal', caption: 'Class management and reporting.' },
    ],
  },
  {
    slug: 'dairy-ecommerce',
    title: 'Dairy E-Commerce & Subscription Platform',
    tagline: 'Farm-fresh delivery with subscription and one-time models.',
    category: 'E-Commerce',
    status: 'shipped',
    year: '2025',
    company: 'SKITECH',
    cover: 'dairy',
    accent: '#0EA5E9',
    overview:
      'A dairy and farm-fresh delivery platform serving Coimbatore — supporting 20+ stores, a delivery network, and both subscription and one-time purchase models.',
    problem:
      'Local dairy and farm-fresh delivery lacked a unified digital platform for ordering, subscriptions, vendor management and last-mile logistics.',
    solution:
      'A commerce platform with dual customer models — daily subscriptions for regulars and one-time orders for casual buyers — plus vendor procurement and delivery-network operations.',
    architecture: [
      'Dual-model commerce engine (subscription + one-time)',
      'Vendor procurement and inventory workflows',
      'Delivery-network routing and store operations',
    ],
    techStack: [
      'React Native',
      'Node.js',
      'PostgreSQL',
      'Firebase',
      'Subscription Billing',
    ],
    challenges: [
      {
        title: 'Recurring logistics',
        detail:
          'Coordinated daily subscription deliveries across 20+ stores and a delivery network.',
      },
      {
        title: 'Dual purchase models',
        detail:
          'Unified subscription and one-time flows without fragmenting the checkout UX.',
      },
    ],
    features: [
      'Subscription Management',
      'One-time Purchase',
      'Vendor Management',
      'Delivery Network Operations',
      'Store Operations',
    ],
    impact: [
      { label: 'Stores', value: '20+' },
      { label: 'Models', value: 'Subscription + one-time' },
      { label: 'Region', value: 'Coimbatore' },
    ],
    lessons: [
      'Subscription commerce is a logistics problem wearing an app.',
      'Vendor and delivery operations deserve first-class product surfaces, not afterthoughts.',
    ],
    screens: [
      { title: 'Subscription Plan', caption: 'Set daily or weekly delivery cadence.' },
      { title: 'Store Ops', caption: 'Inventory and vendor procurement.' },
    ],
  },
  {
    slug: 'ai-mobile-assistant',
    title: 'AI Mobile Assistant (Future Vision)',
    tagline: 'On-device, privacy-first AI copilot for enterprise mobility.',
    category: 'AI',
    status: 'concept',
    year: '2026+',
    company: 'Independent R&D',
    cover: 'ai',
    accent: '#06B6D4',
    overview:
      'A forward-looking concept for an on-device AI assistant that brings LLM reasoning, contextual automation and voice interaction to enterprise mobile apps — private by default via on-device inference.',
    problem:
      'Enterprise mobile users still perform repetitive, context-heavy tasks manually, and cloud-only AI raises latency, cost and data-privacy concerns.',
    solution:
      'A hybrid AI layer combining on-device inference (TensorFlow Lite / Core ML) for private, low-latency tasks with cloud LLMs for heavy reasoning — orchestrated behind a clean, testable capability interface.',
    architecture: [
      'On-device model runtime (TensorFlow Lite / Core ML)',
      'Hybrid routing between on-device and cloud LLMs',
      'Tool-calling layer for app actions and workflows',
      'Privacy-preserving context store on device',
    ],
    techStack: [
      'React Native',
      'TensorFlow Lite',
      'Core ML',
      'LLM APIs',
      'Prompt Engineering',
      'On-Device AI',
    ],
    challenges: [
      {
        title: 'On-device performance',
        detail: 'Balancing model size, latency and battery for real-time assistance.',
      },
      {
        title: 'Privacy by design',
        detail:
          'Keeping sensitive context on device while still enabling powerful reasoning.',
      },
    ],
    features: [
      'On-device inference',
      'Contextual automation',
      'Voice interaction',
      'Tool-calling & app actions',
      'Hybrid cloud reasoning',
    ],
    impact: [
      { label: 'Latency', value: 'On-device' },
      { label: 'Privacy', value: 'Local-first' },
      { label: 'Vision', value: '2026+' },
    ],
    lessons: [
      'The next mobile UX layer is conversational and proactive.',
      'On-device AI turns privacy from a constraint into a feature.',
    ],
    screens: [
      { title: 'Assistant', caption: 'Conversational copilot inside the app.' },
      { title: 'Automations', caption: 'Context-aware suggested actions.' },
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
