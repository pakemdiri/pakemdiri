export const perangkat = {
  "title": "perangkat",
  "logoPosition": "right",
  "pages": [
    {
      "name": "page1",
      "title": "**Pemeriksaan Keamanan <span class='aksen'>Perangkat</span>**",
      "description": "Periksalah pengaturan keamanan pada perangkat laptop dan ponsel yang Anda gunakan sehari-hari.",
      "elements": [
        {
          "type": "radiogroup",
          "name": "Memisahkan laptop untuk bekerja dan pribadi",
          "title": "Memisahkan laptop untuk bekerja dan pribadi",
          "correctAnswer": "1",
          "isRequired": true,
          "choices": [
            {
              "value": "1",
              "text": "Ya"
            },
            {
              "value": "0",
              "text": "Tidak"
            }
          ],
          "colCount": 2
        },
        {
          "type": "radiogroup",
          "name": "Memisahkan ponsel untuk bekerja dan pribadi",
          "title": "Memisahkan ponsel untuk bekerja dan pribadi",
          "correctAnswer": "1",
          "isRequired": true,
          "choices": [
            {
              "value": "1",
              "text": "Ya"
            },
            {
              "value": "0",
              "text": "Tidak"
            }
          ],
          "colCount": 2
        },
        {
          "type": "radiogroup",
          "name": "Menggunakan sistem operasi (OS) orisinal, bukan bajakan",
          "title": "Menggunakan sistem operasi (OS) orisinal, bukan bajakan",
          "correctAnswer": "1",
          "isRequired": true,
          "choices": [
            {
              "value": "1",
              "text": "Ya"
            },
            {
              "value": "0",
              "text": "Tidak"
            }
          ],
          "colCount": 2
        },
        {
          "type": "radiogroup",
          "name": "Menggunakan kata sandi untuk membuka perangkat",
          "title": "Menggunakan kata sandi untuk membuka perangkat",
          "correctAnswer": "1",
          "isRequired": true,
          "choices": [
            {
              "value": "1",
              "text": "Ya"
            },
            {
              "value": "0",
              "text": "Tidak"
            }
          ],
          "colCount": 2
        },
        {
          "type": "radiogroup",
          "name": "Mengaktifkan firewall",
          "title": "Mengaktifkan firewall",
          "correctAnswer": "1",
          "isRequired": true,
          "choices": [
            {
              "value": "1",
              "text": "Ya"
            },
            {
              "value": "0",
              "text": "Tidak"
            }
          ],
          "colCount": 2
        },
        {
          "type": "radiogroup",
          "name": "question4",
          "title": "Melakukan enkripsi media penyimpan",
          "correctAnswer": "1",
          "isRequired": true,
          "choices": [
            {
              "value": "1",
              "text": "Ya"
            },
            {
              "value": "0",
              "text": "Tidak"
            }
          ],
          "colCount": 2
        },
        {
          "type": "radiogroup",
          "name": "Mematikan fungsi lokasi pada laptop",
          "title": "Mematikan fungsi lokasi pada laptop",
          "correctAnswer": "1",
          "isRequired": true,
          "choices": [
            {
              "value": "1",
              "text": "Ya"
            },
            {
              "value": "0",
              "text": "Tidak"
            }
          ],
          "colCount": 2
        },
        {
          "type": "radiogroup",
          "name": "Mematikan fungsi lokasi pada ponsel kecuali diperlukan",
          "title": "Mematikan fungsi lokasi pada ponsel kecuali diperlukan",
          "correctAnswer": "1",
          "isRequired": true,
          "choices": [
            {
              "value": "1",
              "text": "Ya"
            },
            {
              "value": "0",
              "text": "Tidak"
            }
          ],
          "colCount": 2
        },
        {
          "type": "radiogroup",
          "name": "Melakukan pencadangan (back up) secara berkala, setidaknya sebulan sekali",
          "title": "Melakukan pencadangan (back up) secara berkala, setidaknya sebulan sekali",
          "correctAnswer": "1",
          "isRequired": true,
          "choices": [
            {
              "value": "1",
              "text": "Ya"
            },
            {
              "value": "0",
              "text": "Tidak"
            }
          ],
          "colCount": 2
        },
        {
          "type": "radiogroup",
          "name": "question8",
          "title": "Membersihkan berkas dan aplikasi yang sudah tidak digunakan secara berkala",
          "correctAnswer": "1",
          "isRequired": true,
          "choices": [
            {
              "value": "1",
              "text": "Ya"
            },
            {
              "value": "0",
              "text": "Tidak"
            }
          ],
          "colCount": 2
        },
        {
          "type": "radiogroup",
          "name": "Menggunakan antivirus dan pembersih (cleaner)",
          "title": "Menggunakan antivirus dan pembersih (cleaner)",
          "correctAnswer": "1",
          "isRequired": true,
          "choices": [
            {
              "value": "1",
              "text": "Ya"
            },
            {
              "value": "0",
              "text": "Tidak"
            }
          ],
          "colCount": 2
        },
        {
          "type": "radiogroup",
          "name": "Memperbarui (update) sistem operasi dan aplikasi jika ada pembaruan",
          "title": "Memperbarui (update) sistem operasi dan aplikasi jika ada pembaruan",
          "correctAnswer": "1",
          "isRequired": true,
          "choices": [
            {
              "value": "1",
              "text": "Ya"
            },
            {
              "value": "0",
              "text": "Tidak"
            }
          ],
          "colCount": 2
        }
      ]
    },
    // {
    //   "name": "page5",
    //   "elements": [
    //    {
    //     "type": "boolean",
    //     "name": "consent",
    //     "title": "Apakah anda mau berbagi hasil dari tes ini"
    //    },
    //    {
    //     "type": "panel",
    //     "name": "panel1",
    //     "elements": [
    //       {
    //         "type": "text",
    //         "name": "email",
    //         "title": "Please enter your e-mail",
    //         "isRequired": false,
    //         "validators": [
    //           {
    //             "type": "email"
    //           }
    //         ]
    //       },
    //      {
    //       "type": "text",
    //       "name": "Inisial",
    //       "title": "Inisial Nama"
    //      },
    //      {
    //       "type": "dropdown",
    //       "name": "Domisili",
    //       "title": "Provinsi",
    //       "choices": [
    //        "ACEH",
    //        "SUMATERA UTARA",
    //        "SUMATERA BARAT",
    //        "RIAU",
    //        "JAMBI",
    //        "SUMATERA SELATAN",
    //        "BENGKULU",
    //        "LAMPUNG",
    //        "KEPULAUAN BANGKA BELITUNG",
    //        "KEPULAUAN RIAU",
    //        "DKI JAKARTA",
    //        "JAWA BARAT",
    //        "JAWA TENGAH",
    //        "DI YOGYAKARTA",
    //        "JAWA TIMUR",
    //        "BANTEN",
    //        "BALI",
    //        "NUSA TENGGARA BARAT",
    //        "NUSA TENGGARA TIMUR",
    //        "KALIMANTAN BARAT",
    //        "KALIMANTAN TENGAH",
    //        "KALIMANTAN SELATAN",
    //        "KALIMANTAN TIMUR",
    //        "KALIMANTAN UTARA",
    //        "SULAWESI UTARA",
    //        "SULAWESI TENGAH",
    //        "SULAWESI SELATAN",
    //        "SULAWESI TENGGARA",
    //        "GORONTALO",
    //        "SULAWESI BARAT",
    //        "MALUKU",
    //        "MALUKU UTARA",
    //        "PAPUA BARAT",
    //        "PAPUA",
    //       ]
    //      },
    //      {
    //       "type": "radiogroup",
    //       "name": "Gender",
    //       "title": "Jenis Kelamin",
    //     "colCount": 3,

    //       "choices": [
    //        "Laki-laki",
    //        "Perempuan",
    //        "Translaki",
    //        "Transpuan"
    //       ],
    //       "hasOther": true
    //      },
    //      {
    //       "type": "radiogroup",
    //       "name": "Umur",
    //       "title": "Umur",
    //     "colCount": 2,
    //       "choices": [
    //        "18-25",
    //        "26-35",
    //        "36-45",
    //        "46-59",
    //        "60+"
    //       ]
    //      }
    //     ],
    //     "visibleIf": "{consent} = true"
    //    }
    //   ]
    //  }
  ],
  // showProgressBar: "top",
  showTitle: false,
  progressBarType: "buttons",
  showQuestionNumbers: "off",
  pageNextText: "Forward",
  completeText: "Periksa",
  showPrevButton: true,
  firstPageIsStarted: false,
  startSurveyText: "Take the Survey",
  completedHtml: "Terima kasih sudah mengisi PAKEM DIRI",
  // showPreviewBeforeComplete: "showAnsweredQuestions"
  showPreviewBeforeComplete: false
};

export const komunikasi = {
  "title": "komunikasi",
  "logoPosition": "right",
  "pages": [
    {
      "name": "page1",
      "title": "**Pemeriksaan Keamanan <span class='aksen'>Komunikasi</span>**",
      "description": "Periksalah pengaturan keamanan pada perangkat laptop dan ponsel yang Anda gunakan sehari-hari.",
      "elements": [
        {
          "type": "radiogroup",
          "name": "Komunikasi sehari-hari menggunakan platform aman",
          "title": "Komunikasi sehari-hari menggunakan platform aman",
          "correctAnswer": "1",
          "isRequired": true,
          "choices": [
            {
              "value": "1",
              "text": "Ya"
            },
            {
              "value": "0",
              "text": "Tidak"
            }
          ],
          "colCount": 2
        },
        {
          "type": "radiogroup",
          "name": "Komunikasi sensitif menggunakan platform aman",
          "title": "Komunikasi sensitif menggunakan platform aman",
          "correctAnswer": "1",
          "isRequired": true,
          "choices": [
            {
              "value": "1",
              "text": "Ya"
            },
            {
              "value": "0",
              "text": "Tidak"
            }
          ],
          "colCount": 2
        },
        {
          "type": "radiogroup",
          "name": "Surel aman untuk berkomunikasi tentang hal-hal sensitif",
          "title": "Surel aman untuk berkomunikasi tentang hal-hal sensitif",
          "correctAnswer": "1",
          "isRequired": true,
          "choices": [
            {
              "value": "1",
              "text": "Ya"
            },
            {
              "value": "0",
              "text": "Tidak"
            }
          ],
          "colCount": 2
        },
        {
          "type": "radiogroup",
          "name": "Pada saat beraktivitas daring (online) menggunakan koneksi privat yang aman",
          "title": "Pada saat beraktivitas daring (online) menggunakan koneksi privat yang aman",
          "correctAnswer": "1",
          "isRequired": true,
          "choices": [
            {
              "value": "1",
              "text": "Ya"
            },
            {
              "value": "0",
              "text": "Tidak"
            }
          ],
          "colCount": 2
        },
        {
          "type": "radiogroup",
          "name": "Menghindari penggunaan informasi sensitif dan personal ketika menggunakan Wifi publik",
          "title": "Menghindari penggunaan informasi sensitif dan personal ketika menggunakan Wifi publik",
          "correctAnswer": "1",
          "isRequired": true,
          "choices": [
            {
              "value": "1",
              "text": "Ya"
            },
            {
              "value": "0",
              "text": "Tidak"
            }
          ],
          "colCount": 2
        },
        {
          "type": "radiogroup",
          "name": "Menggunakan VPN ketika mengakses Wifi publik",
          "title": "Menggunakan VPN ketika mengakses Wifi publik",
          "correctAnswer": "1",
          "isRequired": true,
          "choices": [
            {
              "value": "1",
              "text": "Ya"
            },
            {
              "value": "0",
              "text": "Tidak"
            }
          ],
          "colCount": 2
        },
        {
          "type": "radiogroup",
          "name": "Menggunakan peramban aman dalam metode Private atau Incognito untuk mengurangi jejak digital saat berselancar",
          "title": "Menggunakan peramban aman dalam metode Private atau Incognito untuk mengurangi jejak digital saat berselancar",
          "correctAnswer": "1",
          "isRequired": true,
          "choices": [
            {
              "value": "1",
              "text": "Ya"
            },
            {
              "value": "0",
              "text": "Tidak"
            }
          ],
          "colCount": 2
        },
        {
          "type": "radiogroup",
          "name": "Menambah add-ons atau plugin seperti Privacy Badger dan HTTPS Everywhere pada peramban",
          "title": "Menambah add-ons atau plugin seperti Privacy Badger dan HTTPS Everywhere pada peramban",
          "correctAnswer": "1",
          "isRequired": true,
          "choices": [
            {
              "value": "1",
              "text": "Ya"
            },
            {
              "value": "0",
              "text": "Tidak"
            }
          ],
          "colCount": 2
        },
        {
          "type": "radiogroup",
          "name": "Menggunakan Jitsi, BigBlueBotton atau layanan lain yang terenkripsi untuk video call",
          "title": "Menggunakan Jitsi, BigBlueBotton atau layanan lain yang terenkripsi untuk video call",
          "correctAnswer": "1",
          "isRequired": true,
          "choices": [
            {
              "value": "1",
              "text": "Ya"
            },
            {
              "value": "0",
              "text": "Tidak"
            }
          ],
          "colCount": 2
        },
        {
          "type": "radiogroup",
          "name": "Menggunakan mesin pencari yang lebih menghargai privasi",
          "title": "Menggunakan mesin pencari yang lebih menghargai privasi",
          "correctAnswer": "1",
          "isRequired": true,
          "choices": [
            {
              "value": "1",
              "text": "Ya"
            },
            {
              "value": "0",
              "text": "Tidak"
            }
          ],
          "colCount": 2
        },
        {
          "type": "radiogroup",
          "name": "Mewaspadai dan berhati-hati terhadap surel atau pranala dari pengirim yang tidak dikenal",
          "title": "Mewaspadai dan berhati-hati terhadap surel atau pranala dari pengirim yang tidak dikenal",
          "correctAnswer": "1",
          "isRequired": true,
          "choices": [
            {
              "value": "1",
              "text": "Ya"
            },
            {
              "value": "0",
              "text": "Tidak"
            }
          ],
          "colCount": 2
        },
        {
          "type": "radiogroup",
          "name": "Memeriksa keamanan pranala atau berkas di email dengan database malware (virustotal dan urlscan.io)",
          "title": "Memeriksa keamanan pranala atau berkas di email dengan database malware (virustotal dan urlscan.io)",
          "correctAnswer": "1",
          "isRequired": true,
          "choices": [
            {
              "value": "1",
              "text": "Ya"
            },
            {
              "value": "0",
              "text": "Tidak"
            }
          ],
          "colCount": 2
        }
      ]
    },
  ],
  showTitle: false,
  progressBarType: "buttons",
  showQuestionNumbers: "off",
  pageNextText: "Lanjut",
  completeText: "Periksa",
  showPrevButton: true,
  firstPageIsStarted: false,
  startSurveyText: "Take the Survey",
  completedHtml: "Terima kasih sudah mengisi PAKEM DIRI",
  showPreviewBeforeComplete: false
};


export const akun = {
  title: "akun",
  "logoPosition": "right",
  "pages": [
    {
      "name": "page1",
      "title": "**Pemeriksaan Keamanan <span class='aksen'>Akun</span>**",
      "description": "Periksalah pengaturan keamanan pada perangkat laptop dan ponsel yang Anda gunakan sehari-hari.",
      "elements": [
        {
         "type": "radiogroup",
         "name": "Membedakan antara akun pribadi, seperti untuk belanja dengan akun pekerjaan",
         "title": "Membedakan antara akun pribadi, seperti untuk belanja dengan akun pekerjaan",
         "correctAnswer": "1",
         "isRequired": true,
         "choices": [
          {
           "value": "1",
           "text": "Ya"
          },
          {
           "value": "0",
           "text": "Tidak"
          }
         ],
         "colCount": 2
        },
        {
         "type": "radiogroup",
         "name": "Membatasi mengunggah identitas personal seperti keluarga, tanggal lahir, alamat, dan semacamnya",
         "title": "Membatasi mengunggah identitas personal seperti keluarga, tanggal lahir, alamat, dan semacamnya",
         "correctAnswer": "1",
         "isRequired": true,
         "choices": [
          {
           "value": "1",
           "text": "Ya"
          },
          {
           "value": "0",
           "text": "Tidak"
          }
         ],
         "colCount": 2
        },
        {
         "type": "radiogroup",
         "name": "Membuat password yang kompleks dan kuat",
         "title": "Membuat password yang kompleks dan kuat",
         "correctAnswer": "1",
         "isRequired": true,
         "choices": [
          {
           "value": "1",
           "text": "Ya"
          },
          {
           "value": "0",
           "text": "Tidak"
          }
         ],
         "colCount": 2
        },
        {
         "type": "radiogroup",
         "name": "Membuat password berbeda-beda untuk setiap aset digital yang dimiliki",
         "title": "Membuat password berbeda-beda untuk setiap aset digital yang dimiliki",
         "correctAnswer": "1",
         "isRequired": true,
         "choices": [
          {
           "value": "1",
           "text": "Ya"
          },
          {
           "value": "0",
           "text": "Tidak"
          }
         ],
         "colCount": 2
        },
        {
         "type": "radiogroup",
         "name": "Mencatat password di aplikasi pengelola password seperti KeePass",
         "title": "Mencatat password di aplikasi pengelola password seperti KeePass",
         "correctAnswer": "1",
         "isRequired": true,
         "choices": [
          {
           "value": "1",
           "text": "Ya"
          },
          {
           "value": "0",
           "text": "Tidak"
          }
         ],
         "colCount": 2
        },
        {
         "type": "radiogroup",
         "name": "Mengganti password secara berkala setidaknya enam bulan sekali",
         "title": "Mengganti password secara berkala setidaknya enam bulan sekali",
         "correctAnswer": "1",
         "isRequired": true,
         "choices": [
          {
           "value": "1",
           "text": "Ya"
          },
          {
           "value": "0",
           "text": "Tidak"
          }
         ],
         "colCount": 2
        },
        {
         "type": "radiogroup",
         "name": "Menggunakan metode 2FA untuk memperkuat keamanan perangkat maupun aset-aset digital lainnya",
         "title": "Menggunakan metode 2FA untuk memperkuat keamanan perangkat maupun aset-aset digital lainnya",
         "correctAnswer": "1",
         "isRequired": true,
         "choices": [
          {
           "value": "1",
           "text": "Ya"
          },
          {
           "value": "0",
           "text": "Tidak"
          }
         ],
         "colCount": 2
        }
       ]
    },
    // {
    //   "name": "page5",
    //   "elements": [
    //     {
    //       "type": "boolean",
    //       "name": "consent",
    //       "title": "Apakah anda mau berbagi hasil dari tes ini"
    //     },
    //     {
    //       "type": "panel",
    //       "name": "panel1",
    //       "elements": [
    //         {
    //           "type": "text",
    //           "name": "email",
    //           "title": "Please enter your e-mail",
    //           "isRequired": false,
    //           "validators": [
    //             {
    //               "type": "email"
    //             }
    //           ]
    //         },
    //         {
    //           "type": "text",
    //           "name": "Inisial",
    //           "title": "Inisial Nama"
    //         },
    //         {
    //           "type": "dropdown",
    //           "name": "Domisili",
    //           "title": "Provinsi",
    //           "choices": [
    //             "ACEH",
    //             "SUMATERA UTARA",
    //             "SUMATERA BARAT",
    //             "RIAU",
    //             "JAMBI",
    //             "SUMATERA SELATAN",
    //             "BENGKULU",
    //             "LAMPUNG",
    //             "KEPULAUAN BANGKA BELITUNG",
    //             "KEPULAUAN RIAU",
    //             "DKI JAKARTA",
    //             "JAWA BARAT",
    //             "JAWA TENGAH",
    //             "DI YOGYAKARTA",
    //             "JAWA TIMUR",
    //             "BANTEN",
    //             "BALI",
    //             "NUSA TENGGARA BARAT",
    //             "NUSA TENGGARA TIMUR",
    //             "KALIMANTAN BARAT",
    //             "KALIMANTAN TENGAH",
    //             "KALIMANTAN SELATAN",
    //             "KALIMANTAN TIMUR",
    //             "KALIMANTAN UTARA",
    //             "SULAWESI UTARA",
    //             "SULAWESI TENGAH",
    //             "SULAWESI SELATAN",
    //             "SULAWESI TENGGARA",
    //             "GORONTALO",
    //             "SULAWESI BARAT",
    //             "MALUKU",
    //             "MALUKU UTARA",
    //             "PAPUA BARAT",
    //             "PAPUA",
    //           ]
    //         },
    //         {
    //           "type": "radiogroup",
    //           "name": "Gender",
    //           "title": "Jenis Kelamin",
    //           "colCount": 3,

    //           "choices": [
    //             "Laki-laki",
    //             "Perempuan",
    //             "Translaki",
    //             "Transpuan"
    //           ],
    //           "hasOther": true
    //         },
    //         {
    //           "type": "radiogroup",
    //           "name": "Umur",
    //           "title": "Umur",
    //           "colCount": 2,
    //           "choices": [
    //             "18-25",
    //             "26-35",
    //             "36-45",
    //             "46-59",
    //             "60+"
    //           ]
    //         }
    //       ],
    //       "visibleIf": "{consent} = true"
    //     }
    //   ]
    // }
  ],
  // showProgressBar: "top",
  showTitle: false,
  progressBarType: "buttons",
  showQuestionNumbers: "off",
  pageNextText: "Lanjut",
  completeText: "Periksa",
  showPrevButton: true,
  firstPageIsStarted: false,
  startSurveyText: "Take the Survey",
  completedHtml: "Terima kasih sudah mengisi PAKEM DIRI",
  // showPreviewBeforeComplete: "showAnsweredQuestions"
  showPreviewBeforeComplete: false
};

export const ponsel = {
  "title": "ponsel",
  "logoPosition": "right",
  "pages": [
    {
      "name": "page1",
      "title": "**Pemeriksaan Keamanan <span class='aksen'>Ponsel</span>**",
      "description": "Periksalah pengaturan keamanan pada perangkat laptop dan ponsel yang Anda gunakan sehari-hari.",
      "elements": [
        {
         "type": "radiogroup",
         "name": "Melindungi fisik ponsel dengan pelindung luar (casing) dan atau pelindung layar (screen guard)",
         "title": "Melindungi fisik ponsel dengan pelindung luar (casing) dan atau pelindung layar (screen guard)",
         "correctAnswer": "1",
         "isRequired": true,
         "choices": [
          {
           "value": "1",
           "text": "Ya"
          },
          {
           "value": "0",
           "text": "Tidak"
          }
         ],
         "colCount": 2
        },
        {
         "type": "radiogroup",
         "name": "Melindungi ponsel dengan password atau pola agar tidak mudah diakses orang lain",
         "title": "Melindungi ponsel dengan password atau pola agar tidak mudah diakses orang lain",
         "correctAnswer": "1",
         "isRequired": true,
         "choices": [
          {
           "value": "1",
           "text": "Ya"
          },
          {
           "value": "0",
           "text": "Tidak"
          }
         ],
         "colCount": 2
        },
        {
         "type": "radiogroup",
         "name": "Memperbarui sistem operasi (OS) jika tersedia",
         "title": "Memperbarui sistem operasi (OS) jika tersedia",
         "correctAnswer": "1",
         "isRequired": true,
         "choices": [
          {
           "value": "1",
           "text": "Ya"
          },
          {
           "value": "0",
           "text": "Tidak"
          }
         ],
         "colCount": 2
        },
        {
         "type": "radiogroup",
         "name": "Memperbarui aplikasi jika tersedia di OS",
         "title": "Memperbarui aplikasi jika tersedia di OS",
         "correctAnswer": "1",
         "isRequired": true,
         "choices": [
          {
           "value": "1",
           "text": "Ya"
          },
          {
           "value": "0",
           "text": "Tidak"
          }
         ],
         "colCount": 2
        },
        {
         "type": "radiogroup",
         "name": "Mengganti nama ponsel dengan nama lain agar tidak mudah dikenali",
         "title": "Mengganti nama ponsel dengan nama lain agar tidak mudah dikenali",
         "correctAnswer": "1",
         "isRequired": true,
         "choices": [
          {
           "value": "1",
           "text": "Ya"
          },
          {
           "value": "0",
           "text": "Tidak"
          }
         ],
         "colCount": 2
        },
        {
         "type": "radiogroup",
         "name": "Menonaktifkan Bluetooth dan Wifi jika tidak sedang digunakan",
         "title": "Menonaktifkan Bluetooth dan Wifi jika tidak sedang digunakan",
         "correctAnswer": "1",
         "isRequired": true,
         "choices": [
          {
           "value": "1",
           "text": "Ya"
          },
          {
           "value": "0",
           "text": "Tidak"
          }
         ],
         "colCount": 2
        },
        {
         "type": "radiogroup",
         "name": "Memasang (install) aplikasi hanya dari sumber resmi",
         "title": "Memasang (install) aplikasi hanya dari sumber resmi",
         "correctAnswer": "1",
         "isRequired": true,
         "choices": [
          {
           "value": "1",
           "text": "Ya"
          },
          {
           "value": "0",
           "text": "Tidak"
          }
         ],
         "colCount": 2
        },
        {
         "type": "radiogroup",
         "name": "Mengaktifkan lokasi pada ponsel hanya jika digunakan",
         "title": "Mengaktifkan lokasi pada ponsel hanya jika digunakan",
         "correctAnswer": "1",
         "isRequired": true,
         "choices": [
          {
           "value": "1",
           "text": "Ya"
          },
          {
           "value": "0",
           "text": "Tidak"
          }
         ],
         "colCount": 2
        },
        {
         "type": "radiogroup",
         "name": "Keluar (logout) dari aplikasi email jika tidak digunakan dalam waktu lama, misalnya satu minggu",
         "title": "Keluar (logout) dari aplikasi email jika tidak digunakan dalam waktu lama, misalnya satu minggu",
         "correctAnswer": "1",
         "isRequired": true,
         "choices": [
          {
           "value": "1",
           "text": "Ya"
          },
          {
           "value": "0",
           "text": "Tidak"
          }
         ],
         "colCount": 2
        },
        {
         "type": "radiogroup",
         "name": "Memeriksa sejauh mana akses oleh setiap aplikasi terhadap data yang ada dalam ponsel",
         "title": "Memeriksa sejauh mana akses oleh setiap aplikasi terhadap data yang ada dalam ponsel",
         "correctAnswer": "1",
         "isRequired": true,
         "choices": [
          {
           "value": "1",
           "text": "Ya"
          },
          {
           "value": "0",
           "text": "Tidak"
          }
         ],
         "colCount": 2
        },
        {
         "type": "radiogroup",
         "name": "Memeriksa apa saja perangkat lain yang digunakan untuk aplikasi pesan ringkas di ponsel",
         "title": "Memeriksa apa saja perangkat lain yang digunakan untuk aplikasi pesan ringkas di ponsel",
         "correctAnswer": "1",
         "isRequired": true,
         "choices": [
          {
           "value": "1",
           "text": "Ya"
          },
          {
           "value": "0",
           "text": "Tidak"
          }
         ],
         "colCount": 2
        },
        {
          "type": "radiogroup",
          "name": "Menggunakan peramban yang tidak merekam aktivitas penggunanya",
          "title": "Menggunakan peramban yang tidak merekam aktivitas penggunanya",
          "correctAnswer": "1",
          "isRequired": true,
          "choices": [
           {
            "value": "1",
            "text": "Ya"
           },
           {
            "value": "0",
            "text": "Tidak"
           }
          ],
          "colCount": 2
         },
         {
          "type": "radiogroup",
          "name": "Menggunakan VPN jika mengakses Wifi publik",
          "title": "Menggunakan VPN jika mengakses Wifi publik",
          "correctAnswer": "1",
          "isRequired": true,
          "choices": [
           {
            "value": "1",
            "text": "Ya"
           },
           {
            "value": "0",
            "text": "Tidak"
           }
          ],
          "colCount": 2
         },
        {
         "type": "radiogroup",
         "name": "Melakukan pencadangan data (back up) secara berkala, misalnya sebulan sekali",
         "title": "Melakukan pencadangan data (back up) secara berkala, misalnya sebulan sekali",
         "correctAnswer": "1",
         "isRequired": true,
         "choices": [
          {
           "value": "1",
           "text": "Ya"
          },
          {
           "value": "0",
           "text": "Tidak"
          }
         ],
         "colCount": 2
        },
        {
         "type": "radiogroup",
         "name": "Mengaktifkan enkripsi pada ponsel agar tidak bisa dibuka dari perangkat lain tanpa izin pemilik",
         "title": "Mengaktifkan enkripsi pada ponsel agar tidak bisa dibuka dari perangkat lain tanpa izin pemilik",
         "correctAnswer": "1",
         "isRequired": true,
         "choices": [
          {
           "value": "1",
           "text": "Ya"
          },
          {
           "value": "0",
           "text": "Tidak"
          }
         ],
         "colCount": 2
        },
        {
         "type": "radiogroup",
         "name": "Memasang aplikasi mesin pencari yang aman, seperti DuckDuckGo",
         "title": "Memasang aplikasi mesin pencari yang aman, seperti DuckDuckGo",
         "correctAnswer": "1",
         "isRequired": true,
         "choices": [
          {
           "value": "1",
           "text": "Ya"
          },
          {
           "value": "0",
           "text": "Tidak"
          }
         ],
         "colCount": 2
        },
        {
         "type": "radiogroup",
         "name": "Menggunakan antivirus untuk mendeteksi jika ada perangkat berbahaya (malware) di ponsel",
         "title": "Menggunakan antivirus untuk mendeteksi jika ada perangkat berbahaya (malware) di ponsel",
         "correctAnswer": "1",
         "isRequired": true,
         "choices": [
          {
           "value": "1",
           "text": "Ya"
          },
          {
           "value": "0",
           "text": "Tidak"
          }
         ],
         "colCount": 2
        },
        {
         "type": "radiogroup",
         "name": "Memeriksa atau menghapus aplikasi dan berkas yang sudah tidak digunakan di ponsel.",
         "title": "Memeriksa atau menghapus aplikasi dan berkas yang sudah tidak digunakan di ponsel.",
         "correctAnswer": "1",
         "isRequired": true,
         "choices": [
          {
           "value": "1",
           "text": "Ya"
          },
          {
           "value": "0",
           "text": "Tidak"
          }
         ],
         "colCount": 2
        },
        {
         "type": "radiogroup",
         "name": "Menghapus riwayat Wi-Fi pada ponsel agar tidak meninggalkan jejak digital",
         "title": "Menghapus riwayat Wi-Fi pada ponsel agar tidak meninggalkan jejak digital",
         "correctAnswer": "1",
         "isRequired": true,
         "choices": [
          {
           "value": "1",
           "text": "Ya"
          },
          {
           "value": "0",
           "text": "Tidak"
          }
         ],
         "colCount": 2
        }
       ]
    },
  ],
  // showProgressBar: "top",
  showTitle: false,
  progressBarType: "buttons",
  showQuestionNumbers: "off",
  pageNextText: "Lanjut",
  completeText: "Periksa",
  showPrevButton: true,
  firstPageIsStarted: false,
  startSurveyText: "Take the Survey",
  completedHtml: "Terima kasih sudah mengisi PAKEM DIRI",
  // showPreviewBeforeComplete: "showAnsweredQuestions"
  showPreviewBeforeComplete: false
};