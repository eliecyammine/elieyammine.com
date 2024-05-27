import type { Metadata } from 'next';

import { DESCRIPTION } from '@/lib/constants/site';

/// ---------- || METADATA || ---------- ///

export const metadata: Metadata = {
  title: 'Projects',

  description: DESCRIPTION,
};

/// ---------- || PROJECTS PAGE || ---------- ///

export default function ProjectsPage() {
  return (
    <div className="flex flex-col justify-center">
      <h3 className="mb-14 text-center text-2xl font-bold md:text-3xl lg:text-4xl">
        What I&apos;ve Built!
      </h3>
    </div>
  );
}
