import VideoPlayer from "@/components/VideoPlayer"
import PhotoGallery from "@/components/PhotoGallery"
import { cdn } from "@/app/utils"

const subtitles = []

const photos = [
  { src: cdn("short-films/linktolove/photos/still16.jpg"), alt: "Still 1" },
  { src: cdn("short-films/linktolove/photos/still3.jpg"), alt: "Still 2" },
  { src: cdn("short-films/linktolove/photos/still6.jpg"), alt: "Still 3" },
  { src: cdn("short-films/linktolove/photos/still8.jpg"), alt: "Still 4 " },
  { src: cdn("short-films/linktolove/photos/still9.jpg"), alt: "Still 5" },
  { src: cdn("short-films/linktolove/photos/still11.jpg"), alt: "Still 6" },
]

export default function LinkToLove() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 mt-4">LinkToLove</h1>
      <p className="mb-6">
        À une époque où chacun a sa propre réplique virtuelle, le clone d'Aurora, Evore, devient fasciné par une autre entité virtuelle - et insiste pour qu'Aurora rencontre le homme derrière le clone.
      </p>

      <VideoPlayer src={cdn("short-films/linktolove/linktolove.m3u8")} subtitles={subtitles} />

      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-4">Photos</h2>
        <PhotoGallery photos={photos} />
      </div>

      <div className="mt-6 flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <h2 className="text-xl font-semibold mb-2"> &mdash; Fait par</h2>
          <ul className="mb-6">
            <li>Donatas Šimeliūnas</li>
            <li>Anaïs Jamain</li>
          </ul>
        </div>
        <div className="md:w-1/2">
          <h2 className="text-xl font-semibold mb-2"> &mdash; Information</h2>
          <ul>
            <li>
              <strong>Genre:</strong> Court, Fiction
            </li>
            <li>
              <strong>Durée:</strong> 8'
            </li>
            <li>
              <strong>Pays:</strong> France
            </li>
            <li>
              <strong>Langue:</strong> Anglais
            </li>
            <li>
              <strong>Année:</strong> Printemps 2024
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
