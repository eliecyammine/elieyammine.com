import type { Metadata } from 'next';

import { DESCRIPTION } from '@/lib/constants/site';

import { TextGenerateEffect } from '@/ui/components/core/aceternity-ui/text-generate-effect';

// import BlogList from './_components/blog-list';
import ImagesGrid from './_components/images-grid';

/// ---------- || METADATA || ---------- ///

export const metadata: Metadata = {
  title: 'Blog',

  description: DESCRIPTION,
};

/// ---------- || BLOG PAGE || ---------- ///

export default function BlogPage() {
  return (
    <div className="flex flex-col">
      <TextGenerateEffect
        words="📝 My Blog Space!"
        className="text-center text-2xl font-bold md:text-3xl lg:text-4xl"
      />

      <TextGenerateEffect
        words="Diving into tech, trends, and tales."
        className="m-4 mb-6 text-center text-sm text-neutral-600 dark:text-neutral-400 md:text-lg lg:text-xl"
      />

      <ImagesGrid />

      {/* <BlogList /> */}
    </div>
  );
}
