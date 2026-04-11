import { Meta } from "@/shared/components/meta";

export default function PrivacyPolicy() {
  return (
    <>
      <Meta
        title="Privacy Policy"
        description="Learn how Cloudini.org processes and protects your data."
      />

      <article className="max-w-3xl space-y-8">
        <header className="space-y-3">
          <h1 className="text-3xl font-semibold tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground">
            This policy explains how Cloudini.org handles data collected through
            this website.
          </p>
          <p className="text-muted-foreground">
            This policy applies only to Cloudini.org itself. It does not apply
            to third-party services linked from this website, or to software
            projects such as Cloudini CLI or Cloudini Framework.
          </p>
        </header>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Website operation</h2>
          <p className="text-muted-foreground">
            Cloudini.org does not use analytics, advertising trackers, or user
            profiling.
          </p>
          <p className="text-muted-foreground">
            Cloudini.org is hosted on AWS and delivered through Cloudflare.
            These providers process technical data such as IP addresses, request
            headers, and similar metadata as necessary to deliver, secure, and
            operate the website.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Cookies</h2>
          <p className="text-muted-foreground">
            Cloudini.org does not use cookies for analytics or marketing.
          </p>
          <p className="text-muted-foreground">
            Cloudflare may set strictly necessary cookies related to security
            and traffic protection.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">
            External services and software
          </h2>
          <p className="text-muted-foreground">
            Links to third-party services are governed by those services' own
            terms and privacy policies.
          </p>
          <p className="text-muted-foreground">
            Software projects referenced on this website, including Cloudini CLI
            and Cloudini Framework, are not covered by this policy unless stated
            otherwise separately.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Changes</h2>
          <p className="text-muted-foreground">
            This policy may be updated from time to time. Any changes will be
            published on this page.
          </p>
        </section>
      </article>
    </>
  );
}
