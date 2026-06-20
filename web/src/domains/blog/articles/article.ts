import type { ComponentType } from "react";

import type {
  ArticleComponentModule,
  ArticleMeta,
  AuthorId,
  Tag,
} from "../types";

export type ArticleComponentLoader = () => Promise<ArticleComponentModule>;

export class Article {
  constructor(
    private readonly meta: ArticleMeta,
    private readonly loadModule: ArticleComponentLoader,
  ) {}

  get slug(): string {
    return this.meta.slug;
  }

  get title(): string {
    return this.meta.title;
  }

  get description(): string {
    return this.meta.description;
  }

  get publishedAt(): string {
    return this.meta.publishedAt;
  }

  get updatedAt(): string | undefined {
    return this.meta.updatedAt;
  }

  get tags(): readonly Tag[] {
    return this.meta.tags;
  }

  get thumbnailSrc(): string | undefined {
    return this.meta.thumbnailSrc;
  }

  get thumbnailAlt(): string | undefined {
    return this.meta.thumbnailAlt;
  }

  get heroSrc(): string | undefined {
    return this.meta.heroSrc;
  }

  get heroAlt(): string | undefined {
    return this.meta.heroAlt;
  }

  get authorId(): AuthorId | undefined {
    return this.meta.authorId;
  }

  isPublished(): boolean {
    return !this.meta.draft;
  }

  getLastModifiedAt(): string {
    return this.meta.updatedAt ?? this.meta.publishedAt;
  }

  async loadComponent(): Promise<ComponentType> {
    const module = await this.loadModule();

    if (!module.default) {
      throw new Error(`Article ${this.slug} is missing a default export`);
    }

    return module.default;
  }
}
