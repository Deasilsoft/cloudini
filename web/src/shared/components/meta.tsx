import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router";

type Props = {
  title?: string;
  description?: string;
  type?: "website" | "article";
  tags?: readonly string[];
  canonical?: string;
  image?: string;
  robots?: string;
  noIndex?: boolean;
};

const DEFAULT_TITLE =
  "Cloudini CLI and Framework | Serverless Cloud Development";
const SITE_NAME = "cloudini.org";
const CANONICAL_SITE_URL = "https://cloudini.org";
const DEFAULT_SOCIAL_IMAGE = `${CANONICAL_SITE_URL}/android-chrome-512x512.png`;

function normalizeTitle(title?: string): string {
  if (!title?.trim()) {
    return DEFAULT_TITLE;
  }

  const trimmedTitle = title.trim();

  if (trimmedTitle.includes("|")) {
    return trimmedTitle;
  }

  return `${trimmedTitle} | ${SITE_NAME}`;
}

function getCanonicalUrl(pathname: string): string {
  return `${CANONICAL_SITE_URL}${pathname}`;
}

export const Meta = ({
  title,
  description,
  type = "website",
  tags,
  canonical,
  image = DEFAULT_SOCIAL_IMAGE,
  robots,
  noIndex = false,
}: Props) => {
  const location = useLocation();
  const normalizedTitle = normalizeTitle(title);
  const keywordContent = tags?.length ? tags.join(", ") : undefined;
  const url = canonical ?? getCanonicalUrl(location.pathname);
  const robotsContent = robots ?? (noIndex ? "noindex" : undefined);

  return (
    <Helmet>
      <title>{normalizedTitle}</title>
      {description && <meta name="description" content={description} />}
      {keywordContent && <meta name="keywords" content={keywordContent} />}
      {robotsContent && <meta name="robots" content={robotsContent} />}
      <meta property="og:title" content={normalizedTitle} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={SITE_NAME} />
      {image && <meta property="og:image" content={image} />}
      {type === "article" &&
        tags?.map((tag) => (
          <meta key={tag} property="article:tag" content={tag} />
        ))}
      <link rel="canonical" href={url} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={normalizedTitle} />
      {description && <meta name="twitter:description" content={description} />}
      {image && <meta name="twitter:image" content={image} />}
    </Helmet>
  );
};
