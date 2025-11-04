import VideoPlayer from "@/components/VideoPlayer"
import PhotoGallery from "@/components/PhotoGallery"
import { cdn } from "@/app/utils"

const subtitles = []

const photos = [
  { src: cdn("videography/Theo_Jess/photos/still1.jpg"), alt: "Still 1" },
  { src: cdn("videography/Theo_Jess/photos/still2.jpg"), alt: "Still 2" },
  { src: cdn("videography/Theo_Jess/photos/still3.jpg"), alt: "Still 3" },
  { src: cdn("videography/Theo_Jess/photos/still4.jpg"), alt: "Still 4" },
  { src: cdn("videography/Theo_Jess/photos/still5.jpg"), alt: "Still 5" },
  { src: cdn("videography/Theo_Jess/photos/still6.jpg"), alt: "Still 6" },
]

export default function firstiteration() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 mt-4">Jess ir Théo</h1>
      <p className="mb-6">
        Mano merginos sesės vestuvės
      </p>

      <VideoPlayer src={cdn("videography/Theo_Jess/theo-jess.m3u8")} subtitles={subtitles} />

      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-4">Nuotraukos</h2>
        <PhotoGallery photos={photos} />
      </div>

      <div className="mt-6 flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <h2 className="text-xl font-semibold mb-2"> &mdash; Informacija</h2>
          <ul>
            <li>
              <strong>Kada:</strong> 2024 Rūgsėjis
            </li>
            <li>
              <strong>Kur:</strong> Prancūzija, netoli Bordeaux
            </li>
            <li>
              <strong>Kas:</strong> Šeima ir draugai
            </li>
            <li>
              <strong>Trukmė:</strong> 1h23'
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
