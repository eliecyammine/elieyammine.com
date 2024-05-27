'use client';

import React, { useState } from 'react';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { DownloadIcon, GanttChartIcon, XIcon } from 'lucide-react';

import { cn } from '@/lib/utils';

import { Separator } from '@/ui/components/core/shadcn-ui/separator';

export const FloatingNavbar = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const router = useRouter();
  const pathname = usePathname();

  const [active, setActive] = useState(false);

  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, 'change', (current) => {
    if (typeof current === 'number') {
      const direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(true);
        }
      }
    }
  });

  const [pressTimer, setPressTimer] = useState<string | number | NodeJS.Timeout | undefined>(
    undefined,
  );

  const handleMouseDown = () => {
    const timer = setTimeout(() => {
      router.push('/portal/login');
    }, 1000);
    setPressTimer(timer);
  };

  const handleMouseUp = () => {
    clearTimeout(pressTimer);
  };

  const handleMouseLeave = () => {
    clearTimeout(pressTimer);
  };

  return (
    <div className="relative z-50">
      <AnimatePresence>
        <motion.div
          key="header"
          initial={{
            opacity: 1,
            y: -100,
          }}
          animate={{
            y: visible ? 0 : -100,
            opacity: visible ? 1 : 0,
          }}
          transition={{
            duration: 0.2,
          }}
          className={cn(
            'fixed inset-x-0 top-5 mx-6 flex max-w-fit items-center justify-center rounded-full border border-transparent bg-background py-2 pl-5 pr-2 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] dark:border-border sm:top-10 sm:mx-auto sm:space-x-4 sm:pl-8',
            className,
          )}
        >
          {navItems.map((navItem, index: number) => (
            <div
              key={`link=${index}`}
              className={cn(
                'hidden h-5 w-screen items-center text-sm sm:flex sm:w-auto sm:justify-center sm:gap-4',
                index === 0 && 'flex',
              )}
            >
              {index !== 0 && <Separator orientation="vertical" />}

              <button
                onClick={() => {
                  setActive(!active);
                }}
                className={cn(
                  'relative mr-3.5 flex items-center transition-colors hover:text-muted-foreground sm:hidden',
                )}
              >
                <span>{active ? <XIcon /> : <GanttChartIcon />}</span>
              </button>

              <Link
                onMouseDown={index === 0 ? handleMouseDown : undefined}
                onMouseUp={index === 0 ? handleMouseUp : undefined}
                onMouseLeave={index === 0 ? handleMouseLeave : undefined}
                href={navItem.link}
                className={cn(
                  'relative flex items-center py-2 transition-colors hover:text-muted-foreground',
                )}
              >
                <span
                  className={cn(
                    '!cursor-pointer text-sm',
                    index === 0 && 'pr-2 text-xl font-bold tracking-wider',
                  )}
                >
                  {navItem.name}
                </span>

                {index !== 0 && pathname === navItem.link && (
                  <span className="absolute inset-x-0 -bottom-px mx-auto h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
                )}
              </Link>
            </div>
          ))}

          <button
            onClick={() => {
              console.log('Resume Downloaded!');
            }}
            className="relative !cursor-pointer rounded-full border border-border px-4 py-2 text-sm font-medium hover:bg-accent"
          >
            <div className="flex flex-row items-center gap-2">
              <DownloadIcon size={16} />

              <span>Resume</span>
            </div>

            <span className="absolute inset-x-0 -bottom-px mx-auto h-px w-1/2 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
          </button>
        </motion.div>

        {active && (
          <motion.div
            key="mini-sidebar"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: 'spring',
              mass: 0.5,
              damping: 11.5,
              stiffness: 100,
              restDelta: 0.001,
              restSpeed: 0.001,
            }}
          >
            <div className="fixed left-10 top-20 mt-1 sm:hidden">
              <motion.div
                transition={{
                  type: 'spring',
                  mass: 0.5,
                  damping: 11.5,
                  stiffness: 100,
                  restDelta: 0.001,
                  restSpeed: 0.001,
                }}
                layoutId="active"
                className="overflow-hidden rounded-md border border-transparent bg-background shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] backdrop-blur-sm dark:border-border"
              >
                <motion.div layout className="h-full min-w-32 px-1">
                  <div className="flex flex-col">
                    {navItems.map(
                      (navItem, index: number) =>
                        index !== 0 && (
                          <div key={`link=${index}`}>
                            {index !== 1 && <Separator />}

                            <Link
                              href={navItem.link}
                              onClick={() => {
                                setActive(!active);
                              }}
                              className={cn(
                                'relative flex items-center p-3 transition-colors hover:text-muted-foreground',
                              )}
                            >
                              <span className="!cursor-pointer text-sm">{navItem.name}</span>
                            </Link>
                          </div>
                        ),
                    )}
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
