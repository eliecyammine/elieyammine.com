'use client';

import { useState } from 'react';

// import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';

import { cn } from '@/lib/utils';

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description?: string;
    link?: string;
  }[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        'relative mx-auto grid size-full max-w-xl grid-cols-2 md:grid-cols-3',
        className,
      )}
    >
      {items.map((item, index) => (
        <div
          //   href={item?.link}
          key={index}
          className="group relative block size-full p-2"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === index && (
              <motion.span
                className="absolute inset-0 block size-full rounded-3xl bg-neutral-200 dark:bg-slate-800/[0.8]"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>

          <Card>
            <CardTitle>{item.title}</CardTitle>
            {/* <CardDescription>{item.description}</CardDescription> */}
          </Card>
        </div>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        'relative z-20 size-full overflow-hidden rounded-2xl border bg-background p-4 group-hover:border-slate-700',
        className,
      )}
    >
      <div className="relative z-50">
        <div className="p-2 text-center">{children}</div>
      </div>
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return <h4 className={cn('font-bold tracking-wide', className)}>{children}</h4>;
};

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p className={cn('mt-8 text-sm leading-relaxed tracking-wide text-neutral-500', className)}>
      {children}
    </p>
  );
};
