import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import { getTranslations } from "../lib/i18n";

const NAV_PATHS = [
  { href: "/", key: "home" },
  { href: "/pakemdiri", key: "survey" },
  { href: "/rekomendasi", key: "recommendations" },
];

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const router = useRouter();
  const locale = router.locale || "id";
  const t = getTranslations(locale);
  const nextLocale = locale === "id" ? "en" : "id";

  return (
    <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-[#283A5B]">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <Link
            className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
            href="/"
          >
            <Image
              className="cursor-pointer"
              src="/logo.svg"
              alt="Logo SAFEnet"
              width={128}
              height={64}
            />
          </Link>
          <button
            className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            aria-label={navbarOpen ? "Close menu" : "Open menu"}
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            {navbarOpen ? (
              "X"
            ) : (
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </button>
        </div>
        <div
          className={
            "lg:flex flex-grow items-center" +
            (navbarOpen ? " flex" : " hidden")
          }
        >
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto items-center">
            {NAV_PATHS.map((link, idx) => (
              <li key={link.href} className="nav-item flex items-center">
                {idx > 0 && (
                  <span className="hidden lg:block text-gray-300">|</span>
                )}
                <Link
                  href={link.href}
                  onClick={() => setNavbarOpen(false)}
                  className={
                    "px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" +
                    (router.pathname === link.href ? " underline" : "")
                  }
                >
                  <span className="ml-2">{t.nav[link.key]}</span>
                </Link>
              </li>
            ))}
            <li className="nav-item flex items-center">
              <span className="hidden lg:block text-gray-300">|</span>
              <Link
                href={{ pathname: router.pathname, query: router.query }}
                locale={nextLocale}
                onClick={() => setNavbarOpen(false)}
                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
              >
                <span aria-hidden="true" className="mr-1 text-base normal-case">
                  {nextLocale === "id" ? "🇮🇩" : "🇬🇧"}
                </span>
                <span>{t.switchLanguage}</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
