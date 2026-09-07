import dynamic from "next/dynamic";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";
import {
  CATEGORY_ROUTE_SLUGS,
  getCategoryKeyBySlug,
  STORAGE_KEYS,
} from "../../lib/constants";
import { useSessionStorageJSON } from "../../lib/hooks";
import { LOCALES } from "../../lib/i18n";

const SurveyComponent = dynamic(() => import("../../components/survey"), {
  ssr: false,
});

export default function PakemdiriCategory() {
  const router = useRouter();
  const assessment = useSessionStorageJSON(STORAGE_KEYS.INITIAL_ASSESSMENT);
  const canAccessFullAssessment = assessment?.mode === "full";
  const slug = Array.isArray(router.query.category)
    ? router.query.category[0]
    : router.query.category;
  const categoryKey = getCategoryKeyBySlug(slug);

  useEffect(() => {
    if (!router.isReady) return;

    try {
      const saved = JSON.parse(
        sessionStorage.getItem(STORAGE_KEYS.INITIAL_ASSESSMENT) || "null"
      );
      if (saved?.mode === "full") {
        return;
      }
    } catch {
      /* ignore corrupt data */
    }

    router.replace("/pakemdiri", undefined, { locale: router.locale });
  }, [router, canAccessFullAssessment]);

  if (!router.isReady || !canAccessFullAssessment || !categoryKey) return null;
  const backLabel =
    router.locale === "en"
      ? "Back to security section selection"
      : "Kembali ke pilihan bagian keamanan";

  return (
    <>
      <div className="container mx-auto px-4 pt-4">
        <Link
          href="/pakemdiri"
          aria-label={backLabel}
          className="inline-flex items-center gap-1 rounded-full p-2 text-[#A91F24] transition-colors hover:bg-[#A91F24]/10 hover:text-[#8A191D] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A91F24]"
        >
          <svg
            aria-hidden="true"
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
          <span className="font-semibold">{backLabel}</span>
        </Link>
      </div>
      <SurveyComponent survey={categoryKey} />
    </>
  );
}

export function getStaticPaths() {
  return {
    paths: LOCALES.flatMap((locale) =>
      Object.values(CATEGORY_ROUTE_SLUGS).map((category) => ({
        params: { category },
        locale,
      }))
    ),
    fallback: false,
  };
}

export function getStaticProps() {
  return { props: {} };
}
