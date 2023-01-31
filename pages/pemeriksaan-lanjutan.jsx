/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import dynamic from "next/dynamic";

const SurveyComponent = dynamic(() => import("../components/survey"), {
  ssr: false,
});

export default function Pakemdiri() {
  const router = useRouter();

  const [mulai, setMulai] = React.useState();
  const [kategori, setKategori] = React.useState("");
  const [filledSurvey, setFilledSurvey] = useState([]);

  const [tombolTotalNilai, setTombolTotalNilai] = useState(false);

  const surveyItemKey = "completed-survey";

  if (typeof window !== "undefined") {
    // browser code
    const completedSurvey = window.localStorage.getItem(surveyItemKey) || null;
    if (completedSurvey) {
      const data = JSON.parse(completedSurvey);
      useEffect(() => setFilledSurvey(data), []);

      // if user completed 2 survey, show the button.
      if (data.length >= 2) {
        useEffect(() => setTombolTotalNilai(true), []);
      }
    }
  }

  function handleClick(e) {
    setKategori(e);
    setMulai(true);
  }

  function lihatNilai(e) {
    const getCurrentSurvey = window.localStorage.getItem("score");
    const currentSurvey = JSON.parse(getCurrentSurvey);

    let correctAnswer = currentSurvey
      .map((element) => element.correct)
      .reduce((a, b) => a + b, 0);
    let question = currentSurvey
      .map((element) => element.question)
      .reduce((a, b) => a + b, 0);

    console.log(correctAnswer);
    console.log(question);

    const score = (correctAnswer / question) * 100;

    router.push(
      {
        pathname: "/hasil",
        query: { score: score },
      },
      "/hasil"
    );
  }

  return mulai && kategori == "perangkat" ? (
    <SurveyComponent survey="perangkat" />
  ) : mulai && kategori == "akun" ? (
    <SurveyComponent survey={"akun"} />
  ) : mulai && kategori == "komunikasi" ? (
    <SurveyComponent survey={"komunikasi"} />
  ) : mulai && kategori == "ponsel" ? (
    <SurveyComponent survey={"ponsel"} />
  ) : (
    <div className="relative flex content-center  justify-center md:h-[calc(100vh-94px-112px)]">
      <div className="container pt-10 xl:px-48 max-w-8xl relative mx-auto pt-auto">
        <div className="items-center flex flex-wrap">
          <div className="w-full px-4 mx-auto my-auto text-[#283A5B] text-center">
            <h1 className="text-4xl md:text-5xl pb-3 md:pb-5 font-semibold">
              <span className="aksen">Lanjutkan</span> Pemeriksaan
            </h1>
            <div className=" w-full grid grid-flow-row sm:grid-flow-row grid-cols-2 sm:grid-cols-4 md:pt-48 py-9 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-gray-100 gap-x-0 bg-white-500 z-10 text-center">
              <button
                className="justify-self-center"
                onClick={() => handleClick("perangkat")}
                disabled={filledSurvey.includes("perangkat")}
              >
                <div
                  className={
                    (filledSurvey.includes("perangkat")
                      ? "bg-[#283A5B]"
                      : "bg-[#A91F24]") + " rounded-full h-24 w-24 p-4 mx-auto"
                  }
                >
                  <Image
                    src="/perangkat.svg"
                    alt="Ikon Pemeriksaan Perangkat"
                    width={75}
                    height={75}
                  />
                </div>
                <p
                  className={
                    filledSurvey.includes("perangkat")
                      ? "text-[#283A5B]"
                      : " aksen"
                  }
                >
                  Perangkat
                </p>
              </button>
              <button
                className="justify-self-center"
                onClick={() => handleClick("akun")}
                disabled={filledSurvey.includes("akun")}
              >
                <div
                  className={
                    (filledSurvey.includes("akun")
                      ? "bg-[#283A5B]"
                      : "bg-[#A91F24]") + " rounded-full h-24 w-24 p-4 mx-auto"
                  }
                >
                  <Image
                    src="/identitas.svg"
                    alt="Ikon Pemeriksaan Identitas"
                    width={75}
                    height={75}
                  />
                </div>
                <p
                  className={
                    filledSurvey.includes("akun") ? "text-[#283A5B]" : " aksen"
                  }
                >
                  Identitas
                </p>
              </button>
              <button
                className="justify-self-center"
                onClick={() => handleClick("komunikasi")}
                disabled={filledSurvey.includes("komunikasi")}
              >
                <div
                  className={
                    (filledSurvey.includes("komunikasi")
                      ? "bg-[#283A5B]"
                      : "bg-[#A91F24]") + " rounded-full h-24 w-24 p-4 mx-auto"
                  }
                >
                  <Image
                    src="/komunikasi.svg"
                    alt="Ikon Pemeriksaan Komunikasi"
                    width={75}
                    height={75}
                  />
                </div>
                <p
                  className={
                    filledSurvey.includes("komunikasi")
                      ? "text-[#283A5B]"
                      : " aksen"
                  }
                >
                  Komunikasi
                </p>
              </button>
              <button
                className="justify-self-center"
                onClick={() => handleClick("ponsel")}
                disabled={filledSurvey.includes("ponsel")}
              >
                <div
                  className={
                    (filledSurvey.includes("ponsel")
                      ? "bg-[#283A5B]"
                      : "bg-[#A91F24]") + " rounded-full h-24 w-24 p-4 mx-auto"
                  }
                >
                  <Image
                    src="/phone.svg"
                    alt="Ikon Pemeriksaan Ponsel"
                    width={75}
                    height={75}
                  />
                </div>
                <p
                  className={
                    filledSurvey.includes("ponsel")
                      ? "text-[#283A5B]"
                      : " aksen"
                  }
                >
                  Ponsel
                </p>
              </button>
            </div>
            <div className="pb-8">
              {/* <Link
                href="pemeriksaan-lanjutan"
              > */}
              {tombolTotalNilai ? (
                <button
                  onClick={() => lihatNilai()}
                  className="relative h-12 w-36 mt-4 mx-2 overflow-hidden rounded-lg bg-[#A91F24] hover:bg-red-500 text-lg shadow self-center lg:self-center"
                >
                  <span className="relative text-white ">
                    Lihat Total Nilai
                  </span>
                </button>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
