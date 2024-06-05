import type { Metadata } from 'next';

import { GeistMono } from 'geist/font/mono';
import { GeistSans } from 'geist/font/sans';

import { DESCRIPTION, DOMAIN, TITLE } from '@/lib/constants/site';
import { cn } from '@/lib/utils';

import DevMessage from '@/ui/components/others/DevMessage';
import { TailwindIndicator } from '@/ui/components/others/TailwindIndicator';
import { ThemeToggle } from '@/ui/components/others/ThemeToggle';
import { ThemeProvider } from '@/ui/components/providers/ThemeProvider';

import '@/ui/styles/globals.css';

/// ---------- || METADATA || ---------- ///

export const metadata: Metadata = {
  title: {
    default: `${TITLE} | ${DESCRIPTION}`,
    template: `%s | ${TITLE}`,
  },

  description: DESCRIPTION,

  metadataBase: new URL(DOMAIN),

  authors: [
    {
      name: TITLE,
      url: DOMAIN,
    },
  ],

  creator: TITLE,

  openGraph: {
    title: {
      default: `${TITLE} | ${DESCRIPTION}`,
      template: `%s | ${TITLE}`,
    },

    description: DESCRIPTION,

    url: DOMAIN,
    siteName: TITLE,

    locale: 'en_US',
    type: 'website',
  },

  alternates: {
    canonical: '/',
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

/// ---------- || TYPES & INTERFACES || ---------- ///

interface RootLayoutProps {
  children: React.ReactNode;
}

/// ---------- || ROOT LAYOUT || ---------- ///

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(GeistSans.variable, GeistMono.variable, 'antialiased')}
    >
      <head>
        <link rel="icon" href="/images/memoji/face.png" sizes="any" />
      </head>

      <body>
        <ThemeProvider>
          <div className="min-h-screen flex-1 overflow-y-auto">{children}</div>

          <ThemeToggle />

          <TailwindIndicator />
        </ThemeProvider>

        <DevMessage />
      </body>
    </html>
  );
}
