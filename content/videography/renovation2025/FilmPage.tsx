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
      title: "Renovacija",
      description: "Didysis tvarkymasis",
      infoHeading: "— Informacija",
      info: [
        { label: "Kada", value: "2024 gruodis – 2025 gegužė" },
        { label: "Kur", value: "Léon, Prancūzija" },
        { label: "Kas", value: "Žmonės ir įrankiai" },
        { label: "Trukmė", value: "21'" },
      ],
    },
    en: {
      title: "Renovation",
      description: "Renovating and making our home livable again",
      infoHeading: "— Information",
      info: [
        { label: "When", value: "December 2024 to May 2025" },
        { label: "Where", value: "Léon" },
        { label: "Who", value: "Humans and tools" },
        { label: "Duration", value: "21'" },
      ],
    },
    fr: {
      title: "Rénovation",
      description: "Rénovation de la maison",
      infoHeading: "— Informations",
      info: [
        { label: "Quand", value: "Décembre 2024 à mai 2025" },
        { label: "Où", value: "Léon" },
        { label: "Qui", value: "Humains et outils" },
        { label: "Durée", value: "21'" },
      ],
    },
  },
  "videography template content",
)

export const cardLocales = validateLocales<LocaleCard>(
  {
    lt: { title: "Renovacija", duration: "21'", year: "2025", notes: "Rimtai padirbėta" },
    en: { title: "Renovation", duration: "21'", year: "2025", notes: "Job well done" },
    fr: { title: "Rénovation", duration: "21'", year: "2025", notes: "Du bon boulot" },
  },
  "videography template card",
)

// Update with actual subtitles if available
const subtitles: { src: string; lang: Locale; label: string }[] = []

// Update photo list
const photos = [
  // { src: cdn("videography/renovation2025/photos/Still1.jpg"), alt: "Still 1" },
  { src: cdn("videography/renovation2025/photos/Still2.jpg"), alt: "Still 2" },
  { src: cdn("videography/renovation2025/photos/Still3.jpg"), alt: "Still 3" },
  { src: cdn("videography/renovation2025/photos/Still5.jpg"), alt: "Still 5" },
  { src: cdn("videography/renovation2025/photos/Still8.jpg"), alt: "Still 8" },

]

export function FilmPage({ locale }: { locale: Locale }) {
  const copy = requireLocale(locales, locale)

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 mt-4">{copy.title}</h1>
      <p className="mb-6">{copy.description}</p>

      <VideoPlayer src={cdn("videography/renovation2025/index.m3u8")} subtitles={subtitles} />

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
  id: "renovation2025",
  section: "videography",
  image: cdn("videography/renovation2025/photos/Still2.jpg"),
  locales: cardLocales,
} as const
