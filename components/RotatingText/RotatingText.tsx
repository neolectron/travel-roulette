import { useTransition, animated } from 'react-spring';
import { useEffect, useState } from 'react';

interface RotatingTextProps {
  text: string[];
  duration?: number;
}

const RotatingText = ({ text, duration = 3000 }: RotatingTextProps) => {
  const [index, setIndex] = useState(0);
  const transitions = useTransition(index, {
    from: {
      opacity: 0,
      transform: 'translate3d(0, -100%, 0)',
    },
    enter: { opacity: 1, transform: 'translate3d(0, 0%, 0)' },
    leave: {
      opacity: 0,
      transform: 'translate3d(0, 100%, 0)',
      position: 'absolute',
    },
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index) => (index + 1) % text.length);
    }, duration);
    return () => clearInterval(interval);
  }, [text, duration]);

  return (
    <div className="relative inline-block">
      {transitions((styles, currentIndex) => (
        <animated.div style={styles}>{text[currentIndex]}</animated.div>
      ))}
    </div>
  );
};
export default RotatingText;
