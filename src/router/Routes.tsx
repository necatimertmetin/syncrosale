import { Contact } from "../pages/contact/Contact";
import { Landing } from "../pages/Landing/Landing";

export const Routes = [
  {
    path: "/",
    element: <Landing />,
    label: "Homepage",
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
];
