import { Locale } from "@/content/locale"
import { cardLocales as velykosCard, filmMeta as velykosMeta } from "@/content/videography/velykos2025/FilmPage"
import { cardLocales as camargueCard, filmMeta as camargueMeta } from "@/content/videography/camargue2025/FilmPage"
import { cardLocales as renovationCard, filmMeta as renovationMeta } from "@/content/videography/renovation2025/FilmPage"
import { cardLocales as denmarkCard, filmMeta as denmarkMeta } from "@/content/videography/denmark2025/FilmPage"
import { cardLocales as theoJessCard, filmMeta as theoJessMeta } from "@/content/videography/theo-jess/FilmPage"

export type FilmCard = {
  id: string
  section: "videography"
  image: string
  locales: Record<Locale, { title: string; duration: string; year: string; notes?: string }>
}

export const videographyFilms: FilmCard[] = [
  {
    id: camargueMeta.id,
    section: "videography",
    image: camargueMeta.image,
    locales: camargueCard,
  },

  {
    id: denmarkMeta.id,
    section: "videography",
    image: denmarkMeta.image,
    locales: denmarkCard,
  },

  {
    id: renovationMeta.id,
    section: "videography",
    image: renovationMeta.image,
    locales: renovationCard,
  },

  {
    id: velykosMeta.id,
    section: "videography",
    image: velykosMeta.image,
    locales: velykosCard,
  },

  {
    id: theoJessMeta.id,
    section: "videography",
    image: theoJessMeta.image,
    locales: theoJessCard,
  },
]
