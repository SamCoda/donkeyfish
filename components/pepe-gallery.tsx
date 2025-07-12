import Image from "next/image"

const galleryImages = [
  "/placeholder.svg?height=300&width=300",
  "/placeholder.svg?height=300&width=300",
  "/placeholder.svg?height=300&width=300",
  "/placeholder.svg?height=300&width=300",
  "/placeholder.svg?height=300&width=300",
  "/placeholder.svg?height=300&width=300",
]

export function PepeGallery() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {galleryImages.map((src, index) => (
        <div
          key={index}
          className="relative aspect-square rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <Image
            src={src || "/placeholder.svg"}
            alt={`Pepe Gallery Image ${index + 1}`}
            layout="fill"
            objectFit="cover"
            className="rounded-xl hover:scale-110 transition-transform duration-300"
          />
        </div>
      ))}
    </div>
  )
}
