import Image from 'next/image'
import Link from "next/link";


export default function Home() {
  return (
    <>
      <div className="relative flex content-center justify-center md:h-[calc(100vh-94px-112px)]">
        <div className="container pt-10 xl:px-48 max-w-8xl relative mx-auto">
          <div className="items-center flex flex-wrap mx-auto">
            <div className="w-50 lg:w-6/12 mx-auto text-[#283A5B] px-4">
              <h1 className='pb-3 md:pb-5 text-4xl md:text-5xl font-semibold'>Selamat Datang<br></br>
                di <span className="aksen"> PAKEM DIRI </span></h1>
              <h3 className='text-lg font-semibold'> Penilaian Keamanan Digital Mandiri</h3>
            </div>
            <div className="w-50 lg:w-6/12 ml-auto mr-auto text-right">
              <Image src="/key.svg" alt="Logo SAFEnet Orange" width={250} height={250} />
            </div>
            <div className="w-full text-[#253C5B] mx-auto text-justify pt-10 px-4" >
              <p className='text-base md:text-lg font-light'>
                PAKEM DIRI adalah metode penilaian keamanan digital secara mandiri yang sedang dikembangkan SAFEnet untuk merespon maraknya serangan digital terhadap kelompok berisiko tinggi
              </p>
            </div>
            <div className='py-5 px-4 mx-auto md:mx-0'>
              <Link
                href="pakemdiri"
              >
                <button className="group relative h-12 w-48 overflow-hidden rounded-lg bg-[#A91F24] hover:bg-red-500 text-lg shadow">
                  {/* <div class="absolute inset-0 w-3 bg-[#A91F24] transition-all duration-[250ms] ease-out group-hover:w-full"></div> */}
                  <span className="relative text-white ">Mulai</span>
                </button>
              </Link>

              {/* <btn onClick={() => clickSurvey('perangkat')}>
                <Image src="/logo-perangkat.svg" width={100} height={100} />
                <span className="aksen">Perangkat</span>
              </btn>
              <btn onClick={() => clickSurvey('akun')}>
                <Image src="/logo-akun.svg" width={100} height={100} />
                <span className="aksen">Identitas</span>
              </btn>
              <btn onClick={() => clickSurvey('komunikasi')}>
                <Image src="/logo-komunikasi.svg" width={100} height={100} />
                <span className="aksen">Komunikasi</span>
              </btn>
              <btn onClick={() => clickSurvey('ponsel')}>
                <Image src="/logo-ponsel.svg" width={100} height={100} />
                <span className="aksen">Ponsel</span>
              </btn> */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
