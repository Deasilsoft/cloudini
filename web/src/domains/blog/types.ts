import type { ComponentType } from "react";

export const TAGS = ["Architecture", "Documentation", "PlantUML"] as const;

export type Tag = (typeof TAGS)[number];

export type AuthorId = "sondre";

export type ArticleMeta = {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  updatedAt?: string;
  tags: readonly Tag[];
  thumbnailSrc?: string;
  thumbnailAlt?: string;
  heroSrc?: string;
  heroAlt?: string;
  authorId?: AuthorId;
  draft?: boolean;
};

export type ArticleComponentModule = {
  default: ComponentType;
};
