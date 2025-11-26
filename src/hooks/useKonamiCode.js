import { useState, useEffect } from 'react';

const KONAMI_CODE = [
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'b',
  'a',
];

const useKonamiCode = () => {
  const [isKonamiActive, setIsKonamiActive] = useState(false);
  const [input, setInput] = useState([]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      const newInput = [...input, e.key];
      
      // Keep only the last N keys where N is the length of the Konami code
      if (newInput.length > KONAMI_CODE.length) {
        newInput.shift();
      }
      
      setInput(newInput);

      // Check if the input matches the Konami code
      if (newInput.join('') === KONAMI_CODE.join('')) {
        setIsKonamiActive((prev) => !prev);
        setInput([]); // Reset input after successful activation
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [input]);

  return isKonamiActive;
};

export default useKonamiCode;
