import type { Lang } from "./content";

export interface TopicSection {
  kicker?: string;
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  callout?: { title: string; text: string };
}
export interface TopicFaq { q: string; a: string; }
export interface TopicContent {
  title: string;
  description: string;
  h1: string;
  lead: string;
  sections: TopicSection[];
  faqs: TopicFaq[];
  updated: string;
  related: string[];
}
export interface Topic {
  slug: string;
  group: "kunjungan" | "pulau" | "makan" | "rencana";
  linkTitle: { id: string; en: string };
  id: TopicContent;
  en: TopicContent;
}
