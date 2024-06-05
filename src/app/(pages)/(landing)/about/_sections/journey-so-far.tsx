import React from 'react';

import { WorkExperienceType } from '@/types/work-experience.types';

import { TracingBeam } from '@/ui/components/core/aceternity-ui/tracing-beam';

interface JourneySoFarProps {
  workExperienceData: WorkExperienceType[] | null;
}

export default function JourneySoFar({ workExperienceData }: JourneySoFarProps) {
  const sortWorkExperience = (a: WorkExperienceType, b: WorkExperienceType) => {
    if (a.to_date === 'Present') return -1;
    if (b.to_date === 'Present') return 1;

    const toDateA = new Date(a.to_date);
    const toDateB = new Date(b.to_date);

    if (toDateA.getTime() === toDateB.getTime()) {
      const fromDateA = new Date(a.from_date);
      const fromDateB = new Date(b.from_date);

      return fromDateB.getTime() - fromDateA.getTime();
    }

    return toDateB.getTime() - toDateA.getTime();
  };

  const sortedWorkExperience = workExperienceData!.sort(sortWorkExperience);

  return (
    <div className="relative mx-auto items-center pb-6 pt-4 antialiased">
      <TracingBeam className="max-w-xl">
        {sortedWorkExperience!.map((data) => (
          <div key={data.slug} className="mb-10">
            <div className="flex w-full flex-row items-start justify-between py-1">
              <h2 className="text-sm text-neutral-600 dark:text-neutral-400">{data.company}</h2>

              <h2 className="text-sm text-neutral-500">
                {data.from_date} - {data.to_date}
              </h2>
            </div>

            <p className="mb-2 text-sm text-neutral-500">{`(${data.location})`}</p>

            <h1 className="mb-4 text-xl font-semibold">_ {data.position}</h1>

            <div className="prose prose-sm text-sm">
              <ul
                className="space-y-2 font-light text-neutral-700 dark:text-neutral-300"
                dangerouslySetInnerHTML={{ __html: data.description }}
              />
            </div>
          </div>
        ))}
      </TracingBeam>
    </div>
  );
}
