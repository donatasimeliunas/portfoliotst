import VideoPlayer from "@/components/VideoPlayer"
import PhotoGallery from "@/components/PhotoGallery"
import { cdn } from "@/app/utils"

const subtitles = []

const photos = [
  { src: cdn("short-films/first-iteration/photos/still1.png"), alt: "Still 1" },
  { src: cdn("short-films/first-iteration/photos/still2.png"), alt: "Still 2" },
  { src: cdn("short-films/first-iteration/photos/still3.png"), alt: "Still 3" },
  { src: cdn("short-films/first-iteration/photos/still4.png"), alt: "Still 4 " },
  { src: cdn("short-films/first-iteration/photos/still5.png"), alt: "Still 5" },
  { src: cdn("short-films/first-iteration/photos/still6.png"), alt: "Still 6" },
]

export default function firstiteration() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 mt-4">Pirma Iteracija</h1>
      <p className="mb-6">
        Dokumentinis filmas apie pasiruošimą DIY muzikos festivaliui "Braille Satellite" , organizuojamam kolektyvo "Empty Brain
        Resort".
      </p>

      <VideoPlayer src={cdn("short-films/first-iteration/first-iteration.m3u8")} subtitles={subtitles} />

      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-4">Nuotraukos</h2>
        <PhotoGallery photos={photos} />
      </div>

      <div className="mt-6 flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <h2 className="text-xl font-semibold mb-2"> &mdash; Sukūrė</h2>
          <ul className="mb-6">
            <li>Donatas Šimeliūnas</li>
          </ul>
        </div>
        <div className="md:w-1/2">
          <h2 className="text-xl font-semibold mb-2"> &mdash; Informacija</h2>
          <ul>
            <li>
              <strong>Žanras:</strong> Trumpametražis, Dokumentinis
            </li>
            <li>
              <strong>Trukmė:</strong> 30'
            </li>
            <li>
              <strong>Šalis:</strong> Lietuva
            </li>
            <li>
              <strong>Kalba:</strong> Lietuvių, Anglų
            </li>
            <li>
              <strong>Gamybos metai:</strong> 2022
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
