import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { DESCRIPTION, DOMAIN, TITLE } from '@/lib/constants/site';

import { TailwindIndicator } from '@/ui/components/others/TailwindIndicator';
import { ThemeToggle } from '@/ui/components/others/ThemeToggle';
import { ThemeProvider } from '@/ui/components/providers/ThemeProvider';

import '@/ui/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

/// ---------- || METADATA || ---------- ///

export const metadata: Metadata = {
  title: {
    default: TITLE,
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
    title: TITLE,
    description: DESCRIPTION,

    url: DOMAIN,
    siteName: TITLE,

    locale: 'en_US',
    type: 'website',
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
    <html lang="en" suppressHydrationWarning>
      <head />

      <body className={inter.className}>
        <ThemeProvider>
          {children}

          <ThemeToggle />

          <TailwindIndicator />
        </ThemeProvider>
      </body>
    </html>
  );
}
