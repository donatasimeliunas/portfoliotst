"use client"

import VideoPlayer from "@/components/VideoPlayer"
import PhotoGallery from "@/components/PhotoGallery"
import { cdn } from "@/app/utils"
import { Locale, requireLocale, validateLocales } from "@/content/locale"

/**
 * Copy this file into a new folder under content/short-films/<film-id>/FilmPage.tsx
 * and replace the placeholder values with real content.
 */

type LocaleContent = {
  title: string
  subtitle?: string
  description: string
  note?: string
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
      title: "Pavadinimas (LT)",
      subtitle: "Subtitle (pasirinktinai)",
      description: "Aprašymas (LT)",
      note: "Pastaba (pvz., subtitrų kalba)",
      creditsHeading: "— Komanda",
      infoHeading: "— Informacija",
      credits: ["Komanda 1", "Komanda 2"],
      info: [
        { label: "Žanras", value: "Žanras" },
        { label: "Trukmė", value: "Trukmė" },
        { label: "Šalis", value: "Šalis" },
        { label: "Kalba", value: "Kalba" },
        { label: "Gamybos metai", value: "Metai" },
      ],
    },
    en: {
      title: "Title (EN)",
      subtitle: "Optional subtitle",
      description: "Description (EN)",
      note: "Note (e.g., subtitles available)",
      creditsHeading: "— Credits",
      infoHeading: "— Information",
      credits: ["Credit 1", "Credit 2"],
      info: [
        { label: "Genre", value: "Genre" },
        { label: "Duration", value: "Duration" },
        { label: "Country", value: "Country" },
        { label: "Language", value: "Language" },
        { label: "Year", value: "Year" },
      ],
    },
    fr: {
      title: "Titre (FR)",
      subtitle: "Sous-titre optionnel",
      description: "Description (FR)",
      note: "Note (ex: sous-titres disponibles)",
      creditsHeading: "— Crédits",
      infoHeading: "— Information",
      credits: ["Crédit 1", "Crédit 2"],
      info: [
        { label: "Genre", value: "Genre" },
        { label: "Durée", value: "Durée" },
        { label: "Pays", value: "Pays" },
        { label: "Langue", value: "Langue" },
        { label: "Année", value: "Année" },
      ],
    },
  },
  "short-films template content",
)

export const cardLocales = validateLocales<LocaleCard>(
  {
    lt: { title: "Pavadinimas (LT)", duration: "Trukmė", year: "Metai", category: "Kategorija", notes: "Trumpa pastaba" },
    en: { title: "Title (EN)", duration: "Duration", year: "Year", category: "Category", notes: "Short note" },
    fr: { title: "Titre (FR)", duration: "Durée", year: "Année", category: "Catégorie", notes: "Note courte" },
  },
  "short-films template card",
)

// Add subtitle tracks if they exist
const subtitles: { src: string; lang: Locale; label: string }[] = []

// Replace photos with actual stills
const photos = [
  { src: cdn("short-films/<YourFilm>/photos/still1.jpg"), alt: "Still 1" },
  { src: cdn("short-films/<YourFilm>/photos/still2.jpg"), alt: "Still 2" },
]

export function FilmPage({ locale }: { locale: Locale }) {
  const copy = requireLocale(locales, locale)

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 mt-4">{copy.title}</h1>
      {copy.subtitle && <h2 className="text-xl font-bold mb-4">{copy.subtitle}</h2>}

      <p className="mb-6">{copy.description}</p>

      {copy.note && <h3 className="italic mb-2">{copy.note}</h3>}
      <VideoPlayer src={cdn("short-films/<YourFilm>/<your-video>.m3u8")} subtitles={subtitles} />

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
  id: "<film-id>",
  section: "short-films",
  image: cdn("short-films/<YourFilm>/photos/still1.jpg"),
  locales: cardLocales,
} as const
