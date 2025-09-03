'use client';

import { motion } from 'framer-motion';
import { CalendarDays, Code2, Globe } from 'lucide-react';
import { useRouter } from 'next/navigation';

const InternshipCard = () => {
  const openMail = () => {
    window.open('mailto:buyan.khurel@gmail.com', '_blank');
  };
  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-accent mx-auto mt-8 w-full max-w-4xl rounded-3xl px-6 py-8 font-sans sm:px-10 md:px-16 md:py-12"
    >
      {/* Header */}
      <div className="mb-6 flex flex-col items-center sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          {/* Avatar placeholder */}
          <div className="bg-muted h-16 w-16 overflow-hidden rounded-full shadow-md">
            <img
              src="/avatar-buyan.jpeg"
              alt="Buyan's avatar"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-foreground text-2xl font-semibold">
              Buyan Khurelbaatar
            </h2>
            <p className="text-muted-foreground text-sm">
              Intership Application
            </p>
          </div>
        </div>

        {/* Live badge */}
        <div className="mt-4 flex items-center gap-2 sm:mt-0">
          <span className="flex items-center gap-1 rounded-full border border-green-500 px-3 py-0.5 text-sm font-medium text-green-500">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
            </span>
            Live
          </span>
        </div>
      </div>

      {/* Internship Info */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="flex items-start gap-3">
          <CalendarDays className="mt-1 h-5 w-5 text-blue-500" />
          <div>
            <p className="text-foreground text-sm font-medium">Duration</p>
            <p className="text-muted-foreground text-sm">
              Looking for summer 2026 internships.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Globe className="mt-1 h-5 w-5 text-green-500" />
          <div>
            <p className="text-foreground text-sm font-medium">Location</p>
            <p className="text-muted-foreground text-sm">
              Preferably San Francisco, Bay area.
            </p>
          </div>
        </div>

        {/* Tech stack */}
        <div className="flex items-start gap-3 sm:col-span-2">
          <Code2 className="mt-1 h-5 w-5 text-purple-500" />
          <div className="w-full">
            <p className="text-foreground text-sm font-medium">Tech stack</p>
            <div className="text-muted-foreground grid grid-cols-1 gap-y-1 text-sm sm:grid-cols-2">
              <ul className="decoration-none list-disc pl-4">
                <li>Java, C++, Python, Next.js, TypeScript, SQL</li>
                <li>React, Flutter, Vercel AI SDK, Supabase, Prisma</li>
                <li>FastAPI, WebSockets, NoSQL, MongoDB</li>
                <li>Prompt engineering, fine-tuning, LLM, MCP, RAG</li>
              </ul>
              <ul className="list-disc pl-4">
                <li>Weaviate, Pinecone, vector DBs</li>
                <li>Hugging Face Transformers, Lighton, TensorFlow, PyTorch</li>
                <li>Tool routing, calling, RAG, AI agents</li>
                <li>Langchain, n8n, AI agent workflows</li>
                <li>
                  <a
                    href="/chat?query=What%20are%20your%20skills%3F%20Give%20me%20a%20list%20of%20your%20soft%20and%20hard%20skills."
                    className="cursor-pointer items-center text-blue-500 underline"
                  >
                    See more
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* What I bring */}
      <div className="mt-10">
        <p className="text-foreground mb-2 text-lg font-semibold">
          What I bring
        </p>
        <p className="text-foreground text-sm">
          Full stack developer, AI enthusiast, self researcher on Deep Learning.
          Built and designed 10+ deep learning researc projects from scratch
          (Transformers, MLA, etc...) <br /> 5x hackathon wins, total 20+
          hackathons. <br /> I ship fast, and love building useful things that
          actually work.
        </p>
      </div>

      {/* Goal */}
      <div className="mt-8">
        <p className="text-foreground mb-2 text-lg font-semibold">Goal</p>
        <p className="text-foreground text-sm">
          Join a bold, innovative team building AI-powered tools that matter. I
          want to improve fast, contribute hard, and leave a mark. I’m fast,
          flexible, and HUNGRYYYYY 🔥
        </p>
      </div>

      {/* Contact button */}
      <div className="mt-10 flex justify-center gap-4">
        <button
          onClick={openMail}
          className="cursor-pointer rounded-full bg-black px-6 py-3 font-semibold text-white transition-colors duration-300 hover:bg-zinc-800"
        >
          Contact me
        </button>

        <button
          onClick={() => {
            // Create a link element for resume download
            const link = document.createElement('a');
            link.href = '/Buyan_resume.pdf';
            link.download = 'Buyan_resume.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          }}
          className="cursor-pointer rounded-full border border-black bg-white px-6 py-3 font-semibold text-black transition-colors duration-300 hover:bg-gray-100"
        >
          Resume
        </button>
      </div>
    </motion.div>
  );
};

export default InternshipCard;
