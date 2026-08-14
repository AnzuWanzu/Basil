export const HOURS = [
  { days: "Monday - Thursday", time: "10:30 AM - 10:00 PM" },
  { days: "Friday - Saturday", time: "10:30 AM - 10:00 PM" },
  { days: "Sunday", time: "10:30 AM - 10:00 PM" },
];

export const TABS = [
  { key: "location", label: "Location & Hours" },
  { key: "chef", label: "Meet the Chef" },
] as const;

export type TabKey = (typeof TABS)[number]["key"];
