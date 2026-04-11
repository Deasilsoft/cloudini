import { BlogArticleMeta } from "@/domains/blog/articles/types";

export const article: BlogArticleMeta = {
  slug: "example",
  title: "Example Article",
  description: "This is an example article.",
  publishedAt: "2026-04-10T00:00:00.000Z",
  tags: ["Cloudini", "Serverless"],
  thumbnailSrc: "/apple-touch-icon.png",
  thumbnailAlt: "Example article thumbnail",
  draft: true,
};

export default function ExampleArticle() {
  return (
    <article className="max-w-3xl space-y-8">
      <header className="space-y-3">
        <h1 className="text-xl leading-tight font-bold">Example Article</h1>
        <p className="leading-relaxed">
          This is an example article. It doesn't have any content, but it serves
          as a template for future articles. You can use this as a starting
          point for writing your own articles about Cloudini and serverless
          systems.
        </p>
      </header>

      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Section Heading</h2>
        <p className="leading-relaxed">
          This is a section of the article. You can write about any topic
          related to Cloudini, such as how to use it, how it works, or your
          thoughts on serverless architecture. Feel free to include code
          snippets, diagrams, or any other content that helps illustrate your
          points.
        </p>
      </section>
    </article>
  );
}
