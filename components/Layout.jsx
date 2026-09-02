import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import { useRouter } from "next/router";
import { getTranslations, LOCALES, SITE_URL } from "../lib/i18n";

export default function Layout({ children }) {
  const router = useRouter();
  const locale = router.locale || "id";
  const t = getTranslations(locale);
  const routePath = router.asPath.split("?")[0].replace(/^\/$/, "");
  const localizedUrl = (targetLocale) => {
    const prefix = targetLocale === "id" ? "" : `/${targetLocale}`;
    return `${SITE_URL}${prefix}${routePath}`;
  };

  return (
    <>
      <Head>
        <meta name="robots" content="follow, index" />
        <link href="/favicon.ico" rel="shortcut icon" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="canonical" href={localizedUrl(locale)} />
        {LOCALES.map((targetLocale) => (
          <link
            key={targetLocale}
            rel="alternate"
            hrefLang={targetLocale}
            href={localizedUrl(targetLocale)}
          />
        ))}
        <meta content={t.metadata.description} name="description" />
        <meta property="og:url" content={localizedUrl(locale)} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="SAFEnet" />
        <meta property="og:description" content={t.metadata.description} />
        <meta property="og:title" content={t.metadata.socialTitle} />
        <meta property="og:image" content={`${SITE_URL}/pakemdiri.png`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@Safenet" />
        <meta name="twitter:title" content={t.metadata.socialTitle} />
        <meta name="twitter:description" content={t.metadata.description} />
        <meta name="twitter:image" content={`${SITE_URL}/pakemdiri.png`} />
      </Head>
      <main className="flex flex-col min-h-screen">
        <Header />
        {children}
      </main>
      <Footer />
    </>
  );
}
