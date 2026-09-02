import { akun, komunikasi, perangkat, ponsel } from "../components/survey/content/index";
import { getTranslations, normalizeLocale } from "./i18n";

const CATEGORY_KEYS = ["perangkat", "akun", "komunikasi", "ponsel"];
const INDONESIAN_CATEGORIES = { perangkat, akun, komunikasi, ponsel };

// English labels transcribed from data/PAKEM-DIRI-ENGLISH-SEPT-2025.xlsx.
// The Indonesian definitions remain the canonical question set because the
// workbook has one malformed communication row and different phone criteria.
const ENGLISH_QUESTIONS = {
  perangkat: [
    "Separate laptops for work and personal use",
    "Use an original operating system (OS), not a pirated or cracked version",
    "Use original programs and applications, not pirated or cracked versions",
    "Use a lock screen (password, PIN, or biometric) to protect your devices",
    "Activate your firewall",
    "Encrypt your media storage",
    "Turn off location features on your laptop",
    "Back up your data regularly, at least once a month",
    "Clean up unused or unneeded files and applications regularly",
    "Use antivirus and cleanup utilities (cleaners) application",
    "Update operating system and application if available",
    "Delete laptop Wi-Fi history to avoid leaving a digital footprint",
  ],
  ponsel: [
    "Separate your work or sensitive-use phone from your personal-use phone",
    "Physically protect your phone with an external protector (casing) and/or a screen guard",
    "Protect your phone with a password, PIN, pattern, or biometric so it cannot be easily accessed by others",
    "Enable automatic locking when the phone has not been used for a certain period, such as 1 or 5 minutes",
    "Update your operating system (OS) and applications if available",
    "Change your phone's name so it is not easily recognized or personally identifiable",
    "Turn off Bluetooth and Wi-Fi when not in use",
    "Only install applications from official sources",
    "Turn on location services on your phone only when needed",
    "Log out of your email application if you will not be using it for an extended period, for example, a week",
    "Check the extent of each application's access to data on your phone",
    "Review which other devices (for example, laptops) are linked to your phone's messaging apps, including WhatsApp, Telegram, and Wire",
    "Use a browser that does not track user activity, such as Firefox Focus, Brave, and DuckDuckGo",
    "Back up your data regularly, for example, once a month",
    "Activate phone encryption to prevent unauthorized access from other devices",
    "Install a secure search engine, such as Brave Search or DuckDuckGo",
    "Use antivirus software to detect malware on your phone",
    "Regularly check for unused applications and files, and delete them if they are not needed",
    "Delete your phone's Wi-Fi history to avoid leaving a digital footprint",
  ],
  akun: [
    "Differentiate between personal accounts, such as shopping accounts, and work accounts",
    "Limit uploading personal information such as family details, date of birth, address, and similar data",
    "Create complex and strong passwords",
    "Create different passwords for each digital asset you own",
    "Store passwords in a password manager application such as KeePass or Bitwarden",
    "Change your passwords regularly, at least every six months or after an incident or digital attack",
    "Use 2FA to strengthen the security of your devices and other digital assets",
  ],
  komunikasi: [
    "Use a private connection, such as tethering from your own phone or office/home Wi-Fi, when using the internet",
    "Use a VPN when accessing public Wi-Fi",
    "Avoid using sensitive and personal information when using public Wi-Fi",
    "Use a secure browser, such as Brave or Firefox, to reduce your digital footprint while browsing",
    "Regularly clear browsing history and cookies from your browser",
    "Use encrypted messaging applications, such as Signal or Wire, for official work groups",
    "Use encrypted email to communicate about sensitive matters",
    "Use a privacy-respecting search engine",
    "Use encrypted services, such as BigBlueButton and Jitsi, for video calls",
    "Use encrypted and lockable cloud services, such as Proton Drive and Mega, to share files",
    "Be alert and cautious with emails or links from unknown senders",
    "Check the security of links or files in malware databases such as VirusTotal and urlscan.io",
  ],
};


function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function translateCategory(categoryKey, source, locale) {
  const normalizedLocale = normalizeLocale(locale);
  const translations = getTranslations(normalizedLocale);
  const categoryText = translations.categories[categoryKey];
  const category = clone(source);
  const page = category.pages[0];
  const questionTexts = normalizedLocale === "en" ? ENGLISH_QUESTIONS[categoryKey] : null;

  category.name = categoryKey;
  category.title = categoryText.title;
  page.name = categoryKey;
  page.title = `**${normalizedLocale === "en" ? "Security Assessment" : "Pemeriksaan Keamanan"} <span class='aksen'>${categoryText.label}</span>**`;
  page.description = translations.survey.description;

  page.elements.forEach((question, index) => {
    question.name = `${categoryKey}_${index + 1}`;
    question.title = questionTexts?.[index] || question.title;
    question.choices = [
      { value: "1", text: translations.survey.yes },
      { value: "0", text: translations.survey.no },
    ];
  });

  category.pageNextText = translations.survey.next;
  category.pagePrevText = translations.survey.previous;
  category.completeText = translations.survey.complete;
  category.startSurveyText = translations.survey.start;
  return category;
}

export function getSurveyDefinitions(locale) {
  const normalizedLocale = normalizeLocale(locale);
  return Object.fromEntries(
    CATEGORY_KEYS.map((key) => [
      key,
      translateCategory(key, INDONESIAN_CATEGORIES[key], normalizedLocale),
    ])
  );
}

export function getSurveyDefinition(locale, categoryKey) {
  return getSurveyDefinitions(locale)[categoryKey] || null;
}
