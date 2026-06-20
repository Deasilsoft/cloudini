import type { Article } from "@/domains/blog/articles/article";
import type { Author } from "@/domains/blog/authors";
import { ArticleAuthorCard } from "@/domains/blog/components/article-author-card";
import { ArticleHeroImage } from "@/domains/blog/components/article-hero-image";
import { ArticleMetaRow } from "@/domains/blog/components/article-meta-row";
import { ArticleTags } from "@/domains/blog/components/article-tags";
import { Button } from "@/shared/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router";

type Props = {
  article: Article;
  author: Author | undefined;
  readingTimeMinutes: number | undefined;
};

export function ArticlePageHeader({
  article,
  author,
  readingTimeMinutes,
}: Props) {
  return (
    <header className="space-y-6">
      <Button asChild variant="ghost" size="sm" className="w-fit gap-2 px-0">
        <Link to="/blog">
          <ArrowLeft className="size-4" />
          Back to blog
        </Link>
      </Button>

      <div className="space-y-4">
        <h1
          id="article-title"
          className="max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl"
        >
          {article.title}
        </h1>
        <p className="text-muted-foreground max-w-3xl text-lg leading-8 sm:text-xl">
          {article.description}
        </p>
      </div>

      <div className="space-y-3">
        <ArticleMetaRow
          publishedAt={article.publishedAt}
          updatedAt={article.updatedAt}
          readingTimeMinutes={readingTimeMinutes}
        />
        <ArticleTags tags={article.tags} />
      </div>

      {author && <ArticleAuthorCard author={author} />}

      <ArticleHeroImage src={article.heroSrc} alt={article.heroAlt} />
    </header>
  );
}
