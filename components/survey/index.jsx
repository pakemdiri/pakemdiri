import { useEffect, useMemo, useRef } from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import { Converter } from "showdown";
import { useRouter } from "next/router";
import { getCategoryKeyByTitle, STORAGE_KEYS } from "../../lib/constants";
import { getSurveyDefinition } from "../../lib/survey-definitions";
import { pakemdiriTheme } from "../../lib/survey-theme";
import "survey-core/survey-core.min.css";
import "survey-core/i18n/indonesian";

const SurveyComponent = ({ survey: surveyKey }) => {
  const router = useRouter();
  const locale = router.locale || "id";
  const converterRef = useRef(new Converter());
  const kategori = useMemo(
    () => getSurveyDefinition(locale, surveyKey),
    [locale, surveyKey]
  );

  const surveyModel = useMemo(() => {
    if (!kategori) return null;
    const model = new Model(kategori);
    model.locale = locale;
    model.applyTheme(pakemdiriTheme);
    model.sendResultOnPageNext = true;

    if (typeof window !== "undefined") {
      try {
        const prevData = sessionStorage.getItem(STORAGE_KEYS.SURVEY_DATA);
        if (prevData) {
          const allData = JSON.parse(prevData);
          const saved = allData[surveyKey] || allData[model.title];
          if (saved?.data) {
            const data = { ...saved.data };
            kategori.pages[0].elements.forEach((question) => {
              const legacyName = question.title;
              if (data[question.name] === undefined && data[legacyName] !== undefined) {
                data[question.name] = data[legacyName];
              }
            });
            model.data = data;
          }
        }
      } catch {
        /* ignore corrupt data */
      }
    }

    return model;
  }, [kategori, locale, surveyKey]);

  useEffect(() => {
    if (!surveyModel) return undefined;

    const converter = converterRef.current;
    const handleMarkdown = (_survey, options) => {
      let str = converter.makeHtml(options.text);
      str = str.substring(3, str.length - 4);
      options.html = str;
    };
    const saveSurveyData = (model) => {
      const existing = sessionStorage.getItem(STORAGE_KEYS.SURVEY_DATA);
      let allAnswers = {};
      if (existing) {
        try {
          allAnswers = JSON.parse(existing);
        } catch {
          /* ignore corrupt data */
        }
      }
      allAnswers[surveyKey] = { key: surveyKey, title: model.title, data: { ...model.data } };
      sessionStorage.setItem(STORAGE_KEYS.SURVEY_DATA, JSON.stringify(allAnswers));
    };
    const handleComplete = (sender) => {
      saveSurveyData(sender);

      const completedRaw = sessionStorage.getItem(STORAGE_KEYS.COMPLETED_SURVEY);
      let completed = [];
      try {
        completed = JSON.parse(completedRaw || "[]");
      } catch {
        completed = [];
      }
      completed = [...new Set([...completed.map(getCategoryKeyByTitle).filter(Boolean), surveyKey])];
      sessionStorage.setItem(STORAGE_KEYS.COMPLETED_SURVEY, JSON.stringify(completed));

      const correctCount = sender.getCorrectedAnswerCount();
      const questionCount = sender.getQuizQuestionCount();
      const score = questionCount ? (correctCount / questionCount) * 100 : 0;

      let scores = [];
      try {
        scores = JSON.parse(sessionStorage.getItem(STORAGE_KEYS.SCORE) || "[]");
      } catch {
        scores = [];
      }
      const existingIdx = scores.findIndex((item) => item.title === surveyKey);
      const scoreEntry = { title: surveyKey, correct: correctCount, question: questionCount, score };
      if (existingIdx >= 0) scores[existingIdx] = scoreEntry;
      else scores.push(scoreEntry);
      sessionStorage.setItem(STORAGE_KEYS.SCORE, JSON.stringify(scores));

      router.push({ pathname: "/hasil", query: { score } }, "/hasil");
    };

    surveyModel.onTextMarkdown.add(handleMarkdown);
    surveyModel.onPartialSend.add(saveSurveyData);
    surveyModel.onComplete.add(handleComplete);

    return () => {
      surveyModel.onTextMarkdown.remove(handleMarkdown);
      surveyModel.onPartialSend.remove(saveSurveyData);
      surveyModel.onComplete.remove(handleComplete);
    };
  }, [router, surveyKey, surveyModel]);

  if (!surveyModel) return null;
  return <Survey model={surveyModel} />;
};

export default SurveyComponent;
