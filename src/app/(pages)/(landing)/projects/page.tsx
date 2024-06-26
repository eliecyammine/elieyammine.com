import type { Metadata } from 'next';

import { DESCRIPTION } from '@/lib/constants/site';

import { TextGenerateEffect } from '@/ui/components/core/aceternity-ui/text-generate-effect';

/// ---------- || METADATA || ---------- ///

export const metadata: Metadata = {
  title: 'Projects',

  description: DESCRIPTION,
};

/// ---------- || PROJECTS PAGE || ---------- ///

export default function ProjectsPage() {
  return (
    <div className="flex flex-col">
      <TextGenerateEffect text="👨🏻‍💻 What I've" spanText="Built!" isPageTitle />
    </div>
  );
}
