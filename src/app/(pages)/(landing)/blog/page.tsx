import type { Metadata } from 'next';

import { DESCRIPTION } from '@/lib/constants/site';

/// ---------- || METADATA || ---------- ///

export const metadata: Metadata = {
  title: 'Blog',

  description: DESCRIPTION,
};

/// ---------- || BLOG PAGE || ---------- ///

export default function BlogPage() {
  return (
    <div className="flex flex-col justify-center">
      <h3 className="mb-14 text-center text-2xl font-bold md:text-3xl lg:text-4xl">
        My Blog Space!
      </h3>
    </div>
  );
}
