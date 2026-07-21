import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import { PageHeader } from '@/components/shared/page-header';
import { AIShowcase } from '@/components/sections/ai-showcase';
import { CtaBand } from '@/components/sections/cta-band';
import { JsonLd } from '@/components/shared/json-ld';
import { breadcrumbJsonLd } from '@/lib/jsonld';

export const metadata: Metadata = buildMetadata({
  title: 'AI Expertise',
  description:
    'AI expertise of Athilingam Subramanian — AI-assisted development with Cursor, Copilot, ChatGPT, Claude and Gemini, prompt engineering, LLM integration and on-device AI with TensorFlow Lite and Core ML.',
  path: '/ai',
  keywords: [
    'AI-Assisted Development',
    'Prompt Engineering',
    'On-Device AI',
    'TensorFlow Lite',
    'Core ML',
  ],
});

export default function AIPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: 'AI', path: '/ai' }])} />
      <PageHeader
        eyebrow="AI"
        title="AI-native mobile — how I build and what I ship."
        description="AI is now part of both the engineering process and the product. From AI-assisted development to privacy-first on-device intelligence, this is where mobile is going."
      />
      <section className="mx-auto w-full max-w-[1200px] px-6 py-8">
        <AIShowcase />
      </section>
      <CtaBand />
    </>
  );
}
