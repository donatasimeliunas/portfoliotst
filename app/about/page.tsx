import Image from "next/image"
import Link from "next/link"
import { cdn } from "@/app/utils"

export default function About() {
  return (
    <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8">
      <div className="md:w-2/3">
        <h1 className="text-3xl font-bold mb-6">About Me</h1>
        <p className="mb-4">
          My name is Donatas Šimeliūnas. After earning my degree in physics, I began a master's program in Theoretical
          Mathematics. However, after a year, I decided to make a sharp turn and pursue a career in the film industry.
          My dream is to direct films, and so far, I've completed four short projects, which you can find on this
          website. Throughout these projects, I've gained hands-on experience in nearly every stage of production and
          post-production. Among them, I feel most confident in cinematography and editing. These, along with assistant
          directing, are the roles where I believe I can contribute most to your project — though I'm always open to any
          opportunity.
        </p>
        <p className="mb-4">
          You can download more detailed CV{" "}
          <Link
            href="https://cinedonatas-storage.s3.eu-north-1.amazonaws.com/about/CV_SIMELIUNAS_fr.pdf"
            className="text-blue-600 hover:underline"
          >
            here
          </Link>
          .
        </p>
        <p className="mb-4">Currently I am based in south of France, Les Landes region.</p>
        <p className="mb-4">d.simeliunas@gmail.com</p>
        <p className="mb-4">+33745006694</p>
      </div>
      <div className="md:w-1/3">
        <Image
          src={cdn("about/ThePhoto.jpg") || "/placeholder.svg"}
          alt="Donatas Šimeliūnas"
          width={300}
          height={300}
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
  )
}
