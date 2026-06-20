type Props = {
  src: string | undefined;
  alt: string | undefined;
};

export function ArticleHeroImage({ src, alt }: Props) {
  if (!src) {
    return null;
  }

  return (
    <div className="bg-muted/20 hover:border-foreground/20 overflow-hidden rounded-2xl border shadow-sm transition-colors duration-200">
      <img
        src={src}
        alt={alt ?? ""}
        loading="eager"
        decoding="async"
        className="mx-auto max-h-[420px] w-full object-contain p-6 transition-transform duration-300 motion-safe:hover:scale-[1.01]"
      />
    </div>
  );
}
