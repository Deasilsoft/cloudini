import { createArticleRepository } from "./article.repository";
import type { Article } from "./articles/article";

type ArticleSource = {
  getAll(): readonly Article[];
};

export class ArticleService {
  private readonly publishedArticles: readonly Article[];
  private readonly publishedArticleBySlug: ReadonlyMap<string, Article>;

  constructor(source: ArticleSource) {
    this.publishedArticles = source
      .getAll()
      .filter((article) => article.isPublished());

    this.publishedArticleBySlug = this.indexBySlug(this.publishedArticles);
  }

  getPublished(): readonly Article[] {
    return this.publishedArticles;
  }

  getPublishedBySlug(slug: string): Article | undefined {
    return this.publishedArticleBySlug.get(slug);
  }

  private indexBySlug(
    articles: readonly Article[],
  ): ReadonlyMap<string, Article> {
    return new Map(articles.map((article) => [article.slug, article]));
  }
}

export function createArticleService(
  source: ArticleSource = createArticleRepository(),
): ArticleService {
  return new ArticleService(source);
}

export const articleService = createArticleService();
