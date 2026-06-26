import { cn } from "@/shared/lib/cn";
import { cva, type VariantProps } from "class-variance-authority";
import { type LucideIcon } from "lucide-react";
import * as React from "react";

const cardVariants = cva("rounded-lg border p-4", {
  variants: {
    variant: {
      default: "border-border bg-background text-foreground",
      warning:
        "border-orange-200 bg-orange-50 text-orange-900 dark:border-orange-900/60 dark:bg-orange-950/40 dark:text-orange-200",
      success:
        "border-emerald-200 bg-emerald-50 text-emerald-900 dark:border-emerald-900/60 dark:bg-emerald-950/40 dark:text-emerald-200",
    },
    size: {
      xs: "rounded-md px-2 py-1.5 text-xs",
      sm: "px-3 py-2 text-sm",
      default: "p-4 text-base",
      lg: "p-5 text-lg",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

const iconSizeByCardSize = {
  xs: "size-3.5",
  sm: "size-4",
  default: "size-4",
  lg: "size-5",
} as const;

const largeIconSizeByCardSize = {
  xs: "size-4",
  sm: "size-5",
  default: "size-5",
  lg: "size-6",
} as const;

type CardIconSize = "inline" | "large" | "full";

function Card({
  className,
  variant,
  size = "default",
  icon: Icon,
  iconSize = "inline",
  children,
  ...props
}: React.ComponentProps<"div"> &
  VariantProps<typeof cardVariants> & {
    icon?: LucideIcon;
    iconSize?: CardIconSize;
  }) {
  const sizeKey = size ?? "default";
  const iconClassName =
    iconSize === "full"
      ? "h-full w-auto min-h-5 shrink-0 self-stretch"
      : iconSize === "large"
        ? cn("mt-0.5 shrink-0", largeIconSizeByCardSize[sizeKey])
        : cn("mt-0.5 shrink-0", iconSizeByCardSize[sizeKey]);
  const iconRowClassName =
    iconSize === "full"
      ? "grid grid-cols-[auto_1fr] items-stretch gap-2"
      : "grid grid-cols-[auto_1fr] items-start gap-2";

  return (
    <div
      data-slot="card"
      data-variant={variant}
      data-size={sizeKey}
      className={cn(cardVariants({ variant, size: sizeKey, className }))}
      {...props}
    >
      {Icon ? (
        <div className={iconRowClassName}>
          <Icon className={iconClassName} aria-hidden="true" />
          <div className="min-w-0">{children}</div>
        </div>
      ) : (
        children
      )}
    </div>
  );
}

export { Card };
