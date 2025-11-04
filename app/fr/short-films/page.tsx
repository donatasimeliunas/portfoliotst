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
  category: string
  notes?: string
}

const films: Film[] = [
  {
    id: "around-the-roundabout",
    title: "Autour du Cercle",
    image: cdn("short-films/around-the-roundabout/photos/still2.jpg"),
    duration: "15'",
    year: "Automne 2024",
    category: "Fiction",
    notes: "Expériences en réalité augmentée et animation 3D.",
  },
  {
    id: "linktolove",
    title: "LinkToLove",
    image: cdn("short-films/linktolove/photos/still8.jpg"),
    duration: "8'",
    year: "Printemps 2024",
    category: "Fiction",
    notes: "Expériences de jeu d'acteur et de Sci-Fi",
  },
  {
    id: "signs",
    title: "Signes",
    image: cdn("short-films/signs/photos/Poster.png"),
    duration: "15'",
    year: "2023",
    category: "Fiction",
    notes: "Premier court métrage réalisé avec l'aide d'une petite équipe passionnée.",
  },
  {
    id: "first-iteration",
    title: "Première itération",
    image: cdn("short-films/first-iteration/photos/still4.png"),
    duration: "30'",
    year: "2022",
    category: "Documentaire",
    notes: "Premier film pour lequel j'ai décidé de louer une caméra et un microphone.",
  },
]

export default function ShortFilms() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-6">Courts métrages</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {films.map((film) => (
          <Link href={`/fr/short-films/${film.id}`} key={film.id} className="block">
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
                  <span>•</span>
                  <span>{film.category}</span>
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
