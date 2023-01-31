/* eslint-disable react-hooks/rules-of-hooks */
// components/survey/index.tsx
import { useCallback, useRef, useState } from "react";
import * as Survey from "survey-react"; // import surveyjs
import { questions } from "./content/datadiri"; // these are the survey questions

import Papa from "papaparse";

// Modern theme
import "survey-react/modern.min.css";
import { useRouter } from "next/router";
// Default theme
// import 'survey-react/survey.min.css';

const dataComponent = () => {
  const router = useRouter();

  // Apply theme and add custom survey data property
  Survey.StylesManager.applyTheme("modern");
  console.log("aw");
  // console.log(datadiri)

  const survey = new Survey.Model(questions);

  const [surveyResults, setSurveyResults] = useState("");
  const [isSurveyCompleted, setIsSurveyCompleted] = useState(false);

  // get score item from localstorage to get completed survey
  const scoreItem = "score";
  const stateScore = window.localStorage.getItem(scoreItem);
  const currentSurvey = JSON.parse(stateScore);

  survey.onComplete.add((survey) => {
    // map and calculate retrieved local storage array of object.
    // E.G.
    // [
    // { title: 'ponsel', correct: 10, question: 19 },
    // { title: 'perangkat', correct: 8, question: 12 }
    // ]
    let surveyItem = currentSurvey.map((item) => {
      return {
        title: item.title,
        nilai: Math.round((item.correct / item.question) * 100 * 10) / 10,
      };
    });

    // Find the subject of the survey we are looking for, then assign to a
    // variable, which used to manipulate the data.
    const perangkat =
      surveyItem.find(({ title }) => title === "perangkat") || 0;
    const identitas =
      surveyItem.find(({ title }) => title === "identitas") || 0;
    const komunikasi =
      surveyItem.find(({ title }) => title === "komunikasi") || 0;
    const ponsel = surveyItem.find(({ title }) => title === "ponsel") || 0;

    let data = [
      {
        email: survey.data.email,
        name: survey.data.nama,
        domisili: "JAWA BARAT",
        gender: "Laki-laki",
        umur: "18-25",
        perangkat: perangkat.title ? 1 : 0,
        skor_perangkat: perangkat.nilai ? perangkat.nilai : 0,
        identitas: identitas.title ? 1 : 0,
        skor_identitas: identitas.nilai ? identitas.nilai : 0,
        komunikasi: komunikasi.title ? 1 : 0,
        skor_komunikasi: komunikasi.nilai ? komunikasi.nilai : 0,
        ponsel: ponsel.title ? 1 : 0,
        skor_ponsel: ponsel.nilai ? ponsel.nilai : 0,
      },
    ];

    // conver to CSV
    let csv = Papa.unparse(data);
    console.log(csv);


    // API call to send the email
    fetch("/api/sendmail", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(csv),
    }).then((res) => {
      console.log("Response received");
      if (res.status === 200) {
        console.log("Response succeeded!");
      }
    });


    setIsSurveyCompleted(true);
  });

  return (
    <>
      <Survey.Survey model={survey} />{" "}
      {/* {isSurveyCompleted && (
        <>
          <h2>
            {" "}
            Nilai Anda adalah <span id="score"> </span>{" "}
          </h2>{" "}
          <p> Result JSON: </p>{" "}
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
export default dataComponent;
