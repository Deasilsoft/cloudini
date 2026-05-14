import { publishedArticles } from "@/domains/blog/articles/index.js";

const siteIndexes = publishedArticles.map((article) => ({
  url: `/blog/${article.slug}`,
  lastModified: article.updatedAt ?? article.publishedAt,
}));

export default { siteIndexes };
