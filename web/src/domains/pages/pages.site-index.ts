import type { SiteIndex } from "@site-index/core";

const staticRoutes = [
  "/",
  "/privacy-policy",
  "/terms",
  "/contact-us",
  "/blog",
] as const satisfies readonly `/${string}`[];

const siteIndexes = staticRoutes.map((url) => ({
  url,
  sitemap: "pages",
})) satisfies SiteIndex[];

export default { siteIndexes };
