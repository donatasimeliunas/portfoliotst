import VideoPlayer from "@/components/VideoPlayer"
import PhotoGallery from "@/components/PhotoGallery"
import { cdn } from "@/app/utils"

const subtitles = [
  {
    src: cdn("short-films/signs/sings-en.vtt"),
    label: "English",
    srcLang: "en",
  },
]
const photos = [
  { src: cdn("short-films/signs/photos/Poster.png"), alt: "Poster for Signs" },
  { src: cdn("short-films/signs/photos/Still1.jpg"), alt: "Still 1" },
  { src: cdn("short-films/signs/photos/Still2.jpg"), alt: "Still 2" },
  { src: cdn("short-films/signs/photos/Still3.jpg"), alt: "Still 3 " },
  { src: cdn("short-films/signs/photos/Still4.jpg"), alt: "Still 4" },
  { src: cdn("short-films/signs/photos/Still5.jpg"), alt: "Still 5" },
]

export default function Signs() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 mt-4">Signes</h1>
      <h1 className="text-xl font-bold mb-4">Ženklai</h1>

      <p className="mb-6">

Saulė fait un rêve mystérieux - c'est le début d'une journée au cours de laquelle
        elle et son petit ami Gvidas tentent de découvrir le sens de la prophétie et de repenser l'avenir de leur
        relation.
      </p>

      <h3 className="italic mb-2"> Sous-titres anglais disponibles</h3>
      <VideoPlayer src={cdn("short-films/signs/signs.m3u8")} subtitles={subtitles} />

      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-4">Photos</h2>
        <PhotoGallery photos={photos} />
      </div>

      <div className="mt-6 flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <h2 className="text-xl font-semibold mb-2"> &mdash; Crédits</h2>
          <ul className="mb-6">
            <li>Réalisateur et scénariste : Donatas Šimeliūnas</li>
            <li>Directeur de la photographie : Gvidas Bindokas</li>
            <li>Directrice artistique : Anaïs Jamain</li>
            <li>Montage : Motiejus Mainelis </li>
            <li className="text-lg font-semibold">Cast</li>
            <li>Gvidas: Motiejus Ivanauskas</li>
            <li>Saulė: Radvilė Bronušaitė</li>
          </ul>
        </div>
        <div className="md:w-1/2">
          <h2 className="text-xl font-semibold mb-2"> &mdash; Information</h2>
          <ul>
            <li>
              <strong>Genre:</strong> Court, Fiction
            </li>
            <li>
              <strong>Durée:</strong> 15'
            </li>
            <li>
              <strong>Pays:</strong> Lituanie
            </li>
            <li>
              <strong>Langue:</strong> Lituanien
            </li>
            <li>
              <strong>Année:</strong> 2023
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
