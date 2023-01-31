import Link from "next/link";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/router";

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const router = useRouter();

  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-[#283A5B]">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white "
              href="/"
            >
              <Image
              className="cursor-pointer"
                src="/logo.svg"
                alt="Logo SAFEnet Orange"
                width={128}
                height={64}
              />
            </Link>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              {navbarOpen ? "X" : <svg
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
                ></path>
              </svg>}
              
              {/* <i className="fas fa-bars">=</i> */}
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <Link href="/"

                  onClick={ () => setNavbarOpen(!navbarOpen) }
                    className={
                      "px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75 " +
                      (router.pathname == "/" ? "underline" : "")
                    }
                    >
                    <span className="ml-2">HOME</span>

                </Link>
              </li>
              <li className="hidden lg:block text-gray-300 place-self-center">
                |
              </li>
              <li className="nav-item">
                <Link href="/pakemdiri"
                  
                  onClick={ () => setNavbarOpen(!navbarOpen) }
                  
                    className={
                      "px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75 " +
                      (router.pathname == "/pakemdiri" ? "underline" : "")
                    }
                    >
                    <span className="ml-2">PAKEM DIRI</span>
                  
                </Link>
              </li>
              <li className="hidden lg:block text-gray-300 place-self-center">
                |
              </li>
              <li className="nav-item">
                <Link href="/rekomendasi"
                  
                  onClick={ () => setNavbarOpen(!navbarOpen) }

                    className={
                      "px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75 " +
                      (router.pathname == "/rekomendasi" ? "underline" : "")
                    }
                    >
                    <span className="ml-2">REKOMENDASI</span>
                  
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
