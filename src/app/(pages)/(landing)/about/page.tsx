import type { Metadata } from 'next';

import { DESCRIPTION } from '@/lib/constants/site';

/// ---------- || METADATA || ---------- ///

export const metadata: Metadata = {
  title: 'About',

  description: DESCRIPTION,
};

/// ---------- || ABOUT PAGE || ---------- ///

export default function AboutPage() {
  return <h2 className="text-2xl font-semibold">About Page</h2>;
}
