import Link from 'next/link';

import { cn } from '@/lib/utils';

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        'mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3 ',
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  slug,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  slug?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        'group/bento row-span-1 flex flex-col justify-between space-y-4 rounded-xl border border-border bg-white p-4 shadow-input transition duration-200 hover:shadow-xl dark:bg-black dark:shadow-none',
        className,
      )}
    >
      {header}
      <Link href={`#${slug!}`}>
        <div className="transition duration-200 group-hover/bento:translate-x-2">
          <div className="my-2 flex flex-row items-center gap-2 font-sans font-semibold">
            {icon}

            {title}
          </div>

          <div className="text-xs font-light text-neutral-600 dark:text-neutral-400">
            {description}
          </div>
        </div>
      </Link>
    </div>
  );
};
