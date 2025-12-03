"use client"

import VideoPlayer from "@/components/VideoPlayer"
import PhotoGallery from "@/components/PhotoGallery"
import { cdn } from "@/app/utils"
import { Locale, requireLocale, validateLocales } from "@/content/locale"

type LocaleContent = {
  title: string
  description: string
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
      title: "Pirma Iteracija",
      description:
        'Dokumentinis filmas apie pasiruošimą DIY muzikos festivaliui "Braille Satellite", organizuojamam kolektyvo "Empty Brain Resort".',
      stillsHeading: "Nuotraukos",
      creditsHeading: "— Sukūrė",
      infoHeading: "— Informacija",
      credits: ["Donatas Šimeliūnas"],
      info: [
        { label: "Žanras", value: "Trumpametražis, Dokumentinis" },
        { label: "Trukmė", value: "30'" },
        { label: "Šalis", value: "Lietuva" },
        { label: "Kalba", value: "Lietuvių, Anglų" },
        { label: "Gamybos metai", value: "2022" },
      ],
    },
    en: {
      title: "First Iteration",
      description: "Documentary about preparation for Braille Satellite DYI music festival organised by Empty Brain Resort.",
      stillsHeading: "Stills",
      creditsHeading: "— Made by",
      infoHeading: "— Information",
      credits: ["Donatas Šimeliūnas"],
      info: [
        { label: "Genre", value: "Short, Documentary" },
        { label: "Duration", value: "30'" },
        { label: "Country", value: "Lithuania" },
        { label: "Language", value: "Lithuanian, English" },
        { label: "Year", value: "2022" },
      ],
    },
    fr: {
      title: "Première itération",
      description: "Documentaire sur la préparation du festival DYI de musique Braille Satellite organisé par Empty Brain Resort.",
      stillsHeading: "Photos",
      creditsHeading: "— Fait par",
      infoHeading: "— Information",
      credits: ["Donatas Šimeliūnas"],
      info: [
        { label: "Genre", value: "Court, Documentaire" },
        { label: "Durée", value: "30'" },
        { label: "Pays", value: "Lituanie" },
        { label: "Langue", value: "Lituanien, Anglais" },
        { label: "Année", value: "2022" },
      ],
    },
  },
  "first-iteration localised content",
)

export const cardLocales = validateLocales<LocaleCard>(
  {
    lt: {
      title: "Pirma iteracija",
      duration: "30'",
      year: "2022",
      category: "Dokumentinis",
      notes: "Pirmas filmas kuriam nusprendžiau išsinuomuoti kamerą ir mikrofoną",
    },
    en: {
      title: "First Iteration",
      duration: "30'",
      year: "2022",
      category: "Documentary",
      notes: "First film for which I decided to rent a camera and a microphone.",
    },
    fr: {
      title: "Première itération",
      duration: "30'",
      year: "2022",
      category: "Documentaire",
      notes: "Premier film pour lequel j'ai décidé de louer une caméra et un microphone.",
    },
  },
  "first-iteration card content",
)

const subtitles: { src: string; lang: Locale; label: string }[] = []

const photos = [
  { src: cdn("short-films/first-iteration/photos/still1.png"), alt: "Still 1" },
  { src: cdn("short-films/first-iteration/photos/still2.png"), alt: "Still 2" },
  { src: cdn("short-films/first-iteration/photos/still3.png"), alt: "Still 3" },
  { src: cdn("short-films/first-iteration/photos/still4.png"), alt: "Still 4" },
  { src: cdn("short-films/first-iteration/photos/still5.png"), alt: "Still 5" },
  { src: cdn("short-films/first-iteration/photos/still6.png"), alt: "Still 6" },
]

export function FilmPage({ locale }: { locale: Locale }) {
  const copy = requireLocale(locales, locale)

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 mt-4">{copy.title}</h1>
      <p className="mb-6">{copy.description}</p>

      <VideoPlayer src={cdn("short-films/first-iteration/first-iteration.m3u8")} subtitles={subtitles} />

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
  id: "first-iteration",
  section: "short-films",
  image: cdn("short-films/first-iteration/photos/still4.png"),
  locales: cardLocales,
} as const
