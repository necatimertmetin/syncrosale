export const features: Feature[] = [
  {
    key: "inventory",
    images: {
      dark: ["/images/im-dark.png"],
      light: ["/images/im-light.png"],
    },
  },
  {
    key: "search",
    images: {
      dark: [
        "/images/as-1-dark.png",
        "/images/as-2-dark.png",
        "/images/as-3-dark.png",
        "/images/as-4-dark.png",
        "/images/as-5-dark.png",
        "/images/as-6-dark.png",
      ],
      light: [
        "/images/as-1-light.png",
        "/images/as-2-light.png",
        "/images/as-3-light.png",
        "/images/as-4-light.png",
        "/images/as-5-light.png",
        "/images/as-6-light.png",
      ],
    },
  },
  {
    key: "orders",
    images: {
      dark: ["/images/ot-dark.png"],
      light: ["/images/ot-light.png"],
    },
  },
  {
    key: "upload",
  },
];

export type FeatureKey = "inventory" | "search" | "orders" | "upload";

export type FeatureImages = {
  dark: string[];
  light: string[];
};

export type Feature = {
  key: FeatureKey;
  images?: FeatureImages;
};
