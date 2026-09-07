import { getTranslations } from "./i18n";

export const SURVEY_CATEGORIES = {
  perangkat: {
    id: "perangkat",
    title: "Keamanan Perangkat",
    label: "Perangkat",
    icon: "/perangkat.svg",
    alt: "Ikon Pemeriksaan Perangkat",
  },
  akun: {
    id: "akun",
    title: "Keamanan Akun",
    label: "Identitas",
    icon: "/identitas.svg",
    alt: "Ikon Pemeriksaan Identitas",
  },
  komunikasi: {
    id: "komunikasi",
    title: "Keamanan Komunikasi",
    label: "Komunikasi",
    icon: "/komunikasi.svg",
    alt: "Ikon Pemeriksaan Komunikasi",
  },
  ponsel: {
    id: "ponsel",
    title: "Keamanan Ponsel",
    label: "Ponsel",
    icon: "/phone.svg",
    alt: "Ikon Pemeriksaan Ponsel",
  },
};

export const CATEGORY_ROUTE_SLUGS = {
  perangkat: "perangkat",
  akun: "identitas",
  komunikasi: "komunikasi",
  ponsel: "ponsel",
};

export const SIMPLE_SURVEY_KEY = "sederhana";

export const STORAGE_KEYS = {
  SURVEY_DATA: "my-survey",
  COMPLETED_SURVEY: "completed-survey",
  SCORE: "score",
  INITIAL_ASSESSMENT: "initial-assessment",
};

export function getCategorySlug(categoryKey) {
  return CATEGORY_ROUTE_SLUGS[categoryKey] || null;
}

export function getCategoryKeyBySlug(slug) {
  return (
    Object.entries(CATEGORY_ROUTE_SLUGS).find(([, routeSlug]) => routeSlug === slug)?.[0] ||
    null
  );
}

export function getCategoryKeyByTitle(title) {
  if (SURVEY_CATEGORIES[title]) return title;

  for (const locale of ["id", "en"]) {
    const category = Object.entries(getTranslations(locale).categories).find(
      ([, value]) => value.title === title
    );
    if (category) return category[0];
  }

  return null;
}

export function normalizeCompletedSurvey(values) {
  if (!Array.isArray(values)) return [];
  return [...new Set(values.map(getCategoryKeyByTitle).filter(Boolean))];
}

export function getLocalizedCategories(locale) {
  const translations = getTranslations(locale);
  return Object.fromEntries(
    Object.entries(SURVEY_CATEGORIES).map(([key, category]) => [
      key,
      { ...category, ...translations.categories[key], id: key },
    ])
  );
}
