// Generated from the English titles. URL slugs stay the same in every language.
import type { SectionKey } from "./config";

export const sectionSlugs: Record<SectionKey, string> = {
  listing: "listing-inventory-orders",
  pricing: "automated-pricing",
  shipping: "shipping-solutions",
  analytics: "analytics-reporting",
};

/** Slugs of the "how it works" steps (prefixed with step-) and capability cards, in display order. */
export const itemSlugs: Record<SectionKey, { steps: string[]; items: string[] }> = {
  listing: {
    steps: ["step-add-products", "step-discovery", "step-filtering", "step-listing"],
    items: ["inventory-by-stage", "filters-and-saved-views", "clear-out-of-criteria-reasons", "restrictions-and-blocked-asins", "policy-warning-protection", "creation-and-removal-rules", "bulk-actions-and-import-tracking", "price-history", "multiple-marketplaces", "order-list-that-fits-real-work", "everything-about-an-order-in-one-place", "notifications-and-e-mail-matched-to-orders", "customer-invoices"],
  },
  pricing: {
    steps: ["step-true-cost", "step-margin-band", "step-competition", "step-update-amazon"],
    items: ["profit-rules-by-cost-range", "buy-box-or-lowest-price", "buy-box-eligibility-check", "ignore-list", "sole-seller-margin", "no-buy-box-fallback", "you-choose-how-prices-are-applied", "currency-tax-and-commission", "stock-and-handling-time", "protected-api-quota", "per-store-control"],
  },
  shipping: {
    steps: ["step-package-registered", "step-warehouse-receives", "step-warehouse-ships", "step-amazon-is-confirmed"],
    items: ["partner-warehouses", "default-carrier-service", "package-lifecycle", "shipping-and-return-labels", "when-amazon-is-told", "carrier-and-tracking-update", "warehouse-messaging"],
  },
  analytics: {
    steps: ["step-estimate", "step-actuals-arrive", "step-final-result"],
    items: ["order-profit-breakdown", "estimated-actual-overridden", "financial-activity", "orders-report", "dashboard-kpis", "dashboard-charts"],
  },
};
