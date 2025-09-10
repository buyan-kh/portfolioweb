import { tool } from 'ai';
import { z } from 'zod';

export const getInternship = tool({
  description:
    "Gives a summary of what kind of internship I'm looking for, plus my contact info and how to reach me. Use this tool when the user asks about my internship search or how to contact me for opportunities. dont say anything else after the contact info",
  parameters: z.object({}),
  execute: async () => {
    return `Here’s what I’m looking for 👇

- 📅 **Duration**: 2-3 month internship starting **Summer 2026**
- 🌍 **Location**: Preferably **San Francisco, Bay area** or anywhere in the **United States**
- 🧑‍💻 **Focus**: AI development, full-stack web apps, SaaS, agentic workflows
- 🛠️ **Stack**: C++, Java,Python, React/Next.js, SQL, NoSQL, TypeScript, PyTorch, Pydantic, FastAPI, WebSockets, MongoDB, RAG, MCP etc.
- 💼 **Visa**: I’m an international student based in Mountain View, I'm on **CPT F1** visa
- ✅ **What I bring**: Full stack developer, AI enthusiast, self researcher on Deep Learning. Built and designed 10+ deep learning researc projects from scratch (Transformers, MLA, etc...) 5x hackathon wins, total 20+ hackathons.
I ship fast, and love building useful things that actually work.
- 🔥 I move fast, learn faster, and I’m driven for big challenges

📬 **Contact me** via:
- Email: buyan.khurel@gmail.com
- LinkedIn: [linkedin.com/in/buyankh/](https://www.linkedin.com/in/buyankh/)
- GitHub: [github.com/buyan-kh](https://github.com/buyan-kh)

Let's build cool stuff together ✌️
    `;
  },
});
