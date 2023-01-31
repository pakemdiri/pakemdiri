// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Papa from 'papaparse';

export default function handler(req, res) {

  // [
  //   { title: 'ponsel', correct: 10, question: 19 },
  //   { title: 'perangkat', correct: 8, question: 12 }
  // ]
  let arr = req.body.currentSurvey;

  console.log(arr)

  let asd = arr.map((item) => {
    return {
      title: item.title,
      nilai: Math.round((item.correct / item.question * 100) * 10) / 10
    }
  })

  const perangkat = asd.find(({ title }) => title === "perangkat") || 0;
  const identitas = asd.find(({ title }) => title === "identitas") || 0;
  const komunikasi = asd.find(({ title }) => title === "komunikasi") || 0;
  const ponsel = asd.find(({ title }) => title === "ponsel") || 0;



  let data = [
    {
      email: "nama@email.com",
      name: "zxc",
      domisili: "JAWA BARAT",
      gender: "Laki-laki",
      umur: "18-25",
      perangkat: perangkat.title ? 1 : 0,
      skor_perangkat: perangkat.nilai ? perangkat.nilai : 0,
      identitas: identitas.title ? 1 : 0,
      skor_identitas: identitas.nilai ? identitas.nilai : 0,
      komunikasi: komunikasi.title ? 1 : 0,
      skor_komunikasi: komunikasi.nilai ? komunikasi.nilai : 0,
      ponsel: ponsel.title ? 1 : 0,
      skor_ponsel: ponsel.nilai ? ponsel.nilai : 0,

    },
  ]

  let csv = Papa.unparse(data)
  // var csv = Papa.unparse({
  //   "fields": ["Column 1", "Column 2"],
  //   "data": [
  //     ["foo", "bar"],
  //     ["abc", "def"]
  //   ]
  // });

  console.log(csv)

  res.send('success')
}
