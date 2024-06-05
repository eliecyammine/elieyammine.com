import React, { ReactNode } from 'react';

import { cn } from '@/lib/utils';

import {
  BentoGridItem,
  BentoGrid as BentoGridUI,
} from '@/ui/components/core/aceternity-ui/bento-grid';

interface AboutDataItem {
  slug: string;
  sectionTitle: string;
  title: string;
  description: ReactNode;
  header: ReactNode;
  icon: ReactNode;
  className: string;
}

interface BentoGridProps {
  aboutData: AboutDataItem[];
}

export default function BentoGrid({ aboutData }: BentoGridProps) {
  return (
    <BentoGridUI className="md:auto-rows-[20rem]">
      {aboutData.map((data, index) => (
        <BentoGridItem
          key={index}
          slug={data.slug}
          title={data.title || '-'}
          description={data.description || '-'}
          header={data.header}
          className={cn('[&>p:text-lg]', data.className)}
          icon={data.icon}
        />
      ))}
    </BentoGridUI>
  );
}
