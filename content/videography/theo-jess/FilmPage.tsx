"use client"

import VideoPlayer from "@/components/VideoPlayer"
import PhotoGallery from "@/components/PhotoGallery"
import { cdn } from "@/app/utils"
import { Locale, requireLocale, validateLocales } from "@/content/locale"

type LocaleContent = {
  title: string
  description: string
  info: { label: string; value: string }[]
}

type LocaleCard = {
  title: string
  duration: string
  year: string
  notes?: string
}

const locales = validateLocales<LocaleContent>(
  {
    lt: {
      title: "Jess ir Théo",
      description: "Mano merginos sesės vestuvės",
      info: [
        { label: "Kada", value: "2024 Rūgsėjis" },
        { label: "Kur", value: "Prancūzija, netoli Bordeaux" },
        { label: "Kas", value: "Šeima ir draugai" },
        { label: "Trukmė", value: "1h23'" },
      ],
    },
    en: {
      title: "Jess and Théo",
      description: "My girlfriend's sister's wedding",
      info: [
        { label: "When", value: "September 2024" },
        { label: "Where", value: "France, near Bordeaux" },
        { label: "Who", value: "Family and friends" },
        { label: "Duration", value: "1h23'" },
      ],
    },
    fr: {
      title: "Jess et Théo",
      description: "Le mariage de la sœur de ma copine",
      info: [
        { label: "Quand", value: "Septembre 2024" },
        { label: "Où", value: "France, près de Bordeaux" },
        { label: "Qui", value: "Famille et amis" },
        { label: "Durée", value: "1h23'" },
      ],
    },
  },
  "theo-jess localised content",
)

export const cardLocales = validateLocales<LocaleCard>(
  {
    lt: {
      title: "Jess ir Théo",
      duration: "1h23'",
      year: "2024 Rūgsėjis",
      notes: "Mano merginos sesės vestuvės",
    },
    en: {
      title: "Jess and Théo",
      duration: "1h23'",
      year: "September 2024",
      notes: "My girlfriend's sister's wedding",
    },
    fr: {
      title: "Jess et Théo",
      duration: "1h23'",
      year: "Septembre 2024",
      notes: "Le mariage de la sœur de ma copine",
    },
  },
  "theo-jess card content",
)

const subtitles: { src: string; lang: Locale; label: string }[] = []

const photos = [
  { src: cdn("videography/Theo_Jess/photos/still1.jpg"), alt: "Still 1" },
  { src: cdn("videography/Theo_Jess/photos/still2.jpg"), alt: "Still 2" },
  { src: cdn("videography/Theo_Jess/photos/still3.jpg"), alt: "Still 3" },
  { src: cdn("videography/Theo_Jess/photos/still4.jpg"), alt: "Still 4" },
  { src: cdn("videography/Theo_Jess/photos/still5.jpg"), alt: "Still 5" },
  { src: cdn("videography/Theo_Jess/photos/still6.jpg"), alt: "Still 6" },
]

export function FilmPage({ locale }: { locale: Locale }) {
  const copy = requireLocale(locales, locale)

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 mt-4">{copy.title}</h1>
      <p className="mb-6">{copy.description}</p>

      <VideoPlayer src={cdn("videography/Theo_Jess/theo-jess.m3u8")} subtitles={subtitles} />

      <div className="mt-6">
        <div className="border-t border-gray-300 my-6" aria-hidden="true" />
        <PhotoGallery photos={photos} />
      </div>

      <div className="mt-8">
        <div className="border-t border-gray-300 my-6" aria-hidden="true" />
        <div>
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
  id: "theo-jess",
  section: "videography",
  image: cdn("videography/Theo_Jess/photos/still1.jpg"),
  locales: cardLocales,
} as const
