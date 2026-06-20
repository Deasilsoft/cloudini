import { articleService } from "@/domains/blog/article.service.js";
import type { SiteIndex } from "@site-index/core";

const siteIndexes = articleService.getPublished().map((article) => ({
  url: `/blog/${article.slug}` as `/${string}`,
  lastModified: article.getLastModifiedAt(),
  sitemap: "blog",
})) satisfies SiteIndex[];

export default { siteIndexes };
