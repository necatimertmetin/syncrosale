export const features = [
  {
    title: "Real-Time Order Tracking",
    description:
      "Stay on top of every incoming order with instant updates and lightning-fast visibility.",
    animationComponent: () =>
      import("./animations/TrackingAnimation").then(
        (mod) => mod.TrackingAnimation
      ),
  },
  {
    title: "Smart Product & Stock Sync",
    description:
      "Keep all your listings and inventory perfectly in sync — across all platforms, automatically.",
    animationComponent: () =>
      import("./animations/StockSyncAnimation").then(
        (mod) => mod.StockSyncAnimation
      ),
  },
  {
    title: "Powerful Visual Reports",
    description:
      "Turn your data into insights with dynamic, easy-to-read sales, stock, and order reports.",
    animationComponent: () =>
      import("./animations/ReportsAnimation").then(
        (mod) => mod.ReportsAnimation
      ),
  },
  {
    title: "Unified Multi-Store Management",
    description:
      "Manage all your stores from one clean dashboard. No more switching tabs — just full control.",
    animationComponent: () =>
      import("./animations/StoreManagementAnimation").then(
        (mod) => mod.StoreManagementAnimation
      ),
  },
];
