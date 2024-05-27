import type { Metadata } from 'next';

import { aboutData } from '@/data/about.data';

import { DESCRIPTION } from '@/lib/constants/site';
import { cn } from '@/lib/utils';

import { BentoGrid, BentoGridItem } from '@/ui/components/core/aceternity-ui/bento-grid';
import { TextGenerateEffect } from '@/ui/components/core/aceternity-ui/text-generate-effect';

/// ---------- || METADATA || ---------- ///

export const metadata: Metadata = {
  title: 'About',

  description: DESCRIPTION,
};

/// ---------- || ABOUT PAGE || ---------- ///

export default function AboutPage() {
  return (
    <div className="flex flex-col items-center">
      <TextGenerateEffect
        words="Get to Know Me!"
        className="mb-14 text-center text-2xl font-bold md:text-3xl lg:text-4xl"
      />

      <BentoGrid className="md:auto-rows-[20rem]">
        {aboutData.map((data, i) => (
          <BentoGridItem
            key={i}
            title={data.title}
            description={data.description}
            header={data.header}
            className={cn('[&>p:text-lg]', data.className)}
            icon={data.icon}
          />
        ))}
      </BentoGrid>
    </div>
  );
}
