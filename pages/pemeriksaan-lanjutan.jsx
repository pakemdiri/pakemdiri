import { useCallback } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import {
  getCategorySlug,
  getLocalizedCategories,
  STORAGE_KEYS,
  normalizeCompletedSurvey,
} from "../lib/constants";
import { getTranslations } from "../lib/i18n";
import { useSessionStorageJSON } from "../lib/hooks";

const CategoryButton = ({ category, isCompleted, onClick, completedLabel }) => (
  <button
    className="justify-self-center"
    onClick={() => onClick(category.id)}
    disabled={isCompleted}
  >
    <div
      className={`${isCompleted ? "bg-[#283A5B]" : "bg-[#A91F24]"} rounded-full h-24 w-24 p-4 mx-auto`}
    >
      <Image src={category.icon} alt={category.alt} width={75} height={75} />
    </div>
    <p className={isCompleted ? "text-[#283A5B]" : "aksen"}>{category.label}</p>
    {isCompleted && (
      <span className="block text-base font-semibold text-[#283A5B]">
        {completedLabel}
      </span>
    )}
  </button>
);

export default function PemeriksaanLanjutan() {
  const router = useRouter();
  const locale = router.locale || "id";
  const t = getTranslations(locale);
  const categories = getLocalizedCategories(locale);
  const filledSurvey = normalizeCompletedSurvey(
    useSessionStorageJSON(STORAGE_KEYS.COMPLETED_SURVEY)
  );
  const showTotalScore = filledSurvey.length >= 2;

  const handleCategoryClick = useCallback(
    (selectedCategory) => {
      router.push(`/pakemdiri/${getCategorySlug(selectedCategory)}`);
    },
    [router]
  );

  const calculateTotalScore = useCallback(() => {
    try {
      const scoreData = sessionStorage.getItem(STORAGE_KEYS.SCORE);
      if (!scoreData) return;

      const surveyScores = JSON.parse(scoreData);
      const totalCorrect = surveyScores.reduce((sum, item) => sum + item.correct, 0);
      const totalQuestions = surveyScores.reduce((sum, item) => sum + item.question, 0);
      const finalScore = totalQuestions ? (totalCorrect / totalQuestions) * 100 : 0;

      router.push({ pathname: "/hasil", query: { score: finalScore } }, "/hasil");
    } catch (error) {
      console.error("Error calculating total score:", error);
    }
  }, [router]);

  return (
    <div className="relative flex content-center justify-center">
      <div className="container pt-10 xl:px-48 max-w-8xl relative mx-auto pt-auto">
        <div className="items-center flex flex-wrap">
          <div className="w-full px-4 mx-auto my-auto text-[#283A5B] text-center">
            <h1 className="text-4xl md:text-5xl pb-3 md:pb-5 font-semibold">
              <span className="aksen">{t.followUp.accent}</span> {t.followUp.title}
            </h1>
            <div className="w-full grid grid-cols-2 sm:grid-cols-4 md:pt-48 py-9 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-gray-100 gap-x-0 bg-white-500 z-10 text-center">
              {Object.values(categories).map((category) => (
                <CategoryButton
                  key={category.id}
                  category={category}
                  isCompleted={filledSurvey.includes(category.id)}
                  onClick={handleCategoryClick}
                  completedLabel={t.followUp.completed}
                />
              ))}
            </div>
            <div className="pb-8">
              {showTotalScore && (
                <button
                  onClick={calculateTotalScore}
                  className="relative h-12 w-36 mt-4 mx-2 overflow-hidden rounded-lg bg-[#A91F24] hover:bg-red-500 text-lg shadow"
                >
                  <span className="relative text-white">{t.followUp.totalScore}</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
