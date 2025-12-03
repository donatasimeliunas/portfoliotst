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
      title: "Velykos",
      description: "Mama, močiutė ir pusseserė atvyko Velykom į svečius.",
      infoHeading: "— Informacija",
      info: [
        { label: "Kada", value: "2025 Balandis" },
        { label: "Kur", value: "Léon, Bordo" },
        { label: "Kas", value: "Šeima" },
        { label: "Trukmė", value: "8'" },
      ],
    },
    en: {
      title: "Easter",
      description: "Mom, grandma and cousin comes to visit us for Easter.",
      infoHeading: "— Information",
      info: [
        { label: "When", value: "April 2025" },
        { label: "Where", value: "Léon, Bordeaux" },
        { label: "Who", value: "Family" },
        { label: "Duration", value: "8'" },
      ],
    },
    fr: {
      title: "Pâques",
      description: "Ma mère, ma grand-mère et ma cousine sont venues nous voir en France pour Pâques",
      infoHeading: "— Informations",
      info: [
        { label: "Quand", value: "Avril 2025" },
        { label: "Où", value: "Léon, Bordeaux" },
        { label: "Qui", value: "Famille" },
        { label: "Durée", value: "8'" },
      ],
    },
  },
  "videography template content",
)

export const cardLocales = validateLocales<LocaleCard>(
  {
    lt: { title: "Velykos", duration: "8'", year: "2025 Balandis", notes: "Šeima atvyksta į svečiūs" },
    en: { title: "Easter", duration: "8'", year: "April 2025", notes: "My family is visiting us" },
    fr: { title: "Pâques", duration: "8'", year: "Avril 2025", notes: "Ma famille vient nous voir" },
  },
  "videography template card",
)

// Update with actual subtitles if available
const subtitles: { src: string; lang: Locale; label: string }[] = []

// Update photo list
const photos = [
  { src: cdn("videography/velykos2025/photos/Still1.jpg"), alt: "Still 1" },
  { src: cdn("videography/velykos2025/photos/Still2.jpg"), alt: "Still 2" },
  { src: cdn("videography/velykos2025/photos/Still3.jpg"), alt: "Still 3" },
  { src: cdn("videography/velykos2025/photos/Still4.jpg"), alt: "Still 4" },
  { src: cdn("videography/velykos2025/photos/Still5.jpg"), alt: "Still 5" },
  { src: cdn("videography/velykos2025/photos/Still6.jpg"), alt: "Still 6" },

]

export function FilmPage({ locale }: { locale: Locale }) {
  const copy = requireLocale(locales, locale)

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 mt-4">{copy.title}</h1>
      <p className="mb-6">{copy.description}</p>

      <VideoPlayer src={cdn("videography/velykos2025/index.m3u8")} subtitles={subtitles} />

      <div className="mt-6">
        <div className="border-t border-gray-300 my-6" aria-hidden="true" />
        <PhotoGallery photos={photos} />
      </div>

      <div className="mt-8">
        <div className="border-t border-gray-300 my-6" aria-hidden="true" />
        <div className="md:w-1/2">
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
  id: "velykos2025",
  section: "videography",
  image: cdn("videography/velykos2025/photos/Still6.jpg"),
  locales: cardLocales,
} as const
