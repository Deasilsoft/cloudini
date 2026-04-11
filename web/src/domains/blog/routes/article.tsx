import {
  articleComponentLoadersBySlug,
  publishedArticleBySlug,
} from "@/domains/blog/articles";
import NotFound from "@/domains/errors/routes/not-found";
import { Meta } from "@/shared/components/meta";
import { Button } from "@/shared/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { lazy, Suspense } from "react";
import { Link, useParams } from "react-router";

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

export default function Article() {
  const { slug } = useParams();

  if (!slug) {
    return <NotFound />;
  }

  const article = publishedArticleBySlug[slug];
  const loadComponent = articleComponentLoadersBySlug[slug];

  if (!article || !loadComponent) {
    return <NotFound />;
  }

  const ArticleComponent = lazy(loadComponent);
  const updatedAt = article.updatedAt;
  const showUpdatedAt =
    updatedAt !== undefined && updatedAt !== article.publishedAt;

  return (
    <>
      <Meta
        title={article.title}
        description={article.description}
        type="article"
        tags={article.tags}
      />

      <article className="max-w-3xl space-y-8">
        <header className="space-y-4">
          <Button
            asChild
            variant="ghost"
            size="sm"
            className="w-fit gap-2 px-0"
          >
            <Link to="/blog">
              <ArrowLeft className="size-4" />
              Back to blog
            </Link>
          </Button>

          <div className="space-y-3">
            <h1 className="text-3xl font-semibold tracking-tight">
              {article.title}
            </h1>
            <p className="text-muted-foreground">{article.description}</p>
          </div>

          <div className="space-y-3">
            <div className="text-muted-foreground flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
              <p>
                Published{" "}
                <time dateTime={article.publishedAt}>
                  {dateFormatter.format(new Date(article.publishedAt))}
                </time>
              </p>

              {showUpdatedAt && (
                <p>
                  Updated{" "}
                  <time dateTime={updatedAt}>
                    {dateFormatter.format(new Date(updatedAt))}
                  </time>
                </p>
              )}
            </div>

            {article.tags.length > 0 && (
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
            )}
          </div>
        </header>

        <Suspense
          fallback={<p className="text-muted-foreground">Loading article…</p>}
        >
          <ArticleComponent />
        </Suspense>
      </article>
    </>
  );
}
