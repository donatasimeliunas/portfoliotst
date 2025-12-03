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
      title: "Camarga",
      description:
        "Trumpa kelionė į Camargue. Antrą ir tikrai paskutinį kartą bandžiau filmuoti be išorinio mikrofono",
      info: [
        { label: "Kada", value: "2025 Spalis" },
        { label: "Kur", value: "Camarga" },
        { label: "Kas", value: "Anaïs" },
        { label: "Trukmė", value: "13'" },
      ],
    },
    en: {
      title: "Camargue",
      description:
        "A short trip to Camargue. This was my second and definitely last time filming without an external microphone.",
      info: [
        { label: "When", value: "October 2025" },
        { label: "Where", value: "Camargue" },
        { label: "Who", value: "Anaïs" },
        { label: "Duration", value: "13'" },
      ],
    },
    fr: {
      title: "Camargue",
      description:
        "Un petit voyage en Camargue. C’était la deuxième et certainement la dernière fois que je filmais sans micro externe.",
      info: [
        { label: "Quand", value: "Octobre 2025" },
        { label: "Où", value: "Camargue" },
        { label: "Qui", value: "Anaïs" },
        { label: "Durée", value: "13'" },
      ],
    },
  },
  "videography template content",
)

export const cardLocales = validateLocales<LocaleCard>(
  {
    lt: { title: "Camargue", duration: "13'", year: "2025 Spalis", notes: "Čia ganosi balti arkliai ir auga ryžiai" },
    en: { title: "Camargue", duration: "13'", year: "October 2025", notes: "Land of white horses" },
    fr: { title: "Camargue", duration: "13'", year: "Octobre 2025", notes: "La terre des chevaux blancs" },
  },
  "videography template card",
)

// Update with actual subtitles if available
const subtitles: { src: string; lang: Locale; label: string }[] = []

// Update photo list
const photos = [
  { src: cdn("videography/camargue2025/photos/Still1.jpg"), alt: "Still 1" },
  { src: cdn("videography/camargue2025/photos/Still2.jpg"), alt: "Still 2" },
  { src: cdn("videography/camargue2025/photos/Still3.jpg"), alt: "Still 3" },
  { src: cdn("videography/camargue2025/photos/Still4.jpg"), alt: "Still 4" },
  { src: cdn("videography/camargue2025/photos/Still6.jpg"), alt: "Still 6" },
  { src: cdn("videography/camargue2025/photos/Still10.jpg"), alt: "Still 10" },

]

export function FilmPage({ locale }: { locale: Locale }) {
  const copy = requireLocale(locales, locale)

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 mt-4">{copy.title}</h1>
      <p className="mb-6">{copy.description}</p>

      <VideoPlayer src={cdn("videography/camargue2025/index.m3u8")} subtitles={subtitles} />

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
  id: "camargue2025",
  section: "videography",
  image: cdn("videography/camargue2025/photos/Still3.jpg"),
  locales: cardLocales,
} as const
