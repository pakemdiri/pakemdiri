import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";

const SurveyComponent = dynamic(() => import("../components/survey"), {
  ssr: false,
});

// Constants
const SURVEY_CATEGORIES = {
  PERANGKAT: {
    id: "perangkat",
    title: "Keamanan Perangkat",
    label: "Perangkat",
    icon: "/perangkat.svg",
    alt: "Ikon Pemeriksaan Perangkat"
  },
  AKUN: {
    id: "akun",
    title: "Keamanan Akun",
    label: "Identitas",
    icon: "/identitas.svg",
    alt: "Ikon Pemeriksaan Identitas"
  },
  KOMUNIKASI: {
    id: "komunikasi",
    title: "Keamanan Komunikasi",
    label: "Komunikasi",
    icon: "/komunikasi.svg",
    alt: "Ikon Pemeriksaan Komunikasi"
  },
  PONSEL: {
    id: "ponsel",
    title: "Keamanan Ponsel",
    label: "Ponsel",
    icon: "/phone.svg",
    alt: "Ikon Pemeriksaan Ponsel"
  }
};

const STORAGE_KEYS = {
  COMPLETED_SURVEY: "completed-survey",
  SCORE: "score"
};

// Components
const CategoryButton = ({ category, isCompleted, onClick }) => (
  <button
    className="justify-self-center"
    onClick={() => onClick(category.id)}
    disabled={isCompleted}
  >
    <div
      className={`${
        isCompleted ? "bg-[#283A5B]" : "bg-[#A91F24]"
      } rounded-full h-24 w-24 p-4 mx-auto`}
    >
      <Image
        src={category.icon}
        alt={category.alt}
        width={75}
        height={75}
      />
    </div>
    <p className={isCompleted ? "text-[#283A5B]" : "aksen"}>
      {category.label}
    </p>
  </button>
);

export default function Pakemdiri() {
  const router = useRouter();
  const [mulai, setMulai] = useState(false);
  const [kategori, setKategori] = useState("");
  const [filledSurvey, setFilledSurvey] = useState([]);
  const [showTotalScore, setShowTotalScore] = useState(false);

  // Load completed surveys from session storage
  useEffect(() => {
    try {
      if (typeof window !== "undefined") {
        const completedSurvey = sessionStorage.getItem(STORAGE_KEYS.COMPLETED_SURVEY);
        if (completedSurvey) {
          const data = JSON.parse(completedSurvey);
          setFilledSurvey(data);
          setShowTotalScore(data.length >= 2);
        }
      }
    } catch (error) {
      console.error("Error loading completed surveys:", error);
    }
  }, []);

  const handleCategoryClick = useCallback((selectedCategory) => {
    setKategori(selectedCategory);
    setMulai(true);
  }, []);

  const calculateTotalScore = useCallback(() => {
    try {
      const scoreData = sessionStorage.getItem(STORAGE_KEYS.SCORE);
      if (!scoreData) return;

      const surveyScores = JSON.parse(scoreData);
      const totalCorrect = surveyScores.reduce((sum, item) => sum + item.correct, 0);
      const totalQuestions = surveyScores.reduce((sum, item) => sum + item.question, 0);
      const finalScore = (totalCorrect / totalQuestions) * 100;

      router.push({
        pathname: "/hasil",
        query: { score: finalScore }
      }, "/hasil");
    } catch (error) {
      console.error("Error calculating total score:", error);
    }
  }, [router]);

  // Render survey component if category is selected
  if (mulai && kategori) {
    return <SurveyComponent survey={kategori} />;
  }

  return (
    <div className="relative flex content-center justify-center">
      <div className="container pt-10 xl:px-48 max-w-8xl relative mx-auto pt-auto">
        <div className="items-center flex flex-wrap">
          <div className="w-full px-4 mx-auto my-auto text-[#283A5B] text-center">
            {/* Header */}
            <h1 className="text-4xl md:text-5xl pb-3 md:pb-5 font-semibold">
              <span className="aksen">Lanjutkan</span> Pemeriksaan
            </h1>

            {/* Category Grid */}
            <div className="w-full grid grid-flow-row sm:grid-flow-row grid-cols-2 sm:grid-cols-4 md:pt-48 py-9 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-gray-100 gap-x-0 bg-white-500 z-10 text-center">
              {Object.values(SURVEY_CATEGORIES).map((category) => (
                <CategoryButton
                  key={category.id}
                  category={category}
                  isCompleted={filledSurvey.includes(category.title)}
                  onClick={handleCategoryClick}
                />
              ))}
            </div>

            {/* Total Score Button */}
            <div className="pb-8">
              {showTotalScore && (
                <button
                  onClick={calculateTotalScore}
                  className="relative h-12 w-36 mt-4 mx-2 overflow-hidden rounded-lg bg-[#A91F24] hover:bg-red-500 text-lg shadow self-center lg:self-center"
                >
                  <span className="relative text-white">
                    Lihat Total Nilai
                  </span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}