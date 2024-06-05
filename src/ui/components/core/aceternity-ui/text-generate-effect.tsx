'use client';

import { useEffect } from 'react';

import { motion, stagger, useAnimate } from 'framer-motion';

import { cn } from '@/lib/utils';

export const TextGenerateEffect = ({
  text,
  spanText,

  isPageTitle,

  fastAnimation,
  className,
}: {
  text: string;
  spanText?: string;

  isPageTitle?: boolean;

  fastAnimation?: boolean;
  className?: string;
}) => {
  const [scope, animate] = useAnimate();

  const wordsArray = text.split(' ');
  const spanWordsArray = spanText ? spanText.split(' ') : [];

  const combinedWords = [
    ...wordsArray.map((word) => ({ word, isSpan: false })),
    ...spanWordsArray.map((word) => ({ word, isSpan: true })),
  ];

  const pageTitleStyle = 'mb-10 text-center text-2xl font-semibold md:text-3xl lg:text-4xl';

  useEffect(() => {
    animate(
      'span',

      {
        opacity: 1,
      },

      {
        duration: 2,
        delay: fastAnimation ? stagger(0.03) : stagger(0.2),
      },
    );
  }, [animate, fastAnimation]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {combinedWords.map((wordObj, index) => {
          return (
            <motion.span
              key={wordObj.word + index}
              className={`opacity-0 ${wordObj.isSpan ? 'text-[#00cc76]' : ''}`}
            >
              {wordObj.word}{' '}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn(isPageTitle && pageTitleStyle, className)}>
      <div className="leading-snug tracking-wide">{renderWords()}</div>
    </div>
  );
};
