'use client';

import { useEffect, useState } from 'react';

import Link from 'next/link';

import { motion } from 'framer-motion';

import { HoverBorderGradient } from '@/ui/components/core/aceternity-ui/hover-border-gradient';
import { TextGenerateEffect } from '@/ui/components/core/aceternity-ui/text-generate-effect';
import { Button } from '@/ui/components/core/shadcn-ui/button';

// import { TopGradientButton } from '@/ui/components/core/aceternity-ui/top-gradient-button';

/// ---------- || HOME PAGE || ---------- ///

export default function HomePage() {
  const [isPlaying, setPlaying] = useState(false);

  useEffect(() => {
    setPlaying(true);
  }, []);

  return (
    <motion.section
      className="relative z-10 flex items-center"
      onViewportEnter={() => {
        if (!isPlaying) {
          setPlaying(true);
        }
      }}
      onViewportLeave={() => {
        if (isPlaying) {
          setPlaying(false);
        }
      }}
    >
      <div className="hero-slide-up flex max-w-[80vw] flex-col items-center justify-center md:max-w-[60vw]">
        <Link href="https://github.com/eliecyammine/elieyammine.com" target="_blank">
          <Button
            variant="outline"
            className="flex items-center space-x-2 rounded-full border-[#00cc76]/50"
          >
            <span className="font-mono text-xs">{`It's Open-Source! 🎉`}</span>
          </Button>
        </Link>

        <TextGenerateEffect
          text="👋🏻 Hey there! I'm Elie,"
          className="mt-6 text-center text-4xl font-bold md:text-5xl lg:text-6xl"
        />
        <p className="mt-4 text-center text-lg font-semibold md:text-xl lg:text-2xl">{`a passionate Full Stack Software Developer.`}</p>

        <p className="m-4 mb-1 mt-6 text-center text-sm text-neutral-600 dark:text-neutral-400 md:text-lg lg:text-xl">{`Welcome to my corner of the digital world!`}</p>

        <p className="m-4 mb-1 text-center text-sm text-neutral-500 md:text-lg lg:text-xl">
          {`From the beginning of my journey, I have been captivated by the art of crafting exceptional
        digital experiences. As a developer, I love turning lines of code into elegant, functional
        solutions, building digital marvels that seamlessly merge form and function. What excites me
        most about this field is solving problems and finding solutions that work, always ready to
        dive into new projects, learn, and improve. Whether working with a team or tackling tasks on
        my own, I aim to contribute positively and make things better through my work. Through this
        website, I aim to share my insights, experiences, and creations with you, whether you're a
        fellow developer seeking solutions or someone who appreciates the finer aspects of design.`}
        </p>

        <TextGenerateEffect
          text="Let's build something amazing together!"
          className="m-4 mb-8 text-center text-lg font-semibold md:text-xl lg:text-2xl"
        />

        <a href="mailto:eliecyammine@gmail.com">
          {/* <TopGradientButton title="Get in touch!" /> */}
          <HoverBorderGradient>Get in touch!</HoverBorderGradient>
        </a>
      </div>
    </motion.section>
  );
}
