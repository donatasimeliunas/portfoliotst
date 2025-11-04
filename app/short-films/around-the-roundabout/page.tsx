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
      <h1 className="text-3xl font-bold mb-4 mt-4">Žiedu aplink</h1>
      <p className="mb-6">
        "Tai" visada šalia.
      </p>

      <VideoPlayer src={cdn("short-films/around-the-roundabout/around-the-roundabout.m3u8")} subtitles={subtitles} />

      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-4">Nuotraukos</h2>
        <PhotoGallery photos={photos} />
      </div>

      <div className="mt-6 flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <h2 className="text-xl font-semibold mb-2"> &mdash; Komanda</h2>
          <ul className="mb-6">
            <li>Sukūrė: Donatas Šimeliūnas</li>
            <li>Vaidino: Motiejus Ivanauskas</li>
            <li>Filmuoti padėjo: Ignas Kvaščiavičius</li>
            <li>Filmuoti padėjo: Lukas Kvaščiavičius</li>

          </ul>
        </div>
        <div className="md:w-1/2">
          <h2 className="text-xl font-semibold mb-2"> &mdash; Informacija</h2>
          <ul>
            <li>
              <strong>Žanras:</strong> Trumpo metro, Vaidybinis
            </li>
            <li>
              <strong>Trukmė:</strong> 3'20''
            </li>
            <li>
              <strong>Šalis:</strong> Lietuva
            </li>
            <li>
              <strong>Kalba:</strong> - 
            </li>
            <li>
              <strong>Gamybos metai:</strong> 2024 metų ruduo
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
