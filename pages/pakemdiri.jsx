import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { getCategorySlug, getLocalizedCategories } from "../lib/constants";
import { getTranslations } from "../lib/i18n";

export default function Pakemdiri() {
  const { locale } = useRouter();
  const t = getTranslations(locale);
  const categories = Object.values(getLocalizedCategories(locale));

  return (
    <div className="relative flex content-center justify-center">
      <div className="container pt-10 2xl:pt-44 xl:px-48 max-w-8xl relative mx-auto">
        <div className="items-center flex flex-wrap">
          <div className="w-full px-4 ml-auto mr-auto text-[#283A5B]">
            <h1 className="text-4xl md:text-5xl pb-3 md:pb-5 font-semibold">
              <span className="aksen">{t.guide.accent}</span> {t.guide.title}
            </h1>
            <h3 className="text-lg">{t.guide.subtitle}</h3>
            <div className="md:text-lg text-justify pt-5 font-semibold">
              <p className="text-base font-light">
                {t.guide.steps.map((step, index) => (
                  <span key={step}>
                    {index + 1}. {step}
                    {index < t.guide.steps.length - 1 && <><br /><br /></>}
                  </span>
                ))}
              </p>
            </div>
            <div className="w-full grid grid-cols-2 sm:grid-cols-4 py-9 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-gray-100 gap-x-0 bg-white-500 z-10 text-center">
              {categories.map((category) => (
                <Link
                  key={category.id}
                  className="block justify-self-center"
                  href={`/pakemdiri/${getCategorySlug(category.id)}`}
                >
                  <div className="bg-[#A91F24] rounded-full h-24 w-24 p-4 mx-auto">
                    <Image src={category.icon} alt={category.alt} width={75} height={75} />
                  </div>
                  <p className="aksen">{category.label}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
