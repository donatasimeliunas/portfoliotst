"use client"

import Image from "next/image"
import Link from "next/link"
import { requireLocale } from "@/content/locale"
import { shortFilms } from "@/content/short-films"

export default function ShortFilms() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-6">Short Films</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {shortFilms.map((film) => {
          const localeData = requireLocale(film.locales, "en")
          return (
            <Link href={`/en/short-films/${film.id}`} key={film.id} className="block">
              <div className="flex flex-col h-full">
                <div className="relative w-full aspect-[16/9] overflow-hidden">
                  <Image
                    src={film.image || "/placeholder.svg"}
                    alt={localeData.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-contain"
                    priority={film.id === "signs"}
                  />
                </div>
                <div className="mt-2 flex flex-col items-center text-center flex-grow justify-center">
                  <h2 className="text-lg font-bold">{localeData.title}</h2>
                  <div className="text-sm space-x-2">
                    <span>{localeData.duration}</span>
                    <span>•</span>
                    <span>{localeData.year}</span>
                    <span>•</span>
                    <span>{localeData.category}</span>
                  </div>
                  {localeData.notes && <p className="text-sm mt-1 italic">{localeData.notes}</p>}
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
