import Image from 'next/image';
import { Image as Img } from 'lucide-react';
import { ChevronRight, Link } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { url } from 'inspector';

// Enhanced project content array with all projects
const PROJECT_CONTENT = [
  {
    title: 'Cowabunga',
    description:
      'Cowabunga is an open world 2D IDE that replaces traditional file trees with an infinite canvas where code is organized by meaning and relationships, not folder hierarchies. It combines a live, infinite canvas workspace with deep AI understanding to supercharge your development process',
    techStack: [''],
    date: '2025',
    links: [
      {
        name: 'website',
        url: 'https://www.linkedin.com/company/108113963/',
      },
      {
        name: 'Launch Video',
        url: 'https://www.linkedin.com/feed/update/urn:li:activity:7358759350032617473/',
      },
    ],
    images: [
      {
        src: '/cowabunga.png',
        alt: 'cowabunga  page',
      },
      {
        src: '/cowabunga2.png',
        alt: 'cowabunga',
      },
    ],
  },
  {
    title: 'TeelCode',
    description:
      'A personalized LeetCode learning platform that helps you improve your coding skills through ELO-ranked problems and spaced repetition.',
    techStack: ['TypeScript', 'React', 'TailwindCSS', 'Prisma', 'Supabase'],
    date: '2025',
    links: [
      {
        name: 'website',
        url: 'https://teelcode.buyan.tech',
      },
      {
        name: 'github',
        url: 'https://github.com/buyan-kh/teelcode',
      },
    ],
    images: [
      {
        src: '/rrate1.png',
        alt: 'Rrate landing page',
      },
      {
        src: '/rrate2.png',
        alt: 'Rrate comparison page',
      },
      {
        src: '/rrate3.png',
        alt: 'Rrate comparison page',
      },
    ],
  },
  {
    title: 'Cooking College',
    description:
      'Cooking College: AI-powered study tool, built on evidence-based learning techniques. Syllabus Processing - Upload your course syllabus (PDF/DOCX) and get an AI-generated study roadmap Custom Courses - Create and manage your own courses Progress Tracking - Monitor your learning journey with visual progress indicators',
    techStack: ['Next.js', 'React', 'FastAPI', 'MongoDB', 'TypeScript'],
    date: '2025',
    links: [
      {
        name: 'website',
        url: 'https://cooking.buyan.tech',
      },
      {
        name: 'github',
        url: 'https://github.com/buyan-kh/cooking_college',
      },
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/posts/activity-7315611203534258176-O8Za',
      },
      {
        name: 'Youtube Video',
        url: 'https://www.youtube.com/watch?v=-K4-ZRm3IHY&feature=youtu.be',
      },
    ],
    images: [
      {
        src: '/cooking.png',
        alt: 'cooking',
      },
      {
        src: '/cooking2.jpeg',
        alt: 'cooking',
      },
      {
        src: '/cooking3.jpeg',
        alt: 'cooking',
      },
      {
        src: '/cooking4.jpeg',
        alt: 'cooking team',
      },
    ],
  },
  {
    title: 'GoTN',
    description:
      'MCP server for breaking down prompts into micro prompts graph tree and traverses best path to reduce hallucination',
    techStack: [
      'Typescript',
      'Node.js',
      'Express',
      'Vector database',
      'MCP',
      'React',
    ],
    date: '2025',
    images: [
      {
        src: '/GoTN3.png',
        alt: 'gotn cursor mcp',
      },
      {
        src: '/GoTN2.png',
        alt: 'gotn graph tree',
      },
    ],
  },
  {
    title: 'Clarity',
    description: 'AI timeblock app. What would make today meaningful for you?',
    techStack: ['Next.js', 'Electron', 'MongoDB', 'TypeScript', 'React'],
    date: '2024',
    links: [
      {
        name: 'Website',
        url: 'https://clarity.buyan.tech',
      },
      {
        name: 'GitHub',
        url: 'https://github.com/buyan-kh/clarity',
      },
    ],
    images: [
      {
        src: '/clarity1.png',
        alt: 'Clarity landing page',
      },
      {
        src: '/clarity2.png',
        alt: 'Clarity ',
      },
      {
        src: '/clarity3.png',
        alt: 'Clarity ',
      },
    ],
  },
  {
    title: 'Transformers',
    description:
      "Transformers is a project that aims to create a simple transformers. It's a great introduction to deep learning and machine learning. This was a very challenging project, but I learned a lot from it.",
    techStack: ['Pytorch', 'Python'],
    date: '2053',
    links: [
      {
        name: 'GitHub',
        url: 'https://github.com/buyan-kh/deeplearning/tree/main/transformers%20from%20scratch',
      },
    ],
    images: [
      {
        src: '/transformers.png',
        alt: 'Transformers page',
      },
    ],
  },
  {
    title: 'TruthCircuit',
    description:
      "TruthCircuit is a grounded reasoning engine that creates a visual, auditable trail of AI decision-making. It's essentially a truth machine. It also features the Path Registry system, which allows users to discover, download, and install approved reasoning paths.",
    techStack: [''],
    date: '2025',
    links: [
      {
        name: 'Demo Video',
        url: 'https://x.com/buyan_kh/status/1963437118274802033',
      },
    ],
    images: [
      {
        src: '/truthcircuit.png',
        alt: 'truthcircuit ',
      },
      {
        src: '/truthcircuit2.png',
        alt: 'truthcircuit ',
      },
    ],
  },
  {
    title: 'Clueless',
    description: 'Keeping digital integrity and honesty',
    techStack: ['Javascript', 'Electron', 'Swift'],
    date: '2022',
    links: [
      {
        name: 'Demo Video',
        url: 'https://www.linkedin.com/feed/update/urn:li:activity:7343140015356420097/ ',
      },
      {
        name: 'GitHub',
        url: 'https://github.com/buyan-kh/cluelessx',
      },
    ],
    images: [
      {
        src: '/clueless1.png',
        alt: 'clueless landing page',
      },
    ],
  },
  {
    title: 'Threat Tracker',
    description:
      'Threat Tracker is an iOS app that provides real-time threat intelligence',
    techStack: ['React Native', 'Google Maps SDK', 'DeepGram', 'MongoDb'],
    date: '2024',
    links: [
      {
        name: 'GitHub',
        url: 'https://github.com/toukoum/portfolio',
      },
    ],
    images: [
      {
        src: '/threattracker.png',
        alt: 'threat tracker app',
      },
    ],
  },
];

// Define interface for project prop
interface ProjectProps {
  title: string;
  description?: string;
  techStack?: string[];
  date?: string;
  links?: { name: string; url: string }[];
  images?: { src: string; alt: string }[];
}

const ProjectContent = ({ project }: { project: ProjectProps }) => {
  // Find the matching project data
  const projectData = PROJECT_CONTENT.find((p) => p.title === project.title);

  if (!projectData) {
    return <div>Project details not available</div>;
  }

  return (
    <div className="space-y-10">
      {/* Header section with description */}
      <div className="rounded-3xl bg-[#F5F5F7] p-8 dark:bg-[#1D1D1F]">
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
            <span>{projectData.date}</span>
          </div>

          <p className="text-secondary-foreground font-sans text-base leading-relaxed md:text-lg">
            {projectData.description}
          </p>

          {/* Tech stack */}
          <div className="pt-4">
            <h3 className="mb-3 text-sm tracking-wide text-neutral-500 uppercase dark:text-neutral-400">
              Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {projectData.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="rounded-full bg-neutral-200 px-3 py-1 text-sm text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Links section */}
      {projectData.links && projectData.links.length > 0 && (
        <div className="mb-24">
          <div className="mb-4 flex items-center gap-2 px-6">
            <h3 className="text-sm tracking-wide text-neutral-500 dark:text-neutral-400">
              Links
            </h3>
            <Link className="text-muted-foreground w-4" />
          </div>
          <Separator className="my-4" />
          <div className="space-y-3">
            {projectData.links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-xl bg-[#F5F5F7] p-4 transition-colors hover:bg-[#E5E5E7] dark:bg-neutral-800 dark:hover:bg-neutral-700"
              >
                <span className="font-light capitalize">{link.name}</span>
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Images gallery */}
      {projectData.images && projectData.images.length > 0 && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-4">
            {projectData.images.map((image, index) => (
              <div
                key={index}
                className="relative aspect-video overflow-hidden rounded-2xl"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// Main data export with updated content
export const data = [
  {
    category: 'Passion Project IDE',
    title: 'Cowabunga',
    src: '/syntopreview.png',
    content: <ProjectContent project={{ title: 'Cowabunga' }} />,
  },
  {
    category: 'Get good at Leetcode',
    title: 'TeelCode',
    src: '/ratepreview.png',
    content: <ProjectContent project={{ title: 'TeelCode' }} />,
  },
  {
    category:
      'MCP server for breaking down prompts into micro prompts graph tree and traverses best path to reduce hallucination',
    title: 'GoTN',
    src: '/gotn_preview.jpg',
    content: <ProjectContent project={{ title: 'GoTN' }} />,
  },
  {
    category: 'MCP Server, marketplace for blackboxing LLMs',
    title: 'TruthCircuit',
    src: '/truthcircuit_pre.jpg',
    content: <ProjectContent project={{ title: 'TruthCircuit' }} />,
  },
  {
    category: 'Study Tool',
    title: 'Cooking College',
    src: '/cooking.png',
    content: <ProjectContent project={{ title: 'Cooking College' }} />,
  },
  {
    category: 'Clarity, AI timeblock',
    title: '',
    src: '/claritypreview.png',
    content: <ProjectContent project={{ title: 'Clarity' }} />,
  },
  {
    category: 'Projects',
    title: 'Clueless',
    src: '/clueless1.png',
    content: <ProjectContent project={{ title: 'Clueless' }} />,
  },
  {
    category: 'DL from scrach projects',
    title: 'Transformers from scratch',
    src: '/transformers.png',
    content: <ProjectContent project={{ title: 'Transformers' }} />,
  },
  {
    category: 'Hackathon project',
    title: 'Threat Tracker',
    src: '/threatracker.png',
    content: <ProjectContent project={{ title: 'Threat Tracker' }} />,
  },
];
