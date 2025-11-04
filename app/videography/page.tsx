"use client"

import Image from "next/image"
import Link from "next/link"
import { cdn } from "@/app/utils"

type Film = {
  id: string
  title: string
  image: string
  duration: string
  year: string
  notes?: string
}

const films: Film[] = [
  {
    id: "theo-jess",
    title: "Jess ir Théo",
    image: cdn("videography/Theo_Jess/photos/still1.jpg"),
    duration: "1h23'",
    year: "2024 Rūgsėjis",
    notes?: "Mano merginos sesės vestuvės"

  },
]

export default function ShortFilms() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-6">Mielos akimirkos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {films.map((film) => (
          <Link href={`/videography/${film.id}`} key={film.id} className="block">
            <div className="flex flex-col h-full">
              <div className="relative w-full aspect-[16/9] overflow-hidden">
                <Image
                  src={film.image || "/placeholder.svg"}
                  alt={film.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-contain"
                  priority={film.id === "signs"}
                />
              </div>
              <div className="mt-2 flex flex-col items-center text-center flex-grow justify-center">
                <h2 className="text-lg font-bold">{film.title}</h2>
                <div className="text-sm space-x-2">
                  <span>{film.duration}</span>
                  <span>•</span>
                  <span>{film.year}</span>
                </div>
                {film.notes && <p className="text-sm mt-1 italic">{film.notes}</p>}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
