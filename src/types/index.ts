export type Language = "en" | "es";

export type LocalizedString = Record<Language, string>;

export type LocalizedList = Record<Language, string[]>;

export type NavItem = {
  href: string;
  label: LocalizedString;
};

export type Service = {
  id: string;
  category: LocalizedString;
  title: LocalizedString;
  description: LocalizedString;
  image: string;
  imageAlt: LocalizedString;
  treatments: LocalizedList;
};

export type Testimonial = {
  id: string;
  quote: LocalizedString;
  patient: string;
  detail: LocalizedString;
};

export type FaqItem = {
  id: string;
  question: LocalizedString;
  answer: LocalizedString;
};

export type JournalArticle = {
  id: string;
  title: LocalizedString;
  excerpt: LocalizedString;
  category: LocalizedString;
  image: string;
  imageAlt: LocalizedString;
  featured?: boolean;
};
