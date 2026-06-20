import AppLayout from "@/app/layouts/app";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: AppLayout,
    children: [
      {
        index: true,
        lazy: {
          Component: () =>
            import("@/domains/pages/routes/home").then((m) => m.default),
        },
      },
      {
        path: "privacy-policy",
        lazy: {
          Component: () =>
            import("@/domains/pages/routes/privacy-policy").then(
              (m) => m.default,
            ),
        },
      },
      {
        path: "terms",
        lazy: {
          Component: () =>
            import("@/domains/pages/routes/terms-of-service").then(
              (m) => m.default,
            ),
        },
      },
      {
        path: "contact-us",
        lazy: {
          Component: () =>
            import("@/domains/pages/routes/contact-us").then((m) => m.default),
        },
      },
      {
        path: "blog",
        lazy: {
          Component: () =>
            import("@/domains/blog/routes/blog").then((m) => m.default),
        },
      },
      {
        path: "blog/:slug",
        lazy: {
          Component: () =>
            import("@/domains/blog/routes/article-by-slug").then(
              (m) => m.default,
            ),
        },
      },
      {
        path: "*",
        lazy: {
          Component: () =>
            import("@/domains/errors/routes/not-found").then((m) => m.default),
        },
      },
    ],
  },
]);
