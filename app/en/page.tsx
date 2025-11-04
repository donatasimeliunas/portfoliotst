import Image from "next/image"
import Link from "next/link"
import { cdn } from "@/app/utils"

const featuredFilm =   {
    id: "around-the-roundabout",
    title: "Around the Roundabout",
    image: cdn("short-films/around-the-roundabout/photos/still2.jpg"),
    duration: "3'20''",
    year: "2024 Autumn",
    category: "Fiction",
    notes: "Experiments in augmented reality and 3D animation.",
  }

export default function EnglishHome() {
  return (
    <div className="max-w-4xl mx-auto flex flex-col gap-8 text-left">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-2/3">
          <h1 className="text-3xl font-bold mb-6">Welcome to my Portfolio!</h1>
          <p className="mb-4">
              My name is Donatas Šimeliūnas. I have made four short films so far, which you can {""}
            <Link href="/en/short-films" className="text-blue-600 hover:underline">
              find
            </Link>{" "}
            on this website. These projects have given me hands-on experience in almost all stages of film production and post-production. I feel most strongly in the roles of scriptwriting, directing, cinematography and editing, and it is in these roles that I would most like to contribute to your project, but I am open to all offers.
          </p>
          <p className="mb-4">
            You can download more detailed CV{" "}
            <Link
              href="https://cinedonatas-storage.s3.eu-north-1.amazonaws.com/about/CV_SIMELIUNAS_en.pdf"
              className="text-blue-600 hover:underline"
            >
              here
            </Link>
            .
          </p>
          <p className="mb-4">Currently I am based in south of France, Les Landes region.</p>
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
