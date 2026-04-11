import { Meta } from "@/shared/components/meta";
import { Button } from "@/shared/components/ui/button";

export default function TermsOfService() {
  return (
    <>
      <Meta
        title="Terms of Service"
        description="Terms for using Cloudini.org and information about Cloudini software licensing."
      />

      <article className="max-w-3xl space-y-8">
        <header className="space-y-3">
          <h1 className="text-3xl font-semibold tracking-tight">
            Terms of Service
          </h1>
          <p className="text-muted-foreground">
            These terms apply to your use of Cloudini.org.
          </p>
          <p className="text-muted-foreground">
            Cloudini CLI and Cloudini Framework are separate open source
            software projects and are governed by their own license.
          </p>
        </header>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Acceptable use</h2>
          <ul className="text-muted-foreground list-disc space-y-1 pl-5">
            <li>
              Do not attempt to disrupt, misuse, or gain unauthorized access to
              Cloudini.org or its underlying infrastructure.
            </li>
            <li>
              Do not use Cloudini.org in a way that harms the availability,
              security, or integrity of the website.
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Cloudini software</h2>
          <p className="text-muted-foreground">
            Cloudini CLI and Cloudini Framework are open source software
            projects.
          </p>
          <p className="text-muted-foreground">
            These projects are licensed under the MIT License. Your use,
            modification, and distribution of the software are governed by that
            license, not by these terms.
          </p>
          <Button asChild variant="link" className="px-0">
            <a
              href="https://github.com/Deasilsoft/cloudini/blob/main/LICENSE"
              target="_blank"
              rel="noreferrer"
            >
              View MIT License
            </a>
          </Button>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">No warranty</h2>
          <p className="text-muted-foreground">
            Cloudini.org and the Cloudini software are provided "as is", without
            warranties of any kind.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Changes</h2>
          <p className="text-muted-foreground">
            These terms may be updated from time to time. Any changes will be
            published on this page.
          </p>
        </section>
      </article>
    </>
  );
}
