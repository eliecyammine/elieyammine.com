import type { Metadata } from 'next';

import {
  aboutData,
  educationData,
  experienceData,
  expertiseData,
  techStackData,
} from '@/data/about.data';
import {
  ChevronsDownIcon,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from 'lucide-react';

import { DESCRIPTION } from '@/lib/constants/site';
import { cn } from '@/lib/utils';

import { BentoGrid, BentoGridItem } from '@/ui/components/core/aceternity-ui/bento-grid';
import { HoverEffect } from '@/ui/components/core/aceternity-ui/card-hover-effect';
import { TextGenerateEffect } from '@/ui/components/core/aceternity-ui/text-generate-effect';
import { TracingBeam } from '@/ui/components/core/aceternity-ui/tracing-beam';
import { Button } from '@/ui/components/core/shadcn-ui/button';
import { Separator } from '@/ui/components/core/shadcn-ui/separator';

/// ---------- || METADATA || ---------- ///

export const metadata: Metadata = {
  title: 'About',

  description: DESCRIPTION,
};

/// ---------- || ABOUT PAGE || ---------- ///

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      <TextGenerateEffect
        words="💬 Get to Know Me!"
        className="mb-14 text-center text-2xl font-bold md:text-3xl lg:text-4xl"
      />

      <BentoGrid className="md:auto-rows-[20rem]">
        {aboutData.map((data, index) => (
          <BentoGridItem
            key={index}
            slug={data.slug}
            title={data.title}
            description={data.description}
            header={data.header}
            className={cn('[&>p:text-lg]', data.className)}
            icon={data.icon}
          />
        ))}
      </BentoGrid>

      <div className="mt-8 flex flex-col items-center space-y-1">
        <p className="text-center text-neutral-600">Scroll down</p>

        <ChevronsDownIcon size={20} className="text-neutral-600" />
      </div>

      {aboutData.map((data, index) => (
        <section id={data.slug} key={index}>
          <TextGenerateEffect
            words={data.sectionTitle}
            className="mb-7 mt-12 text-center text-xl font-semibold md:text-2xl lg:text-3xl"
          />

          {data.slug === 'my-story' && (
            <div className="relative mx-auto max-w-xl items-center pb-6 pt-4 antialiased">
              <div className={cn('relative mx-auto size-full max-w-4xl')}>
                <div className="absolute -left-4 top-2 hidden md:-left-20 md:block">
                  <div className="ml-[27px] flex size-4 items-center justify-center rounded-full border border-neutral-200 shadow-sm">
                    <div className="size-2 rounded-full border border-emerald-600 bg-emerald-500" />
                  </div>
                </div>
                {educationData.map((data, index) => (
                  <div key={`content-${index}`} className="mb-10">
                    <div className="flex w-full flex-row items-start justify-between py-1">
                      <h2 className="text-sm text-neutral-600 dark:text-neutral-400">
                        {data.universityAbv}
                      </h2>

                      <h2 className="text-sm text-neutral-500">
                        {data.fromDate} - {data.toDate}
                      </h2>
                    </div>

                    <p className="mb-2 text-sm text-neutral-500">{data.university}</p>

                    <h1 className="mb-4 text-xl font-semibold">_ {data.major}</h1>
                  </div>
                ))}
              </div>
            </div>
          )}

          {data.slug === 'expertise' && (
            <div className="relative mx-auto flex max-w-xl flex-col items-center justify-center space-y-1.5 pb-6 pt-4 antialiased">
              {expertiseData.map((data, index) => (
                <div key={index} className="flex w-full">
                  <div
                    className={cn(
                      'max-w-[75%] rounded-xl px-4 py-2',
                      index % 2 === 0
                        ? 'mr-auto bg-slate-800 text-right text-white'
                        : 'ml-auto bg-slate-300 text-left text-black',
                    )}
                  >
                    {data.title}
                  </div>
                </div>
              ))}
            </div>
          )}

          {data.slug === 'journey-so-far' && (
            <div className="relative mx-auto items-center pb-6 pt-4 antialiased">
              <TracingBeam className="max-w-xl">
                {experienceData.map((data, index) => (
                  <div key={`content-${index}`} className="mb-10">
                    <div className="flex w-full flex-row items-start justify-between py-1">
                      <h2 className="text-sm text-neutral-600 dark:text-neutral-400">
                        {data.company}
                      </h2>

                      <h2 className="text-sm text-neutral-500">
                        {data.fromDate} - {data.toDate}
                      </h2>
                    </div>

                    <p className="mb-2 text-sm text-neutral-500">{data.location}</p>

                    <h1 className="mb-4 text-xl font-semibold">_ {data.position}</h1>

                    <div className="prose prose-sm text-sm">{data.description}</div>
                  </div>
                ))}
              </TracingBeam>
            </div>
          )}

          {data.slug === 'tech-stack' && (
            <div className="relative mx-auto max-w-xl items-center pb-6 pt-4 antialiased">
              <HoverEffect items={techStackData} />

              <p className="mt-2 text-center text-neutral-500">{'and more...'}</p>
            </div>
          )}

          {data.slug === 'beyond-coding' && (
            <div className="relative mx-auto flex max-w-xl flex-row items-center justify-center space-x-3 pb-6 pt-4 antialiased">
              <a
                title="LinkedIn Link"
                target="_blank"
                href="https://linkedin.com/in/elieyammine"
                aria-label="LinkedIn"
                rel="noopener noreferrer"
              >
                <Button variant="outline">
                  <LinkedinIcon size={18} />
                </Button>
              </a>

              <a
                title="GitHub Link"
                target="_blank"
                href="https://github.com/eliecyammine"
                aria-label="GitHub"
                rel="noopener noreferrer"
              >
                <Button variant="outline">
                  <GithubIcon size={18} />
                </Button>
              </a>

              <a
                title="X (Twitter) Link"
                target="_blank"
                href="https://twitter.com/eliecyammine"
                aria-label="X (Twitter)"
                rel="noopener noreferrer"
              >
                <Button variant="outline">
                  <TwitterIcon size={18} />
                </Button>
              </a>

              <a
                title="Instagram Link"
                target="_blank"
                href="https://instagram.com/eliecyammine"
                aria-label="Instagram"
                rel="noopener noreferrer"
              >
                <Button variant="outline">
                  <InstagramIcon size={18} />
                </Button>
              </a>
            </div>
          )}

          {index === aboutData.length - 1 ? null : <Separator />}
        </section>
      ))}
    </div>
  );
}
