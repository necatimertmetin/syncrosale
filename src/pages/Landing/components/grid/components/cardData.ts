import { TrackingAnimation } from "./animations/TrackingAnimation.tsx";
import { StockSyncAnimation } from "./animations/StockSyncAnimation.tsx";
import { ReportsAnimation } from "./animations/ReportsAnimation.tsx";
import { StoreManagementAnimation } from "./animations/StoreManagementAnimation.tsx";

export const features = [
  {
    title: "Real-Time Order Tracking",
    description:
      "Stay on top of every incoming order with instant updates and lightning-fast visibility.",
    animationComponent: TrackingAnimation,
  },
  {
    title: "Smart Product & Stock Sync",
    description:
      "Keep all your listings and inventory perfectly in sync — across all platforms, automatically.",
    animationComponent: StockSyncAnimation,
  },
  {
    title: "Powerful Visual Reports",
    description:
      "Turn your data into insights with dynamic, easy-to-read sales, stock, and order reports.",
    animationComponent: ReportsAnimation,
  },
  {
    title: "Unified Multi-Store Management",
    description:
      "Manage all your stores from one clean dashboard. No more switching tabs — just full control.",
    animationComponent: StoreManagementAnimation,
  },
];
