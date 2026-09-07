import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { getLocalizedCategories, SIMPLE_SURVEY_KEY, STORAGE_KEYS } from "../lib/constants";
import { getTranslations } from "../lib/i18n";
import { useSessionStorageJSON } from "../lib/hooks";

const RISK_RANGES = [
  { range: "1-20", color: "#F2848C" },
  { range: "21-40", color: "#F2A19D" },
  { range: "41-60", color: "#F2C8AD" },
  { range: "61-80", color: "#D1E1B7" },
  { range: "81-100", color: "#9FDAC4" },
];

export default function HasilPage() {
  const router = useRouter();
  const locale = router.locale || "id";
  const t = getTranslations(locale);
  const categories = getLocalizedCategories(locale);
  const scoreData = useSessionStorageJSON(STORAGE_KEYS.SCORE);
  const initialAssessment = useSessionStorageJSON(STORAGE_KEYS.INITIAL_ASSESSMENT);
  const [pdfLoading, setPdfLoading] = useState(false);
  const simpleScore = scoreData.find((item) => item.title === SIMPLE_SURVEY_KEY);
  const isSimpleResult = Boolean(initialAssessment?.mode === "simple" && simpleScore);

  const totalCorrect = scoreData.reduce((sum, item) => sum + item.correct, 0);
  const totalQuestions = scoreData.reduce((sum, item) => sum + item.question, 0);
  const combinedScore = totalQuestions > 0
    ? Math.round((totalCorrect / totalQuestions) * 100)
    : 0;

  async function handleDownloadPdf() {
    setPdfLoading(true);
    try {
      const { downloadPdf } = await import("../lib/generate-pdf");
      await downloadPdf(locale);
    } catch (err) {
      console.error("PDF generation failed:", err);
    } finally {
      setPdfLoading(false);
    }
  }

  function handleFinish() {
    sessionStorage.removeItem(STORAGE_KEYS.SCORE);
    sessionStorage.removeItem(STORAGE_KEYS.COMPLETED_SURVEY);
    sessionStorage.removeItem(STORAGE_KEYS.SURVEY_DATA);
    sessionStorage.removeItem(STORAGE_KEYS.INITIAL_ASSESSMENT);
    router.push("/rekomendasi");
  }

  return (
    <div className="flex content-center justify-center text-[#253C5B]">
      <div className="container pt-10 2xl:pt-44 xl:px-48 max-w-8xl relative mx-auto">
        <div className="items-center flex flex-wrap mx-auto flex-col">
          <div className="mb-4 px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-3">
              {isSimpleResult ? (
                <>
                  <span className="aksen">{t.assessment.simple.resultHeadingAccent}</span>{" "}
                  {t.assessment.simple.resultHeading}
                </>
              ) : (
                <>
                  {t.results.headingPrefix}{" "}
                  <span className="aksen">{t.results.headingAccent}</span>
                  {t.results.headingSuffix && ` ${t.results.headingSuffix}`}
                </>
              )}
            </h1>
          </div>
          {!isSimpleResult && (
            <div className="w-full grid grid-flow-row grid-cols-2 sm:grid-cols-5 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-gray-100 gap-x-0 gap-y-2 justify-items-center z-10 text-center">
              {RISK_RANGES.map((level, index) => (
                <div key={level.range}>
                  <div
                    className="justify-self-center content-center relative h-12 w-24 overflow-hidden rounded-lg text-lg"
                    style={{ backgroundColor: level.color }}
                  >
                    <span className="relative">{level.range}</span>
                  </div>
                  <span className="relative">{t.results.riskLevels[index]}</span>
                </div>
              ))}
            </div>
          )}
          <div className="relative pt-5 md:pt-10 pb-5 mx-auto px-4 md:px-0">
            {isSimpleResult ? (
              <div className="p-4 mb-5 bg-[#eef5ff] border border-[#a9c7e8] rounded-lg">
                <h3 className="mt-0 mb-1 font-semibold">{t.assessment.simple.totalScore}</h3>
                <p className="text-3xl font-bold m-0 text-[#0d47a1]">
                  {simpleScore.correct} / {simpleScore.question}
                </p>
                <p className="mt-2 mb-0 text-base">{t.assessment.simple.scoreDescription}</p>
              </div>
            ) : (
              <>
                <div className="p-4 mb-5 bg-[#eef5ff] border border-[#a9c7e8] rounded-lg">
                  <h3 className="mt-0 mb-1 font-semibold">{t.results.combinedScore}</h3>
                  <p className="text-3xl font-bold m-0 text-[#0d47a1]">{combinedScore}</p>
                </div>
                <div className="flex flex-wrap gap-2.5 justify-center px-2.5">
                  {scoreData.map((item) => (
                    <div
                      key={item.title}
                      className="border border-gray-300 rounded-lg p-4 flex-1 min-w-[200px] max-w-[300px]"
                    >
                      <h2 className="mt-0 capitalize text-lg">
                        {categories[item.title]?.label || item.title}
                      </h2>
                      <p className="text-2xl font-bold m-0">
                        {t.results.score}: {Math.round(item.score)}
                      </p>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
          <div className="pb-8 flex flex-wrap justify-center">
            <button
              onClick={handleDownloadPdf}
              disabled={pdfLoading}
              className="relative h-12 w-48 mt-4 mx-2 overflow-hidden rounded-lg bg-[#253C5B] hover:bg-[#1a2d45] disabled:opacity-60 text-lg shadow"
            >
              <span className="relative text-white">
                {pdfLoading ? t.results.downloading : t.results.downloadPdf}
              </span>
            </button>
            <button
              onClick={handleFinish}
              className="relative h-12 w-36 mt-4 mx-2 overflow-hidden rounded-lg bg-[#A91F24] hover:bg-red-500 text-lg shadow"
            >
              <span className="relative text-white">{t.results.finish}</span>
            </button>
            {!isSimpleResult && (
              <Link href="/pemeriksaan-lanjutan">
                <button className="relative h-12 w-36 mt-4 mx-2 overflow-hidden rounded-lg bg-[#A91F24] hover:bg-red-500 text-lg shadow">
                  <span className="relative text-white">{t.results.continue}</span>
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
