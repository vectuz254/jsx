import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

interface CharItemProps {
  char: string;
  progress: MotionValue<number>;
  start: number;
  end: number;
}

const AnimatedChar: React.FC<CharItemProps> = ({ char, progress, start, end }) => {
  const opacity = useTransform(progress, [start, end], [0.2, 1]);

  return (
    <span className="relative inline-block">
      {/* Invisible placeholder for natural layout */}
      <span className="opacity-0 select-none pointer-events-none" aria-hidden="true">
        {char}
      </span>
      {/* Absolute positioned animated span */}
      <motion.span
        style={{ opacity }}
        className="absolute inset-0 select-none"
      >
        {char}
      </motion.span>
    </span>
  );
};

export const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = '' }) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  const totalChars = text.length;
  const words = text.split(' ');
  let charCounter = 0;

  return (
    <p ref={containerRef} className={`leading-relaxed ${className}`}>
      {words.map((word, wordIndex) => {
        const wordChars = word.split('');
        const startIndex = charCounter;
        charCounter += wordChars.length + 1; // +1 for space

        return (
          <span key={wordIndex} className="inline-block whitespace-nowrap mr-[0.3em]">
            {wordChars.map((char, charIdx) => {
              const globalCharIdx = startIndex + charIdx;
              const start = globalCharIdx / totalChars;
              const end = Math.min(1, (globalCharIdx + 1) / totalChars);

              return (
                <AnimatedChar
                  key={charIdx}
                  char={char}
                  progress={scrollYProgress}
                  start={start}
                  end={end}
                />
              );
            })}
          </span>
        );
      })}
    </p>
  );
};

export default AnimatedText;
