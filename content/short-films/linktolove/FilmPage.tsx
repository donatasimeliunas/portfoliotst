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
      title: "LinkToLove",
      description:
        "Amžiuje, kai kiekvienas turi savo virtualią kopiją, Auroros klonė Evore susižavi kitu virtualiu klonu ir primygtinai siūlo Aurorai nueit į pasimatymą su už jo slypinčiu vaikinu.",
      stillsHeading: "Nuotraukos",
      creditsHeading: "— Sukūrė",
      infoHeading: "— Informacija",
      credits: ["Donatas Šimeliūnas", "Anaïs Jamain"],
      info: [
        { label: "Žanras", value: "Trumpo metro, Vaidybinis" },
        { label: "Trukmė", value: "8'" },
        { label: "Šalis", value: "Prancūzija" },
        { label: "Kalba", value: "Anglų" },
        { label: "Gamybos metai", value: "2024 metų pavasaris" },
      ],
    },
    en: {
      title: "LinkToLove",
      description:
        "In an age where everyone has their own virtual replica, Aurora's clone, Evore, becomes fascinated by another virtual entity — and insists that Aurora meet the real person behind it for a date.",
      stillsHeading: "Stills",
      creditsHeading: "— Made by",
      infoHeading: "— Information",
      credits: ["Donatas Šimeliūnas", "Anaïs Jamain"],
      info: [
        { label: "Genre", value: "Short, Fiction" },
        { label: "Duration", value: "8'" },
        { label: "Country", value: "France" },
        { label: "Language", value: "English" },
        { label: "Year", value: "Spring of 2024" },
      ],
    },
    fr: {
      title: "LinkToLove",
      description:
        "À une époque où chacun a sa propre réplique virtuelle, le clone d'Aurora, Evore, devient fasciné par une autre entité virtuelle et insiste pour qu'Aurora rencontre l'homme derrière ce clone.",
      stillsHeading: "Photos",
      creditsHeading: "— Fait par",
      infoHeading: "— Information",
      credits: ["Donatas Šimeliūnas", "Anaïs Jamain"],
      info: [
        { label: "Genre", value: "Court, Fiction" },
        { label: "Durée", value: "8'" },
        { label: "Pays", value: "France" },
        { label: "Langue", value: "Anglais" },
        { label: "Année", value: "Printemps 2024" },
      ],
    },
  },
  "linktolove localised content",
)

export const cardLocales = validateLocales<LocaleCard>(
  {
    lt: {
      title: "LinkToLove",
      duration: "8'",
      year: "2024 Pavasaris",
      category: "Vaidybinis",
      notes: "Vaidybos ir Sci-Fi idėjų eksperimentai",
    },
    en: {
      title: "LinkToLove",
      duration: "8'",
      year: "2024 Spring",
      category: "Fiction",
      notes: "Experiments in acting and Sci-Fi",
    },
    fr: {
      title: "LinkToLove",
      duration: "8'",
      year: "Printemps 2024",
      category: "Fiction",
      notes: "Expériences de jeu d'acteur et de Sci-Fi",
    },
  },
  "linktolove card content",
)

const subtitles: { src: string; lang: Locale; label: string }[] = []

const photos = [
  { src: cdn("short-films/linktolove/photos/still16.jpg"), alt: "Still 1" },
  { src: cdn("short-films/linktolove/photos/still3.jpg"), alt: "Still 2" },
  { src: cdn("short-films/linktolove/photos/still6.jpg"), alt: "Still 3" },
  { src: cdn("short-films/linktolove/photos/still8.jpg"), alt: "Still 4" },
  { src: cdn("short-films/linktolove/photos/still9.jpg"), alt: "Still 5" },
  { src: cdn("short-films/linktolove/photos/still11.jpg"), alt: "Still 6" },
]

export function FilmPage({ locale }: { locale: Locale }) {
  const copy = requireLocale(locales, locale)

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 mt-4">{copy.title}</h1>
      <p className="mb-6">{copy.description}</p>

      <VideoPlayer src={cdn("short-films/linktolove/linktolove.m3u8")} subtitles={subtitles} />

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
  id: "linktolove",
  section: "short-films",
  image: cdn("short-films/linktolove/photos/still8.jpg"),
  locales: cardLocales,
} as const
