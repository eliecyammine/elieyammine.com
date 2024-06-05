import React from 'react';

import { HoverEffect } from '@/ui/components/core/aceternity-ui/card-hover-effect';

interface TechStackProps {
  techStackData: { title: string }[];
}

export default function TechStack({ techStackData }: TechStackProps) {
  return (
    <div className="relative mx-auto max-w-xl items-center pb-6 pt-4 antialiased">
      <HoverEffect items={techStackData} />

      <p className="mt-2 text-center text-neutral-500">{'and more...'}</p>
    </div>
  );
}
