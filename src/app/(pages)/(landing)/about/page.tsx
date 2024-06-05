import type { Metadata } from 'next';

import { aboutData, techStackData } from '@/data/about.data';
import { ChevronsDownIcon } from 'lucide-react';

import { EducationType } from '@/types/education.types';
import { ExpertiseType } from '@/types/expertise.types';
import { SocialLinkType } from '@/types/social-link.types';
import { WorkExperienceType } from '@/types/work-experience.types';

import { DESCRIPTION } from '@/lib/constants/site';
import { createClient } from '@/lib/providers/supabase/server';

import { TextGenerateEffect } from '@/ui/components/core/aceternity-ui/text-generate-effect';
import { Separator } from '@/ui/components/core/shadcn-ui/separator';

import BentoGrid from './_sections/bento-grid';
import BeyondCoding from './_sections/beyond-coding';
import JourneySoFar from './_sections/journey-so-far';
import MyExpertise from './_sections/my-expertise';
import MyStory from './_sections/my-story';
import TechStack from './_sections/tech-stack';

/// ---------- || METADATA || ---------- ///

export const metadata: Metadata = {
  title: 'About',

  description: DESCRIPTION,
};

/// ---------- || ABOUT PAGE || ---------- ///

export default async function AboutPage() {
  const supabase = createClient();

  const { data: SocialLink } = await supabase.from('SocialLink').select();
  const { data: Education } = await supabase.from('Education').select();
  const { data: Expertise } = await supabase.from('Expertise').select();
  const { data: WorkExperience } = await supabase.from('WorkExperience').select();

  const expertiseData = Expertise as ExpertiseType[] | null;
  const educationData = Education as EducationType[] | null;
  const workExperienceData = WorkExperience as WorkExperienceType[] | null;
  const socialLinksData = SocialLink as SocialLinkType[] | null;

  return (
    <div className="flex flex-col">
      <TextGenerateEffect text="💬 Get to" spanText="Know Me!" isPageTitle />

      <BentoGrid aboutData={aboutData} />

      <div className="mt-10 flex flex-col items-center space-y-1">
        <p className="text-center text-neutral-600">{'Scroll down'}</p>

        <ChevronsDownIcon size={18} className="text-neutral-600" />
      </div>

      {aboutData.map((data, index) => (
        <section id={data.slug} key={index}>
          <TextGenerateEffect
            text={data.sectionTitle}
            className="mb-7 mt-12 text-center text-xl font-medium md:text-2xl"
          />

          {data.slug === 'my-story' && <MyStory educationData={educationData} />}

          {data.slug === 'expertise' && <MyExpertise expertiseData={expertiseData} />}

          {data.slug === 'journey-so-far' && (
            <JourneySoFar workExperienceData={workExperienceData} />
          )}

          {data.slug === 'tech-stack' && <TechStack techStackData={techStackData} />}

          {data.slug === 'beyond-coding' && <BeyondCoding socialLinksData={socialLinksData} />}

          {index === aboutData.length - 1 ? null : <Separator />}
        </section>
      ))}
    </div>
  );
}
