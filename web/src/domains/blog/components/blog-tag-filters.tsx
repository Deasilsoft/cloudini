import { TAGS, type Tag } from "@/domains/blog/types";
import { Button } from "@/shared/components/ui/button";

type Props = {
  selectedTags: readonly Tag[];
  onToggleTag: (tag: Tag) => void;
  onClearTags: () => void;
};

export function BlogTagFilters({
  selectedTags,
  onToggleTag,
  onClearTags,
}: Props) {
  return (
    <div className="flex flex-wrap gap-2">
      {TAGS.map((tag) => {
        const isSelected = selectedTags.includes(tag);

        return (
          <Button
            key={tag}
            type="button"
            variant={isSelected ? "default" : "outline"}
            size="sm"
            className={
              isSelected
                ? "shadow-sm transition-all duration-150"
                : "hover:border-foreground/20 transition-all duration-150"
            }
            aria-pressed={isSelected}
            onClick={() => onToggleTag(tag)}
          >
            {tag}
          </Button>
        );
      })}

      {selectedTags.length > 0 && (
        <Button
          type="button"
          variant="ghost"
          size="sm"
          className="transition-all duration-150"
          onClick={onClearTags}
        >
          Clear filters
        </Button>
      )}
    </div>
  );
}
