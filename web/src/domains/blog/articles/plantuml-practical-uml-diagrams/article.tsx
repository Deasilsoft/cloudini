import type { ReactNode } from "react";
import activitySource from "./assets/diagrams/activity.puml?raw";
import activityDiagram from "./assets/diagrams/activity.svg";
import aiPlantumlReviewLoopSource from "./assets/diagrams/ai-plantuml-review-loop.puml?raw";
import aiPlantumlReviewLoopDiagram from "./assets/diagrams/ai-plantuml-review-loop.svg";
import classSource from "./assets/diagrams/class.puml?raw";
import classDiagram from "./assets/diagrams/class.svg";
import componentSource from "./assets/diagrams/component.puml?raw";
import componentDiagram from "./assets/diagrams/component.svg";
import deploymentSource from "./assets/diagrams/deployment.puml?raw";
import deploymentDiagram from "./assets/diagrams/deployment.svg";
import projectManagementSequenceSource from "./assets/diagrams/project-management-sequence.puml?raw";
import projectManagementSequenceDiagram from "./assets/diagrams/project-management-sequence.svg";
import sequenceSource from "./assets/diagrams/sequence.puml?raw";
import sequenceDiagram from "./assets/diagrams/sequence.svg";
import stateMachineSource from "./assets/diagrams/state-machine.puml?raw";
import stateMachineDiagram from "./assets/diagrams/state-machine.svg";
import useCaseSource from "./assets/diagrams/use-case.puml?raw";
import useCaseDiagram from "./assets/diagrams/use-case.svg";

type DiagramFigureProps = {
  title: string;
  src: string;
  alt: string;
  source: string;
};

type ExternalArticleLinkProps = {
  href: string;
  children: ReactNode;
};

function ExternalArticleLink({ href, children }: ExternalArticleLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener"
      className="underline underline-offset-4"
    >
      {children}
    </a>
  );
}

function DiagramFigure({ title, src, alt, source }: DiagramFigureProps) {
  return (
    <figure className="space-y-3">
      <div className="rounded-xl border bg-white p-4">
        <div className="overflow-x-auto">
          <img
            src={src}
            alt={alt}
            loading="lazy"
            decoding="async"
            className="h-auto max-w-none"
          />
        </div>
      </div>

      <figcaption className="text-muted-foreground space-y-1 text-sm">
        <p>{title}</p>
        <p className="text-xs">Scroll horizontally if needed.</p>
      </figcaption>

      <details className="bg-muted/30 rounded-xl border p-4">
        <summary className="cursor-pointer text-sm font-medium">
          PlantUML source
        </summary>
        <pre className="mt-4 overflow-x-auto text-sm leading-6">
          <code>{source}</code>
        </pre>
      </details>
    </figure>
  );
}

export default function PlantUmlPracticalUmlDiagramsArticle() {
  return (
    <div className="space-y-8">
      <section className="space-y-3">
        <h2>PlantUML for practical UML documentation</h2>
        <p>
          UML diagrams are useful when they make a system easier to understand,
          discuss, and change. They become less useful when they are treated as
          decorative documentation that slowly drifts away from the system they
          describe.
        </p>
        <p>
          PlantUML makes UML diagrams easier to maintain because the diagrams
          are written as text. They can live next to code, be reviewed in pull
          requests, and change together with the implementation. That makes them
          more practical than diagrams that only exist as exported images from a
          design tool.
        </p>
        <p>
          The most important skill is choosing the right diagram type for the
          question. This article uses a simple public library system as the
          example domain: members search for books, borrow books, return books,
          and librarians manage the collection.
        </p>
      </section>

      <section className="space-y-3">
        <h2>Installing and using PlantUML</h2>
        <p>
          You can work with PlantUML in two main ways: use an official browser
          editor for quick experiments, or install the command-line tool when
          diagrams should be generated as part of a project.
        </p>

        <h3>Why PlantUML works well with AI</h3>
        <p>
          AI tools are usually better at writing structured text than drawing
          precise diagrams. That makes PlantUML a good fit for AI-assisted
          architecture work: instead of asking an AI tool to draw boxes and
          arrows directly, ask it to write PlantUML source.
        </p>
        <p>
          The workflow is simple. Ask for a diagram as PlantUML code, render it,
          inspect the generated image, then revise the source. The AI works with
          text, PlantUML renders the diagram, and the human reviews both the
          meaning and the layout.
        </p>

        <DiagramFigure
          title="A simple loop for AI-assisted PlantUML work: source, render, review, and revise."
          src={aiPlantumlReviewLoopDiagram}
          alt="Activity diagram showing an AI-assisted PlantUML review loop from source drafting to human validation."
          source={aiPlantumlReviewLoopSource}
        />

        <p>
          That last step matters. AI can produce valid PlantUML that still
          renders as a poor diagram, with crossing lines, awkward spacing,
          overloaded labels, or unreadable visual structure. Treat the rendered
          image as part of the review, not as an automatic success.
        </p>
        <p>
          This is especially useful in project work because every version can be
          kept as text. When a diagram changes, publish a new PlantUML revision
          in the discussion thread rather than silently replacing the previous
          one, so the reasoning remains visible.
        </p>

        <h3>Official browser editors</h3>
        <p>
          Browser editors are the fastest way to test syntax, adjust layout, or
          share a small diagram without setting up a local toolchain.
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <ExternalArticleLink href="https://www.plantuml.com/">
              PlantUML Web Server
            </ExternalArticleLink>
            <p className="text-muted-foreground text-sm">
              The classic official online PlantUML renderer.
            </p>
          </li>
          <li>
            <ExternalArticleLink href="https://plantuml.github.io/plantuml/js-plantuml/index-collection.html">
              PlantUML JavaScript editor collection
            </ExternalArticleLink>
            <p className="text-muted-foreground text-sm">
              The official GitHub Pages collection of PlantUML editors that run
              in the browser.
            </p>
          </li>
        </ul>
        <p>
          Browser editors are good for quick iteration. For long-lived project
          documentation, prefer versioned <code>.puml</code> files or PlantUML
          code blocks in project issues and tasks.
        </p>

        <h3>macOS with Homebrew</h3>
        <p>
          On macOS, Homebrew is the simplest way to install PlantUML for local
          project workflows:
        </p>
        <pre className="bg-muted/30 overflow-x-auto rounded-xl border p-4 text-sm leading-6">
          <code>{`brew install plantuml graphviz`}</code>
        </pre>
        <p>Then generate SVG files from PlantUML source files:</p>
        <pre className="bg-muted/30 overflow-x-auto rounded-xl border p-4 text-sm leading-6">
          <code>{`plantuml -tsvg diagrams/*.puml`}</code>
        </pre>

        <h3>Windows and Linux with Java</h3>
        <p>
          PlantUML can also run as a Java <code>.jar</code>. This works on
          Windows and Linux as long as Java is installed. Some diagram types
          also need Graphviz for layout.
        </p>
        <p>
          Install Java and Graphviz using the approach that fits your operating
          system and environment. Then download <code>plantuml.jar</code> from
          the{" "}
          <ExternalArticleLink href="https://plantuml.com/download">
            official PlantUML download page
          </ExternalArticleLink>
          .
        </p>
        <p>After that, generate SVG files with:</p>
        <pre className="bg-muted/30 overflow-x-auto rounded-xl border p-4 text-sm leading-6">
          <code>{`java -jar plantuml.jar -tsvg diagrams/*.puml`}</code>
        </pre>
        <p>
          In Windows PowerShell, the same command can be written with
          Windows-style paths:
        </p>
        <pre className="bg-muted/30 overflow-x-auto rounded-xl border p-4 text-sm leading-6">
          <code>{`java -jar .\\plantuml.jar -tsvg .\\diagrams\\*.puml`}</code>
        </pre>

        <p>
          The official command-line documentation is available on the{" "}
          <ExternalArticleLink href="https://plantuml.com/command-line">
            PlantUML command-line page
          </ExternalArticleLink>
          .
        </p>

        <h3>Generating this article&apos;s diagrams</h3>
        <p>
          In this article, <code>.puml</code> files are the source of truth, and
          generated <code>.svg</code> files are the published output.
        </p>
        <pre className="bg-muted/30 overflow-x-auto rounded-xl border p-4 text-sm leading-6">
          <code>{`plantuml -tsvg web/src/domains/blog/articles/plantuml-practical-uml-diagrams/assets/diagrams/*.puml`}</code>
        </pre>
        <p>
          When a diagram source changes, regenerate the matching SVG in the same
          change.
        </p>
      </section>

      <section className="space-y-3">
        <h2>UML diagrams worth knowing</h2>
        <p>
          UML is a general-purpose modelling language for visualising,
          specifying, constructing, and documenting software systems. In
          practice, you do not need every UML diagram type for everyday
          architecture work.
        </p>
        <p>
          The useful habit is to choose the diagram type that matches the
          question. The examples below use the same small library system so the
          notation, not the domain, is the focus.
        </p>

        <section className="space-y-3 pt-2">
          <h3>Use case diagrams: show what the system does</h3>
          <p>
            A use case diagram shows who interacts with a system and what they
            can do with it. It is useful when you want to discuss scope before
            talking about implementation details.
          </p>
          <p>
            Use case diagrams are good for early product and feature
            discussions. They answer questions like: who uses the system, what
            capabilities does the system expose, and where is the system
            boundary?
          </p>

          <DiagramFigure
            title="A use case diagram showing what library members and librarians can do."
            src={useCaseDiagram}
            alt="Use case diagram for a library system with library member and librarian actors."
            source={useCaseSource}
          />

          <p>
            This diagram does not explain how borrowing works internally. It
            shows the system boundary and the capabilities available to each
            actor. That is the purpose of a use case diagram.
          </p>
        </section>

        <section className="space-y-3 pt-2">
          <h3>Sequence diagrams: show behaviour over time</h3>
          <p>
            A sequence diagram shows messages in chronological order. It is the
            right diagram when the order of actions matters.
          </p>
          <p>
            Use sequence diagrams for request flows, integrations, approvals,
            retries, and anything else where one step leads to another. If you
            find yourself drawing return arrows through a component diagram, you
            probably want a sequence diagram instead.
          </p>

          <DiagramFigure
            title="A sequence diagram showing the steps involved in borrowing a book."
            src={sequenceDiagram}
            alt="Sequence diagram for borrowing a book through a library app."
            source={sequenceSource}
          />

          <p>
            This diagram shows the order of the borrowing flow: the member asks
            to borrow a book, the system checks availability, the loan is
            created, and the member receives a due date.
          </p>
        </section>

        <section className="space-y-3 pt-2">
          <h3>Component diagrams: show software boundaries</h3>
          <p>
            A component diagram shows the major software parts of a system and
            how they depend on each other. It is useful when you want to discuss
            responsibility, coupling, interfaces, and architectural boundaries.
          </p>
          <p>
            Component diagrams should stay focused on structure. They should not
            try to show every request and response. Use them to explain what
            exists and which components depend on which other components.
          </p>

          <DiagramFigure
            title="A component diagram showing the main parts of a small library application."
            src={componentDiagram}
            alt="Component diagram for a library application with web app, services, and database."
            source={componentSource}
          />

          <p>
            This diagram shows the software boundary clearly. The web app talks
            to application services. The services read and update the database.
            That is enough detail to discuss the architecture without turning
            the diagram into a complete implementation map.
          </p>
        </section>

        <section className="space-y-3 pt-2">
          <h3>Deployment diagrams: show where things run</h3>
          <p>
            A deployment diagram shows where software runs and how runtime nodes
            communicate. In a serverless or cloud-hosted system, the important
            nodes may be a browser, edge CDN, object storage for static assets,
            managed API, and managed database rather than traditional virtual
            machines.
          </p>
          <p>
            The same idea applies on AWS, Azure, GCP, or another cloud platform.
            The names of managed services change, but the diagram should still
            show where the application is hosted and how requests move through
            the system.
          </p>

          <DiagramFigure
            title="A deployment diagram showing browser, edge CDN, object storage, managed API, and managed database nodes."
            src={deploymentDiagram}
            alt="Serverless deployment diagram for a cloud-hosted library system."
            source={deploymentSource}
          />

          <p>
            This diagram focuses on deployment boundaries. It does not explain
            request internals or domain rules, because those questions belong in
            sequence or class diagrams.
          </p>
        </section>

        <section className="space-y-3 pt-2">
          <h3>Class diagrams: show domain structure</h3>
          <p>
            A class diagram shows important domain concepts and how they relate
            to each other. It is useful when the structure of the model matters.
          </p>
          <p>
            Keep class diagrams focused. You usually do not need every property
            or method. Include the concepts and relationships that explain the
            design clearly.
          </p>

          <DiagramFigure
            title="A class diagram showing books, copies, members, and loans with physical and digital copy formats."
            src={classDiagram}
            alt="Class diagram for a library domain model with copy format and loan constraints."
            source={classSource}
          />

          <p>
            A physical copy can usually be loaned to one member at a time. A
            digital copy may allow one or many concurrent loans depending on
            licensing rules. The diagram keeps that rule simple with
            <code>format</code> and <code>maxConcurrentLoans</code> instead of
            modelling every licensing detail.
          </p>
        </section>

        <section className="space-y-3 pt-2">
          <h3>Activity diagrams: show workflows and decisions</h3>
          <p>
            An activity diagram shows a workflow. It is useful when a process
            has decisions, branches, repeated steps, or failure paths.
          </p>
          <p>
            Use activity diagrams for business processes and user workflows.
            They are especially helpful when prose would hide important
            branches.
          </p>

          <DiagramFigure
            title="An activity diagram showing the decision flow for borrowing or reserving a book."
            src={activityDiagram}
            alt="Activity diagram for a borrow book workflow."
            source={activitySource}
          />

          <p>
            This workflow makes the decision points visible. If the book is
            available, the system creates a loan. If it is not available, the
            member may be able to reserve it. Otherwise, the system explains
            that the book is unavailable.
          </p>
        </section>

        <section className="space-y-3 pt-2">
          <h3>State machine diagrams: show lifecycle rules</h3>
          <p>
            A state machine diagram is not a better sequence diagram. A sequence
            diagram explains one scenario across several participants. A state
            machine diagram explains the valid states of one thing.
          </p>
          <p>
            Use a state machine diagram when lifecycle rules matter more than a
            single request flow. For example, a loan can be requested, approved,
            rejected, returned, or become overdue. Those transitions are the
            subject of the diagram.
          </p>

          <DiagramFigure
            title="A state machine diagram showing the valid lifecycle transitions for a loan."
            src={stateMachineDiagram}
            alt="State machine diagram for a library loan."
            source={stateMachineSource}
          />

          <p>
            When the diagram type matches the question, the PlantUML source
            tends to stay small and readable. When the diagram type fights the
            question, the source becomes awkward and the rendered diagram
            becomes noisy.
          </p>
        </section>
      </section>

      <section className="space-y-3">
        <h2>Maintaining UML diagrams</h2>
        <p>
          In practice, this usually means two workflows: durable documentation
          in Git and fast iteration in project management and collaboration
          platforms.
        </p>
        <p>
          Treat PlantUML diagrams as working design artefacts, not decorative
          screenshots. Keep them close to the feature, documentation, task, or
          decision they describe, so they evolve with the system instead of
          drifting away from it.
        </p>
        <p>
          In Git, prefer small <code>.puml</code> files with clear names over
          one large diagram that tries to explain everything. Review the source,
          render the image, and update both together when a diagram is part of
          published material. That makes diagram changes reviewable in the same
          way as code changes.
        </p>
        <p>
          In project tools, post a new PlantUML block for each meaningful
          revision instead of silently replacing the previous version. That
          keeps the design conversation intact, including what changed and why.
        </p>
        <DiagramFigure
          title="A sequence diagram showing how UML source can be drafted, reviewed, rendered, and revised in development project management tools."
          src={projectManagementSequenceDiagram}
          alt="Sequence diagram for a PlantUML workflow in generic project management and issue-tracking tools."
          source={projectManagementSequenceSource}
        />
        <p>
          This pattern works well across project management tools, issue
          trackers, and collaboration platforms: discuss in text, version the
          source, render the diagram, and record each revision with context.
        </p>
        <p>
          This also pairs well with AI-assisted work. Ask AI for source code,
          not a finished drawing. Then render the diagram, inspect meaning and
          layout, and revise the source until the result is accurate and
          readable.
        </p>
      </section>

      <section className="space-y-3">
        <h2>Further reading</h2>
        <p>
          For deeper UML study, start with the official specification when
          precision matters, and use shorter books when you want practical
          guidance.
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <ExternalArticleLink href="https://www.omg.org/spec/UML/">
              OMG Unified Modeling Language specification
            </ExternalArticleLink>
            <p className="text-muted-foreground text-sm">
              The official UML specification source.
            </p>
          </li>
          <li>
            <ExternalArticleLink href="https://martinfowler.com/books/uml.html">
              <em>UML Distilled</em> by Martin Fowler
            </ExternalArticleLink>
            <p className="text-muted-foreground text-sm">
              A compact practical guide to the most useful parts of UML.
            </p>
          </li>
          <li>
            <ExternalArticleLink href="https://www.craiglarman.com/wiki/index.php?title=Book_Applying_UML_and_Patterns">
              <em>Applying UML and Patterns</em> by Craig Larman
            </ExternalArticleLink>
            <p className="text-muted-foreground text-sm">
              A broader object-oriented analysis and design book that uses UML
              in a software design context.
            </p>
          </li>
        </ul>
      </section>
    </div>
  );
}
