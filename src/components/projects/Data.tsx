import Image from 'next/image';
import { Image as Img } from 'lucide-react';
import { ChevronRight, Link } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { url } from 'inspector';

// Enhanced project content array with all projects
const PROJECT_CONTENT = [
  {
    title: 'Synto',
    description:
      'Synto is an AI-powered interface that transforms complex blockchain interactions into simple, natural language commands. Whether you want to send tokens, stake assets, swap coins, or even create NFTs or liquidity pools, just tell Synto what to do — no manual wallet interactions, no technical jargon. One of my biggest projects yet',
    techStack: [
      'Next.js',
      'TailwindCSS',
      'Web3.js',
      'shadcn-ui',
      'TypeScript',
      'Phantom Wallet',
      'OpenAI API',
      'Vercel AI SDK',
      'Solana Agent kit',
      'Neon',
      'Prisma',
    ],
    date: '2025',
    links: [
      {
        name: 'website',
        url: 'https://synto.fun',
      },
      {
        name: 'Launch Video',
        url: 'https://www.youtube.com/watch?v=4QUE2KgKDUw',
      },
      {
        name: 'X',
        url: 'https://x.com/chainSynto',
      },
      {
        name: 'Technical Video',
        url: 'https://www.youtube.com/watch?v=1CjBLKPUwtA&feature=youtu.be',
      },
      {
        name: 'Pitch Deck',
        url: 'https://drive.google.com/file/d/1B3m44mEgv81rJHfjNfTKi147yX4raQed/view?usp=sharing',
      },
      {
        name: 'Usage tutorial',
        url: 'https://www.youtube.com/watch?v=PRu1cfvT2bA',
      },
    ],
    images: [
      {
        src: '/synto1.png',
        alt: 'Synto landing page',
      },
      {
        src: '/synto2.png',
        alt: 'Synto chat interface',
      },
      {
        src: '/synto3.png',
        alt: 'Synto chat interface',
      },
      {
        src: '/synto4.png',
        alt: 'Synto chat interface',
      },
      {
        src: '/synto5.png',
        alt: 'Synto chat interface',
      },
      {
        src: '/synto6.png',
        alt: 'Synto chat interface',
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
        url: 'https://buyan.tech/teelcode',
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
        url: '#',
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
    title: 'Fitgear',
    description:
      'Won the Gotta Go Hack IA by building Fitgear, a virtual voice seller accessible by QR code to improve the ratio between customers and sellers. Created an AI pipeline with API calls and a RAG system for natural language interactions.',
    techStack: ['Next.js', 'TailwindCSS', 'OpenAI API', 'Langchain'],
    date: '2024',
    links: [
      {
        name: 'Linkedin',
        url: 'https://www.linkedin.com/posts/raphael-giraud-60939519a_hackathon-innovation-sporttech-activity-7210399263774674946-qSXq?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAC6vwikBVSEkS7XWktWS7y6GR3GHwAlKslc',
      },
    ],
    images: [
      {
        src: '/fitgear2.png',
        alt: 'Fitgear chatbot',
      },
      {
        src: '/fitgear1.png',
        alt: 'Fitgear landing page',
      },
    ],
  },
  {
    title: 'Datai',
    description:
      "DATAI is an AI-powered agent that lets non-technical users query a database using natural language without writing SQL. Built using Next.js, TailwindCSS, shadcn-ui, and Anthropic's Claude API, this project focuses on simplicity, speed, and user-friendly design.",
    techStack: [
      'Next.js',
      'TailwindCSS',
      'shadcn-ui',
      'Claude API',
      'TypeScript',
    ],
    date: '2024',
    links: [
      {
        name: 'GitHub',
        url: 'https://github.com/toukoum/datai',
      },
      {
        name: 'Youtube Video Demo',
        url: 'https://youtu.be/iE0RXjdbQsw',
      },
    ],
    images: [
      {
        src: '/datai1.png',
        alt: 'Datai landing page',
      },
      {
        src: '/datai2.png',
        alt: 'Datai chatbot',
      },
      {
        src: '/datai3.png',
        alt: 'Datai chatbot',
      },
      {
        src: '/datai4.png',
        alt: 'Datai chatbot',
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
    title: 'fashion mnist',
    description:
      "Fashion MNIST is a project that aims to create a simple fashion mnist. It's a great introduction to deep learning and machine learning. This was a very challenging project, but I learned a lot from it.",
    techStack: ['Pytorch', 'Python'],
    date: '2024',
    links: [
      {
        name: 'GitHub',
        url: '#',
      },
    ],
    images: [
      {
        src: '',
        alt: 'fashion mnist',
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
    category: 'Startup Project IDE',
    title: 'Cowabunga',
    src: '/syntopreview.png',
    content: <ProjectContent project={{ title: 'Synto' }} />,
  },
  {
    category: 'Get good at Leetcode',
    title: 'TeelCode',
    src: '/ratepreview.png',
    content: <ProjectContent project={{ title: 'TeelCode' }} />,
  },
  {
    category: 'Study Tool',
    title: 'Cooking College',
    src: '/cooking.png',
    content: <ProjectContent project={{ title: 'Cooking College' }} />,
  },
  {
    category: 'Hackathon Winner',
    title: 'Find Kind',
    src: '/fitgearpreview.png',
    content: <ProjectContent project={{ title: 'Fitgear' }} />,
  },
  {
    category: 'DL from scrach projects',
    title: 'Transformers from scratch',
    src: '/transformers.png',
    content: <ProjectContent project={{ title: 'Transformers' }} />,
  },
  {
    category: 'Clarity, AI timeblock',
    title: '',
    src: '/claritypreview.png',
    content: <ProjectContent project={{ title: 'Datai' }} />,
  },
  {
    category: '42 Project',
    title: 'Fashion MNIST',
    src: '/minishellpreview.png',
    content: <ProjectContent project={{ title: 'fashion mnist' }} />,
  },
  {
    category: 'Projects',
    title: 'Clueless',
    src: '/clueless1.png',
    content: <ProjectContent project={{ title: 'Clueless' }} />,
  },
  {
    category: 'Hackathon project',
    title: 'Threat Tracker',
    src: '/threatracker.png',
    content: <ProjectContent project={{ title: 'Threat Tracker' }} />,
  },
];
