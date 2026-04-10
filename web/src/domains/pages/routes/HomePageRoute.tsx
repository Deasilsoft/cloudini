import { Meta } from "@/shared/components/meta";
import { Button } from "@/shared/components/ui/button";

export default () => {
  return (
    <>
      <Meta description="Write code. Summon a serverless app." />

      <section className="max-w-5xl space-y-12">
        <section className="space-y-6">
          <div className="space-y-3">
            <p className="text-sm font-medium text-muted-foreground">
              Cloudini
            </p>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Write code. Summon a serverless app.
            </h1>
            <p className="max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg">
              Cloudini is a framework and CLI for generating a serverless
              application and its infrastructure from structured application
              code.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Button asChild>
              <a
                href="https://github.com/Deasilsoft/cloudini"
                target="_blank"
                rel="noreferrer"
                title="Open Cloudini on GitHub"
                aria-label="Open Cloudini on GitHub"
              >
                View on GitHub
              </a>
            </Button>
            <div className="inline-flex items-center rounded-md border px-3 py-2 text-sm text-muted-foreground">
              Early development—not ready for production use
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-4 rounded-xl border p-6">
            <h2 className="text-2xl font-semibold tracking-tight">Vision</h2>
            <p className="text-muted-foreground">
              Cloudini aims to turn structured application code into a
              predictable serverless backend and the infrastructure required to
              run it.
            </p>
            <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
              <li>
                Generate application code and infrastructure through a CLI, with
                no hidden functionality.
              </li>
              <li>
                Translate Cloudini interfaces into cloud-specific infrastructure
                in a predictable way.
              </li>
              <li>
                Support major cloud providers such as AWS, Azure, and GCP.
              </li>
              <li>
                Work alongside modern frontend frameworks such as React, Vue,
                and Angular.
              </li>
            </ul>
          </div>

          <div className="space-y-4 rounded-xl border p-6">
            <h2 className="text-2xl font-semibold tracking-tight">Status</h2>
            <p className="text-muted-foreground">
              Cloudini is in early development. The MVP is focused on delivering
              a strong first version of Cloudini itself—not on creating limited
              or throwaway applications.
            </p>
            <p className="text-muted-foreground">
              The goal is for the MVP of Cloudini to generate real, high-quality
              serverless applications with a predictable and practical set of
              core capabilities.
            </p>
            <div className="rounded-lg bg-muted p-4">
              <p className="text-sm font-medium">Contributing</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Not open for contributions yet.
              </p>
            </div>
            <div className="rounded-lg bg-muted p-4">
              <p className="text-sm font-medium">License</p>
              <p className="mt-1 text-sm text-muted-foreground">MIT</p>
            </div>
          </div>
        </section>

        <section className="space-y-5">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold tracking-tight">
              Planned Features
            </h2>
            <p className="text-muted-foreground">
              The first version of Cloudini is intended to support a serious and
              useful serverless application model from day one.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            <article className="rounded-xl border p-5">
              <h3 className="text-base font-semibold">Code generation</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Generate application code and infrastructure through the CLI,
                without relying on hidden runtime behavior.
              </p>
            </article>

            <article className="rounded-xl border p-5">
              <h3 className="text-base font-semibold">Predictable mapping</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Cloudini interfaces are intentionally minimal and exist to map
                code to cloud infrastructure in a consistent and predictable
                way.
              </p>
            </article>

            <article className="rounded-xl border p-5">
              <h3 className="text-base font-semibold">REST API</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Define API controllers in code and generate serverless HTTP
                infrastructure for the selected cloud provider.
              </p>
            </article>

            <article className="rounded-xl border p-5">
              <h3 className="text-base font-semibold">Relational database</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Provision a managed relational database for application data.
              </p>
            </article>

            <article className="rounded-xl border p-5">
              <h3 className="text-base font-semibold">Caching and queues</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Support key-value infrastructure for caching and queue-driven
                workflows.
              </p>
            </article>

            <article className="rounded-xl border p-5">
              <h3 className="text-base font-semibold">
                Static frontend hosting
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Deploy built frontend assets for frameworks like React, Vue, and
                Angular through object storage and CDN delivery.
              </p>
            </article>
          </div>
        </section>
      </section>
    </>
  );
};
