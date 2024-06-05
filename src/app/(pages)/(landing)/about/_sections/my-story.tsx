import React from 'react';

import { EducationType } from '@/types/education.types';

interface MyStoryProps {
  educationData: EducationType[] | null;
}

export default function MyStory({ educationData }: MyStoryProps) {
  return (
    <div className="relative mx-auto max-w-xl items-center pb-6 pt-4 antialiased">
      <p className="text-justify">
        {`I'm a Full Stack Software Developer with experience in creating both web and mobile
        applications. My journey so far has been filed with learning and growing, and although I'm
        still honing my skills, I'm keen to take on challenges that push me further.`}
      </p>

      {educationData!.map((data) => (
        <div key={data.slug} className="my-10">
          <div className="flex w-full flex-row items-start justify-between py-1">
            <h2 className="text-sm text-neutral-600 dark:text-neutral-400">
              {data.university_name}
            </h2>

            <h2 className="text-sm text-neutral-500">
              {data.from_date} - {data.to_date}
            </h2>
          </div>

          <p className="mb-2 text-sm text-neutral-500">{`(${data.university_full_name})`}</p>

          <h1 className="mb-4 text-xl font-semibold">_ {data.major}</h1>
        </div>
      ))}
    </div>
  );
}
