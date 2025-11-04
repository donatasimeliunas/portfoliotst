import VideoPlayer from "@/components/VideoPlayer"
import PhotoGallery from "@/components/PhotoGallery"
import { cdn } from "@/app/utils"

const subtitles = []

const photos = [
  { src: cdn("short-films/around-the-roundabout/photos/still1.jpg"), alt: "Still 1" },
  { src: cdn("short-films/around-the-roundabout/photos/still2.jpg"), alt: "Still 2" },
]

export default function LinkToLove() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 mt-4">Around the Roundabout </h1>
      <p className="mb-6">
        "It" is always around
      </p>

      <VideoPlayer src={cdn("short-films/around-the-roundabout/around-the-roundabout.m3u8")} subtitles={subtitles} />

      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-4">Stills</h2>
        <PhotoGallery photos={photos} />
      </div>

      <div className="mt-6 flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <h2 className="text-xl font-semibold mb-2"> &mdash; Team</h2>
          <ul className="mb-6">
            <li>Made by: Donatas Šimeliūnas</li>
            <li>Actor: Motiejus Ivanauskas</li>
            <li>PA: Ignas Kvaščiavičius</li>
            <li>PA: Lukas Kvaščiavičius</li>
          </ul>
        </div>
        <div className="md:w-1/2">
          <h2 className="text-xl font-semibold mb-2"> &mdash; Information</h2>
          <ul>
            <li>
              <strong>Genre:</strong> Short, Fiction
            </li>
            <li>
              <strong>Duration:</strong> 3'20''
            </li>
            <li>
              <strong>Country:</strong> Lithuania
            </li>
            <li>
              <strong>Language:</strong> -
            </li>
            <li>
              <strong>Year:</strong> Autumn of 2024
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
