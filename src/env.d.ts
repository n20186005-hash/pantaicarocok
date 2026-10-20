interface Window {
  setPantaiAnalytics?: (enabled: boolean) => void;
  dataLayer?: unknown[];
  gtag?: (...args: unknown[]) => void;
}
