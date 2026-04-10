import { Meta } from "@/shared/components/meta";
import { Button } from "@/shared/components/ui/button";

export default function ContactUs() {
  return (
    <>
      <Meta
        title="Contact Us"
        description="Get in touch with the team behind Cloudini for questions, support, or collaboration."
      />

      <article className="max-w-3xl space-y-8">
        <header className="space-y-3">
          <h1 className="text-3xl font-semibold tracking-tight">Contact Us</h1>
          <p className="text-muted-foreground">We want to collaborate.</p>
        </header>

        <section className="space-y-3">
          <p className="text-muted-foreground">
            Questions, issues, or feature requests are handled through GitHub.
          </p>
          <Button asChild variant="outline">
            <a
              href="https://github.com/Deasilsoft/cloudini/issues"
              target="_blank"
              rel="noreferrer"
              title="Open GitHub issues for Cloudini"
              aria-label="Open GitHub issues for Cloudini"
            >
              Open GitHub Issues
            </a>
          </Button>
        </section>
      </article>
    </>
  );
}
