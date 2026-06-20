import type { ArticleSort } from "@/domains/blog/hooks/article-list";

type Props = {
  value: ArticleSort;
  articleCount: number;
  onChange: (value: ArticleSort) => void;
};

export function BlogSortSelect({ value, articleCount, onChange }: Props) {
  return (
    <div className="hover:border-foreground/20 flex flex-wrap items-center justify-between gap-3 rounded-xl border px-4 py-3 transition-colors">
      <label className="flex items-center gap-2 text-sm">
        <span className="text-muted-foreground">Sort by</span>
        <select
          value={value}
          onChange={(event) => onChange(event.target.value as ArticleSort)}
          className="focus-visible:ring-ring bg-background rounded-md border px-3 py-1.5 text-sm transition-colors focus-visible:ring-2 focus-visible:outline-none"
          aria-label="Sort articles"
        >
          <option value="newest">Newest first</option>
          <option value="oldest">Oldest first</option>
          <option value="recently-updated">Recently updated</option>
        </select>
      </label>

      <p className="text-muted-foreground text-sm">
        {articleCount} article{articleCount === 1 ? "" : "s"}
      </p>
    </div>
  );
}
