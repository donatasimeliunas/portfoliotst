"use client"

import VideoPlayer from "@/components/VideoPlayer"
import PhotoGallery from "@/components/PhotoGallery"
import { cdn } from "@/app/utils"
import { Locale, requireLocale, validateLocales } from "@/content/locale"

/**
 * Copy this file into a new folder under content/videography/<film-id>/FilmPage.tsx
 * and fill in the locale-specific fields plus media sources.
 */

type LocaleContent = {
  title: string
  description: string
  infoHeading: string
  info: { label: string; value: string }[]
}

type LocaleCard = {
  title: string
  duration: string
  year: string
  notes?: string
}

// Replace placeholder strings with your film's actual copy.
const locales = validateLocales<LocaleContent>(
  {
    lt: {
      title: "Pavadinimas (LT)",
      description: "Aprašymas (LT)",
      infoHeading: "— Informacija",
      info: [
        { label: "Kada", value: "Data" },
        { label: "Kur", value: "Vieta" },
        { label: "Kas", value: "Kas" },
        { label: "Trukmė", value: "Trukmė" },
      ],
    },
    en: {
      title: "Title (EN)",
      description: "Description (EN)",
      infoHeading: "— Information",
      info: [
        { label: "When", value: "Date" },
        { label: "Where", value: "Location" },
        { label: "Who", value: "Who" },
        { label: "Duration", value: "Runtime" },
      ],
    },
    fr: {
      title: "Titre (FR)",
      description: "Description (FR)",
      infoHeading: "— Informations",
      info: [
        { label: "Quand", value: "Date" },
        { label: "Où", value: "Lieu" },
        { label: "Qui", value: "Qui" },
        { label: "Durée", value: "Durée" },
      ],
    },
  },
  "videography template content",
)

export const cardLocales = validateLocales<LocaleCard>(
  {
    lt: { title: "Pavadinimas (LT)", duration: "Trukmė", year: "Metai", notes: "Trumpas komentaras" },
    en: { title: "Title (EN)", duration: "Duration", year: "Year", notes: "Short note" },
    fr: { title: "Titre (FR)", duration: "Durée", year: "Année", notes: "Note courte" },
  },
  "videography template card",
)

// Update with actual subtitles if available
const subtitles: { src: string; lang: Locale; label: string }[] = []

// Update photo list
const photos = [
  { src: cdn("videography/<YourFilm>/photos/still1.jpg"), alt: "Still 1" },
  { src: cdn("videography/<YourFilm>/photos/still2.jpg"), alt: "Still 2" },
]

export function FilmPage({ locale }: { locale: Locale }) {
  const copy = requireLocale(locales, locale)

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 mt-4">{copy.title}</h1>
      <p className="mb-6">{copy.description}</p>

      <VideoPlayer src={cdn("videography/<YourFilm>/<your-video>.m3u8")} subtitles={subtitles} />

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
  id: "<film-id>",
  section: "videography",
  image: cdn("videography/<YourFilm>/photos/still1.jpg"),
  locales: cardLocales,
} as const
