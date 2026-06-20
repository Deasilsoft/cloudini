import type { ArticleMeta } from "../../types";
import useCaseDiagram from "./assets/diagrams/use-case.svg";

export const article = {
  slug: "plantuml-practical-uml-diagrams",
  title: "How to create and maintain UML diagrams with PlantUML",
  description:
    "A practical guide to use case, sequence, component, deployment, class, activity, and state machine diagrams with PlantUML examples that can be versioned, reviewed, and maintained with code.",
  publishedAt: "2026-06-20T00:00:00.000Z",
  tags: ["Architecture", "Documentation", "PlantUML"],
  thumbnailSrc: useCaseDiagram,
  thumbnailAlt: "Example of a UML use case diagram created with PlantUML",
  authorId: "sondre",
} satisfies ArticleMeta;
