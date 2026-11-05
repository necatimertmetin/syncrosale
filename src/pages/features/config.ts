import type { SvgIconComponent } from "@mui/icons-material";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import PercentOutlinedIcon from "@mui/icons-material/PercentOutlined";
import CompareArrowsOutlinedIcon from "@mui/icons-material/CompareArrowsOutlined";
import BlockOutlinedIcon from "@mui/icons-material/BlockOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import SyncOutlinedIcon from "@mui/icons-material/SyncOutlined";
import WarehouseOutlinedIcon from "@mui/icons-material/WarehouseOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import TaskAltOutlinedIcon from "@mui/icons-material/TaskAltOutlined";
import QrCode2OutlinedIcon from "@mui/icons-material/QrCode2Outlined";
import TravelExploreOutlinedIcon from "@mui/icons-material/TravelExploreOutlined";
import QueryStatsOutlinedIcon from "@mui/icons-material/QueryStatsOutlined";
import ReplayOutlinedIcon from "@mui/icons-material/ReplayOutlined";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";

import imDark from "../../assets/images/im-dark.png";
import imLight from "../../assets/images/im-light.png";
import otDark from "../../assets/images/ot-dark.png";
import otLight from "../../assets/images/ot-light.png";

export type SectionKey = "listing" | "pricing" | "shipping" | "analytics";

export type FeatureSection = {
  key: SectionKey;
  icons: SvgIconComponent[];
  /** Screenshots shown next to the section (dark / light). */
  images?: { dark: string[]; light: string[] };
};

/** Number of capability cards and "how it works" steps per section (must match the locale files). */
export const counts: Record<SectionKey, { items: number; steps: number }> = {
  listing: { items: 13, steps: 4 },
  pricing: { items: 11, steps: 4 },
  shipping: { items: 7, steps: 4 },
  analytics: { items: 6, steps: 3 },
};

export const sections: FeatureSection[] = [
  {
    key: "listing",
    icons: [
      FilterAltOutlinedIcon,
      Inventory2OutlinedIcon,
      ShieldOutlinedIcon,
      PublicOutlinedIcon,
      ReceiptLongOutlinedIcon,
      DescriptionOutlinedIcon,
    ],
    images: { dark: [imDark, otDark], light: [imLight, otLight] },
  },
  {
    key: "pricing",
    icons: [
      PercentOutlinedIcon,
      CompareArrowsOutlinedIcon,
      BlockOutlinedIcon,
      PersonOutlineOutlinedIcon,
      EmojiEventsOutlinedIcon,
      TuneOutlinedIcon,
      SyncOutlinedIcon,
    ],
  },
  {
    key: "shipping",
    icons: [
      WarehouseOutlinedIcon,
      LocalShippingOutlinedIcon,
      TaskAltOutlinedIcon,
      QrCode2OutlinedIcon,
      TravelExploreOutlinedIcon,
    ],
  },
  {
    key: "analytics",
    icons: [QueryStatsOutlinedIcon, ReplayOutlinedIcon, DashboardOutlinedIcon],
  },
];
