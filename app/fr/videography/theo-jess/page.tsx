import VideoPlayer from "@/components/VideoPlayer"
import PhotoGallery from "@/components/PhotoGallery"
import { cdn } from "@/app/utils"

const subtitles = []

const photos = [
  { src: cdn("videography/theo-jess/photos/still1.jpg"), alt: "Still 1" },
  { src: cdn("videography/theo-jess/photos/still2.jpg"), alt: "Still 2" },
  { src: cdn("videography/theo-jess/photos/still3.jpg"), alt: "Still 3" },
  { src: cdn("videography/theo-jess/photos/still4.jpg"), alt: "Still 4 " },
  { src: cdn("videography/theo-jess/photos/still5.jpg"), alt: "Still 5" },
  { src: cdn("videography/theo-jess/photos/still6.jpg"), alt: "Still 6" },
]

export default function firstiteration() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 mt-4">Théo and Jessica wedding</h1>
      <p className="mb-6">
        Documentary-style video of my girlfriend's sister's wedding.
      </p>

      <VideoPlayer src={cdn("videography/theo-jess/theo-jess.m3u8")} subtitles={subtitles} />

      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-4">Stills</h2>
        <PhotoGallery photos={photos} />
      </div>

      <div className="mt-6 flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <h2 className="text-xl font-semibold mb-2"> &mdash; Made by</h2>
          <ul className="mb-6">
            <li>Donatas Šimeliūnas</li>
          </ul>
        </div>
        <div className="md:w-1/2">
          <h2 className="text-xl font-semibold mb-2"> &mdash; Information</h2>
          <ul>
            <li>
              <strong>When:</strong> 2024 September
            </li>
            <li>
              <strong>Where:</strong> France, near Bordeaux
            </li>
            <li>
              <strong>Who:</strong> Family and Friends
            </li>
            <li>
              <strong>Duration:</strong> 1h23'
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
