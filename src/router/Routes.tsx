import { Contact } from "../pages/contact/Contact";
import { Documentation } from "../pages/documentation/Documentation";
import { Landing } from "../pages/Landing/Landing";
import { Pricing } from "../pages/pricing/Pricing";
import { PrivacyPolicy } from "../pages/legals/PrivacyPolicy";
import { CookiePolicy } from "../pages/legals/Cookie";
import { DataProcessingAddendum } from "../pages/legals/DPA";
import { ErrorPage } from "../pages/error/Error";
import type { JSX } from "react";

export type AppRoute = {
  path: string;
  element: JSX.Element;
  label: string;
  visibleOnHeader: boolean;
  visibleOnFooter: boolean;
};

export const Routes: AppRoute[] = [
  {
    path: "/",
    element: <Landing />,
    label: "navigation.homepage",
    visibleOnHeader: true,
    visibleOnFooter: true,
  },
  {
    path: "pricing",
    element: <Pricing />,
    label: "navigation.pricing",
    visibleOnHeader: false,
    visibleOnFooter: false,
  },
  {
    path: "contact",
    element: <Contact />,
    label: "navigation.contact",
    visibleOnHeader: true,
    visibleOnFooter: true,
  },
  {
    path: "documentation",
    element: <Documentation />,
    label: "navigation.documentation",
    visibleOnHeader: false,
    visibleOnFooter: false,
  },
  {
    path: "privacy",
    element: <PrivacyPolicy />,
    label: "navigation.privacyPolicy",
    visibleOnHeader: false,
    visibleOnFooter: true,
  },
  {
    path: "cookie",
    element: <CookiePolicy />,
    label: "navigation.cookies",
    visibleOnHeader: false,
    visibleOnFooter: true,
  },
  {
    path: "dpa",
    element: <DataProcessingAddendum />,
    label: "navigation.dpa",
    visibleOnHeader: false,
    visibleOnFooter: true,
  },
  {
    path: "error",
    element: <ErrorPage />,
    label: "error",
    visibleOnHeader: false,
    visibleOnFooter: false,
  },
];
