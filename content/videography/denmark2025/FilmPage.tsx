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
      title: "Danija",
      description: "Su George'u lankemės pas Paul'ą Kopenhagoje, ėjom hike'int. Bandžiau filmuoti be išorinio mikrofono, likau nusivylęs.",
      infoHeading: "— Informacija",
      info: [
        { label: "Kada", value: "2025 Birželis" },
        { label: "Kur", value: "Kopenhaga" },
        { label: "Kas", value: "Paul ir George" },
        { label: "Trukmė", value: "6'" },
      ],
    },
    en: {
      title: "Denmark",
      description: "George and I visited Paul in Copenhagen, went hiking. Tried shooting without an external microphone, was disappointed.",
      infoHeading: "— Information",
      info: [
        { label: "When", value: "June 2025" },
        { label: "Where", value: "Copenhagen" },
        { label: "Who", value: "Paul and George" },
        { label: "Duration", value: "6'" },
      ],
    },
    fr: {
      title: "Danemark",
      description: "Avec George, nous avons rendu visite à Paul à Copenhague, puis nous sommes partis en randonnée. J’ai tenté de filmer sans micro externe et ça m’a déçu.",
      infoHeading: "— Informations",
      info: [
        { label: "Quand", value: "Juin 2025" },
        { label: "Où", value: "Copenhague" },
        { label: "Qui", value: "Paul et George" },
        { label: "Durée", value: "6'" },
      ],
    },
  },
  "videography template content",
)

export const cardLocales = validateLocales<LocaleCard>(
  {
    lt: { title: "Danija", duration: "6'", year: "2025 Birželis", notes: "3 kursiokų susitikimas" },
    en: { title: "Denmark", duration: "6'", year: "June 2025", notes: "Meeting of three classmates" },
    fr: { title: "Danemark", duration: "6'", year: "Juin 2025", notes: "Trois amis d’université réunis" },
  },
  "videography template card",
)

// Update with actual subtitles if available
const subtitles: { src: string; lang: Locale; label: string }[] = []

// Update photo list
const photos = [
  { src: cdn("videography/denmark2025/photos/still1.jpg"), alt: "Still 1" },
  { src: cdn("videography/denmark2025/photos/still2.jpg"), alt: "Still 2" },
  { src: cdn("videography/denmark2025/photos/still3.jpg"), alt: "Still 3" },
  { src: cdn("videography/denmark2025/photos/still4.jpg"), alt: "Still 4" },
  { src: cdn("videography/denmark2025/photos/still5.jpg"), alt: "Still 5" },
  { src: cdn("videography/denmark2025/photos/still6.jpg"), alt: "Still 6" },
]

export function FilmPage({ locale }: { locale: Locale }) {
  const copy = requireLocale(locales, locale)

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 mt-4">{copy.title}</h1>
      <p className="mb-6">{copy.description}</p>

      <VideoPlayer src={cdn("videography/denmark2025/denmark2025.m3u8")} subtitles={subtitles} />

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
  id: "denmark2025",
  section: "videography",
  image: cdn("videography/denmark2025/photos/still2.jpg"),
  locales: cardLocales,
} as const
