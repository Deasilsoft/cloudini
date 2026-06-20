import type { ReactNode } from "react";

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

type Props = {
  publishedAt: string;
  updatedAt: string | undefined;
  readingTimeMinutes: number | undefined;
};

export function ArticleMetaRow({
  publishedAt,
  updatedAt,
  readingTimeMinutes,
}: Props) {
  const items: { key: string; content: ReactNode }[] = [
    {
      key: "published",
      content: (
        <span>
          Published{" "}
          <time dateTime={publishedAt}>
            {dateFormatter.format(new Date(publishedAt))}
          </time>
        </span>
      ),
    },
  ];

  if (updatedAt !== undefined && updatedAt !== publishedAt) {
    items.push({
      key: "updated",
      content: (
        <span>
          Updated{" "}
          <time dateTime={updatedAt}>
            {dateFormatter.format(new Date(updatedAt))}
          </time>
        </span>
      ),
    });
  }

  if (readingTimeMinutes !== undefined) {
    items.push({
      key: "reading-time",
      content: <span>{readingTimeMinutes} min read</span>,
    });
  }

  return (
    <div className="text-muted-foreground flex flex-wrap items-center gap-x-3 gap-y-2 text-sm">
      {items.map((item, index) => (
        <span key={item.key} className="inline-flex items-center gap-3">
          {index > 0 && <span aria-hidden="true">&#183;</span>}
          {item.content}
        </span>
      ))}
    </div>
  );
}
