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

  const repoUrl = "https://github.com/Deasilsoft/cloudini";
  const repoPath = "Deasilsoft/cloudini";

  return (
    <div className="h-screen bg-background text-foreground">
      <div className="grid h-screen grid-cols-[64px_1fr] md:grid-cols-[220px_1fr]">
        <aside className="border-r">
          <div className="sticky top-0 flex h-screen flex-col">
            <div className="flex h-16 items-center justify-center px-2 md:justify-start md:px-4">
              <Link
                to="/"
                title="Go to homepage"
                aria-label="Go to homepage"
                className="flex items-center gap-2 font-semibold tracking-tight hover:opacity-80"
              >
                <img src="/favicon-32x32.png" alt="Cloudini logo" />
                <span className="hidden md:inline">Cloudini</span>
              </Link>
            </div>

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
          </div>
        </aside>

        <div className="grid min-h-0 grid-rows-[auto_1fr]">
          <header className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
            <div className="flex min-h-16 items-center justify-end px-4 py-2 md:px-6 lg:px-8">
              <div className="flex flex-wrap items-center justify-end gap-2">
                <a
                  href={`${repoUrl}/stargazers`}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub stars"
                  className="hidden md:inline-flex"
                >
                  <img
                    alt="GitHub stars"
                    src={`https://img.shields.io/github/stars/${repoPath}`}
                    className="h-5"
                  />
                </a>

                <a
                  href={`${repoUrl}/network/members`}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub forks"
                  className="hidden md:inline-flex"
                >
                  <img
                    alt="GitHub forks"
                    src={`https://img.shields.io/github/forks/${repoPath}`}
                    className="h-5"
                  />
                </a>

                <a
                  href={`${repoUrl}/issues`}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub open issues"
                  className="hidden lg:inline-flex"
                >
                  <img
                    alt="GitHub open issues"
                    src={`https://img.shields.io/github/issues/${repoPath}`}
                    className="h-5"
                  />
                </a>

                <a
                  href={repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  title="Open Cloudini on GitHub"
                  aria-label="Open Cloudini on GitHub"
                  className="inline-flex items-center gap-2 rounded-md px-2 py-1 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  <GitBranch className="size-4" />
                  <span className="hidden sm:inline">GitHub</span>
                </a>
              </div>
            </div>
          </header>

          <main className="min-w-0 overflow-y-auto p-4 md:p-6 lg:p-8">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};
