/* eslint-disable react-hooks/rules-of-hooks */
// components/survey/index.tsx
import { useCallback, useRef, useState } from "react";
import * as Survey from "survey-react"; // import surveyjs
import { perangkat, akun, komunikasi, ponsel } from "./content/index"; // these are the survey questions

import { Converter } from "showdown";

// Modern theme
import "survey-react/modern.min.css";
import { useRouter } from "next/router";
// Default theme
// import 'survey-react/survey.min.css';

const SurveyComponent = (props) => {
  const router = useRouter();

  // Apply theme and add custom survey data property
  Survey.StylesManager.applyTheme("modern");

  let kategori;
  switch (props.survey) {
    case "akun":
      kategori = akun;
      break;
    case "komunikasi":
      kategori = komunikasi;
      break;
    case "perangkat":
      kategori = perangkat;
      break;
    case "ponsel":
      kategori = ponsel;
      break;
    default:
      return 0;
  }

  const survey = useRef(new Survey.Model(kategori)).current;

  const [surveyResults, setSurveyResults] = useState("");
  const [isSurveyCompleted, setIsSurveyCompleted] = useState(false);

  // markdown convertor title survey.
  // used to show `aksen` css class.
  var converter = new Converter();
  survey.onTextMarkdown.add((survey, options) => {
    // convert the markdown text to html
    var str = converter.makeHtml(options.text);
    // remove root paragraphs <p></p>
    str = str.substring(3);
    str = str.substring(0, str.length - 4);
    // set html
    options.html = str;
  });


  survey.sendResultOnPageNext = true;

  const storageItemKey = "my-survey";

  function saveSurveyData(survey) {
    const data = survey.data;
    data.pageNo = survey.currentPageNo;
    window.localStorage.setItem(storageItemKey, JSON.stringify(data));
  }

  // Save survey results
  survey.onPartialSend.add((survey) => {
    saveSurveyData(survey);
  });
  survey.onComplete.add((survey) => {
    saveSurveyData(survey);
  });

  // Restore survey results
  const prevData = window.localStorage.getItem(storageItemKey) || null;
  if (prevData) {
    const data = JSON.parse(prevData);
    survey.data = data;
    if (data.pageNo) {
      survey.currentPageNo = data.pageNo;
    }
  }

  const displayResults = useCallback((survey) => {
    setSurveyResults(JSON.stringify(survey.data, null, 4));
    setIsSurveyCompleted(true);
  }, []);

  survey.onComplete.add(displayResults);


  // pemeriksaan lanjutan
  // save completed survey to localstorage
  const surveyItemKey = "completed-survey";
  function saveCompletedSurvey(data) {
    const surveyState = window.localStorage.getItem(surveyItemKey);

    if (surveyState === null) {
      window.localStorage.setItem(surveyItemKey, JSON.stringify([data]));
    } else {
      const getCurrentSurvey = window.localStorage.getItem(surveyItemKey);
      const currentSurvey = JSON.parse(getCurrentSurvey);

      if (Object.values(currentSurvey).includes(data)) {
        return;
      } else {
        currentSurvey.push(data);

        window.localStorage.setItem(
          surveyItemKey,
          JSON.stringify(currentSurvey)
        );
      }
    }
  }

  const scoreItem = "score";
  function saveScore(title, correct, question) {
    const stateScore = window.localStorage.getItem(scoreItem);

    let items = [];
    let item = {
      title,
      correct,
      question,
    };

    items.push(item);
    if (stateScore === null) {
      window.localStorage.setItem(scoreItem, JSON.stringify(items));
    } else {
      const getCurrentSurvey = window.localStorage.getItem(scoreItem);
      const currentSurvey = JSON.parse(getCurrentSurvey);

      const isFound = currentSurvey.some((element, index) => {
        if (element.title === title && element.correct === correct) {
          return true;
        } else if (element.title === title && element.correct != correct) {
          // intended if user enter survey via pakemdiri page, and the score result changed, delete current element.
          currentSurvey.splice(index, 1);
          return false;
        }

        return false;
      });

      if (!isFound) {
        currentSurvey.push(item);

        window.localStorage.setItem(scoreItem, JSON.stringify(currentSurvey));
      }
    }
  }

  survey.onComplete.add((sender) => {
    saveCompletedSurvey(sender.title);

    var result = sender.data;
    result["correct_answers"] = sender.getCorrectedAnswerCount();
    result["no_of_questions"] = sender.getQuizQuestionCount();
    saveScore(sender.title, result.correct_answers, result.no_of_questions);
    //Post result into your database
    const score =
      (sender.getCorrectedAnswerCount() / sender.getQuizQuestionCount()) * 100;
    router.push(
      {
        pathname: "/hasil",
        query: { score: score },
      },
      "/hasil"
    );
  });
  // Render the survey
  return (
    <>
      <Survey.Survey model={survey} />
      {/* {isSurveyCompleted && (
        <>
          <h2>
            {" "}
            Nilai Anda adalah <span id="score"></span>{" "}
          </h2>
          <p>Result JSON:</p>{" "}
          <code
            style={{
              whiteSpace: "pre",
            }}
          >
            {" "}
            {surveyResults}{" "}
          </code>{" "}
        </>
      )}{" "} */}
    </>
  );
};
export default SurveyComponent;
