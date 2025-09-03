import { tool } from 'ai';
import { z } from 'zod';

export const getPresentation = tool({
  description:
    'This tool returns a concise personal introduction of Buyan Khurelbaatar. It is used to answer the question "Who are you?" or "Tell me about yourself"',
  parameters: z.object({}),
  execute: async () => {
    return {
      presentation:
        "I'm Buyan Khurelbaatar, a 22-year-old full-stack developer and AI enthusiast specializing in Mathematics and AI at SJSU. I've built 10+ deep learning research projects from scratch, won 5 hackathons out of 20+ participations, and specialize in AI/ML technologies including Transformers, RAG systems, and custom MCP tools. I'm passionate about building useful AI-powered applications that actually work.",
    };
  },
});
