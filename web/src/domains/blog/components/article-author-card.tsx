import type { Author } from "@/domains/blog/authors";
import { ArticleAuthorPopover } from "@/domains/blog/components/article-author-popover";
import { cn } from "@/shared/lib/cn";
import { ChevronDown } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";

type Props = {
  author: Author;
};

export function ArticleAuthorCard({ author }: Props) {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const profileId = useId();
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!isProfileOpen) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent): void {
      if (event.key === "Escape") {
        setIsProfileOpen(false);
      }
    }

    function handlePointerDown(event: MouseEvent): void {
      if (!containerRef.current?.contains(event.target as Node)) {
        setIsProfileOpen(false);
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handlePointerDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handlePointerDown);
    };
  }, [isProfileOpen]);

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        className="bg-muted/20 hover:bg-muted/40 hover:border-foreground/20 focus-visible:ring-ring flex w-full items-center justify-between gap-4 rounded-2xl border p-4 text-left shadow-sm transition-all duration-200 focus-visible:ring-2 focus-visible:outline-none active:translate-y-px"
        aria-expanded={isProfileOpen}
        aria-controls={profileId}
        aria-label={`View profile for ${author.name}`}
        onClick={() => setIsProfileOpen((current) => !current)}
      >
        <div className="flex min-w-0 items-center gap-3">
          <img
            src={author.avatarSrc ?? "/favicon-64x64.png"}
            alt={author.name}
            className="size-12 rounded-full border object-cover"
            loading="lazy"
            decoding="async"
          />
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold">{author.name}</p>
            <p className="text-muted-foreground truncate text-xs">
              {author.role}
            </p>
          </div>
        </div>

        <span className="text-muted-foreground inline-flex items-center gap-1 text-xs font-medium">
          {isProfileOpen ? "Hide profile" : "View profile"}
          <ChevronDown
            className={cn(
              "size-4 transition-transform duration-200",
              isProfileOpen && "rotate-180",
            )}
          />
        </span>
      </button>

      {isProfileOpen && (
        <ArticleAuthorPopover
          id={profileId}
          author={author}
          onClose={() => setIsProfileOpen(false)}
        />
      )}
    </div>
  );
}
