import type { Article } from "@/domains/blog/articles/article";
import { articleService } from "@/domains/blog/article.service";
import { getAuthorById } from "@/domains/blog/authors";
import { ArticlePageHeader } from "@/domains/blog/components/article-page-header";
import { ArticleTableOfContents } from "@/domains/blog/components/article-table-of-contents";
import { useReadingTime } from "@/domains/blog/hooks/reading-time";
import { useArticleTableOfContents } from "@/domains/blog/hooks/table-of-contents";
import NotFound from "@/domains/errors/routes/not-found";
import { Meta } from "@/shared/components/meta";
import { lazy, Suspense, useMemo, useRef } from "react";
import { useParams } from "react-router";

export default function ArticleBySlug() {
  const { slug } = useParams();
  const article = slug ? articleService.getPublishedBySlug(slug) : undefined;

  if (!article) {
    return <NotFound />;
  }

  return <ArticlePage article={article} />;
}

function ArticlePage({ article }: { article: Article }) {
  const ArticleComponent = useMemo(
    () =>
      lazy(() =>
        article.loadComponent().then((Component) => ({ default: Component })),
      ),
    [article],
  );
  const author = article.authorId ? getAuthorById(article.authorId) : undefined;
  const articleBodyRef = useRef<HTMLElement | null>(null);
  const readingTimeMinutes = useReadingTime(articleBodyRef);
  const tableOfContents = useArticleTableOfContents(articleBodyRef);
  const articleTableOfContents = useMemo(
    () => [
      {
        id: "article-title",
        title: article.title,
        depth: 1 as const,
      },
      ...tableOfContents,
    ],
    [article.title, tableOfContents],
  );

  return (
    <>
      <Meta
        title={article.title}
        description={article.description}
        type="article"
        tags={article.tags}
      />

      <article className="w-full max-w-5xl space-y-8">
        <ArticlePageHeader
          article={article}
          author={author}
          readingTimeMinutes={readingTimeMinutes}
        />

        <ArticleTableOfContents
          items={articleTableOfContents}
          variant="mobile"
        />

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_260px]">
          <section
            ref={articleBodyRef}
            className="min-w-0 space-y-8 text-[1.03rem] leading-8 [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:font-semibold [&_h3]:mt-8 [&_h3]:text-xl [&_h3]:font-semibold"
          >
            <Suspense
              fallback={
                <p className="text-muted-foreground">Loading article...</p>
              }
            >
              <ArticleComponent />
            </Suspense>
          </section>

          <ArticleTableOfContents
            items={articleTableOfContents}
            variant="desktop"
          />
        </div>
      </article>
    </>
  );
}
