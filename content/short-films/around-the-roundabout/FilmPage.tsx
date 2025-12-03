"use client"

import VideoPlayer from "@/components/VideoPlayer"
import PhotoGallery from "@/components/PhotoGallery"
import { cdn } from "@/app/utils"
import { Locale, requireLocale, validateLocales } from "@/content/locale"

type LocaleContent = {
  title: string
  subtitle?: string
  description: string
  stillsHeading: string
  teamHeading: string
  infoHeading: string
  team: string[]
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
      title: "Žiedu aplink",
      description: '"Tai" visada šalia.',
      stillsHeading: "Nuotraukos",
      teamHeading: "— Komanda",
      infoHeading: "— Informacija",
      team: [
        "Sukūrė: Donatas Šimeliūnas",
        "Vaidino: Motiejus Ivanauskas",
        "Filmuoti padėjo: Ignas Kvaščiavičius",
        "Filmuoti padėjo: Lukas Kvaščiavičius",
      ],
      info: [
        { label: "Žanras", value: "Trumpo metro, Vaidybinis" },
        { label: "Trukmė", value: "3'20''" },
        { label: "Šalis", value: "Lietuva" },
        { label: "Kalba", value: "-" },
        { label: "Gamybos metai", value: "2024 metų ruduo" },
      ],
    },
    en: {
      title: "Around the Roundabout",
      description: '"It" is always around',
      stillsHeading: "Stills",
      teamHeading: "— Team",
      infoHeading: "— Information",
      team: [
        "Made by: Donatas Šimeliūnas",
        "Actor: Motiejus Ivanauskas",
        "PA: Ignas Kvaščiavičius",
        "PA: Lukas Kvaščiavičius",
      ],
      info: [
        { label: "Genre", value: "Short, Fiction" },
        { label: "Duration", value: "3'20''" },
        { label: "Country", value: "Lithuania" },
        { label: "Language", value: "-" },
        { label: "Year", value: "Autumn of 2024" },
      ],
    },
    fr: {
      title: "Autour du Cercle",
      description: '"Il" est toujours là.',
      stillsHeading: "Photos",
      teamHeading: "— L'équipe",
      infoHeading: "— Information",
      team: [
        "Créé par: Donatas Šimeliūnas",
        "Acteur: Motiejus Ivanauskas",
        "Aide au tournage: Ignas Kvaščiavičius",
        "Aide au tournage: Lukas Kvaščiavičius",
      ],
      info: [
        { label: "Genres", value: "Court métrage, Fiction" },
        { label: "Durée", value: "3'20''" },
        { label: "Pays", value: "Lituanie" },
        { label: "Langue", value: "-" },
        { label: "Année", value: "Automne 2024" },
      ],
    },
  },
  "around-the-roundabout localised content",
)

export const cardLocales = validateLocales<LocaleCard>(
  {
    lt: {
      title: "Žiedu aplink",
      duration: "3'20''",
      year: "2024 Ruduo",
      category: "Vaidybinis",
      notes: " 'Augmented Reality' eksperimentas.",
    },
    en: {
      title: "Around the Roundabout",
      duration: "3'20''",
      year: "2024 Autumn",
      category: "Fiction",
      notes: "Explorations in augmented reality and 3D animation.",
    },
    fr: {
      title: "Autour du Cercle",
      duration: "3'20''",
      year: "Automne 2024",
      category: "Fiction",
      notes: "Explorations en réalité augmentée et animation 3D.",
    },
  },
  "around-the-roundabout card content",
)

const subtitles: { src: string; lang: Locale; label: string }[] = []

const photos = [
  { src: cdn("short-films/around-the-roundabout/photos/still1.jpg"), alt: "Still 1" },
  { src: cdn("short-films/around-the-roundabout/photos/still2.jpg"), alt: "Still 2" },
]

export function FilmPage({ locale }: { locale: Locale }) {
  const copy = requireLocale(locales, locale)

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 mt-4">{copy.title}</h1>
      {copy.subtitle && <h2 className="text-xl font-bold mb-4">{copy.subtitle}</h2>}
      <p className="mb-6">{copy.description}</p>

      <VideoPlayer src={cdn("short-films/around-the-roundabout/around-the-roundabout.m3u8")} subtitles={subtitles} />

      <div className="mt-6">
        <div className="border-t border-gray-300 my-6" aria-hidden="true" />
        <PhotoGallery photos={photos} />
      </div>

      <div className="mt-6 flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <h2 className="text-xl font-semibold mb-2">{copy.teamHeading}</h2>
          <ul className="mb-6">
            {copy.team.map((item) => (
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
  id: "around-the-roundabout",
  section: "short-films",
  image: cdn("short-films/around-the-roundabout/photos/still2.jpg"),
  locales: cardLocales,
} as const
