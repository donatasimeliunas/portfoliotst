import Image from "next/image"
import Link from "next/link"
import { cdn } from "@/app/utils"

const featuredFilm =   {
    id: "around-the-roundabout",
    title: "Autour du Cercle",
    image: cdn("short-films/around-the-roundabout/photos/still2.jpg"),
    duration: "3'20'' ",
    year: "Automne 2024",
    category: "Fiction",
    notes: "Expériences en réalité augmentée et animation 3D.",
  }

export default function FrenchHome() {
  return (
    <div className="max-w-4xl mx-auto flex flex-col gap-8 text-left">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-2/3">
          <h1 className="text-3xl font-bold mb-6">Bienvenue sur mon Portfolio !</h1>
          <p className="mb-4">
            Je m'appelle Donatas Šimeliūnas. J'ai réalisé quatre courts métrages que vous pouvez{" "}
            <Link href="/fr/short-films" className="text-blue-600 hover:underline">
              trouver 
            </Link>{" "}
            sur ce site web. Dans la réalisation de ses projets, j’ai pu apprendre les étapes essentielles de la production ainsi que de la post-production d’un film. Après ses experiences, je me sens le plus à l’aise dans plusieurs domaines, celui de l'écriture de scénario, de la réalisation, de la cinématographie et du montage. J'aimerais vous proposer ma contribution dans les domaines cités ainsi que d’autre, étant ouvert et passionné par le monde de la réalisation.
          </p>
          <p className="mb-4">
            Vous pouvez télécharger un CV plus détaillé{" "}
            <Link
              href="https://cinedonatas-storage.s3.eu-north-1.amazonaws.com/about/CV_SIMELIUNAS_fr.pdf"
              className="text-blue-600 hover:underline"
            >
              ici
            </Link>
            .
          </p>
          <p className="mb-4">Actuellement, je suis basé dans le sud de la France, dans la région des Landes. N’hésitez pas à me contacter!</p>
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
