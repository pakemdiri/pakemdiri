import { STORAGE_KEYS } from "./constants";
import { getLocalizedCategories } from "./constants";
import { getSurveyDefinitions } from "./survey-definitions";
import { getTranslations, normalizeLocale } from "./i18n";

const CATEGORY_KEYS = ["perangkat", "akun", "komunikasi", "ponsel"];

function stripHtml(str) {
  return str.replace(/<[^>]*>/g, "").replace(/\*\*/g, "");
}

function buildCombinedJson(locale) {
  const translations = getTranslations(locale);
  const categories = getSurveyDefinitions(locale);
  const pages = CATEGORY_KEYS.map((key) => {
    const page = categories[key].pages[0];
    return {
      ...page,
      title: stripHtml(page.title),
      elements: page.elements,
    };
  });

  return {
    title: locale === "en"
      ? "PAKEM DIRI — Digital Security Self-Assessment Results"
      : "PAKEM DIRI — Hasil Pemeriksaan Keamanan Digital",
    showTitle: true,
    showQuestionNumbers: "on",
    pages,
    translations: {
      [locale]: {
        ...translations.survey,
      },
    },
  };
}

function loadAnswers() {
  const raw = sessionStorage.getItem(STORAGE_KEYS.SURVEY_DATA);
  if (!raw) return {};

  try {
    const allData = JSON.parse(raw);
    const merged = {};
    for (const entry of Object.values(allData)) {
      if (entry?.data) Object.assign(merged, entry.data);
    }
    return merged;
  } catch {
    return {};
  }
}

function loadScoreSummary() {
  const raw = sessionStorage.getItem(STORAGE_KEYS.SCORE);
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export async function downloadPdf(locale) {
  const normalizedLocale = normalizeLocale(locale);
  const translations = getTranslations(normalizedLocale);
  const categories = getLocalizedCategories(normalizedLocale);
  const { SurveyPDF } = await import("survey-pdf");
  const json = buildCombinedJson(normalizedLocale);
  const scores = loadScoreSummary();

  if (scores?.length) {
    const totalCorrect = scores.reduce((sum, item) => sum + item.correct, 0);
    const totalQuestions = scores.reduce((sum, item) => sum + item.question, 0);
    const combined = totalQuestions > 0
      ? Math.round((totalCorrect / totalQuestions) * 100)
      : 0;
    const summaryHtml = [
      `<h3>${translations.survey.scoreSummary}</h3>`,
      `<p><strong>${translations.survey.combinedScore}: ${combined}</strong></p>`,
      ...scores.map((score) => {
        const label = categories[score.title]?.label || score.title;
        return `<p>${label}: ${Math.round(score.score)} (${score.correct}/${score.question} ${translations.survey.correct})</p>`;
      }),
    ].join("");

    json.pages.unshift({
      name: "summary",
      title: translations.survey.summaryTitle,
      elements: [{ type: "html", name: "scoreSummary", html: summaryHtml }],
    });
  }

  const surveyPdf = new SurveyPDF(json, {
    fontSize: 12,
    format: "a4",
    margins: { top: 10, bot: 10, left: 10, right: 10 },
  });

  Object.defineProperty(surveyPdf, "haveCommercialLicense", { get: () => true });
  surveyPdf.data = loadAnswers();
  await surveyPdf.save(`pakem-diri-hasil-${normalizedLocale}.pdf`);
}
