import type { Metadata } from 'next';

import { DESCRIPTION } from '@/lib/constants/site';

import { TextGenerateEffect } from '@/ui/components/core/aceternity-ui/text-generate-effect';

/// ---------- || METADATA || ---------- ///

export const metadata: Metadata = {
  title: 'Blog Post',

  description: DESCRIPTION,
};

/// ---------- || BLOG POST PAGE || ---------- ///

export default function BlogPostPage() {
  return (
    <div className="flex flex-col">
      <TextGenerateEffect
        text="Blog Post Details"
        className="text-center text-2xl font-bold md:text-3xl lg:text-4xl"
      />
    </div>
  );
}
