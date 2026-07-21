import type { AICapability } from '@/types';

export const aiCapabilities: AICapability[] = [
  {
    title: 'AI-Assisted Development',
    description:
      'Embed AI copilots into the daily engineering loop — scaffolding, refactoring, test generation and code review — to compress boilerplate and free senior time for architecture and edge cases.',
    tools: ['Cursor AI', 'GitHub Copilot', 'ChatGPT', 'Claude', 'Gemini'],
  },
  {
    title: 'Prompt Engineering',
    description:
      'Design reliable, reusable prompt systems and context strategies that turn LLMs into dependable engineering collaborators rather than one-off helpers.',
    tools: ['System prompts', 'Few-shot', 'Context design', 'Tool-calling'],
  },
  {
    title: 'AI Feature Integration',
    description:
      'Ship user-facing AI into mobile products — smart search, summarization, recommendations and conversational flows — behind clean, testable capability interfaces.',
    tools: ['LLM APIs', 'RAG', 'Streaming UX', 'Guardrails'],
  },
  {
    title: 'On-Device AI',
    description:
      'Run inference locally for privacy and latency using TensorFlow Lite and Core ML, with hybrid routing to the cloud only when heavier reasoning is required.',
    tools: ['TensorFlow Lite', 'Core ML', 'Quantization', 'Hybrid routing'],
  },
];

export const aiTools = [
  { name: 'Cursor AI', role: 'Primary AI IDE for architecture-aware coding' },
  { name: 'GitHub Copilot', role: 'Inline completion and refactoring' },
  { name: 'ChatGPT', role: 'Design exploration and problem solving' },
  { name: 'Claude', role: 'Long-context reasoning and code review' },
  { name: 'Gemini', role: 'Multimodal and research assistance' },
];

export const aiVision = [
  {
    title: 'Conversational mobile',
    detail:
      'Every enterprise app gains a proactive, context-aware copilot as a first-class layer.',
  },
  {
    title: 'Privacy-first intelligence',
    detail:
      'On-device inference makes powerful AI possible without shipping sensitive data.',
  },
  {
    title: 'AI-native architecture',
    detail:
      'Tool-calling and agents become standard components in the mobile architecture stack.',
  },
];
