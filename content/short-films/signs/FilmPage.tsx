"use client"

import VideoPlayer from "@/components/VideoPlayer"
import PhotoGallery from "@/components/PhotoGallery"
import { cdn } from "@/app/utils"
import { Locale, requireLocale, validateLocales } from "@/content/locale"

type LocaleContent = {
  title: string
  subtitle?: string
  description: string
  note?: string
  stillsHeading: string
  creditsHeading: string
  infoHeading: string
  credits: string[]
  info: { label: string; value: string }[]
}

type LocaleCard = {
  title: string
  duration: string
  year: string
  category: string
  notes?: string
}

const locales = validateLocales<LocaleContent>(
  {
    lt: {
      title: "Ženklai",
      subtitle: "Signs",
      description:
        "Saulė susapnuoja keistą sapną - taip prasideda diena, kai ji ir jos vaikinas Gvidas bando išsiaiškinti sapno prasmę ir kartu permąsto savo santykių ateitį.",
      note: "Angliški subtitrai prieinami",
      stillsHeading: "Nuotraukos",
      creditsHeading: "— Komanda",
      infoHeading: "— Informacija",
      credits: [
        "Režisierius ir scenarijaus autorius: Donatas Šimeliūnas",
        "Operatorius: Gvidas Bindokas",
        "Dailės departamentas: Anaïs Jamain",
        "Montažas: Motiejus Mainelis",
        "Aktoriai:",
        "Gvidas: Motiejus Ivanauskas",
        "Saulė: Radvilė Bronušaitė",
      ],
      info: [
        { label: "Žanras", value: "Trumpo metro, Vaidybinis" },
        { label: "Trukmė", value: "15'" },
        { label: "Šalis", value: "Lietuva" },
        { label: "Kalba", value: "Lietuvių" },
        { label: "Gamybos metai", value: "2023" },
      ],
    },
    en: {
      title: "Signs",
      subtitle: "Ženklai",
      description:
        "Saulė has a mysterious dream - this starts a day in which she and her boyfriend Gvidas try to find out the meaning of the prophecy and rethink the future of their relationship.",
      note: "English subtitles available",
      stillsHeading: "Stills",
      creditsHeading: "— Credits",
      infoHeading: "— Information",
      credits: [
        "Director and Writer: Donatas Šimeliūnas",
        "Cinematographer: Gvidas Bindokas",
        "Art Director: Anaïs Jamain",
        "Editor: Motiejus Mainelis",
        "Cast:",
        "Gvidas: Motiejus Ivanauskas",
        "Saulė: Radvilė Bronušaitė",
      ],
      info: [
        { label: "Genre", value: "Short, Fiction" },
        { label: "Duration", value: "15'" },
        { label: "Country", value: "Lithuania" },
        { label: "Language", value: "Lithuanian" },
        { label: "Year", value: "2023" },
      ],
    },
    fr: {
      title: "Signes",
      subtitle: "Ženklai",
      description:
        "Saulė fait un rêve mystérieux - c'est le début d'une journée au cours de laquelle elle et son petit ami Gvidas tentent de découvrir le sens de la prophétie et de repenser l'avenir de leur relation.",
      note: "Sous-titres anglais disponibles",
      stillsHeading: "Photos",
      creditsHeading: "— Crédits",
      infoHeading: "— Information",
      credits: [
        "Réalisateur et scénariste : Donatas Šimeliūnas",
        "Directeur de la photographie : Gvidas Bindokas",
        "Directrice artistique : Anaïs Jamain",
        "Montage : Motiejus Mainelis",
        "Cast:",
        "Gvidas: Motiejus Ivanauskas",
        "Saulė: Radvilė Bronušaitė",
      ],
      info: [
        { label: "Genre", value: "Court, Fiction" },
        { label: "Durée", value: "15'" },
        { label: "Pays", value: "Lituanie" },
        { label: "Langue", value: "Lituanien" },
        { label: "Année", value: "2023" },
      ],
    },
  },
  "signs localised content",
)

export const cardLocales = validateLocales<LocaleCard>(
  {
    lt: {
      title: "Ženklai",
      duration: "15'",
      year: "2023",
      category: "Vaidybinis",
      notes: "Pirmas trumpametražis kurį režisavau kartu su kūrybine komanda",
    },
    en: {
      title: "Signs",
      duration: "15'",
      year: "2023",
      category: "Fiction",
      notes: "First more professional short. Made with the help of a small but passionate team.",
    },
    fr: {
      title: "Signes",
      duration: "15'",
      year: "2023",
      category: "Fiction",
      notes: "Premier court métrage réalisé avec l'aide d'une petite équipe passionnée.",
    },
  },
  "signs card content",
)

const subtitles = [
  {
    src: cdn("short-films/signs/sings-en.vtt"),
    lang: "en" as Locale,
    label: "English",
  },
]

const photos = [
  { src: cdn("short-films/signs/photos/Poster.png"), alt: "Poster for Signs" },
  { src: cdn("short-films/signs/photos/Still1.jpg"), alt: "Still 1" },
  { src: cdn("short-films/signs/photos/Still2.jpg"), alt: "Still 2" },
  { src: cdn("short-films/signs/photos/Still3.jpg"), alt: "Still 3" },
  { src: cdn("short-films/signs/photos/Still4.jpg"), alt: "Still 4" },
  { src: cdn("short-films/signs/photos/Still5.jpg"), alt: "Still 5" },
]

export function FilmPage({ locale }: { locale: Locale }) {
  const copy = requireLocale(locales, locale)

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 mt-4">{copy.title}</h1>
      {copy.subtitle && <h2 className="text-xl font-bold mb-4">{copy.subtitle}</h2>}

      <p className="mb-6">{copy.description}</p>

      {copy.note && <h3 className="italic mb-2">{copy.note}</h3>}
      <VideoPlayer src={cdn("short-films/signs/signs.m3u8")} subtitles={subtitles} />

      <div className="mt-6">
        <div className="border-t border-gray-300 my-6" aria-hidden="true" />
        <PhotoGallery photos={photos} />
      </div>

      <div className="mt-6 flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <h2 className="text-xl font-semibold mb-2">{copy.creditsHeading}</h2>
          <ul className="mb-6">
            {copy.credits.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="md:w-1/2">
          <h2 className="text-xl font-semibold mb-2">{copy.infoHeading}</h2>
          <ul>
            {copy.info.map((item) => (
              <li key={item.label}>
                <strong>{item.label}:</strong> {item.value}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export const filmMeta = {
  id: "signs",
  section: "short-films",
  image: cdn("short-films/signs/photos/Poster.png"),
  locales: cardLocales,
} as const
