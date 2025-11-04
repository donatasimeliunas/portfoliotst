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
      <h1 className="text-3xl font-bold mb-4 mt-4">First Iteration</h1>
      <p className="mb-6">
        Documentary about preparation for Braille Satellite DYI music festival organised by Empty Brain Resort.
      </p>

      <VideoPlayer src={cdn("short-films/first-iteration/first-iteration.m3u8")} subtitles={subtitles} />

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
              <strong>Genre:</strong> Short, Documentary
            </li>
            <li>
              <strong>Duration:</strong> 30'
            </li>
            <li>
              <strong>Country:</strong> Lithuania
            </li>
            <li>
              <strong>Language:</strong> Lithuanian, English
            </li>
            <li>
              <strong>Year:</strong> 2022
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
