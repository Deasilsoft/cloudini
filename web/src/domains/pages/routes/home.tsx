import { Meta } from "@/shared/components/meta";
import { Button } from "@/shared/components/ui/button";
import { Card } from "@/shared/components/ui/card";
import { AlertTriangle, Handshake, ShieldCheck } from "lucide-react";

export default function Home() {
  return (
    <>
      <Meta
        title="Cloudini CLI and Framework | Serverless Cloud Development"
        description="Build serverless cloud backends with Cloudini CLI. Compile TypeScript or JavaScript into Terraform-ready artifacts for AWS, Azure, and Google Cloud."
      />

      <div className="max-w-5xl space-y-12">
        <section className="space-y-6">
          <div className="space-y-3">
            <p className="text-muted-foreground text-sm font-medium">
              Cloudini CLI and framework
            </p>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Bring magic to serverless cloud development.
            </h1>
            <p className="text-muted-foreground max-w-3xl text-base leading-7 sm:text-lg">
              Build serverless cloud backends in TypeScript or JavaScript.
              Scaffold Cloudini Framework interfaces, write your backend logic,
              then use the Cloudini CLI to compile serverless runtime artifacts
              and generate Terraform configuration for AWS, Azure, and Google
              Cloud.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Button asChild>
              <a
                href="https://github.com/Deasilsoft/cloudini"
                target="_blank"
                rel="noreferrer"
                title="Open Cloudini CLI and framework on GitHub"
                aria-label="Open Cloudini CLI and framework on GitHub"
              >
                View on GitHub
              </a>
            </Button>

            <Card
              variant="warning"
              icon={AlertTriangle}
              size="sm"
              className="max-w-fit"
            >
              Early development. Not ready for use in production environments.
            </Card>
          </div>
        </section>

        <section className="space-y-5">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold tracking-tight">
              How Cloudini works
            </h2>
            <p className="text-muted-foreground">
              Cloudini is for teams building serverless cloud backends without
              hand-writing cloud platform infrastructure for every delivery.
              Static frontend delivery is supported as one Framework interface.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            <Card>
              <h3 className="font-semibold">Scaffold and write code</h3>
              <p className="text-muted-foreground mt-2 leading-6">
                Use the Cloudini CLI to scaffold Framework interfaces for APIs,
                jobs, queues, databases, and static delivery. Add your
                TypeScript or JavaScript backend logic where it belongs.
              </p>
            </Card>

            <Card>
              <h3 className="font-semibold">Compile for the cloud platform</h3>
              <p className="text-muted-foreground mt-2 leading-6">
                Cloudini CLI compiles source code written against Cloudini
                Framework interfaces into optimized serverless runtime artifacts
                for the selected cloud platform.
              </p>
            </Card>

            <Card>
              <h3 className="font-semibold">Deploy with Terraform</h3>
              <p className="text-muted-foreground mt-2 leading-6">
                Cloudini CLI generates{" "}
                <a
                  href="https://developer.hashicorp.com/terraform"
                  target="_blank"
                  rel="noreferrer"
                  className="text-foreground decoration-muted-foreground/60 hover:decoration-foreground font-medium underline underline-offset-4"
                >
                  Terraform
                </a>{" "}
                configuration for the selected cloud platform infrastructure.
              </p>
            </Card>
          </div>

          <p className="text-muted-foreground text-sm leading-6">
            Current platform targets are{" "}
            <a
              href="https://aws.amazon.com/"
              target="_blank"
              rel="noreferrer"
              className="text-foreground decoration-muted-foreground/60 hover:decoration-foreground font-medium underline underline-offset-4"
            >
              AWS
            </a>
            ,{" "}
            <a
              href="https://azure.microsoft.com/"
              target="_blank"
              rel="noreferrer"
              className="text-foreground decoration-muted-foreground/60 hover:decoration-foreground font-medium underline underline-offset-4"
            >
              Azure
            </a>
            , and{" "}
            <a
              href="https://cloud.google.com/"
              target="_blank"
              rel="noreferrer"
              className="text-foreground decoration-muted-foreground/60 hover:decoration-foreground font-medium underline underline-offset-4"
            >
              Google Cloud
            </a>
            . We may explore European cloud platforms such as Hetzner and
            Scaleway as platform fit and infrastructure coverage become clear.
          </p>
        </section>

        <section className="space-y-5">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold tracking-tight">
              Interfaces
            </h2>
            <p className="text-muted-foreground">
              Cloudini Framework interfaces describe APIs, scheduled jobs,
              queues, databases, and static delivery. The Cloudini CLI turns
              those interfaces into serverless runtime artifacts and Terraform
              configuration for the selected cloud platform.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            <Card>
              <h3 className="font-semibold">HTTP APIs</h3>
              <p className="text-muted-foreground mt-2 leading-6">
                Define controllers that compile into REST API endpoints,
                serverless runtime handlers, and generated API infrastructure.
              </p>
            </Card>

            <Card>
              <h3 className="font-semibold">Static sites and assets</h3>
              <p className="text-muted-foreground mt-2 leading-6">
                Deploy static sites, frontend build output, precompiled HTML,
                SPAs, and assets through cloud storage and CDN delivery.
              </p>
            </Card>

            <Card>
              <h3 className="font-semibold">Scheduled jobs</h3>
              <p className="text-muted-foreground mt-2 leading-6">
                Define recurring jobs with Cloudini Framework interfaces and
                compile them into cloud platform scheduler resources.
              </p>
            </Card>

            <Card>
              <h3 className="font-semibold">Queues and workers</h3>
              <p className="text-muted-foreground mt-2 leading-6">
                Define queue-backed tasks and workers from Framework interfaces.
              </p>
            </Card>

            <Card>
              <h3 className="font-semibold">SQL databases</h3>
              <p className="text-muted-foreground mt-2 leading-6">
                Declare managed SQL databases usable by your other Cloudini
                Framework interfaces.
              </p>
            </Card>

            <Card>
              <h3 className="font-semibold">Document databases</h3>
              <p className="text-muted-foreground mt-2 leading-6">
                Declare managed document databases for JSON-shaped data.
              </p>
            </Card>
          </div>
        </section>

        <section className="space-y-4 rounded-xl border p-6">
          <h2 className="text-2xl font-semibold tracking-tight">Status</h2>
          <p className="text-muted-foreground">
            Cloudini is in early development and not ready for production use.
            The first release is focused on creating the Framework and CLI
            foundation for real serverless cloud deliveries.
          </p>

          <Card variant="warning" icon={Handshake} iconSize="full" size="sm">
            <p className="font-medium">Contributing</p>
            <p className="mt-1">Not open for contributions yet.</p>
          </Card>

          <Card variant="success" icon={ShieldCheck} iconSize="full" size="sm">
            <p className="font-medium">License</p>
            <p className="mt-1">MIT</p>
          </Card>
        </section>
      </div>
    </>
  );
}
