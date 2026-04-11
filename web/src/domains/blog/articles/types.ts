import type { ComponentType } from "react";

export const BLOG_TAGS = [
  "Cloudini",
  "Serverless",
  "Architecture",
  "AWS",
  "TypeScript",
  "Infrastructure",
] as const;

export type BlogTag = (typeof BLOG_TAGS)[number];

export type BlogArticleMeta = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  updatedAt?: string;
  tags: BlogTag[];
  thumbnailSrc?: string;
  thumbnailAlt?: string;
  draft?: boolean;
};

export type BlogArticleModule = {
  article: BlogArticleMeta;
  default: ComponentType;
};
