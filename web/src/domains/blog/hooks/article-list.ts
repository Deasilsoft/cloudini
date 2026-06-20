import type { Article } from "@/domains/blog/articles/article";
import type { Tag } from "@/domains/blog/types";
import { useCallback, useEffect, useMemo, useState } from "react";

export type ArticleSort = "newest" | "oldest" | "recently-updated";

export function useArticleList(
  articles: readonly Article[],
  loadCount: number,
) {
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);
  const [sortBy, setSortBy] = useState<ArticleSort>("newest");
  const [visibleCount, setVisibleCount] = useState(loadCount);

  const filteredArticles = useMemo(() => {
    if (selectedTags.length === 0) {
      return articles;
    }

    return articles.filter((article) =>
      selectedTags.every((tag) => article.tags.includes(tag)),
    );
  }, [articles, selectedTags]);

  const sortedArticles = useMemo(() => {
    const orderedArticles = [...filteredArticles];

    if (sortBy === "oldest") {
      return orderedArticles.sort((a, b) =>
        a.publishedAt.localeCompare(b.publishedAt),
      );
    }

    if (sortBy === "recently-updated") {
      return orderedArticles.sort((a, b) =>
        b.getLastModifiedAt().localeCompare(a.getLastModifiedAt()),
      );
    }

    return orderedArticles.sort((a, b) =>
      b.publishedAt.localeCompare(a.publishedAt),
    );
  }, [filteredArticles, sortBy]);

  useEffect(() => {
    setVisibleCount(loadCount);
  }, [loadCount, selectedTags, sortBy]);

  const visibleArticles = useMemo(
    () => sortedArticles.slice(0, visibleCount),
    [sortedArticles, visibleCount],
  );

  const hasMoreArticles = visibleCount < sortedArticles.length;

  const toggleTag = useCallback((tag: Tag): void => {
    setSelectedTags((current) =>
      current.includes(tag)
        ? current.filter((currentTag) => currentTag !== tag)
        : [...current, tag],
    );
  }, []);

  const clearTags = useCallback(() => {
    setSelectedTags([]);
  }, []);

  const showMoreArticles = useCallback(() => {
    setVisibleCount((current) =>
      Math.min(current + loadCount, sortedArticles.length),
    );
  }, [loadCount, sortedArticles.length]);

  return {
    selectedTags,
    sortBy,
    visibleArticles,
    totalArticleCount: sortedArticles.length,
    hasMoreArticles,
    setSortBy,
    toggleTag,
    clearTags,
    showMoreArticles,
  };
}
