import { useEffect, useState } from 'react';

import type { Ref } from '@/models/common';

export default function useVisible(
  ref: Ref,
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
