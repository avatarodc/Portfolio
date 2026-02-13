import { useState, useEffect, useCallback } from 'react';

interface TypewriterOptions {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
}

/**
 * Hook effet machine à écrire — parfait pour le Hero du portfolio.
 *
 * Usage:
 *   const { text, cursor } = useTypewriter({
 *     words: ['Développeur Backend', 'Développeur Fullstack', 'Formateur PHP'],
 *   });
 *   <span>{text}{cursor}</span>
 */
export const useTypewriter = ({
  words,
  typingSpeed = 80,
  deletingSpeed = 50,
  pauseTime = 2000,
}: TypewriterOptions) => {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  // Clignotement du curseur
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);
    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    const currentWord = words[wordIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          // Typing
          setText(currentWord.slice(0, text.length + 1));

          if (text.length + 1 === currentWord.length) {
            // Pause avant suppression
            setTimeout(() => setIsDeleting(true), pauseTime);
            return;
          }
        } else {
          // Deleting
          setText(currentWord.slice(0, text.length - 1));

          if (text.length === 0) {
            setIsDeleting(false);
            setWordIndex((prev) => (prev + 1) % words.length);
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseTime]);

  const cursor = showCursor ? '|' : '\u00A0';

  return { text, cursor, currentWord: words[wordIndex] };
};