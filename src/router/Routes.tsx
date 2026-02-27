import { Contact } from "../pages/contact/Contact";
import { Documentation } from "../pages/documentation/Documentation";
import { Landing } from "../pages/Landing/Landing";
import { Pricing } from "../pages/pricing/Pricing";
import { PrivacyPolicy } from "../pages/legals/PrivacyPolicy";
import { CookiePolicy } from "../pages/legals/Cookie";
import { DataProcessingAddendum } from "../pages/legals/DPA";
import { ErrorPage } from "../pages/error/Error";
import type { JSX } from "react";
import { Features } from "../pages/features/Features";

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
    path: "features",
    element: <Features />,
    label: "navigation.features",
    visibleOnHeader: true,
    visibleOnFooter: false,
  },
  {
    path: "pricing",
    element: <Pricing />,
    label: "navigation.pricing",
    visibleOnHeader: true,
    visibleOnFooter: false,
  },

  {
    path: "contact",
    element: <Contact mode="contact" />,
    label: "navigation.contact",
    visibleOnHeader: true,
    visibleOnFooter: true,
  },
  {
    path: "help",
    element: <Contact />,
    label: "navigation.support",
    visibleOnHeader: true,
    visibleOnFooter: true,
  },
  {
    path: "security",
    element: <Contact mode="security" />,
    label: "navigation.security",
    visibleOnHeader: false,
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
    visibleOnHeader: true,
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
