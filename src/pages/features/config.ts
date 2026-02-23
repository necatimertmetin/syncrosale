import imDark from "../../assets/images/im-dark.png";
import imLight from "../../assets/images/im-light.png";

import otDark from "../../assets/images/ot-dark.png";
import otLight from "../../assets/images/ot-light.png";

import as1Dark from "../../assets/images/as-1-dark.png";
import as2Dark from "../../assets/images/as-2-dark.png";
import as3Dark from "../../assets/images/as-3-dark.png";
import as4Dark from "../../assets/images/as-4-dark.png";
import as5Dark from "../../assets/images/as-5-dark.png";
import as6Dark from "../../assets/images/as-6-dark.png";

import as1Light from "../../assets/images/as-1-light.png";
import as2Light from "../../assets/images/as-2-light.png";
import as3Light from "../../assets/images/as-3-light.png";
import as4Light from "../../assets/images/as-4-light.png";
import as5Light from "../../assets/images/as-5-light.png";
import as6Light from "../../assets/images/as-6-light.png";

export const features: Feature[] = [
  {
    key: "inventory",
    images: {
      dark: [imDark],
      light: [imLight],
    },
  },
  {
    key: "search",
    images: {
      dark: [as1Dark, as2Dark, as3Dark, as4Dark, as5Dark, as6Dark],
      light: [as1Light, as2Light, as3Light, as4Light, as5Light, as6Light],
    },
  },
  {
    key: "orders",
    images: {
      dark: [otDark],
      light: [otLight],
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
