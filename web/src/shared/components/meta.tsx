import { Helmet } from "react-helmet-async";

type Props = {
  title?: string;
  description?: string;
  type?: "website" | "article";
};

const BRAND = "Cloudini";

export const Meta = ({ title, description, type = "website" }: Props) => {
  const normalizedTitle =
    !title || title.trim() === "" || title === BRAND
      ? BRAND
      : `${title} – ${BRAND}`;

  const url = typeof window !== "undefined" ? window.location.href : undefined;

  return (
    <Helmet>
      <title>{normalizedTitle}</title>
      {description && <meta name="description" content={description} />}
      <meta property="og:title" content={normalizedTitle} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:type" content={type} />
      {url && <meta property="og:url" content={url} />}
      {url && <link rel="canonical" href={url} />}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={normalizedTitle} />
      {description && <meta name="twitter:description" content={description} />}
    </Helmet>
  );
};
