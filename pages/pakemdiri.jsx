import React from "react";
import Image from "next/image";

import dynamic from "next/dynamic";

const SurveyComponent = dynamic(() => import("../components/survey"), {
ssr: false,
});

export default function Pakemdiri() {
const [mulai, setMulai] = React.useState();
const [kategori, setKategori] = React.useState("");

function handleClick(e) {
setKategori(e);
setMulai(true);
}
return mulai && kategori == "perangkat"
?
<SurveyComponent survey="perangkat" />
: mulai && kategori == "akun"
?
<SurveyComponent survey={"akun"} />
: mulai && kategori == "komunikasi"
?
<SurveyComponent survey={"komunikasi"} />
: mulai && kategori == "ponsel"
?
<SurveyComponent survey={"ponsel"} />
: (
<div className="relative flex content-center  justify-center">
  <div className="container pt-10 2xl:pt-44  xl:px-48 max-w-8xl relative mx-auto">
    <div className="items-center flex flex-wrap">
      <div className="w-full px-4 ml-auto mr-auto text-[#283A5B]">
        <h1 className="text-4xl md:text-5xl pb-3 md:pb-5 font-semibold">
          <span className="aksen">Petunjuk</span> Pengisian
        </h1>
        <h3 className="text-lg">
          Panduan Menilai Keamanan Digital Mandiri
        </h3>
        <div className="md:text-lg text-justify pt-5 font-semibold">
          <p className="text-base font-light ">
            1. Silakan memilih salah satu bagian yang ingin Anda nilai.
            Anda bisa memilih salah satu atau semua bagian yang ingin Anda
            nilai.

            <br />
            <br />
            2. Setelah memilih Anda akan berada di laman pemeriksaan.
            <br />
            <br />
            3. Periksalah pengaturan keamanan pada perangkat laptop dan
            ponsel yang Anda gunakan sehari-hari. Jika Anda lakukan, pilih
            “Ya”. Jika tidak Anda lakukan, pilih “Tidak”.
          </p>
        </div>
        <div
          className=" w-full grid grid-flow-row sm:grid-flow-row grid-cols-2 sm:grid-cols-4  py-9 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-gray-100 gap-x-0 bg-white-500 z-10 text-center">
          <button className="justify-self-center" onClick={()=> handleClick("perangkat")}

            >
            <div className="bg-[#A91F24] rounded-full h-24 w-24 p-4 mx-auto">
              <Image src="/perangkat.svg" alt="Ikon Pemeriksaan Perangkat" width={75} height={75} />
            </div>
            <p className=" aksen">
              Perangkat
            </p>
          </button>
          <button className="justify-self-center" onClick={()=> handleClick("akun")}
            >
            <div className="bg-[#A91F24]  rounded-full h-24 w-24 p-4 mx-auto">
              <Image src="/identitas.svg" alt="Ikon Pemeriksaan Identitas" width={75} height={75} />
            </div>
            <p className=" aksen">
              Identitas
            </p>
          </button>
          <button className="justify-self-center" onClick={()=> handleClick("komunikasi")}
            >
            <div className="bg-[#A91F24] rounded-full h-24 w-24 p-4 mx-auto">
              <Image src="/komunikasi.svg" alt="Ikon Pemeriksaan Komunikasi" width={75} height={75} />
            </div>
            <p className=" aksen">
              Komunikasi
            </p>
          </button>
          <button className="justify-self-center" onClick={()=> handleClick("ponsel")}
            >
            <div className="bg-[#A91F24] rounded-full h-24 w-24 p-4 mx-auto">
              <Image src="/phone.svg" alt="Ikon Pemeriksaan Ponsel" width={75} height={75} />
            </div>
            <p className=" aksen">
              Ponsel
            </p>
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
);
}