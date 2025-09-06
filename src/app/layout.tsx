import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/sonner';
import './globals.css';

// Load Inter font for non-Apple devices
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Buyan Portfolio',
  description: 'Buyan Khurelbaatar portfolio',
  keywords: [
    'Buyan',
    'Portfolio',
    'Developer',
    'AI',
    'Interactive',
    'Back End Engineer',
    'Web Development',
    'Full Stack',
    'Next.js',
    'React',
  ],
  authors: [
    {
      name: 'Buyan',
      url: 'https://buyan.tech',
    },
  ],
  creator: 'Buyan',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://buyan.tech',
    title: 'Buyan Portfolio',
    description: 'Buyan Khurelbaatar portfolio',
    siteName: 'Buyan Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Buyan Portfolio',
    description: 'Buyan Khurelbaatar portfolio',
    creator: '@buyan_kh',
  },
  icons: {
    icon: [
      {
        url: '/favicon.svg',
        sizes: 'any',
      },
    ],
    shortcut: '/favicon.svg?v=2',
    apple: '/apple-touch-icon.svg?v=2',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <link rel="icon" href="/favicon.svg" sizes="any" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function() {
              try {
                // Clear theme from localStorage to ensure default theme is used
                localStorage.removeItem('theme');
                // Remove any class from the document element
                document.documentElement.classList.remove('dark');
              } catch (e) {}
            })()
          `,
          }}
        />
      </head>
      <body
        className={cn(
          'bg-background min-h-screen font-sans antialiased',
          inter.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          forcedTheme="light"
        >
          <main className="flex min-h-screen flex-col">{children}</main>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
