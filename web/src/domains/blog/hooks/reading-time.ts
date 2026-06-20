import { type RefObject, useEffect, useState } from "react";

const WORDS_PER_MINUTE = 180;
const MEDIA_READ_TIME_MINUTES = 1;

export function estimateReadingMinutes(text: string): number {
  const wordCount = getWordCount(text);

  return Math.max(1, Math.ceil(wordCount / WORDS_PER_MINUTE));
}

function calculateReadingTime(root: HTMLElement): number {
  const readableRoot = root.cloneNode(true) as HTMLElement;

  readableRoot
    .querySelectorAll("pre, code, script, style")
    .forEach((element) => element.remove());

  const wordCount = getWordCount(readableRoot.textContent ?? "");
  const mediaCount = getMediaCount(root);

  return Math.max(
    1,
    Math.ceil(
      wordCount / WORDS_PER_MINUTE + mediaCount * MEDIA_READ_TIME_MINUTES,
    ),
  );
}

function getWordCount(text: string): number {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

function isInsideFigure(element: Element): boolean {
  return element.closest("figure") !== null;
}

function getMediaCount(root: HTMLElement): number {
  const figures = root.querySelectorAll("figure").length;
  const standaloneOutsideFigures = Array.from(
    root.querySelectorAll("img, svg, video, iframe, canvas"),
  ).filter((element) => !isInsideFigure(element)).length;

  // Prefer counting media outside figures once and each figure once.
  return figures + standaloneOutsideFigures;
}

export function useReadingTime(
  ref: RefObject<HTMLElement | null>,
): number | undefined {
  const [minutes, setMinutes] = useState<number | undefined>(undefined);

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      setMinutes(undefined);
      return;
    }

    function updateReadingTime(): void {
      const currentElement = ref.current;

      if (!currentElement) {
        setMinutes(undefined);
        return;
      }

      setMinutes(calculateReadingTime(currentElement));
    }

    updateReadingTime();

    const observer = new MutationObserver(updateReadingTime);

    observer.observe(element, {
      childList: true,
      subtree: true,
      characterData: true,
    });

    return () => observer.disconnect();
  }, [ref]);

  return minutes;
}
