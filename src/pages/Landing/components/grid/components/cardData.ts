export const features = [
  {
    key: "tracking",
    animationComponent: () =>
      import("./animations/TrackingAnimation").then(
        (mod) => mod.TrackingAnimation
      ),
  },
  {
    key: "stockSync",
    animationComponent: () =>
      import("./animations/StockSyncAnimation").then(
        (mod) => mod.StockSyncAnimation
      ),
  },
  {
    key: "reports",
    animationComponent: () =>
      import("./animations/ReportsAnimation").then(
        (mod) => mod.ReportsAnimation
      ),
  },
  {
    key: "multiStore",
    animationComponent: () =>
      import("./animations/StoreManagementAnimation").then(
        (mod) => mod.StoreManagementAnimation
      ),
  },
];
