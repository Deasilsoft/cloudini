import { FileText, GitBranch, Home, Mail, Shield } from "lucide-react";
import { Link, Outlet } from "react-router";

export default () => {
  const foundationYear = 2026;
  const currentYear = new Date().getFullYear();

  const fullCopyright =
    currentYear > foundationYear
      ? `Copyright © ${foundationYear}–${currentYear} Deasilsoft`
      : `Copyright © ${foundationYear} Deasilsoft`;

  const compactCopyright =
    currentYear > foundationYear
      ? `© ${foundationYear}–${currentYear} Deasilsoft`
      : `© ${foundationYear} Deasilsoft`;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="grid min-h-screen grid-cols-1 grid-rows-[auto_1fr]">
        <header className="border-b">
          <div className="flex h-16 items-center justify-between px-4 md:px-6 lg:px-8">
            <Link
              to="/"
              title="Go to homepage"
              aria-label="Go to homepage"
              className="font-semibold tracking-tight hover:opacity-80"
            >
              Cloudini
            </Link>
            <a
              href="https://github.com/Deasilsoft/cloudini"
              target="_blank"
              rel="noreferrer"
              title="Open Cloudini on GitHub"
              aria-label="Open Cloudini on GitHub"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <GitBranch className="size-4" />
              <span className="hidden sm:inline">GitHub</span>
            </a>
          </div>
        </header>
        <div className="grid min-h-0 grid-cols-[64px_1fr] md:grid-cols-[220px_1fr]">
          <aside className="flex min-h-0 flex-col border-r">
            <nav className="flex-1 space-y-1 p-2 md:p-4">
              <Link
                to="/"
                title="Home"
                aria-label="Home"
                className="flex items-center justify-center gap-2 rounded-md px-2 py-2 text-sm transition-colors hover:bg-muted md:justify-start md:px-3"
              >
                <Home className="size-4 shrink-0" />
                <span className="hidden md:inline">Home</span>
              </Link>
              <Link
                to="/contact-us"
                title="Contact"
                aria-label="Contact"
                className="flex items-center justify-center gap-2 rounded-md px-2 py-2 text-sm transition-colors hover:bg-muted md:justify-start md:px-3"
              >
                <Mail className="size-4 shrink-0" />
                <span className="hidden md:inline">Contact</span>
              </Link>
              <Link
                to="/terms"
                title="Terms"
                aria-label="Terms"
                className="flex items-center justify-center gap-2 rounded-md px-2 py-2 text-sm transition-colors hover:bg-muted md:justify-start md:px-3"
              >
                <FileText className="size-4 shrink-0" />
                <span className="hidden md:inline">Terms</span>
              </Link>
              <Link
                to="/privacy-policy"
                title="Privacy Policy"
                aria-label="Privacy Policy"
                className="flex items-center justify-center gap-2 rounded-md px-2 py-2 text-sm transition-colors hover:bg-muted md:justify-start md:px-3"
              >
                <Shield className="size-4 shrink-0" />
                <span className="hidden md:inline">Privacy Policy</span>
              </Link>
            </nav>
            <div className="p-2 text-center text-[10px] text-muted-foreground md:p-4 md:text-left md:text-xs">
              <span className="hidden md:inline">{fullCopyright}</span>
              <span className="md:hidden">{compactCopyright}</span>
            </div>
          </aside>
          <main className="min-w-0 p-4 md:p-6 lg:p-8">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};
