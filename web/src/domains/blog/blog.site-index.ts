import { publishedArticles } from "@/domains/blog/articles/index.js";
import type { SiteIndex } from "@site-index/core";

const siteIndexes = publishedArticles.map((article) => ({
  url: `/blog/${article.slug}` as `/${string}`,
  lastModified: article.updatedAt ?? article.publishedAt,
  sitemap: "blog",
})) satisfies SiteIndex[];

export default { siteIndexes };
