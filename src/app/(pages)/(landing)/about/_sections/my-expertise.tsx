import React from 'react';

import { ExpertiseType } from '@/types/expertise.types';

import { cn } from '@/lib/utils';

interface MyExpertiseProps {
  expertiseData: ExpertiseType[] | null;
}

export default function MyExpertise({ expertiseData }: MyExpertiseProps) {
  return (
    <div className="relative mx-auto flex max-w-xl flex-col items-center justify-center space-y-1.5 pb-6 pt-4 antialiased">
      {expertiseData!.map((data, index) => (
        <div key={data.id} className="flex w-full">
          <div
            className={cn(
              'max-w-[75%] rounded-xl px-4 py-2 text-sm font-medium md:text-base',
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
  );
}
