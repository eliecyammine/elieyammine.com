'use client';

import React from 'react';

import { AnimatePresence, motion } from 'framer-motion';

import { cn } from '@/lib/utils';

export const TopGradientButton = ({
  title,

  className,
  onClick,
}: {
  title: string;
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.5,
        }}
      >
        <button
          onClick={onClick}
          className={cn(
            'relative rounded-full border border-accent bg-accent px-8 py-2 text-sm transition duration-200 hover:shadow-2xl hover:shadow-white/[0.1]',
            className,
          )}
        >
          <div className="absolute inset-x-0 -top-px mx-auto h-px w-1/2 bg-gradient-to-r  from-transparent via-blue-500 to-transparent shadow-2xl" />

          <span className="relative z-20">{title}</span>
        </button>
      </motion.div>
    </AnimatePresence>
  );
};
