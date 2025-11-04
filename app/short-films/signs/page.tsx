import VideoPlayer from "@/components/VideoPlayer"
import PhotoGallery from "@/components/PhotoGallery"
import { cdn } from "@/app/utils"

const subtitles = [
  {
    src: cdn("short-films/signs/sings-en.vtt"),
    srcLang: "en",
    label: "English",
    default: true
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
      <h1 className="text-3xl font-bold mb-4">Ženklai</h1>

      <p className="mb-6">
        Saulė susapnuoja keistą sapną - taip prasideda diena, kai ji ir jos vaikinas Gvidas bando
        išsiaiškinti sapno prasmę ir kartu permąsto savo santykių ateitį.
      </p>

      <VideoPlayer src={cdn("short-films/signs/signs.m3u8")} subtitles={subtitles} />

      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-4">Nuotraukos</h2>
        <PhotoGallery photos={photos} />
      </div>

      <div className="mt-6 flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <h2 className="text-xl font-semibold mb-2"> &mdash; Komanda</h2>
          <ul className="mb-6">
            <li>Režisierius ir scenarijaus autorius: Donatas Šimeliūnas</li>
            <li>Operatorius: Gvidas Bindokas</li>
            <li>Dailės departamentas: Anaïs Jamain </li>
            <li>Montažas: Motiejus Mainelis </li>
            <li className="text-lg font-semibold">Aktoriai</li>
            <li>Gvidas: Motiejus Ivanauskas</li>
            <li>Saulė: Radvilė Bronušaitė</li>
          </ul>
        </div>
        <div className="md:w-1/2">
          <h2 className="text-xl font-semibold mb-2"> &mdash; Informacija</h2>
          <ul>
            <li>
              <strong>Žanras:</strong> Trumpo metro, Vaidybinis
            </li>
            <li>
              <strong>Trukmė:</strong> 15'
            </li>
            <li>
              <strong>Šalis:</strong> Lietuva
            </li>
            <li>
              <strong>Kalba:</strong> Lietuvių
            </li>
            <li>
              <strong>Gamybos metai:</strong> 2023
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
