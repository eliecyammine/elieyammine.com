import type { Metadata } from 'next';

import { DESCRIPTION } from '@/lib/constants/site';

/// ---------- || METADATA || ---------- ///

export const metadata: Metadata = {
  title: 'Projects',

  description: DESCRIPTION,
};

/// ---------- || PROJECTS PAGE || ---------- ///

export default function ProjectsPage() {
  return <h2 className="text-2xl font-semibold">Projects Page</h2>;
}
