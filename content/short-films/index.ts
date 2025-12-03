import { Locale } from "@/content/locale"
import { cardLocales as aroundCard, filmMeta as aroundMeta } from "@/content/short-films/around-the-roundabout/FilmPage"
import { cardLocales as linkToLoveCard, filmMeta as linkToLoveMeta } from "@/content/short-films/linktolove/FilmPage"
import { cardLocales as signsCard, filmMeta as signsMeta } from "@/content/short-films/signs/FilmPage"
import { cardLocales as firstIterationCard, filmMeta as firstIterationMeta } from "@/content/short-films/first-iteration/FilmPage"

export type FilmCard = {
  id: string
  section: "short-films"
  image: string
  locales: Record<Locale, { title: string; duration: string; year: string; category: string; notes?: string }>
}

export const shortFilms: FilmCard[] = [
  {
    id: aroundMeta.id,
    section: "short-films",
    image: aroundMeta.image,
    locales: aroundCard,
  },
  {
    id: linkToLoveMeta.id,
    section: "short-films",
    image: linkToLoveMeta.image,
    locales: linkToLoveCard,
  },
  {
    id: signsMeta.id,
    section: "short-films",
    image: signsMeta.image,
    locales: signsCard,
  },
  {
    id: firstIterationMeta.id,
    section: "short-films",
    image: firstIterationMeta.image,
    locales: firstIterationCard,
  },
]
