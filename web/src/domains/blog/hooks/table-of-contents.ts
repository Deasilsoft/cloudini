import { type RefObject, useEffect, useState } from "react";

export type TableOfContentsItem = {
  id: string;
  title: string;
  depth: 1 | 2 | 3;
};

function slugifyHeading(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

function getHeadings(
  ref: RefObject<HTMLElement | null>,
): readonly TableOfContentsItem[] {
  const element = ref.current;

  if (!element) {
    return [];
  }

  const headings = element.querySelectorAll<HTMLHeadingElement>("h2, h3");
  const slugCounts = new Map<string, number>();

  return Array.from(headings)
    .map<TableOfContentsItem | undefined>((heading) => {
      const title = heading.textContent?.trim() ?? "";

      if (!title) {
        return undefined;
      }

      const baseSlug = heading.id || slugifyHeading(title) || "section";
      const nextCount = (slugCounts.get(baseSlug) ?? 0) + 1;
      slugCounts.set(baseSlug, nextCount);

      const id = nextCount === 1 ? baseSlug : `${baseSlug}-${nextCount}`;
      if (!heading.id) {
        heading.id = id;
      }

      return {
        id: heading.id,
        title,
        depth: heading.tagName === "H2" ? (2 as const) : (3 as const),
      } satisfies TableOfContentsItem;
    })
    .filter((item): item is TableOfContentsItem => item !== undefined);
}

export function useArticleTableOfContents(
  ref: RefObject<HTMLElement | null>,
): readonly TableOfContentsItem[] {
  const [items, setItems] = useState<readonly TableOfContentsItem[]>([]);

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      setItems([]);
      return;
    }

    function updateTableOfContents(): void {
      setItems(getHeadings(ref));
    }

    updateTableOfContents();

    const observer = new MutationObserver(updateTableOfContents);

    observer.observe(element, {
      childList: true,
      subtree: true,
      characterData: true,
    });

    return () => observer.disconnect();
  }, [ref]);

  return items;
}
