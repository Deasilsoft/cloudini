import AppLayout from "@/app/layouts/AppLayout";
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
            import("@/domains/pages/routes/HomePageRoute").then(
              (m) => m.default,
            ),
        },
      },
      {
        path: "privacy-policy",
        lazy: {
          Component: () =>
            import("@/domains/pages/routes/PrivacyPolicyPageRoute").then(
              (m) => m.default,
            ),
        },
      },
      {
        path: "terms",
        lazy: {
          Component: () =>
            import("@/domains/pages/routes/TermsPageRoute").then(
              (m) => m.default,
            ),
        },
      },
      {
        path: "contact-us",
        lazy: {
          Component: () =>
            import("@/domains/pages/routes/ContactUsPageRoute").then(
              (m) => m.default,
            ),
        },
      },
    ],
  },
]);
