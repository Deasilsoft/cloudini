import { Briefcase, ExternalLink, type LucideIcon } from "lucide-react";
import Sondre from "./assets/sondre.jpg";
import type { AuthorId } from "./types";

export type AuthorLink = {
  label: string;
  href: string;
  icon?: LucideIcon;
};

export type Author = {
  id: AuthorId;
  name: string;
  role: string;
  bio: string;
  avatarSrc?: string;
  links: readonly AuthorLink[];
};

export const AUTHORS = {
  sondre: {
    id: "sondre",
    name: "Sondre Aasen",
    role: "Full-stack Developer | Cloud Architect",
    bio: "Quick thinker, adaptive, and people-oriented, with strong reflective and analytical skills across both software and business. Originally a self-taught full-stack developer, I later refined my craft at NTNU. I am curious by nature, energetic by necessity, and driven by a strong desire to learn, build, and share knowledge with anyone willing to listen.",
    avatarSrc: Sondre,
    links: [
      {
        label: "GitHub",
        href: "https://github.com/sobeaa",
        icon: ExternalLink,
      },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/sondre-benjamin-aasen/",
        icon: Briefcase,
      },
    ],
  },
} satisfies Record<AuthorId, Author>;

export function getAuthorById(authorId: AuthorId): Author {
  return AUTHORS[authorId];
}
