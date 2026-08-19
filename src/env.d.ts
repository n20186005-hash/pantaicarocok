interface Window {
  enablePantaiAnalytics?: () => void;
  dataLayer?: unknown[];
  gtag?: (...args: unknown[]) => void;
}
