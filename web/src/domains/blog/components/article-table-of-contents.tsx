import type { TableOfContentsItem } from "@/domains/blog/hooks/table-of-contents";
import { cn } from "@/shared/lib/cn";
import { ChevronDown } from "lucide-react";

type Props = {
  items: readonly TableOfContentsItem[];
  variant: "mobile" | "desktop";
};

type LinkProps = {
  items: readonly TableOfContentsItem[];
  className?: string;
};

function ArticleTableOfContentsLinks({ items, className }: LinkProps) {
  return (
    <nav className={cn("space-y-1", className)}>
      {items.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          className={cn(
            "hover:bg-muted hover:text-foreground block rounded-md px-2 py-1.5 text-sm leading-5 transition-all",
            "focus-visible:ring-ring focus-visible:ring-2 focus-visible:outline-none",
            item.depth === 1 && "font-medium",
            item.depth === 2 && "text-muted-foreground",
            item.depth === 3 && "text-muted-foreground pl-5 text-xs",
          )}
        >
          {item.title}
        </a>
      ))}
    </nav>
  );
}

export function ArticleTableOfContents({ items, variant }: Props) {
  if (items.length === 0) {
    return null;
  }

  if (variant === "mobile") {
    return (
      <details className="group bg-muted/20 rounded-xl border p-4 shadow-sm lg:hidden">
        <summary className="cursor-pointer list-none text-sm font-semibold">
          <span className="inline-flex w-full items-center justify-between gap-3">
            On this page
            <ChevronDown className="size-4 transition-transform group-open:rotate-180" />
          </span>
        </summary>

        <ArticleTableOfContentsLinks
          items={items}
          className="mt-3 max-h-[60vh] overflow-y-auto pr-1"
        />
      </details>
    );
  }

  return (
    <aside className="hidden lg:block">
      <div className="bg-background sticky top-0 max-h-[calc(100vh-8.1rem)] overflow-hidden rounded-xl border p-4 shadow-sm">
        <div className="flex max-h-[calc(100vh-9.5rem)] min-h-0 flex-col">
          <h2 className="shrink-0 text-sm font-semibold">On this page</h2>
          <ArticleTableOfContentsLinks
            items={items}
            className="mt-3 min-h-0 flex-1 overflow-y-auto pr-1"
          />
        </div>
      </div>
    </aside>
  );
}
