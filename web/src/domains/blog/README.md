# Blog Articles

Each article lives under:

```text
articles/<slug>/meta.ts
articles/<slug>/article.tsx
```

Authoring contract:

- Folder name must match `article.slug` in `meta.ts`.
- `meta.ts` must export `article`.
- `article.tsx` must default-export the React article component.
- `draft: true` hides the article from `/blog`, `/blog/:slug`, and sitemap
  output.
- `publishedAt` and `updatedAt` should be ISO date strings.
- `tags` must come from `TAGS`.
- `authorId` is optional; authors are defined in `authors.ts`.
- `thumbnailSrc` / `thumbnailAlt` power blog card thumbnails.
- `heroSrc` / `heroAlt` optionally power article hero images.
- `h2` and `h3` headings are used to build the article table of contents.
- Reading time is calculated from rendered article text at runtime.

Example:

```text
articles/my-article/
  meta.ts
  article.tsx
```

## Architecture

- Article discovery lives in `article.repository.ts`.
- Published article access lives in `article.service.ts`.
- Route files should stay thin and mostly orchestrate data + page composition.
- Reusable blog UI belongs in `components/`.
- DOM-derived article helpers belong in `hooks/`.
