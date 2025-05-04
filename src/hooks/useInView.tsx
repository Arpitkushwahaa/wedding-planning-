import { useState, useEffect, RefObject } from 'react';

interface UseInViewOptions {
  threshold?: number;
  rootMargin?: string;
  persistOnceVisible?: boolean;
}

export const useInView = (
  elementRef: RefObject<Element>,
  options: UseInViewOptions = { threshold: 0, rootMargin: '0px', persistOnceVisible: true }
): boolean => {
  const [isInView, setIsInView] = useState<boolean>(false);

  useEffect(() => {
    if (!elementRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (options.persistOnceVisible) {
          if (entry.isIntersecting) {
            setIsInView(true);
          }
        } else {
          setIsInView(entry.isIntersecting);
        }
      },
      {
        threshold: options.threshold || 0,
        rootMargin: options.rootMargin || '0px',
      }
    );

    observer.observe(elementRef.current);

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [elementRef, options.threshold, options.rootMargin, options.persistOnceVisible]);

  return isInView;
};