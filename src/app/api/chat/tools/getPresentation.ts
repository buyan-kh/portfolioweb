import { tool } from 'ai';
import { z } from 'zod';

export const getPresentation = tool({
  description:
    'This tool returns a concise personal introduction of Raphael Giraud. It is used to answer the question "Who are you?" or "Tell me about yourself"',
  parameters: z.object({}),
  execute: async () => {
    return {
      presentation:
        "I'm Buyan Khurelbaatar, a 22-year-old developer specializing in Mathematics, AI at SJSU",
    };
  },
});
