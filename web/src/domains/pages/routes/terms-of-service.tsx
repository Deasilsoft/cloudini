import { Meta } from "@/shared/components/meta";
import { Button } from "@/shared/components/ui/button";

export default function TermsOfService() {
  return (
    <>
      <Meta
        title="Terms of Service"
        description="Terms and conditions for using Cloudini."
      />

      <article className="max-w-3xl space-y-8">
        <header className="space-y-3">
          <h1 className="text-3xl font-semibold tracking-tight">
            Terms of Service
          </h1>
          <p className="text-muted-foreground">
            These terms apply to the Cloudini website.
          </p>
        </header>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Acceptable use</h2>
          <ul className="text-muted-foreground list-disc space-y-1 pl-5">
            <li>
              Do not attempt to disrupt, misuse, or gain unauthorized access to
              the website, systems, or data.
            </li>
            <li>Do not use the website to harm others.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Open source software</h2>
          <p className="text-muted-foreground">
            Cloudini is open source and licensed under the MIT License.
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
            This website and the Cloudini software are provided "as is", without
            warranties of any kind.
          </p>
        </section>
      </article>
    </>
  );
}
