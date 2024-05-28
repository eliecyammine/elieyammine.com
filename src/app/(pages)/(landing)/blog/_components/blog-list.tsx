'use client';

import React from 'react';

import Link from 'next/link';

import { motion } from 'framer-motion';

export default function BlogList() {
  return (
    <motion.div
      //   key={index}
      initial={{
        opacity: 0,
        x: -50,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 0.5,
        delay: 0.1,
      }}
    >
      <div className="flex flex-col gap-1 text-sm">
        <Link
          href={`/`}
          className={'flex flex-col gap-1 transition-colors duration-300 hover:bg-accent'}
        >
          <span className="font-medium">{'Test'}</span>
          <span className={'transition-colors duration-300'}>
            <span>{'formattedDate'}</span>
            <span>
              {/* {formattedViewCount ? (
          <m.span
            key={`${post.slug}-views-loaded`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="tabular-nums"
          >
            &middot; {formattedViewCount} {formattedViewCount === 1 ? 'view' : 'views'}
          </m.span>
        ) : ( */}
              <span key={`-views-loading`} />
              {/* )} */}
            </span>
          </span>
        </Link>
      </div>
    </motion.div>
  );
}
