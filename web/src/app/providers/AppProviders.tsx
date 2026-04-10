import type { PropsWithChildren } from "react";
import { HelmetProvider } from "react-helmet-async";

export const AppProviders = ({ children }: PropsWithChildren) => {
  return <HelmetProvider>{children}</HelmetProvider>;
};
