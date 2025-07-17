import Image from "next/image"

const galleryItems = [
  {
    src: "/images/donkey-fish-logo.png",
    alt: "Original Donkey Fish",
  },
  {
    src: "/images/gallery2.png?height=300&width=300",
    alt: "Rich Donkey Fish",
  },
  {
    src: "/images/gallery3.png?height=300&width=300",
    alt: "Super Donkey Fish",
  },
  {
    src: "/images/gallery4.png?height=300&width=300",
    alt: "Swimming Champion",
  },
  {
    src: "/images/gallery5.png?height=300&width=300",
    alt: "Wave Rider",
  },
  {
    src: "/images/gallery6.png?height=300&width=300",
    alt: "Dollar Donkey",
  },
  {
    src: "/images/gallery7.png?height=300&width=300",
    alt: "Dollar Donkey",
  },
  {
    src: "/images/gallery8.png?height=300&width=300",
    alt: "Dollar Donkey",
  },
]

export function DonkeyFishGallery() {
  return (
    <section className="py-16 px-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {galleryItems.map((item, index) => (
          <div
            key={index}
            className="relative aspect-square overflow-hidden rounded-xl shadow-md comic-border transform transition-transform duration-300 hover:scale-105"
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  )
}