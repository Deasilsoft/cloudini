import { FileText, GitBranch, Home, Mail, Shield } from "lucide-react";
import { Link, Outlet } from "react-router";

export default function AppLayout() {
  const startYear = 2026;
  const currentYear = new Date().getFullYear();
  const repositoryPath = "Deasilsoft/cloudini";
  const repositoryURL = "https://github.com/" + repositoryPath;

  return (
    <div className="bg-background text-foreground h-screen">
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
                <img
                  src="/favicon-64x64.png"
                  alt="Cloudini logo"
                  className="h-8 w-8"
                />
                <span className="hidden md:inline">Cloudini</span>
              </Link>
            </div>

            <nav className="flex-1 space-y-1 p-2 md:p-4">
              <Link
                to="/"
                title="Home"
                aria-label="Home"
                className="hover:bg-muted flex items-center justify-center gap-2 rounded-md px-2 py-2 text-sm transition-colors md:justify-start md:px-3"
              >
                <Home className="size-4 shrink-0" />
                <span className="hidden md:inline">Home</span>
              </Link>

              <Link
                to="/contact-us"
                title="Contact"
                aria-label="Contact"
                className="hover:bg-muted flex items-center justify-center gap-2 rounded-md px-2 py-2 text-sm transition-colors md:justify-start md:px-3"
              >
                <Mail className="size-4 shrink-0" />
                <span className="hidden md:inline">Contact</span>
              </Link>

              <Link
                to="/terms"
                title="Terms"
                aria-label="Terms"
                className="hover:bg-muted flex items-center justify-center gap-2 rounded-md px-2 py-2 text-sm transition-colors md:justify-start md:px-3"
              >
                <FileText className="size-4 shrink-0" />
                <span className="hidden md:inline">Terms</span>
              </Link>

              <Link
                to="/privacy-policy"
                title="Privacy Policy"
                aria-label="Privacy Policy"
                className="hover:bg-muted flex items-center justify-center gap-2 rounded-md px-2 py-2 text-sm transition-colors md:justify-start md:px-3"
              >
                <Shield className="size-4 shrink-0" />
                <span className="hidden md:inline">Privacy Policy</span>
              </Link>
            </nav>

            <div className="text-muted-foreground px-2 py-4 text-center text-[7px] md:px-4 md:text-[11px]">
              {currentYear > startYear
                ? `© ${startYear}–${currentYear} Deasilsoft`
                : `© ${startYear} Deasilsoft`}
            </div>
          </div>
        </aside>

        <div className="grid min-h-0 grid-rows-[auto_1fr]">
          <header className="bg-background/95 supports-[backdrop-filter]:bg-background/80 sticky top-0 z-10 border-b backdrop-blur">
            <div className="flex min-h-16 items-center justify-end px-4 py-2 md:px-6 lg:px-8">
              <div className="flex flex-wrap items-center justify-end gap-2">
                <a
                  href={`${repositoryURL}/stargazers`}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub stars"
                >
                  <img
                    alt="GitHub stars"
                    src={`https://img.shields.io/github/stars/${repositoryPath}`}
                    className="h-5"
                  />
                </a>

                <a
                  href={`${repositoryURL}/network/members`}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub forks"
                  className="hidden md:inline-flex"
                >
                  <img
                    alt="GitHub forks"
                    src={`https://img.shields.io/github/forks/${repositoryPath}`}
                    className="h-5"
                  />
                </a>

                <a
                  href={`${repositoryURL}/issues`}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub open issues"
                >
                  <img
                    alt="GitHub open issues"
                    src={`https://img.shields.io/github/issues/${repositoryPath}`}
                    className="h-5"
                  />
                </a>

                <a
                  href={repositoryURL}
                  target="_blank"
                  rel="noreferrer"
                  title="Open Cloudini on GitHub"
                  aria-label="Open Cloudini on GitHub"
                  className="text-muted-foreground hover:bg-muted hover:text-foreground inline-flex items-center gap-2 rounded-md px-2 py-1 text-sm transition-colors"
                >
                  <GitBranch className="size-4" />
                  GitHub
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
}
