import Image from "next/image";
import { useRouter } from "next/router";
import { getTranslations } from "../lib/i18n";

export default function Rekomendasi() {
  const { locale } = useRouter();
  const t = getTranslations(locale);
  const recommendation = t.recommendations;

  return (
    <div className="relative flex content-center justify-center">
      <div className="container px-4 mx-auto">
        <div className="pt-10 2xl:pt-44 lg:-mx-6 justify-center flex flex-col-reverse lg:flex-row lg:items-center">
          <div className="py-5 flex flex-col md:w-1/4">
            <div className="relative object-cover w-full rounded-xl h-72 lg:h-96 max-w-[300px] max-h-[450px] self-center border-[1.5rem] lg:border-[2rem] border-[#A91F24]">
              <Image src="/panduan.png" alt={recommendation.imageAlt} fill />
            </div>
            <a
              className="contents"
              href="https://mega.nz/file/Jsd2SACA#49jl-Zgzce4jQfzfpzJkB0TB1E0Lr4iqM-9yUNLMNuQ"
              target="_blank"
              rel="noreferrer"
            >
              <button className="relative h-12 w-full max-w-[300px] mt-4 overflow-hidden rounded-lg bg-[#A91F24] hover:bg-red-500 text-lg shadow self-center lg:self-center">
                <span className="relative text-white">{recommendation.download}</span>
              </button>
            </a>
          </div>
          <div className="lg:w-1/2 lg:mt-0 lg:mx-6 text-[#253C5B]">
            <h1 className="pb-3 md:pb-5 text-4xl md:text-5xl font-semibold aksen">
              {recommendation.heading}
            </h1>
            <div className="text-base md:text-lg font-light text-justify">
              <p>{recommendation.intro}</p>
              <br />
              <p>{recommendation.purpose}</p>
              <br />
              <p>{recommendation.sections}</p>
              <ul className="list-disc list-inside">
                <li>
                  {locale === "en" ? "Part 1: " : "Bagian 1: "}
                  <b>{recommendation.partOne}</b>
                </li>
                <li>
                  {locale === "en" ? "Part 2: " : "Bagian 2: "}
                  <b>{recommendation.partTwo}</b>
                </li>
              </ul>
              <br />
              <p>{recommendation.outro}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
