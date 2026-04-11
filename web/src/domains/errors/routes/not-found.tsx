import { Meta } from "@/shared/components/meta";
import { Button } from "@/shared/components/ui/button";
import { Link } from "react-router";

export default function NotFound() {
  return (
    <>
      <Meta
        title="Page not found"
        description="The page you are looking for does not exist."
      />

      <article className="flex flex-1 flex-col items-center justify-center text-center">
        <header className="space-y-2">
          <p className="text-muted-foreground text-sm font-medium">404</p>
          <h1 className="text-3xl font-semibold tracking-tight">
            Page not found
          </h1>
          <p className="text-muted-foreground max-w-md text-sm">
            The page you are looking for does not exist or is no longer
            available.
          </p>
        </header>

        <div className="mt-6">
          <Button asChild variant="outline">
            <Link to="/">Read about Cloudini</Link>
          </Button>
        </div>
      </article>
    </>
  );
}
