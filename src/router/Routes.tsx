import { Contact } from "../pages/contact/Contact";
import { Documentation } from "../pages/documentation/Documentation";
import FAQ from "../pages/faq/FAQ";
import { Landing } from "../pages/Landing/Landing";
import { Pricing } from "../pages/pricing/Pricing";
import { PrivacyPolicy } from "../pages/legals/PrivacyPolicy";
import { CookiePolicy } from "../pages/legals/Cookie";
import { DataProcessingAddendum } from "../pages/legals/DPA";

export const Routes = [
  {
    path: "/",
    element: <Landing />,
    label: "Homepage",
    visibleOnHeader: true,
    visibleOnFooter: true,
  },
  {
    path: "/pricing",
    element: <Pricing />,
    label: "Pricing",
    visibleOnHeader: false,
    visibleOnFooter: false,
  },
  {
    path: "/contact",
    element: <Contact />,
    label: "Contact",
    visibleOnHeader: true,
    visibleOnFooter: true,
  },

  {
    path: "/faq",
    element: <FAQ />,
    label: "FAQ",
    visibleOnHeader: true,
    visibleOnFooter: true,
  },
  {
    path: "/documentation",
    element: <Documentation />,
    label: "Documentation",
    visibleOnHeader: false,
    visibleOnFooter: false,
  },
  {
    path: "/privacy",
    element: <PrivacyPolicy />,
    label: "Privacy",
    visibleOnHeader: false,
    visibleOnFooter: true,
  },
  {
    path: "/Cookie",
    element: <CookiePolicy />,
    label: "Cookies",
    visibleOnHeader: false,
    visibleOnFooter: true,
  },
  {
    path: "/DPA",
    element: <DataProcessingAddendum />,
    label: "DPA",
    visibleOnHeader: false,
    visibleOnFooter: true,
  },
];
