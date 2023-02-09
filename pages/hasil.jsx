import { useRouter } from "next/router";
import * as React from "react";
import Link from "next/link";

import dynamic from "next/dynamic";

const SurveyComponent = dynamic(() => import("../components/survey/data"), {
  ssr: false,
});

const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width={250}
    height={250}
    shapeRendering="geometricPrecision"
    textRendering="geometricPrecision"
    imageRendering="optimizeQuality"
    fillRule="evenodd"
    clipRule="evenodd"
    viewBox="0 0 5820.92 7170.17"
    {...props}
  >
    <g>
      <path d="M4.91 1194.81c0 1029.71-67.17 1923.17 295.96 2890.9 213.75 569.65 453.04 1058.32 808.03 1529 214.54 284.45 390.49 520 668.91 765.18 57.16 50.35 75.27 52.39 132.79 106.23 197.74 185.04 793.9 684.05 1042.16 684.05 116.77 0 926.16-645.1 1095.59-816.52 172.51-174.53 301.96-303.25 463.17-492.88 39.02-45.9 63.94-84.77 102.7-136.31 47.07-62.57 62.68-73.6 106.85-132.17 75.9-100.63 132.68-198.56 202.29-302.28 467.08-695.97 897.56-1823.45 897.56-2979.79V1168.26c0-187.14-730.45-382.15-1020.48-493.27l-1468.15-550.2C2775.5-93.16 2891.1-10.42 2146.1 255.4c-263.82 94.13-497.98 183.39-756.21 279.51L287.08 945.85C147.51 994.99 4.91 1016.26 4.91 1194.83z" />
    </g>
  </svg>
);

const HasilComponent = () => {
  const router = useRouter();
  const data = router.query;

  const [checked, setChecked] = React.useState(false);
  const [mulai, setMulai] = React.useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  // If user reload page, the passed score prop removed which give bad UI look
  if (data.score == null) data.score = 0;

  //  change math round output of "." to ","
  function numberWithCommas(x) {
    return x.toString().replace(".", ",");
  }

  // change "." to "," of rounded survey score
  let score = Math.round(data.score * 10) / 10;
  let nilai = numberWithCommas(score);

  let color, risiko;

  if (score < 21) {
    color = "#F2848C";
    risiko = "Tingkat risiko sangat tinggi";
  } else if (score < 41) {
    color = "#F2A19D";
    risiko = "Tingkat risiko tinggi";
  } else if (score < 61) {
    color = "#F2C8AD";
    risiko = "Tingkat risiko sedang";
  } else if (score < 81) {
    color = "#D1E1B7";
    risiko = "Tingkat risiko rendah";
  } else if (score <= 100) {
    color = "#9FDAC4";
    risiko = "Tingkat risiko sangat rendah ";
  }

  function deleteSurveyState() {
    localStorage.removeItem("score");
    localStorage.removeItem("completed-survey");
    localStorage.removeItem("my-survey");
    router.push("rekomendasi");

    // const scoreItem = "score";
    // const stateScore = window.localStorage.getItem(scoreItem);
    // const currentSurvey = JSON.parse(stateScore);
    // console.log("Cure survey:")
    // console.log(currentSurvey)
    // let data_csv = {
    //   email: "asd@asd.asd",
    //   // perangkat: currentSurvey.titleperangkat,
    //   identitas: "",
    //   currentSurvey,
    // };

    // fetch("/api/sendmail", {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json, text/plain, */*",
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(data_csv),
    // }).then((res) => {
    //   console.log("Response received");
    //   if (res.status === 200) {
    //     console.log("Response succeeded!");
    //   }
    // });
  }

  function handleClick() {
    setMulai(true);
  }

  return mulai ? (
    <SurveyComponent />
  ) : (
    <>
      <div className="flex content-center justify-center text-[#253C5B]">
        <div className="container pt-10 2xl:pt-44 xl:px-48 max-w-8xl relative mx-auto">
          <div className="items-center flex flex-wrap mx-auto flex-col">
            <div className="mb-4 px-4">
              <h1 className="text-4xl md:text-5xl font-bold mb-3 ">
                <span className="aksen">Level</span> Keamanan Anda
              </h1>
            </div>
            <h3 className="px-4 mb-3 text-2xl font-semibold">
              Tingkat kerentanan
            </h3>
            <div className=" w-full grid grid-flow-row sm:grid-flow-row grid-cols-2 sm:grid-cols-5 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-gray-100 gap-x-0 gap-y-2 justify-items-center z-10 text-center">
              <button className="group relative h-12 w-24 overflow-hidden rounded-lg bg-[#F2848C]  text-lg ">
                <span className="relative">1-20</span>
              </button>
              <button className="group relative h-12 w-24 overflow-hidden rounded-lg bg-[#F2A19D] text-lg ">
                <span className="relative">21-40</span>
              </button>
              <button className="group relative h-12 w-24 overflow-hidden rounded-lg bg-[#F2C8AD]  text-lg ">
                <span className="relative ">41-60</span>
              </button>
              <button className="group relative h-12 w-24 overflow-hidden rounded-lg bg-[#D1E1B7]  text-lg ">
                <span className="relative  ">61-80</span>
              </button>
              <button className="group relative h-12 w-24 overflow-hidden rounded-lg bg-[#9FDAC4] text-lg ">
                <span className="relative  ">81-100</span>
              </button>
            </div>
            <div className="relative pt-10 md:pt-24 mx-auto">
              <div className="absolute inset-0 z-10 text-center flex flex-col items-center justify-center mt-10">
                <span className="text-4xl font-black">{nilai}%</span>
              </div>
              <div href="#" className="relative">
                <div className="h-48 flex flex-wrap content-center">
                  <SvgComponent fill={color} />
                </div>
              </div>
            </div>
            <div
              className={
                "mt-10 m-5 p-2 rounded-lg text-center " + "bg-[" + color + "]"
              }
            >
              <span className="relative">{risiko}</span>
            </div>
            <div className="pb-8">
              {/* <div className="flex justify-center">
                <div>
                  <div className="form-check">
                    <input
                      checked={checked}
                      onChange={handleChange}
                      className="form-check-input h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-red-600 checked:border-red-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label inline-block text-gray-800"
                      for="flexCheckDefault"
                    >
                      Default checkbox
                    </label>
                  </div>
                </div>
              </div> */}
              <Link href="rekomendasi">
              <button
                onClick={() => deleteSurveyState()}
                // email
                // disabled={checked}
                // onClick={
                //   checked ? () => handleClick() : () => deleteSurveyState()
                // }
                className="relative h-12 w-36 mt-4 mx-2 overflow-hidden rounded-lg bg-[#A91F24] hover:bg-red-500 text-lg shadow self-center lg:self-center"
              >
                {/* <span className="relative text-white ">
                  {checked ? "Isi Data" : "Selesai"}
                </span> */}
                <span className="relative text-white ">
                  Selesai
                </span>
              </button>
              </Link>
              <Link href="pemeriksaan-lanjutan">
                <button className="relative h-12 w-36 mt-4 mx-2 overflow-hidden rounded-lg bg-[#A91F24] hover:bg-red-500 text-lg shadow self-center lg:self-center">
                  <span className="relative text-white ">Lanjutkan</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HasilComponent;
