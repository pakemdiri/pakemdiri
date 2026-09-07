import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import InitialAssessment from "../components/initial-assessment";
import {
  getCategorySlug,
  getLocalizedCategories,
  SIMPLE_SURVEY_KEY,
  STORAGE_KEYS,
} from "../lib/constants";
import { useSessionStorageJSON } from "../lib/hooks";
import { getTranslations } from "../lib/i18n";

const ASSESSMENT_PROGRESS_KEYS = [
  STORAGE_KEYS.INITIAL_ASSESSMENT,
  STORAGE_KEYS.SURVEY_DATA,
  STORAGE_KEYS.COMPLETED_SURVEY,
  STORAGE_KEYS.SCORE,
];

const SurveyComponent = dynamic(() => import("../components/survey"), {
  ssr: false,
});

function SimpleGuide({ assessment, onReset }) {
  const { locale } = useRouter();
  const t = getTranslations(locale);

  return (
    <div className="relative flex content-center justify-center">
      <div className="container relative mx-auto max-w-8xl pt-10 text-[#283A5B] xl:px-48 2xl:pt-44">
        <div className="flex flex-wrap items-center">
          <div className="w-full px-4">
            <h1 className="pb-3 text-4xl font-semibold md:pb-5 md:text-5xl">
              <span className="aksen">{t.assessment.simple.headingAccent}</span>{" "}
              {t.assessment.simple.heading}
            </h1>
            <p className="text-base font-light md:text-lg">
              {t.assessment.result.score}: <strong>{assessment.score}</strong>.{" "}
              {t.assessment.result.simple}
            </p>
            <SurveyComponent survey={SIMPLE_SURVEY_KEY} />
            <button
              type="button"
              onClick={onReset}
              className="mt-8 h-12 rounded-lg bg-[#253C5B] px-6 text-lg text-white shadow hover:bg-[#1a2d45]"
            >
              {t.assessment.reset}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function FullGuide({ assessment, onReset }) {
  const { locale } = useRouter();
  const t = getTranslations(locale);
  const categories = Object.values(getLocalizedCategories(locale));

  return (
    <div className="relative flex content-center justify-center">
      <div className="container relative mx-auto max-w-8xl pt-10 xl:px-48 2xl:pt-44">
        <div className="flex flex-wrap items-center">
          <div className="w-full px-4 text-[#283A5B]">
            <h1 className="pb-3 text-4xl font-semibold md:pb-5 md:text-5xl">
              <span className="aksen">{t.assessment.full.headingAccent}</span>{" "}
              {t.assessment.full.heading}
            </h1>
            <p className="text-base font-light md:text-lg">
              {t.assessment.result.score}: <strong>{assessment.score}</strong>.{" "}
              {t.assessment.result.full}
            </p>
            <h3 className="mt-6 text-lg">{t.guide.subtitle}</h3>
            <div className="pt-5 text-justify md:text-lg">
              <p className="text-base font-light">
                {t.guide.steps.map((step, index) => (
                  <span key={step}>
                    {index + 1}. {step}
                    {index < t.guide.steps.length - 1 && <><br /><br /></>}
                  </span>
                ))}
              </p>
            </div>
            <div className="grid w-full grid-cols-2 gap-x-0 divide-y-2 divide-gray-100 bg-white-500 py-4 text-center sm:grid-cols-4 sm:divide-x-2 sm:divide-y-0 sm:py-9">
              {categories.map((category) => (
                <Link
                  key={category.id}
                  className="block justify-self-center"
                  href={`/pakemdiri/${getCategorySlug(category.id)}`}
                >
                  <div className="mx-auto h-24 w-24 rounded-full bg-[#A91F24] p-4">
                    <Image src={category.icon} alt={category.alt} width={75} height={75} />
                  </div>
                  <p className="aksen">{category.label}</p>
                </Link>
              ))}
            </div>
            <button
              type="button"
              onClick={onReset}
              className="mt-4 h-12 rounded-lg bg-[#253C5B] px-6 text-lg text-white shadow hover:bg-[#1a2d45]"
            >
              {t.assessment.reset}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Pakemdiri() {
  const savedAssessment = useSessionStorageJSON(STORAGE_KEYS.INITIAL_ASSESSMENT);
  const [assessmentOverride, setAssessmentOverride] = useState(null);
  const [assessmentReset, setAssessmentReset] = useState(false);
  const storedAssessment =
    savedAssessment?.mode === "full" || savedAssessment?.mode === "simple"
      ? savedAssessment
      : null;
  const assessment = assessmentOverride || (!assessmentReset && storedAssessment);

  function resetAssessment() {
    ASSESSMENT_PROGRESS_KEYS.forEach((key) => sessionStorage.removeItem(key));
    setAssessmentOverride(null);
    setAssessmentReset(true);
  }

  function completeAssessment(result) {
    setAssessmentOverride(result);
    setAssessmentReset(false);
  }

  if (!assessment) return <InitialAssessment onComplete={completeAssessment} />;
  if (assessment.mode === "simple") {
    return <SimpleGuide assessment={assessment} onReset={resetAssessment} />;
  }
  return <FullGuide assessment={assessment} onReset={resetAssessment} />;
}
