import type { ArchitecturePattern } from '@/types';

export const architecturePatterns: ArchitecturePattern[] = [
  {
    slug: 'clean-architecture',
    title: 'Clean Architecture',
    subtitle: 'Domain-centric layering with strict dependency direction',
    description:
      'Every enterprise app is built with a clear separation between domain, data and presentation. Business rules live at the center and never depend on frameworks or UI, making the system testable, portable and resilient to change.',
    layers: [
      { name: 'Presentation', detail: 'Screens, components and MVVM view-models.' },
      { name: 'Domain', detail: 'Use-cases and entities — pure business logic.' },
      { name: 'Data', detail: 'Repositories, DTOs and mappers.' },
      { name: 'Infrastructure', detail: 'REST clients, local DB, device APIs.' },
    ],
    benefits: [
      'Framework-independent business logic',
      'High testability at every layer',
      'Predictable, low-risk change',
    ],
  },
  {
    slug: 'mvvm',
    title: 'MVVM Presentation',
    subtitle: 'Reactive view-models with unidirectional flow',
    description:
      'The presentation layer uses MVVM so UI state is derived, observable and testable. View-models expose immutable state and intent handlers; views stay dumb and declarative.',
    layers: [
      { name: 'View', detail: 'Declarative, stateless React Native components.' },
      { name: 'ViewModel', detail: 'Observable state + intent handlers.' },
      { name: 'Model', detail: 'Domain entities surfaced to the UI.' },
    ],
    benefits: ['Testable UI logic', 'Clear state ownership', 'Reusable view-models'],
  },
  {
    slug: 'repository-pattern',
    title: 'Repository Pattern',
    subtitle: 'A single source of truth abstracting data origin',
    description:
      'Repositories hide whether data comes from the network or local cache. The domain asks for data; the repository decides how to fetch, cache, reconcile and return it.',
    layers: [
      { name: 'Repository', detail: 'Coordinates remote + local sources.' },
      { name: 'Remote', detail: 'RTK Query / REST API layer.' },
      { name: 'Local', detail: 'SQLite / secure storage cache.' },
    ],
    benefits: ['Swappable data sources', 'Centralized caching', 'Offline-friendly'],
  },
  {
    slug: 'offline-first',
    title: 'Offline-First Sync',
    subtitle: 'Lossless capture and idempotent synchronization',
    description:
      'Field apps assume the network is optional. Data is captured locally first, queued, and synced with idempotent, conflict-aware operations when connectivity returns.',
    layers: [
      { name: 'Local Write', detail: 'Immediate persistence to SQLite.' },
      { name: 'Sync Queue', detail: 'Durable, ordered operation log.' },
      { name: 'Reconciliation', detail: 'Idempotent server sync + conflict rules.' },
    ],
    benefits: ['Works with zero connectivity', 'No data loss', 'Deterministic sync'],
  },
  {
    slug: 'state-management',
    title: 'State Management',
    subtitle: 'Redux Toolkit + RTK Query',
    description:
      'Predictable global state with Redux Toolkit; server state and caching handled by RTK Query. Normalized entities, memoized selectors and optimistic updates keep the UI fast and consistent.',
    layers: [
      { name: 'Store', detail: 'Redux Toolkit slices + middleware.' },
      { name: 'Server State', detail: 'RTK Query endpoints, caching, invalidation.' },
      { name: 'Selectors', detail: 'Memoized derived state.' },
    ],
    benefits: ['Single source of truth', 'Automatic caching', 'Optimistic UX'],
  },
  {
    slug: 'ci-cd',
    title: 'CI/CD & Release Pipeline',
    subtitle: 'From commit to store, automated',
    description:
      'A release pipeline that lints, type-checks, tests and builds signed artifacts, then ships to App Store and Play Store with staged rollouts and monitored releases.',
    layers: [
      { name: 'Integrate', detail: 'Lint, type-check, unit tests on every PR.' },
      { name: 'Build', detail: 'Signed iOS + Android artifacts.' },
      { name: 'Release', detail: 'Staged rollout to App Store / Play Store.' },
      { name: 'Monitor', detail: 'Crash and performance monitoring.' },
    ],
    benefits: ['Repeatable releases', 'Fast feedback', 'Lower release risk'],
  },
];

export const flowDiagrams = [
  {
    title: 'Authentication Flow',
    steps: [
      'App launch',
      'Token check (secure storage)',
      'Refresh or login',
      'Authenticated session',
      'Protected API access',
    ],
  },
  {
    title: 'Push Notification Flow',
    steps: [
      'Device registration',
      'Token to backend',
      'Server event trigger',
      'FCM / APNs dispatch',
      'In-app deep link',
    ],
  },
  {
    title: 'API Request Flow',
    steps: [
      'ViewModel intent',
      'Repository call',
      'RTK Query cache check',
      'REST request + validation',
      'Normalize → UI update',
    ],
  },
];
