import VideoPlayer from "@/components/VideoPlayer"
import PhotoGallery from "@/components/PhotoGallery"
import { cdn } from "@/app/utils"

const subtitles = []

const photos = [
  { src: cdn("short-films/around-the-roundabout/photos/still1.jpg"), alt: "Still 1" },
  { src: cdn("short-films/around-the-roundabout/photos/still2.jpg"), alt: "Still 2" },
]

export default function aroundtheroundabout() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 mt-4">Autour du Cercle</h1>
      <p className="mb-6">
        "Il" est toujours là.
      </p>

      <VideoPlayer src={cdn("short-films/around-the-roundabout/around-the-roundabout.m3u8")} subtitles={subtitles} />

      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-4">Photo</h2>
        <PhotoGallery photos={photos} />
      </div>

      <div className="mt-6 flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <h2 className="text-xl font-semibold mb-2"> &mdash;L'équipe</h2>
          <ul className="mb-6">
            <li>Créé par: Donatas Šimeliūnas</li>
            <li>Acteur: Motiejus Ivanauskas</li>
            <li>Aide au tournage: Ignas Kvaščiavičius</li>
            <li>Aide au tournage: Lukas Kvaščiavičius</li>

          </ul>
        </div>
        <div className="md:w-1/2">
          <h2 className="text-xl font-semibold mb-2"> &mdash; Information</h2>
          <ul>
            <li>
              <strong>Genres:</strong> Court métrage, Fiction
            </li>
            <li>
              <strong>Durée:</strong> 3'20''
            </li>
            <li>
              <strong>Pays:</strong> Lituanie
            </li>
            <li>
              <strong>Langue:</strong> - 
            </li>
            <li>
              <strong>Année:</strong> 2024, automne
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
