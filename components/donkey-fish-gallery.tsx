import Image from "next/image"
import { Fish, Coins, Zap, Crown, Waves, DollarSign } from "lucide-react"

const galleryItems = [
  {
    src: "/images/donkey-fish-logo.png",
    alt: "Original Donkey Fish",
    icon: <Crown className="w-6 h-6 text-meme-yellow" />,
    title: "The OG Donkey Fish",
    bgClass: "bg-ocean-blue",
  },
  {
    src: "/placeholder.svg?height=300&width=300",
    alt: "Rich Donkey Fish",
    icon: <Coins className="w-6 h-6 text-meme-yellow" />,
    title: "Money Fish",
    bgClass: "bg-fish-green",
  },
  {
    src: "/placeholder.svg?height=300&width=300",
    alt: "Super Donkey Fish",
    icon: <Zap className="w-6 h-6 text-meme-orange" />,
    title: "Super Donkey",
    bgClass: "bg-donkey-brown",
  },
  {
    src: "/placeholder.svg?height=300&width=300",
    alt: "Swimming Champion",
    icon: <Fish className="w-6 h-6 text-ocean-blue" />,
    title: "Swim Champion",
    bgClass: "bg-meme-pink",
  },
  {
    src: "/placeholder.svg?height=300&width=300",
    alt: "Wave Rider",
    icon: <Waves className="w-6 h-6 text-ocean-blue" />,
    title: "Wave Rider",
    bgClass: "bg-ocean-blue",
  },
  {
    src: "/placeholder.svg?height=300&width=300",
    alt: "Dollar Donkey",
    icon: <DollarSign className="w-6 h-6 text-meme-yellow" />,
    title: "Dollar Donkey",
    bgClass: "bg-meme-yellow",
  },
]

export function DonkeyFishGallery() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
      {galleryItems.map((item, index) => (
        <div
          key={index}
          className="flip-card relative aspect-square rounded-xl overflow-hidden shadow-lg bubble-glow group comic-border"
        >
          <div className="flip-card-inner w-full h-full">
            <div className="flip-card-front absolute w-full h-full">
              <div className={`absolute inset-0 ${item.bgClass} opacity-80`} />
              <Image
                src={item.src || "/placeholder.svg"}
                alt={item.alt}
                layout="fill"
                objectFit="cover"
                className="rounded-xl group-hover:scale-110 transition-transform duration-300 mix-blend-multiply opacity-70"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-4 left-0 right-0 text-center">
                <div className="bg-black/70 rounded-full p-2 w-12 h-12 mx-auto flex items-center justify-center mb-2 bubble-glow comic-border">
                  {item.icon}
                </div>
                <h3 className="text-white font-bold meme-text text-sm">{item.title}</h3>
              </div>
            </div>
            <div className="flip-card-back absolute w-full h-full underwater-glass">
              <div className="flex flex-col items-center justify-center h-full p-4 text-center">
                <div className="mb-4 animate-meme-pulse">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2 meme-text">{item.title}</h3>
                <p className="text-white/90 text-sm">
                  Don't be a jackass! This {item.title} is swimming to the moon! Join the herd and HODL your way to
                  fishy riches! 🐴🐟💰
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
