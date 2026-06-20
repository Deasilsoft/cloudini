import { Article, type ArticleComponentLoader } from "./articles/article";
import type { ArticleComponentModule, ArticleMeta } from "./types";

const ARTICLES_DIRECTORY_PREFIX = "./articles/";
const META_FILE_SUFFIX = "/meta.ts";
const ARTICLE_COMPONENT_FILE_SUFFIX = "/article.tsx";

export class ArticleRepository {
  // Vite requires import.meta.glob patterns to be inline string literals.
  private readonly articleMetaModules = import.meta.glob<ArticleMeta>(
    "./articles/**/meta.ts",
    {
      eager: true,
      import: "article",
    },
  );

  private readonly articleComponentModules =
    import.meta.glob<ArticleComponentModule>("./articles/**/article.tsx");

  private readonly allArticles: readonly Article[] = this.buildArticles();

  private readonly articleBySlug: ReadonlyMap<string, Article> =
    this.indexBySlug(this.allArticles);

  getAll(): readonly Article[] {
    return this.allArticles;
  }

  getBySlug(slug: string): Article | undefined {
    return this.articleBySlug.get(slug);
  }

  private buildArticles(): readonly Article[] {
    return Object.entries(this.articleMetaModules)
      .map(([metaPath, meta]) => this.createArticle(metaPath, meta))
      .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
  }

  private createArticle(
    metaPath: string,
    meta: ArticleMeta | undefined,
  ): Article {
    if (!meta) {
      throw new Error(
        `Invalid blog article metadata module at ${metaPath}: missing "article" export`,
      );
    }

    this.assertSlugMatchesFolderPath(metaPath, meta.slug);

    return new Article(meta, this.getArticleLoader(metaPath, meta.slug));
  }

  private getArticleLoader(
    metaPath: string,
    slug: string,
  ): ArticleComponentLoader {
    const articlePath = this.getArticleComponentPathFromMetaPath(metaPath);
    const loadModule = this.articleComponentModules[articlePath];

    if (!loadModule) {
      throw new Error(
        `Missing blog article component module for slug "${slug}"`,
      );
    }

    return loadModule;
  }

  private getArticleComponentPathFromMetaPath(metaPath: string): string {
    return metaPath.replace(META_FILE_SUFFIX, ARTICLE_COMPONENT_FILE_SUFFIX);
  }

  private getSlugFromMetaPath(metaPath: string): string {
    return metaPath
      .replace(ARTICLES_DIRECTORY_PREFIX, "")
      .replace(META_FILE_SUFFIX, "");
  }

  private assertSlugMatchesFolderPath(metaPath: string, slug: string): void {
    const expectedSlug = this.getSlugFromMetaPath(metaPath);

    if (slug !== expectedSlug) {
      throw new Error(
        `Article slug "${slug}" does not match article folder "${expectedSlug}"`,
      );
    }
  }

  private indexBySlug(
    articles: readonly Article[],
  ): ReadonlyMap<string, Article> {
    const indexedArticles = new Map<string, Article>();

    for (const article of articles) {
      if (indexedArticles.has(article.slug)) {
        throw new Error(`Duplicate blog article slug: ${article.slug}`);
      }

      indexedArticles.set(article.slug, article);
    }

    return indexedArticles;
  }
}

export function createArticleRepository(): ArticleRepository {
  return new ArticleRepository();
}
