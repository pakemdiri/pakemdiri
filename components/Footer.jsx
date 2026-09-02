import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { getTranslations } from "../lib/i18n";

export default function Footer() {
  const { locale } = useRouter();
  const t = getTranslations(locale);

  return (
    <footer className="mt-auto p-4 bg-[#283A5B] md:flex md:items-center md:justify-between md:p-6">
      <div className="container px-4 mx-auto flex flex-wrap flex-start xl:items-center justify-between flex-col-reverse xl:flex-row">
        <span className="text-sm text-white">{t.footer.contact}{" "}</span>
        <ul className="flex flex-wrap mb-3 md:mt-3 text-sm text-gray-500 sm:mt-0">
          <Link href="/">
            <Image
              className="cursor-pointer"
              src="/logo-footer.svg"
              alt={t.footer.logoAlt}
              width={64}
              height={64}
            />
          </Link>
        </ul>
      </div>
    </footer>
  );
}
