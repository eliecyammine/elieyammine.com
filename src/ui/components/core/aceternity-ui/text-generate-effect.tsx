'use client';

import { useEffect } from 'react';

import { motion, stagger, useAnimate } from 'framer-motion';

export const TextGenerateEffect = ({ words, className }: { words: string; className?: string }) => {
  const [scope, animate] = useAnimate();

  const wordsArray = words.split(' ');

  useEffect(() => {
    animate(
      'span',

      {
        opacity: 1,
      },

      {
        duration: 2,
        delay: stagger(0.2),
      },
    );
  }, [animate]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, index) => {
          return (
            <motion.span key={word + index} className="opacity-0">
              {word}{' '}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={className}>
      <div className="leading-snug tracking-wide">{renderWords()}</div>
    </div>
  );
};
