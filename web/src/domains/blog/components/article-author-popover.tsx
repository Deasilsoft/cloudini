import type { Author } from "@/domains/blog/authors";
import { Button } from "@/shared/components/ui/button";
import { ExternalLink, X } from "lucide-react";

type Props = {
  id: string;
  author: Author;
  onClose: () => void;
};

export function ArticleAuthorPopover({ id, author, onClose }: Props) {
  return (
    <section
      id={id}
      className="bg-background absolute top-full right-0 left-0 z-30 mt-2 space-y-4 rounded-2xl border p-5 shadow-xl sm:left-auto sm:w-[28rem]"
    >
      <div className="bg-background absolute top-0 right-8 size-2 -translate-y-1/2 rotate-45 border-t border-l" />

      <div className="flex items-start justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3">
          <img
            src={author.avatarSrc ?? "/favicon-64x64.png"}
            alt={author.name}
            className="size-14 rounded-full border object-cover"
            loading="lazy"
            decoding="async"
          />
          <div className="min-w-0">
            <h2 className="truncate text-lg font-semibold">{author.name}</h2>
            <p className="text-muted-foreground text-sm">{author.role}</p>
          </div>
        </div>

        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="transition-all duration-150"
          aria-label="Close author profile"
          onClick={onClose}
        >
          <X className="size-4" />
        </Button>
      </div>

      <p className="text-muted-foreground text-sm leading-7">{author.bio}</p>

      {author.links.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {author.links.map((link) => {
            const Icon = link.icon ?? ExternalLink;

            return (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener"
                className="hover:text-foreground focus-visible:ring-ring inline-flex items-center gap-1.5 rounded-sm text-sm font-medium underline underline-offset-4 transition-colors focus-visible:ring-2 focus-visible:outline-none"
              >
                <Icon aria-hidden="true" className="size-3.5" />
                {link.label}
              </a>
            );
          })}
        </div>
      )}
    </section>
  );
}
