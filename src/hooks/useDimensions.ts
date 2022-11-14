import { type RefObject, useMemo, useLayoutEffect, useState } from 'react';

export default function useDimensions(ref: RefObject<HTMLElement>) {
  const [height, setHeight] = useState<number>();
  const [width, setWidth] = useState<number>();

  const observer = useMemo(
    () =>
      new ResizeObserver((entries) => {
        if (entries[0]) {
          setHeight(entries[0].contentRect.height);
          setWidth(entries[0].contentRect.width);
        }
      }),
    []
  );

  useLayoutEffect(() => {
    if (!ref.current) return;
    observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  }, [ref.current]);

  return { height, width }; 
}