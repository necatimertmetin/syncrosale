import { Contact } from "../pages/contact/Contact";
import { Documentation } from "../pages/documentation/Documentation";
import { Landing } from "../pages/Landing/Landing";
import { Pricing } from "../pages/pricing/Pricing";

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
    visibleOnHeader: true,
    visibleOnFooter: true,
  },
  {
    path: "/contact",
    element: <Contact />,
    label: "Contact",
    visibleOnHeader: true,
    visibleOnFooter: true,
  },
  {
    path: "/documentation",
    element: <Documentation />,
    label: "Documentation",
    visibleOnHeader: true,
    visibleOnFooter: true,
  },
];
