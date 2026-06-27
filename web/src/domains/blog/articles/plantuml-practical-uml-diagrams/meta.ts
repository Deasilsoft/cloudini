import type { ArticleMeta } from "../../types";
import useCaseDiagram from "./assets/diagrams/use-case.svg";

export const article = {
  slug: "plantuml-practical-uml-diagrams",
  title: "How to create and maintain UML diagrams with PlantUML",
  description:
    "Create maintainable PlantUML diagrams with practical UML examples for use cases, sequences, components, deployments, classes, activities, and states.",
  publishedAt: "2026-06-20T00:00:00.000Z",
  tags: ["Architecture", "Documentation", "PlantUML"],
  thumbnailSrc: useCaseDiagram,
  thumbnailAlt: "Example of a UML use case diagram created with PlantUML",
  authorId: "sondre",
} satisfies ArticleMeta;
