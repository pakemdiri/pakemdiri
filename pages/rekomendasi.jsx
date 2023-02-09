import Image from "next/image";

export default function Rekomendasi() {
  return (
    <>
      <div className="relative flex content-center justify-center">
        <div className="container px-4 mx-auto">
          <div className="pt-10 2xl:pt-44 lg:-mx-6 justify-center flex flex-col-reverse lg:flex-row lg:items-center">
            <div className="py-5  flex flex-col md:w-1/4">
              <div className="relative object-cover w-full rounded-xl h-72 lg:h-96 max-w-[300px] max-h-[450px] self-center border-[1.5rem] lg:border-[2rem] border-[#A91F24]">
                <Image
                  src="/panduan.png"
                  alt="Logo SAFEnet Orange"
                  layout="fill"
                />
              </div>

              <a className="contents" href="https://mega.nz/file/Jsd2SACA#49jl-Zgzce4jQfzfpzJkB0TB1E0Lr4iqM-9yUNLMNuQ" target="_blank" rel="noreferrer">
                <button className="relative h-12 w-full max-w-[300px] mt-4 overflow-hidden rounded-lg bg-[#A91F24] hover:bg-red-500 text-lg shadow self-center lg:self-center">
                  <span className="relative text-white ">Unduh</span>
                </button>
              </a>
            </div>

            <div className=" lg:w-1/2 lg:mt-0 lg:mx-6 text-[#253C5B]">
              <h1 className="pb-3 md:pb-5 text-4xl md:text-5xl font-semibold aksen">
                Rekomendasi
              </h1>

              <div className="text-base md:text-lg font-light text-justify">
                <b>Panduan Kebersihan Digital (Digital Hygiene)</b> ini dapat
                digunakan organisasi masyarakat sipil untuk membekali diri
                dengan kompetensi dasar melindungi diri untuk mengurangi risiko
                dari serangan digital.<br></br>
                <br />
                Penyusunan panduan Kebersihan Digital ini ditujukan agar
                organisasi masyarakat sipil memiliki pengetahuan dan teknik
                dasar untuk mengidentifikasi dan mencegah menjadi korban
                serangan digital. <br /> <br />
                Panduan ini terdiri dari dua bagian, yaitu: <br />
                <ul className="list-disc	list-inside	">
                  <li>Bagian 1: <b>Mengidentifikasi Ancaman Digital</b></li>
                  <li>Bagian 2: <b>Memproteksi Serangan Digital lewat Kebersihan
                    Digital</b>
                  </li>
                </ul>
                <br /> Untuk mengetahui lebih lanjut, silakan mengunduh panduan.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
