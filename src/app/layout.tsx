import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { DESCRIPTION, DOMAIN, TITLE } from '@/lib/constants/site';
import { cn } from '@/lib/utils';

import { TailwindIndicator } from '@/ui/components/others/TailwindIndicator';
import { ThemeToggle } from '@/ui/components/others/ThemeToggle';
import { ThemeProvider } from '@/ui/components/providers/ThemeProvider';

import '@/ui/styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

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
    title: {
      default: TITLE,
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
    <html lang="en" suppressHydrationWarning>
      <head />

      <body className={cn(inter.className, 'antialiased')}>
        <ThemeProvider>
          <div className="min-h-screen flex-1 overflow-y-auto">{children}</div>

          <ThemeToggle />

          <TailwindIndicator />
        </ThemeProvider>
      </body>
    </html>
  );
}
