import {
  BLOG_TAGS,
  type BlogTag,
  publishedArticles,
} from "@/domains/blog/articles";
import { Button } from "@/shared/components/ui/button";
import { useInfiniteScroll } from "@/shared/hooks/infinite-scroll";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Link } from "react-router";

const ARTICLES_LOAD_COUNT = 10;

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

export default function BlogIndex() {
  const [selectedTags, setSelectedTags] = useState<BlogTag[]>([]);
  const [visibleCount, setVisibleCount] = useState(ARTICLES_LOAD_COUNT);

  const filteredArticles = useMemo(() => {
    if (selectedTags.length === 0) {
      return publishedArticles;
    }

    return publishedArticles.filter((article) =>
      selectedTags.every((tag) => article.tags.includes(tag)),
    );
  }, [selectedTags]);

  const visibleArticles = filteredArticles.slice(0, visibleCount);
  const hasMoreArticles = visibleCount < filteredArticles.length;

  useEffect(() => {
    setVisibleCount(ARTICLES_LOAD_COUNT);
  }, [filteredArticles.length]);

  const handleIntersect = useCallback(() => {
    setVisibleCount((current) =>
      Math.min(current + ARTICLES_LOAD_COUNT, filteredArticles.length),
    );
  }, [filteredArticles.length]);

  const loadMoreRef = useInfiniteScroll({
    isEnabled: hasMoreArticles,
    onIntersect: handleIntersect,
  });

  function toggleTag(tag: BlogTag): void {
    setSelectedTags((current) =>
      current.includes(tag)
        ? current.filter((currentTag) => currentTag !== tag)
        : [...current, tag],
    );
  }

  function clearTags(): void {
    setSelectedTags([]);
  }

  return (
    <article className="max-w-3xl space-y-8">
      <div className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {BLOG_TAGS.map((tag) => {
            const isSelected = selectedTags.includes(tag);

            return (
              <Button
                key={tag}
                type="button"
                variant={isSelected ? "default" : "outline"}
                size="sm"
                aria-pressed={isSelected}
                onClick={() => toggleTag(tag)}
              >
                {tag}
              </Button>
            );
          })}

          {selectedTags.length > 0 && (
            <Button type="button" variant="ghost" size="sm" onClick={clearTags}>
              Clear filters
            </Button>
          )}
        </div>

        <header className="space-y-3">
          <h1 className="text-3xl font-semibold tracking-tight">Blog</h1>
          <p className="text-muted-foreground">
            Articles on Cloudini, serverless architecture, and practical
            software design—covering ideas, patterns, and real-world usage.
          </p>
        </header>
      </div>

      {filteredArticles.length === 0 ? (
        <p className="text-muted-foreground text-sm">No articles found.</p>
      ) : (
        <section className="space-y-6">
          {visibleArticles.map((article) => (
            <article key={article.slug}>
              <Link
                to={`/blog/${article.slug}`}
                className={
                  article.thumbnailSrc
                    ? "hover:bg-muted grid grid-cols-1 gap-4 rounded-lg border p-5 transition-colors sm:grid-cols-[144px_minmax(0,1fr)]"
                    : "hover:bg-muted block rounded-lg border p-5 transition-colors"
                }
              >
                {article.thumbnailSrc && (
                  <div className="overflow-hidden rounded-md">
                    <img
                      src={article.thumbnailSrc}
                      alt={article.thumbnailAlt ?? ""}
                      loading="lazy"
                      decoding="async"
                      className="h-40 w-full object-cover sm:h-24 sm:w-36"
                    />
                  </div>
                )}

                <div className="min-w-0 space-y-3">
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                      <h2 className="text-lg font-semibold">{article.title}</h2>
                      <time
                        dateTime={article.publishedAt}
                        className="text-muted-foreground text-xs"
                      >
                        {dateFormatter.format(new Date(article.publishedAt))}
                      </time>
                    </div>

                    <p className="text-muted-foreground text-sm">
                      {article.description}
                    </p>
                  </div>

                  <ul className="flex flex-wrap gap-2">
                    {article.tags.map((tag) => (
                      <li
                        key={tag}
                        className="bg-muted text-muted-foreground rounded-md px-2 py-1 text-xs"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </Link>
            </article>
          ))}
        </section>
      )}

      {hasMoreArticles && <div ref={loadMoreRef} className="h-1" />}
    </article>
  );
}
