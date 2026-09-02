import { useEffect, useMemo } from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import { useRouter } from "next/router";
import Papa from "papaparse";
import { getRespondentQuestions } from "../../lib/survey-definitions";
import { STORAGE_KEYS } from "../../lib/constants";
import { pakemdiriTheme } from "../../lib/survey-theme";
import "survey-core/survey-core.min.css";
import "survey-core/i18n/indonesian";

const DataComponent = () => {
  const { locale } = useRouter();
  const normalizedLocale = locale || "id";
  const surveyModel = useMemo(() => {
    const model = new Model(getRespondentQuestions(normalizedLocale));
    model.locale = normalizedLocale;
    model.applyTheme(pakemdiriTheme);
    return model;
  }, [normalizedLocale]);

  useEffect(() => {
    const handleComplete = (sender) => {
      let scores = [];
      try {
        scores = JSON.parse(sessionStorage.getItem(STORAGE_KEYS.SCORE) || "[]");
      } catch {
        scores = [];
      }

      const surveyScores = scores.map((item) => ({
        title: item.title,
        nilai: Math.round((item.correct / item.question) * 100 * 10) / 10,
      }));
      const findScore = (key) =>
        surveyScores.find(({ title }) => title === key) || {};
      const perangkat = findScore("perangkat");
      const akun = findScore("akun");
      const komunikasi = findScore("komunikasi");
      const ponsel = findScore("ponsel");
      const csv = Papa.unparse([
        {
          email: sender.data.email,
          name: sender.data.name,
          domisili: sender.data.domisili,
          gender: sender.data.gender,
          umur: sender.data.umur,
          perangkat: perangkat.title ? 1 : 0,
          skor_perangkat: perangkat.nilai || 0,
          identitas: akun.title ? 1 : 0,
          skor_identitas: akun.nilai || 0,
          komunikasi: komunikasi.title ? 1 : 0,
          skor_komunikasi: komunikasi.nilai || 0,
          ponsel: ponsel.title ? 1 : 0,
          skor_ponsel: ponsel.nilai || 0,
        },
      ]);

      fetch("/api/sendmail", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ csv, scores, locale: normalizedLocale }),
      });
    };

    surveyModel.onComplete.add(handleComplete);
    return () => surveyModel.onComplete.remove(handleComplete);
  }, [normalizedLocale, surveyModel]);

  return <Survey model={surveyModel} />;
};

export default DataComponent;
