import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { getTranslations } from "../lib/i18n";

export default function Home() {
  const { locale } = useRouter();
  const t = getTranslations(locale);

  return (
    <div className="relative flex content-center justify-center">
      <div className="container pt-10 2xl:pt-44 xl:px-48 max-w-8xl relative mx-auto">
        <div className="items-center flex flex-wrap mx-auto">
          <div className="md:w-50 lg:w-6/12 mx-auto text-[#283A5B] px-4">
            <h1 className="pb-3 md:pb-5 text-4xl md:text-5xl font-semibold">
              {t.home.welcome}<br />
              {t.home.introPrefix} <span className="aksen"> {t.home.productName} </span>
            </h1>
            <h3 className="text-lg font-semibold">{t.home.subtitle}</h3>
          </div>
          <div className="w-50 lg:w-6/12 ml-auto mr-auto text-right">
            <Image src="/key.svg" alt={t.home.imageAlt} width={250} height={250} />
          </div>
          <div className="w-full text-[#253C5B] mx-auto text-justify pt-10 px-4">
            <p className="text-base md:text-lg font-light">{t.home.description}</p>
          </div>
          <div className="py-5 px-4 mx-auto md:mx-0">
            <Link href="/pakemdiri">
              <button className="group relative h-12 w-48 overflow-hidden rounded-lg bg-[#A91F24] hover:bg-red-500 text-lg shadow">
                <span className="relative text-white">{t.home.start}</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
