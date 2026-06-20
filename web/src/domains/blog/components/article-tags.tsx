import type { Tag } from "@/domains/blog/types";

type Props = {
  tags: readonly Tag[];
};

export function ArticleTags({ tags }: Props) {
  if (tags.length === 0) {
    return null;
  }

  return (
    <ul className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <li
          key={tag}
          className="bg-muted text-muted-foreground rounded-full px-2.5 py-1 text-xs"
        >
          {tag}
        </li>
      ))}
    </ul>
  );
}
