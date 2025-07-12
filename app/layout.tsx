import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Comic_Neue } from "next/font/google"

const comicNeue = Comic_Neue({
  subsets: ["latin"],
  weight: ["300", "400", "700"], // ✅ fixed
})

export const metadata: Metadata = {
  title: "Donkey Fish | $DONK | Don't Be A Jackass, Buy & HODL!",
  description:
    "The most ridiculous meme coin on Solana! Part donkey, part fish, 100% gains! Don't be a jackass - join the school!",
  generator: "sam dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${comicNeue.className} ocean-bg`}>{children}</body>
    </html>
  )
}