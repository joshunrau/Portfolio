import { useEffect, useState, RefObject } from 'react';

export default function useVisible(
  ref: RefObject<HTMLElement | null>,
  options: IntersectionObserverInit
): boolean {
  const [visible, setVisible] = useState(false);

  const handleIntersect: IntersectionObserverCallback = ([entry]) => {
    setVisible(entry.isIntersecting);
  };

  const observer = new IntersectionObserver(handleIntersect, options);

  useEffect(() => {
    if (ref.current) {
      observer.observe(ref.current);
      return () => {
        observer.disconnect();
      };
    }
  }, []);

  return visible;
}
