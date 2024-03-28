import { useState, useEffect } from 'react';

export const useTypewriter = (text, shouldStart, speed = 100) => {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);
  const [typingComplete, setTypingComplete] = useState(false);

  useEffect(() => {
    let timer;

    if (shouldStart) {
      timer = setTimeout(() => {
        if (index < text.length) {
          if (text[index] === '<') {
            let tagEndIndex = text.indexOf('>', index);
            setDisplayText(prevText => prevText + text.substring(index, tagEndIndex + 1));
            setIndex(tagEndIndex + 1);
          } else {
            setDisplayText(prevText => prevText + text[index]);
            setIndex(prevIndex => prevIndex + 1);
          }
        } else {
          setTypingComplete(true);
        }
      }, speed);
    } else {
      setDisplayText('');
      setIndex(0);
      setTypingComplete(false);
    }

    return () => clearTimeout(timer);
  }, [index, text, speed, shouldStart]);

  return { displayText, typingComplete };
};
