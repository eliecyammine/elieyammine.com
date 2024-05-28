'use client';

import React from 'react';

import Image from 'next/image';

import { motion } from 'framer-motion';

/// ---------- || IMAGES GRID || ---------- ///

export default function ImagesGrid() {
  const images = [
    '/images/background/bg-light.png',
    '/images/background/bg-light.png',
    '/images/background/bg-light.png',
    '/images/background/bg-light.png',
  ];

  return (
    <div className="my-10 grid max-w-4xl grid-cols-2 gap-10 md:grid-cols-4">
      {images.map((image, index) => (
        <motion.div
          key={index}
          initial={{
            opacity: 0,
            y: -50,
            rotate: 0,
          }}
          animate={{
            opacity: 1,
            y: 0,
            rotate: index % 2 === 0 ? 2.5 : -4,
          }}
          transition={{
            duration: 0.5,
            delay: index * 0.3,
          }}
        >
          <Image
            src={image}
            alt={image}
            width={200}
            height={400}
            priority
            className="block h-40 w-full rotate-3 rounded-md object-cover shadow-xl transition duration-200 hover:rotate-0 md:h-60"
          />
        </motion.div>
      ))}
    </div>
  );
}
