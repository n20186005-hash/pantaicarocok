import type { Lang } from "./content";
import type { Topic } from "./topic-types";
import { kunjungan } from "./topics-kunjungan";
import { pulau } from "./topics-pulau";
import { makan } from "./topics-makan";
import { rencana } from "./topics-rencana";

export type TopicGroup = Topic["group"];

// Ordered grouping for cluster navigation and homepage links.
export const groupOrder: TopicGroup[] = ["kunjungan", "pulau", "makan", "rencana"];

export const groupLabel: Record<TopicGroup, Record<Lang, string>> = {
  kunjungan: { id: "Kunjungan", en: "Visiting" },
  pulau: { id: "Pulau & air", en: "Islands & water" },
  makan: { id: "Makan & menginap", en: "Food & stay" },
  rencana: { id: "Rencana & itinerari", en: "Plans & itineraries" },
};

export const allTopics: Topic[] = [...kunjungan, ...pulau, ...makan, ...rencana];

const bySlug = new Map<string, Topic>(allTopics.map((topic) => [topic.slug, topic]));

export const getTopic = (slug: string): Topic | undefined => bySlug.get(slug);

export const topicGroups = groupOrder.map((group) => ({
  group,
  label: groupLabel[group],
  topics: allTopics.filter((topic) => topic.group === group),
}));

// Resolve a related slug into a link object for internal cross-linking.
export const resolveRelated = (slug: string, lang: Lang) => {
  const topic = bySlug.get(slug);
  if (!topic) return undefined;
  return { slug, group: topic.group, title: topic.linkTitle[lang] };
};
