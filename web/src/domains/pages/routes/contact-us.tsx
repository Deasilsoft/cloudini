import { Meta } from "@/shared/components/meta";
import { Button } from "@/shared/components/ui/button";

export default function ContactUs() {
  return (
    <>
      <Meta
        title="Contact | Cloudini CLI and Framework"
        description="Contact the Cloudini team about the Cloudini CLI and framework, serverless cloud development, support, or collaboration."
      />

      <article className="max-w-3xl space-y-8">
        <header className="space-y-3">
          <h1 className="text-3xl font-semibold tracking-tight">Contact</h1>
          <p className="text-muted-foreground">
            Contact the Cloudini team for support, collaboration, or questions
            about serverless cloud development.
          </p>
        </header>

        <section className="space-y-3">
          <p className="text-muted-foreground">
            Questions, issues, and feature requests for the Cloudini CLI and
            framework are handled through GitHub Issues.
          </p>
          <Button asChild variant="outline">
            <a
              href="https://github.com/Deasilsoft/cloudini/issues"
              target="_blank"
              rel="noreferrer"
              title="Open Cloudini CLI and framework GitHub issues"
              aria-label="Open Cloudini CLI and framework GitHub issues"
            >
              Open GitHub Issues
            </a>
          </Button>
        </section>
      </article>
    </>
  );
}
