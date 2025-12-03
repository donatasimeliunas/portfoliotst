import Image from "next/image"
import Link from "next/link"
import { cdn } from "@/app/utils"

const featuredFilm = {
  id: "around-the-roundabout",
  title: "Autour du Cercle",
  image: cdn("short-films/around-the-roundabout/photos/still2.jpg"),
  duration: "3'20''",
  year: "Automne 2024",
  category: "Fiction",
  notes: "Explorations en réalité augmentée et animation 3D.",
}

export default function FrenchAbout() {
  return (
    <div className="max-w-4xl mx-auto flex flex-col gap-8 text-left">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-2/3">
          <h1 className="text-3xl font-bold mb-6">Bienvenue !</h1>
          <p className="mb-4">
            Je m'appelle Donatas Šimeliūnas. Ici, vous trouverez mes courts-métrages et mes projets vidéo personnels — le résultat de ma passion pour le récit audiovisuel.
          </p>
          <p className="mb-4">
            <Link
              href="https://cinedonatas-storage.s3.eu-north-1.amazonaws.com/about/CV_SIMELIUNAS_fr.pdf"
              className="text-blue-600 hover:underline"
            >
              Voici mon CV
            </Link>{" "}
            pour les détails plus techniques.
          </p>
          <p className="mb-4">Je suis actuellement basé dans le sud de la France, dans la région des Landes.</p>
          <p className="mb-4">d.simeliunas@gmail.com</p>
          <p className="mb-4">+33745006694</p>
        </div>
        <div className="md:w-1/3">
          <Image
            src={cdn("about/ThePhoto.jpg") || "/placeholder.svg"}
            alt="Donatas Šimeliūnas"
            width={300}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Dernier projet :</h2>
        <div className="w-full">
          <Link href={`/fr/short-films/${featuredFilm.id}`} className="block">
            <div className="flex flex-col h-full">
              <div className="relative w-full aspect-[2/1] overflow-hidden rounded-lg">
                <Image
                  src={featuredFilm.image || "/placeholder.svg"}
                  alt={featuredFilm.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-contain"
                  priority
                />
              </div>
              <div className="mt-4 flex flex-col items-center text-center">
                <h2 className="text-2xl font-bold">{featuredFilm.title}</h2>
                <div className="text-lg space-x-2 mt-2">
                  <span>{featuredFilm.duration}</span>
                  <span>•</span>
                  <span>{featuredFilm.year}</span>
                  <span>•</span>
                  <span>{featuredFilm.category}</span>
                </div>
                {featuredFilm.notes && <p className="text-lg mt-2 italic mb-8">{featuredFilm.notes}</p>}
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
