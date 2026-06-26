import { articleService } from "@/domains/blog/article.service";
import { ArticleCard } from "@/domains/blog/components/article-card";
import { BlogHeader } from "@/domains/blog/components/blog-header";
import { BlogSortSelect } from "@/domains/blog/components/blog-sort-select";
import { BlogTagFilters } from "@/domains/blog/components/blog-tag-filters";
import { useArticleList } from "@/domains/blog/hooks/article-list";
import { Meta } from "@/shared/components/meta";
import { useInfiniteScroll } from "@/shared/hooks/infinite-scroll";

const ARTICLES_LOAD_COUNT = 10;

const publishedArticles = articleService.getPublished();

export default function BlogIndex() {
  const articleList = useArticleList(publishedArticles, ARTICLES_LOAD_COUNT);

  const loadMoreRef = useInfiniteScroll({
    isEnabled: articleList.hasMoreArticles,
    onIntersect: articleList.showMoreArticles,
  });

  return (
    <>
      <Meta
        title="Blog | Cloudini CLI and Framework"
        description="Practical notes on Cloudini CLI and framework, serverless cloud architecture, Terraform workflows, and developer tooling."
      />

      <article className="w-full max-w-5xl space-y-8">
        <header className="space-y-4">
          <BlogHeader />
          <BlogTagFilters
            selectedTags={articleList.selectedTags}
            onToggleTag={articleList.toggleTag}
            onClearTags={articleList.clearTags}
          />
          <BlogSortSelect
            value={articleList.sortBy}
            articleCount={articleList.totalArticleCount}
            onChange={articleList.setSortBy}
          />
        </header>

        {articleList.totalArticleCount === 0 ? (
          <p className="text-muted-foreground text-sm">No articles found.</p>
        ) : (
          <section className="space-y-6">
            {articleList.visibleArticles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </section>
        )}

        {articleList.hasMoreArticles && (
          <div
            ref={loadMoreRef}
            className="text-muted-foreground py-2 text-center text-sm"
          >
            Loading more articles...
          </div>
        )}
      </article>
    </>
  );
}
