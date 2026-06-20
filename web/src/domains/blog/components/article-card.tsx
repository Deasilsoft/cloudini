import type { Article } from "@/domains/blog/articles/article";
import { ArticleTags } from "@/domains/blog/components/article-tags";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

type Props = {
  article: Article;
};

export function ArticleCard({ article }: Props) {
  const lastModifiedAt = article.getLastModifiedAt();
  const wasUpdated =
    article.updatedAt !== undefined &&
    article.updatedAt !== article.publishedAt;

  return (
    <article>
      <Link
        to={`/blog/${article.slug}`}
        className={
          article.thumbnailSrc
            ? "group bg-background hover:border-foreground/20 focus-visible:ring-ring grid grid-cols-1 gap-5 rounded-2xl border p-4 shadow-sm transition-all duration-200 hover:shadow-md focus-visible:ring-2 focus-visible:outline-none active:translate-y-0 motion-safe:hover:-translate-y-0.5 sm:grid-cols-[128px_minmax(0,1fr)]"
            : "group bg-background hover:border-foreground/20 focus-visible:ring-ring block rounded-2xl border p-5 shadow-sm transition-all duration-200 hover:shadow-md focus-visible:ring-2 focus-visible:outline-none active:translate-y-0 motion-safe:hover:-translate-y-0.5"
        }
      >
        {article.thumbnailSrc && (
          <div className="bg-muted/20 overflow-hidden rounded-xl border">
            <img
              src={article.thumbnailSrc}
              alt={article.thumbnailAlt ?? ""}
              loading="lazy"
              decoding="async"
              className="aspect-square w-full object-contain p-3 transition-transform duration-200 motion-safe:group-hover:scale-[1.02]"
            />
          </div>
        )}

        <div className="min-w-0 space-y-4">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
              <h2 className="text-xl font-semibold tracking-tight">
                {article.title}
              </h2>
              <time
                dateTime={lastModifiedAt}
                className="text-muted-foreground text-xs"
                title={
                  wasUpdated
                    ? `Published ${dateFormatter.format(new Date(article.publishedAt))}`
                    : undefined
                }
              >
                {wasUpdated ? "Updated" : "Published"}{" "}
                {dateFormatter.format(new Date(lastModifiedAt))}
              </time>
            </div>

            <p className="text-muted-foreground text-sm">
              {article.description}
            </p>
          </div>

          <ArticleTags tags={article.tags} />

          <div className="flex justify-end">
            <span className="group-hover:bg-foreground group-hover:text-background inline-flex items-center gap-1 rounded-full border px-3 py-1.5 text-xs font-medium transition-all duration-200">
              Continue reading
              <ArrowRight className="size-3.5 transition-transform duration-200 motion-safe:group-hover:translate-x-0.5" />
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
