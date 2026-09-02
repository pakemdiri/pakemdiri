export const perangkat = {
  "title": "Keamanan Perangkat",
  "logoPosition": "right",
  "pages": [
    {
      "name": "perangkat",
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
          "name": "Menggunakan program atau aplikasi orisinal, bukan bajakan",
          "title": "Menggunakan program atau aplikasi orisinal, bukan bajakan",
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
          "name": "Mengunci layar (kata sandi, PIN, atau biometrik) untuk membuka perangkat",
          "title": "Mengunci layar (kata sandi, PIN, atau biometrik) untuk membuka perangkat",
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
          "name": "Melakukan enkripsi media penyimpan",
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
          "name": "Membersihkan berkas dan aplikasi yang sudah tidak digunakan secara berkala",
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
        },
        {
          "type": "radiogroup",
          "name": "Menghapus riwayat penggunaan Wi-Fi secara rutin",
          "title": "Menghapus riwayat penggunaan Wi-Fi secara rutin",
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
  "name": "komunikasi",
  "title": "Keamanan Komunikasi",
  "logoPosition": "right",
  "pages": [
    {
      "name": "page1",
      "title": "**Pemeriksaan Keamanan <span class='aksen'>Komunikasi</span>**",
      "description": "Periksalah pengaturan keamanan pada perangkat laptop dan ponsel yang Anda gunakan sehari-hari.",
      "elements": [
        {
          "type": "radiogroup",
          "name": "Menggunakan koneksi pribadi, misalnya tethering dari ponsel sendiri atau Wi-Fi kantor/rumah, pada saat berinternet",
          "title": "Menggunakan koneksi pribadi, misalnya tethering dari ponsel sendiri atau Wi-Fi kantor/rumah, pada saat berinternet",
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
          "name": "Menggunakan VPN ketika mengakses Wi-Fi publik",
          "title": "Menggunakan VPN ketika mengakses Wi-Fi publik",
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
          "name": "Menghindari penggunaan informasi sensitif dan personal ketika menggunakan Wi-Fi publik",
          "title": "Menghindari penggunaan informasi sensitif dan personal ketika menggunakan Wi-Fi publik",
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
          "name": "Menggunakan peramban aman, seperti Brave atau Firefox, untuk mengurangi jejak digital saat berselancar",
          "title": "Menggunakan peramban aman, seperti Brave atau Firefox, untuk mengurangi jejak digital saat berselancar",
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
          "name": "Menghapus riwayat data dan kukis di peramban secara berkala",
          "title": "Menghapus riwayat data dan kukis di peramban secara berkala",
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
          "name": "Menggunakan aplikasi pesan terenkripsi, misalnya Signal atau Wire, sebagai grup resmi pekerjaan",
          "title": "Menggunakan aplikasi pesan terenkripsi, misalnya Signal atau Wire, sebagai grup resmi pekerjaan",
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
          "name": "Menggunakan surel terenkripsi untuk berkomunikasi tentang hal-hal sensitif",
          "title": "Menggunakan surel terenkripsi untuk berkomunikasi tentang hal-hal sensitif",
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
          "name": "Menggunakan layanan terenkripsi, seperti BigBlueBotton dan Jitsi, untuk panggilan video",
          "title": "Menggunakan layanan terenkripsi, seperti BigBlueBotton dan Jitsi, untuk panggilan video",
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
          "name": "Menggunakan layanan cloud terenkripsi dan bisa dikunci, seperti Proton Dive dan Mega, untuk berbagi berkas",
          "title": "Menggunakan layanan cloud terenkripsi dan bisa dikunci, seperti Proton Dive dan Mega, untuk berbagi berkas",
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
          "name": "Memeriksa keamanan pranala atau berkas di database malware seperti virustotal dan urlscan.io",
          "title": "Memeriksa keamanan pranala atau berkas di database malware seperti virustotal dan urlscan.io",
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
  title: "Keamanan Akun",
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
         "name": "Mencatat password di aplikasi pengelola password seperti KeePass atau Bitwarden",
         "title": "Mencatat password di aplikasi pengelola password seperti KeePass atau Bitwarden",
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
         "name": "Mengganti password secara berkala setidaknya enam bulan sekali, atau ketika mengalami insiden/serangan digital",
         "title": "Mengganti password secara berkala setidaknya enam bulan sekali, atau ketika mengalami insiden/serangan digital",
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
  "title": "Keamanan Ponsel",
  "logoPosition": "right",
  "pages": [
    {
      "name": "page1",
      "title": "**Pemeriksaan Keamanan <span class='aksen'>Ponsel</span>**",
      "description": "Periksalah pengaturan keamanan pada perangkat laptop dan ponsel yang Anda gunakan sehari-hari.",
      "elements": [
        {
          "type": "radiogroup",
          "name": "Memisahkan ponsel untuk bekerja atau hal sensitif dengan ponsel untuk keperluan pribadi",
          "title": "Memisahkan ponsel untuk bekerja atau hal sensitif dengan ponsel untuk keperluan pribadi",
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
         "name": "Melindungi ponsel secara fisik yaitu dengan menggunakan pelindung luar (casing) dan atau pelindung layar (screen guard)",
         "title": "Melindungi ponsel secara fisik yaitu dengan menggunakan pelindung luar (casing) dan atau pelindung layar (screen guard)",
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
         "name": "Melindungi ponsel dengan kunci (password, PIN, pola, atau biometrik) agar tidak mudah diakses orang lain",
         "title": "Melindungi ponsel dengan kunci (password, PIN, pola, atau biometrik) agar tidak mudah diakses orang lain",
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
          "name": "Mengaktifkan penguncian otomatis jika tidak digunakan dalam waktu tertentu, misalnya 1 menit atau 5 menit",
          "title": "Mengaktifkan penguncian otomatis jika tidak digunakan dalam waktu tertentu, misalnya 1 menit atau 5 menit",
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
         "name": "Memperbarui sistem operasi (OS) dan aplikasi jika tersedia",
         "title": "Memperbarui sistem operasi (OS) dan aplikasi jika tersedia",
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
         "name": "Menonaktifkan Bluetooth dan Wi-Fi jika tidak sedang digunakan",
         "title": "Menonaktifkan Bluetooth dan Wi-Fi jika tidak sedang digunakan",
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
         "name": "Menonaktifkan lokasi pada ponsel kecuali jika digunakan",
         "title": "Menonaktifkan lokasi pada ponsel kecuali jika digunakan",
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
         "name": "Memeriksa sejauh mana akses setiap aplikasi terhadap data di ponsel",
         "title": "Memeriksa sejauh mana akses setiap aplikasi terhadap data di ponsel",
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
         "name": "Memeriksa apa saja perangkat lain (misalnya laptop) yang terhubung untuk aplikasi pesan ringkas di ponsel, seperti WhatsApp, Telegram dan Wire",
         "title": "Memeriksa apa saja perangkat lain (misalnya laptop) yang terhubung untuk aplikasi pesan ringkas di ponsel, seperti WhatsApp, Telegram dan Wire",
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
          "name": "Menggunakan peramban yang tidak merekam aktivitas penggunanya, seperti Firefox Focus, Brave, dan Duckduckgo",
          "title": "Menggunakan peramban yang tidak merekam aktivitas penggunanya, seperti Firefox Focus, Brave, dan Duckduckgo",
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
         "name": "Memasang aplikasi mesin pencari yang aman, seperti Brave Search dan DuckDuckGo",
         "title": "Memasang aplikasi mesin pencari yang aman, seperti Brave Search dan DuckDuckGo",
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
         "name": "Memeriksa secara berkala aplikasi dan berkas apa saja yang sudah tidak digunakan dan menghapusnya jika tidak diperlukan",
         "title": "Memeriksa secara berkala aplikasi dan berkas apa saja yang sudah tidak digunakan dan menghapusnya jika tidak diperlukan",
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
