import { useEffect, useRef } from "react";

type UseInfiniteScrollOptions = {
  isEnabled: boolean;
  onIntersect: () => void;
  rootMargin?: string;
};

export function useInfiniteScroll({
  isEnabled,
  onIntersect,
  rootMargin = "200px 0px",
}: UseInfiniteScrollOptions) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!isEnabled) {
      return;
    }

    const element = ref.current;

    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (!entry?.isIntersecting) {
          return;
        }

        onIntersect();
      },
      { rootMargin },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [isEnabled, onIntersect, rootMargin]);

  return ref;
}
