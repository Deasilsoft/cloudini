export default () => {
  return (
    <section className="max-w-3xl space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">
          Privacy Policy
        </h1>
        <p className="text-muted-foreground">
          This policy explains how Cloudini handles data on this website.
        </p>
      </header>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Website operation</h2>
        <p className="text-muted-foreground">
          Cloudini does not use this website for analytics, advertising, or user
          profiling.
        </p>
        <p className="text-muted-foreground">
          This website is hosted on AWS and delivered through Cloudflare. These
          providers may process technical data such as IP addresses and request
          metadata in order to operate, secure, and deliver the service.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Cookies</h2>
        <p className="text-muted-foreground">
          Cloudini does not use cookies for analytics or marketing.
        </p>
        <p className="text-muted-foreground">
          Cloudflare may set strictly necessary cookies depending on the
          security features enabled for this website.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">External services</h2>
        <p className="text-muted-foreground">
          Links to third-party services such as GitHub are subject to those
          services&apos; own privacy policies.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Changes</h2>
        <p className="text-muted-foreground">
          This policy may be updated if the website or infrastructure changes.
        </p>
      </section>
    </section>
  );
};
