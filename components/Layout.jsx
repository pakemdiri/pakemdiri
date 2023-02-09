import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children, meta: pageMeta }) {
  return (
    <>
      <Head>
        <title>PAKEM DIRI | SAFEnet</title>
        <meta name="robots" content="follow, index" />
        <link href="/favicon.ico" rel="shortcut icon" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta
          content="PAKEM DIRI adalah metode penilaian keamanan digital secara mandiri yang sedang dikembangkan SAFEnet untuk merespon maraknya serangan digital terhadap kelompok berisiko tinggi"
          name="description"
        />
        {/* <meta property="og:url" content={`https://subscription-starter.vercel.app${router.asPath}`} /> */}
        <meta property="og:url" content="https://pakemdiri.safenet.or.id/" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="SAFEnet" />
        <meta
          property="og:description"
          content="PAKEM DIRI adalah metode penilaian keamanan digital secara mandiri yang sedang dikembangkan SAFEnet untuk merespon maraknya serangan digital terhadap kelompok berisiko tinggi"
        />
        <meta
          property="og:title"
          content="Panduan Menilai Keamanan Digital Mandiri - SAFEnet"
        />
        <meta
          property="og:image"
          content="https://pakemdiri.safenet.or.id/pakemdiri.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@Safenet" />
        <meta
          name="twitter:title"
          content="Panduan Menilai Keamanan Digital Mandiri - SAFEnet"
        />
        <meta
          name="twitter:description"
          content="PAKEM DIRI adalah metode penilaian keamanan digital secara mandiri yang sedang dikembangkan SAFEnet untuk merespon maraknya serangan digital terhadap kelompok berisiko tinggi"
        />
        <meta
          name="twitter:image"
          content="https://pakemdiri.safenet.or.id/pakemdiri.png"
        />

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inter"/>

      </Head>
      <main className='"flex flex-col min-h-screen'>
        <Header />
        {children}
        <Footer />
      </main>
    </>
  );
}
