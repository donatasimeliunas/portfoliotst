import Image from "next/image"
import Link from "next/link"
import { cdn } from "@/app/utils"

const featuredFilm = {
  id: "around-the-roundabout",
  title: "Around the Roundabout",
  image: cdn("short-films/around-the-roundabout/photos/still2.jpg"),
  duration: "3'20''",
  year: "2024 Autumn",
  category: "Fiction",
  notes: "Experiments in augmented reality and 3D animation.",
}

export default function EnglishAbout() {
  return (
    <div className="max-w-4xl mx-auto flex flex-col gap-8 text-left">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-2/3">
          <h1 className="text-3xl font-bold mb-6">Hi!</h1>
          <p className="mb-4">
            My name is Donatas Šimeliūnas. Here you’ll find my short films and personal video projects — the results of my passion for audiovisual storytelling.
          </p>
          <p className="mb-4">
            <Link
              href="https://cinedonatas-storage.s3.eu-north-1.amazonaws.com/about/CV_SIMELIUNAS_en.pdf"
              className="text-blue-600 hover:underline"
            >
              Here's my CV
            </Link>{" "}
            for more technical details.
          </p>
          <p className="mb-4">I'm currently based in the south of France, Landes region.</p>
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
        <h2 className="text-2xl font-bold mb-6">Latest project:</h2>
        <div className="w-full">
          <Link href={`/en/short-films/${featuredFilm.id}`} className="block">
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
