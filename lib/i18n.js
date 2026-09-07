export const LOCALES = ["id", "en"];
export const DEFAULT_LOCALE = "id";
export const SITE_URL = "https://pakemdiri.safenet.or.id";

const TRANSLATIONS = {
  id: {
    languageName: "Bahasa Indonesia",
    switchLanguage: "English",
    nav: {
      home: "HOME",
      survey: "PAKEM DIRI",
      recommendations: "REKOMENDASI",
    },
    home: {
      welcome: "Selamat Datang",
      productName: "PAKEM DIRI",
      introPrefix: "di",
      subtitle: "Penilaian Keamanan Digital Mandiri",
      description:
        "PAKEM DIRI adalah metode penilaian keamanan digital secara mandiri yang sedang dikembangkan SAFEnet untuk merespon maraknya serangan digital terhadap kelompok berisiko tinggi",
      start: "Mulai",
      imageAlt: "Ilustrasi keamanan digital",
    },
    guide: {
      accent: "Petunjuk",
      title: "Pengisian",
      subtitle: "Panduan Menilai Keamanan Digital Mandiri",
      steps: [
        "Silakan memilih salah satu bagian yang ingin Anda nilai. Anda bisa memilih salah satu atau semua bagian yang ingin Anda nilai.",
        "Setelah memilih Anda akan berada di laman pemeriksaan.",
        "Periksalah pengaturan keamanan pada perangkat laptop dan ponsel yang Anda gunakan sehari-hari. Jika Anda lakukan, pilih “Ya”. Jika tidak Anda lakukan, pilih “Tidak”.",
      ],
    },
    assessment: {
      headingAccent: "ASESMEN",
      heading: "AWAL",
      description:
        "Sebelum memulai, mari kita lakukan asesmen sederhana dulu untuk menentukan PAKEM DIRI yang akan Anda gunakan",
      submit: "Lanjutkan",
      reset: "Ulangi asesmen dasar",
      required: "Silakan pilih salah satu jawaban.",
      questions: {
        activity: {
          title: "Apa aktivitas utama Anda sehari-hari?",
          options: {
            privateEmployee: "Karyawan Swasta",
            journalist: "Jurnalis",
            ngoStaff: "Staf NGO",
            student: "Mahasiswa",
            civilServant: "Aparat Sipil Negara",
            entrepreneur: "Pengusaha/profesional",
            homemaker: "Ibu rumah tangga",
          },
        },
        activism: {
          title:
            "Apakah Anda pernah melakukan aktivisme terkait isu politik? (Mis: demonstrasi dan aksi, melancarkan kritik bertema politik di media sosial)",
          options: { yes: "YA", no: "TIDAK" },
        },
        digitalAttack: {
          title:
            "Apakah dalam setahun terakhir Anda pernah menjadi korban serangan digital? (Mis: pengambilalihan akun, pengancaman, phishing, dan semacamnya)",
          options: { yes: "YA", no: "TIDAK" },
        },
      },
      result: {
        score: "Skor asesmen awal",
        full:
          "Berdasarkan hasil asesmen awal, Anda termasuk kelompok berisiko tinggi. Dengan total skor 20 atau lebih, silakan mengisi PAKEM DIRI versi penuh.",
        simple:
          "Berdasarkan hasil asesmen awal, Anda belum termasuk kelompok berisiko tinggi. Dengan total skor di bawah 20, gunakan PAKEM DIRI versi sederhana berikut.",
      },
      full: { headingAccent: "PAKEM DIRI", heading: "VERSI PENUH" },
      simple: {
        headingAccent: "PAKEM DIRI",
        heading: "VERSI SEDERHANA",
        resultHeadingAccent: "HASIL",
        resultHeading: "PAKEM DIRI VERSI SEDERHANA",
        totalScore: "Total Skor",
        scoreDescription: 'Setiap jawaban “Ya” bernilai 1 poin dari 10 pertanyaan.',
        submit: "Selesai",
        submitted: "Terima kasih, Anda telah menyelesaikan PAKEM DIRI versi sederhana.",
        items: [
          "Mengunci perangkat",
          "Melakukan backup secara rutin",
          "Memasang aplikasi resmi hanya dari App Store/Google PlayStore",
          "Melakukan pembaruan aplikasi setiap kali tersedia",
          "Membersihkan jejak wifi di perangkat",
          "Menggunakan password berbeda-beda di tiap akun",
          "Rajin memeriksa di mana akun Google dan WA terhubung",
          "Berhati-hati dalam mengunggah informasi sensitif",
          "Tidak sembarangan menggunakan wifi publik, utamanya ketika akan melakukan transaksi perbankan",
          "Berhati-hati dalam mengklik tautan yang dikirimkan orang lain",
        ],
      },
    },
    followUp: {
      accent: "Lanjutkan",
      title: "Pemeriksaan",
      totalScore: "Lihat Total Nilai",
      completed: "Sudah terisi",
    },
    results: {
      riskLevels: [
        "Tingkat risiko sangat tinggi",
        "Tingkat risiko tinggi",
        "Tingkat risiko sedang",
        "Tingkat risiko rendah",
        "Tingkat risiko sangat rendah",
      ],
      headingPrefix: "Level",
      headingAccent: "Risiko",
      headingSuffix: "Anda",
      combinedScore: "Total Skor Gabungan",
      score: "Skor",
      downloading: "Mengunduh...",
      downloadPdf: "Unduh PDF",
      finish: "Selesai",
      continue: "Lanjutkan",
    },
    recommendations: {
      heading: "Rekomendasi",
      download: "Unduh",
      imageAlt: "Panduan Kebersihan Digital SAFEnet",
      intro:
        "Panduan Kebersihan Digital (Digital Hygiene) ini dapat digunakan organisasi masyarakat sipil untuk membekali diri dengan kompetensi dasar melindungi diri untuk mengurangi risiko dari serangan digital.",
      purpose:
        "Penyusunan panduan Kebersihan Digital ini ditujukan agar organisasi masyarakat sipil memiliki pengetahuan dan teknik dasar untuk mengidentifikasi dan mencegah menjadi korban serangan digital.",
      sections: "Panduan ini terdiri dari dua bagian, yaitu:",
      partOne: "Mengidentifikasi Ancaman Digital",
      partTwo: "Memproteksi Serangan Digital lewat Kebersihan Digital",
      outro: "Untuk mengetahui lebih lanjut, silakan mengunduh panduan.",
    },
    footer: {
      contact:
        "Untuk menggunakan PAKEM DIRI atau berkonsultasi lebih lanjut silakan hubungi SAFEnet di info@safenet.or.id atau Hotline (+62)8179323375.",
      logoAlt: "Logo SAFEnet",
    },
    metadata: {
      title: "PAKEM DIRI | SAFEnet",
      description:
        "PAKEM DIRI adalah metode penilaian keamanan digital secara mandiri yang sedang dikembangkan SAFEnet untuk merespon maraknya serangan digital terhadap kelompok berisiko tinggi",
      socialTitle: "Panduan Menilai Keamanan Digital Mandiri - SAFEnet",
    },
    categories: {
      perangkat: {
        label: "Perangkat",
        title: "Keamanan Perangkat",
        alt: "Ikon Pemeriksaan Perangkat",
      },
      akun: {
        label: "Identitas",
        title: "Keamanan Akun",
        alt: "Ikon Pemeriksaan Identitas",
      },
      komunikasi: {
        label: "Komunikasi",
        title: "Keamanan Komunikasi",
        alt: "Ikon Pemeriksaan Komunikasi",
      },
      ponsel: {
        label: "Ponsel",
        title: "Keamanan Ponsel",
        alt: "Ikon Pemeriksaan Ponsel",
      },
    },
    survey: {
      description:
        "Periksalah pengaturan keamanan pada perangkat laptop dan ponsel yang Anda gunakan sehari-hari.",
      yes: "Ya",
      no: "Tidak",
      next: "Lanjut",
      previous: "Kembali",
      complete: "Periksa",
      start: "Mulai Mengisi",
      completed: "Terima kasih sudah mengisi PAKEM DIRI",
      summaryTitle: "Ringkasan Hasil",
      scoreSummary: "Ringkasan Skor",
      combinedScore: "Total Skor Gabungan",
      correct: "benar",
    },
  },
  en: {
    languageName: "English",
    switchLanguage: "Bahasa Indonesia",
    nav: {
      home: "HOME",
      survey: "PAKEM DIRI",
      recommendations: "RECOMMENDATIONS",
    },
    home: {
      welcome: "Welcome",
      productName: "PAKEM DIRI",
      introPrefix: "to",
      subtitle: "Digital Security Self-Assessment",
      description:
        "PAKEM DIRI is a self-assessment method for digital security, currently being developed by SAFEnet, to address the rise in digital attacks against high-risk groups.",
      start: "Start",
      imageAlt: "Digital security illustration",
    },
    guide: {
      accent: "Filling Out",
      title: "the Assessment",
      subtitle: "Digital Security Self-Assessment Guide",
      steps: [
        "Select one of the sections you would like to assess. You can select one section or all sections.",
        "After making your selection, you will be taken to the assessment page.",
        "Check the security settings on the laptop and phone you use every day. If you do this, select “Yes”. If you do not, select “No”.",
      ],
    },
    assessment: {
      headingAccent: "INITIAL",
      heading: "ASSESSMENT",
      description:
        "Before starting, let’s do a simple assessment to determine which version of PAKEM DIRI you should use.",
      submit: "Continue",
      reset: "Retake basic assessment",
      required: "Please choose an answer.",
      questions: {
        activity: {
          title: "What is your main daily activity?",
          options: {
            privateEmployee: "Private-sector employee",
            journalist: "Journalist",
            ngoStaff: "NGO staff",
            student: "Student",
            civilServant: "Civil servant",
            entrepreneur: "Entrepreneur/professional",
            homemaker: "Homemaker",
          },
        },
        activism: {
          title:
            "Have you ever engaged in activism related to political issues? (e.g., demonstrations and actions, or posting political criticism on social media)",
          options: { yes: "YES", no: "NO" },
        },
        digitalAttack: {
          title:
            "Within the past year, have you been the victim of a digital attack? (e.g., account takeover, threats, phishing, or similar incidents)",
          options: { yes: "YES", no: "NO" },
        },
      },
      result: {
        score: "Initial assessment score",
        full:
          "Based on this assessment, you are considered part of a high-risk group. With a total score of 20 or more, please complete the full PAKEM DIRI assessment.",
        simple:
          "Based on this assessment, you are not considered part of a high-risk group. With a total score below 20, use the following simplified PAKEM DIRI guidance.",
      },
      full: { headingAccent: "PAKEM DIRI", heading: "FULL VERSION" },
      simple: {
        headingAccent: "PAKEM DIRI",
        heading: "SIMPLIFIED VERSION",
        resultHeadingAccent: "RESULT",
        resultHeading: "SIMPLIFIED PAKEM DIRI",
        totalScore: "Total Score",
        scoreDescription: 'Each “Yes” answer is worth 1 point out of 10 questions.',
        submit: "Complete",
        submitted: "Thank you, you have completed the simplified PAKEM DIRI assessment.",
        items: [
          "Lock your devices",
          "Back up your data regularly",
          "Install official applications only from the App Store/Google Play Store",
          "Update applications whenever an update is available",
          "Clear Wi-Fi traces from your devices",
          "Use different passwords for each account",
          "Regularly check which devices are connected to your Google and WhatsApp accounts",
          "Be careful when uploading sensitive information",
          "Do not use public Wi-Fi carelessly, especially when making banking transactions",
          "Be careful when clicking links sent by other people",
        ],
      },
    },
    followUp: {
      accent: "Continue",
      title: "the Assessment",
      totalScore: "View Total Score",
      completed: "Completed",
    },
    results: {
      riskLevels: [
        "Very high risk",
        "High risk",
        "Medium risk",
        "Low risk",
        "Very low risk",
      ],
      headingPrefix: "Your",
      headingAccent: "Risk Level",
      headingSuffix: "",
      combinedScore: "Total Combined Score",
      score: "Score",
      downloading: "Downloading...",
      downloadPdf: "Download PDF",
      finish: "Done",
      continue: "Continue",
    },
    recommendations: {
      heading: "Recommendations",
      download: "Download",
      imageAlt: "SAFEnet Digital Hygiene Guide",
      intro:
        "This Digital Hygiene Guide can be used by civil society organisations to build the basic skills they need to protect themselves and reduce the risk of digital attacks.",
      purpose:
        "The guide was developed to give civil society organisations the basic knowledge and techniques needed to identify digital threats and avoid becoming victims of digital attacks.",
      sections: "The guide consists of two parts:",
      partOne: "Identifying Digital Threats",
      partTwo: "Protecting Against Digital Attacks through Digital Hygiene",
      outro: "Download the guide to learn more.",
    },
    footer: {
      contact:
        "To use PAKEM DIRI or for further consultation, please contact SAFEnet at info@safenet.or.id or our Hotline (+62)8179323375.",
      logoAlt: "SAFEnet logo",
    },
    metadata: {
      title: "PAKEM DIRI | SAFEnet",
      description:
        "PAKEM DIRI is a self-assessment method for digital security, currently being developed by SAFEnet, to address the rise in digital attacks against high-risk groups.",
      socialTitle: "Digital Security Self-Assessment Guide - SAFEnet",
    },
    categories: {
      perangkat: {
        label: "Device",
        title: "Device Security (Laptop)",
        alt: "Device Security Assessment icon",
      },
      akun: {
        label: "Account",
        title: "Account Security",
        alt: "Account Security Assessment icon",
      },
      komunikasi: {
        label: "Communication",
        title: "Communication Security",
        alt: "Communication Security Assessment icon",
      },
      ponsel: {
        label: "Mobile Phone",
        title: "Mobile Phone Security",
        alt: "Mobile Phone Security Assessment icon",
      },
    },
    survey: {
      description: "Assess your daily practices based on the criteria below.",
      yes: "Yes",
      no: "No",
      next: "Next",
      previous: "Previous",
      complete: "Check",
      start: "Start the Survey",
      completed: "Thank you for completing PAKEM DIRI",
      summaryTitle: "Results Summary",
      scoreSummary: "Score Summary",
      combinedScore: "Total Combined Score",
      correct: "correct",
    },
  },
};

export function normalizeLocale(locale) {
  return LOCALES.includes(locale) ? locale : DEFAULT_LOCALE;
}

export function getTranslations(locale) {
  return TRANSLATIONS[normalizeLocale(locale)];
}
