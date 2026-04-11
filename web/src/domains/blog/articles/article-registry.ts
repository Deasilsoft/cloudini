import type { BlogArticleMeta, BlogArticleModule } from "./types";

type BlogArticleRegistryEntry = {
  path: string;
  article: BlogArticleMeta;
};

const articleMetaModules = import.meta.glob<BlogArticleMeta>("./**/index.tsx", {
  eager: true,
  import: "article",
});

const articleComponentModules = import.meta.glob<BlogArticleModule>(
  "./**/index.tsx",
);

function getArticleFromModule(
  path: string,
  article: BlogArticleMeta | undefined,
): BlogArticleMeta {
  if (!article) {
    throw new Error(
      `Invalid blog article module at ${path}: missing "article" export`,
    );
  }

  return article;
}

function isPublishedArticle(article: BlogArticleMeta): boolean {
  return !article.draft;
}

function compareArticlesByPublishedAtDesc(
  a: BlogArticleMeta,
  b: BlogArticleMeta,
): number {
  return b.publishedAt.localeCompare(a.publishedAt);
}

function indexArticlesBySlug(
  articles: BlogArticleMeta[],
): Record<string, BlogArticleMeta> {
  const indexedArticles: Record<string, BlogArticleMeta> = {};

  for (const article of articles) {
    if (indexedArticles[article.slug]) {
      throw new Error(`Duplicate blog article slug: ${article.slug}`);
    }

    indexedArticles[article.slug] = article;
  }

  return indexedArticles;
}

function indexArticleComponentLoadersBySlug(
  entries: BlogArticleRegistryEntry[],
): Record<string, () => Promise<BlogArticleModule>> {
  const indexedLoaders: Record<string, () => Promise<BlogArticleModule>> = {};

  for (const entry of entries) {
    const loadModule = articleComponentModules[entry.path];

    if (!loadModule) {
      throw new Error(
        `Missing lazy blog article component loader for slug: ${entry.article.slug}`,
      );
    }

    if (indexedLoaders[entry.article.slug]) {
      throw new Error(`Duplicate blog article slug: ${entry.article.slug}`);
    }

    indexedLoaders[entry.article.slug] = loadModule;
  }

  return indexedLoaders;
}

const allArticleEntries: BlogArticleRegistryEntry[] = Object.entries(
  articleMetaModules,
).map(([path, article]) => ({
  path,
  article: getArticleFromModule(path, article),
}));

export const allArticles = allArticleEntries
  .map((entry) => entry.article)
  .sort(compareArticlesByPublishedAtDesc);

export const publishedArticles = allArticles.filter(isPublishedArticle);

export const publishedArticleBySlug = indexArticlesBySlug(publishedArticles);

export const articleComponentLoadersBySlug =
  indexArticleComponentLoadersBySlug(allArticleEntries);
