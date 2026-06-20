import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router";

type Props = {
  title?: string;
  description?: string;
  type?: "website" | "article";
  tags?: readonly string[];
};

const BRAND = "Cloudini";
const CANONICAL_SITE_URL = "https://cloudini.org";

function normalizeTitle(title?: string): string {
  if (!title?.trim() || title === BRAND) {
    return BRAND;
  }

  return `${title} – ${BRAND}`;
}

function getPagePath(pathname: string, search: string): string {
  return `${pathname}${search}`;
}

function getCanonicalUrl(pathname: string, search: string): string {
  return `${CANONICAL_SITE_URL}${getPagePath(pathname, search)}`;
}

export const Meta = ({ title, description, type = "website", tags }: Props) => {
  const location = useLocation();
  const normalizedTitle = normalizeTitle(title);
  const keywordContent = tags?.length ? tags.join(", ") : undefined;
  const url = getCanonicalUrl(location.pathname, location.search);

  return (
    <Helmet>
      <title>{normalizedTitle}</title>
      {description && <meta name="description" content={description} />}
      {keywordContent && <meta name="keywords" content={keywordContent} />}
      <meta property="og:title" content={normalizedTitle} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      {type === "article" &&
        tags?.map((tag) => (
          <meta key={tag} property="article:tag" content={tag} />
        ))}
      <link rel="canonical" href={url} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={normalizedTitle} />
      {description && <meta name="twitter:description" content={description} />}
    </Helmet>
  );
};
