"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import {
  Fish,
  Zap,
  TrendingUp,
  Users,
  Shield,
  Wallet,
  Twitter,
  MessageCircle,
  Rocket,
  Lock,
  Sparkles,
  Crown,
  Menu,
  X,
  Star,
  Heart,
} from "lucide-react"
import { DonkeyFishHero } from "../components/donkey-fish-hero"
import { DonkeyFishSlideshow } from "../components/donkey-fish-slideshow"
import { DonkeyFishGallery } from "../components/donkey-fish-gallery"
import { RotatingDonkeyToken } from "../components/rotating-donkey-token"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(0)
  const [tokenPrice, setTokenPrice] = useState(0.000042)
  const [holders, setHolders] = useState(6969)

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY)
    }

    const priceInterval = setInterval(() => {
      setTokenPrice((prev) => {
        const change = (Math.random() - 0.4) * 0.000001
        return Math.max(0.000001, prev + change)
      })
    }, 3000)

    const holdersInterval = setInterval(() => {
      setHolders((prev) => prev + Math.floor(Math.random() * 3) + 1)
    }, 5000)

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      clearInterval(priceInterval)
      clearInterval(holdersInterval)
    }
  }, [])

  return (
    <div className="flex flex-col min-h-screen text-white">
      {/* Ticker Tape (optional, enable when ready) */}
      {/*
      <div className="bg-black py-2 overflow-hidden border-b-4 border-meme-yellow comic-border z-10">
        <div className="marquee">
          <div className="marquee-content">
            <span className="inline-flex items-center gap-6 px-4 text-lg font-bold">
              <span className="flex items-center gap-2">
                <span className="meme-text">$DONK:</span>
                <span className="text-white">${tokenPrice.toFixed(8)}</span>
                <span className={tokenPrice > 0.000042 ? "text-fish-green" : "text-meme-pink"}>
                  {tokenPrice > 0.000042 ? "🚀" : "🐴"}
                </span>
              </span>
              <span className="text-meme-orange">|</span>
              <span className="flex items-center gap-2">
                <Fish className="w-5 h-5 text-ocean-blue" />
                <span>SWIMMING TO THE MOON!</span>
              </span>
              <span className="text-meme-orange">|</span>
              <span className="flex items-center gap-2">
                <Users className="w-5 h-5 text-fish-green" />
                <span>HOLDERS: {holders.toLocaleString()}</span>
              </span>
              <span className="text-meme-orange">|</span>
              <span className="flex items-center gap-2">
                <Crown className="w-5 h-5 text-meme-yellow" />
                <span>DON'T BE A JACKASS!</span>
              </span>
              <span className="text-meme-orange">|</span>
              <span className="meme-text">DONKEY FISH - THE MOST RIDICULOUS MEME COIN EVER!</span>
            </span>
          </div>
        </div>
      </div>
      */}

      {/* Navigation */}
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 bg-black/50`}
      >
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-meme-yellow rounded-full p-2 animate-meme-pulse comic-border">
              <Fish className="w-6 h-6 text-black" />
            </div>
            <span className="font-extrabold text-xl hidden sm:inline-block meme-text">DONKEY FISH</span>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm font-bold">
            {["Home", "About", "Tokenomics", "Community", "Roadmap"].map((item) => (
              <Link key={item} href="#" className="hover:text-meme-yellow transition-colors text-white">
                {item}
              </Link>
            ))}
          </nav>

          <div className="md:hidden">
            <button
              className="text-meme-yellow focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          <Link href="#" className="hidden md:inline-block donkey-button">
            Buy $DONK
          </Link>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden underwater-glass animate-bubble-float">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {["Home", "About", "Tokenomics", "Community", "Roadmap"].map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="block px-3 py-2 rounded-md text-base font-medium hover:bg-meme-yellow/20 transition-colors text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </Link>
              ))}
              <Link
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium bg-meme-yellow text-black mt-4 text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Buy $DONK
              </Link>
            </div>
          </div>
        )}
      </header>


      {/* Hero Section */}
      <section className="py-16 md:py-24 relative overflow-hidden bg-bubbles">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 z-10">
            <div className="inline-block underwater-glass px-6 py-2 rounded-full text-sm font-bold mb-4 animate-meme-pulse comic-border text-gray-900">
              🐴🐟 THE MOST RIDICULOUS MEME COIN EVER! 💰
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight">
              <span className="meme-text animate-meme-pulse">DONKEY</span>
              <br />
              <span className="fish-text animate-fish-wiggle">FISH</span>
              <br />
              <span className="ocean-text">$DONK</span>
            </h1>

            <div className="bg-black/80 p-4 rounded-xl comic-border">
              <h2 className="text-2xl md:text-3xl font-black meme-text mb-2">DON'T BE A JACKASS,</h2>
              <h2 className="text-2xl md:text-3xl font-black fish-text">BUY & HODL! 🚀</h2>
            </div>

            <p className="text-white/90 max-w-md text-lg font-bold">
              Half donkey, half fish, 100% GAINS! The most stubborn swimmer in the crypto ocean is here to make you
              rich! Don't be a jackass - join the school! 🐴🐟
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md">
              <div className="underwater-glass p-4 rounded-xl flex items-start gap-3 comic-border animate-swim">
                <div className="bg-meme-yellow p-2 rounded-full shadow-lg">
                  <Zap className="w-5 h-5 text-black" />
                </div>
                <div className="text-sm font-bold text-gray-900">
                  Stubborn like a donkey, slippery like a fish - impossible to catch, impossible to stop! 🐴⚡
                </div>
              </div>

              <div className="underwater-glass p-4 rounded-xl flex items-start gap-3 comic-border animate-fish-wiggle">
                <div className="bg-fish-green p-2 rounded-full shadow-lg">
                  <Rocket className="w-5 h-5 text-gray-900" />
                </div>
                <div className="text-sm font-bold text-gray-900">
                  Swimming on Solana for lightning-fast transactions and minimal fees! 🌊⚡
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="#" className="donkey-button flex items-center gap-2">
                <Fish className="w-5 h-5" />
                <span>Join The School</span>
              </Link>
              <Link href="#" className="fish-button flex items-center gap-2">
                <Crown className="w-5 h-5" />
                <span>Buy $DONK</span>
              </Link>
            </div>

            {/* Token Stats */}
            <div className="underwater-glass p-4 rounded-xl shadow-lg mt-8 grid grid-cols-3 gap-4 comic-border">
              <div className="text-center">
                <div className="meme-text font-bold text-xl">1B</div>
                <div className="text-xs text-gray-900 font-bold">Total Supply</div>
              </div>
              <div className="text-center">
                <div className="fish-text font-bold text-xl">Solana</div>
                <div className="text-xs text-gray-900 font-bold">Blockchain</div>
              </div>
              <div className="text-center">
                <div className="ocean-text font-bold text-xl">Meme</div>
                <div className="text-xs text-gray-900 font-bold">Power</div>
              </div>
            </div>
          </div>

          <div className="relative z-10 flex justify-center mt-8 md:mt-0">
            <DonkeyFishHero />
          </div>
        </div>

        {/* Floating Meme Elements */}
        <div className="absolute top-1/4 right-1/4 animate-donkey-hop">
          <div className="bg-meme-pink/40 w-20 h-20 rounded-full flex items-center justify-center comic-border">
            <Heart className="w-10 h-10 text-meme-pink animate-meme-pulse" />
          </div>
        </div>
        <div className="absolute bottom-1/4 left-1/4 animate-bubble-float">
          <div className="bg-meme-orange/40 w-16 h-16 rounded-full flex items-center justify-center comic-border">
            <Star className="w-8 h-8 text-meme-orange animate-fish-wiggle" />
          </div>
        </div>
      </section>

      {/* Rotating Token Section */}
      <section className="py-16 relative overflow-hidden bg-waves">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="md:w-1/3">
              <RotatingDonkeyToken />
            </div>
            <div className="md:w-2/3 space-y-6">
              <h2 className="text-4xl md:text-5xl font-extrabold">
                <span className="meme-text">The Most</span>
                <br />
                <span className="fish-text">RIDICULOUS</span>
                <br />
                <span className="ocean-text">Token Ever! 🤪</span>
              </h2>
              <p className="text-white/90 text-lg font-bold">
                $DONK isn't just another meme coin - it's a LEGENDARY hybrid that shouldn't exist but does! Part
                stubborn donkey, part slippery fish, 100% designed to make you rich while laughing your ass off! 🐴🐟💰
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="underwater-glass p-4 rounded-xl flex flex-col items-center text-center comic-border">
                  <Zap className="w-10 h-10 text-meme-orange mb-2 animate-meme-pulse" />
                  <h3 className="text-lg font-bold meme-text">Meme Power</h3>
                  <p className="text-sm font-bold text-gray-900">
                    Powered by pure meme energy and jackass stubbornness!
                  </p>
                </div>
                <div className="underwater-glass p-4 rounded-xl flex flex-col items-center text-center comic-border">
                  <Lock className="w-10 h-10 text-[rgba(34,197,94,0.8)] mb-2 animate-fish-wiggle" />
                  <h3 className="text-lg font-bold fish-text">Liquidity Locked</h3>
                  <p className="text-gray-900 text-sm font-bold">Locked tighter than a donkey's grip on its carrots!</p>
                </div>
                <div className="underwater-glass p-4 rounded-xl flex flex-col items-center text-center comic-border">
                  <Shield className="w-10 h-10 text-meme-yellow mb-2 animate-donkey-hop" />
                  <h3 className="text-lg font-bold meme-text">Community Owned</h3>
                  <p className="text-gray-900 text-sm font-bold">By the jackasses, for the jackasses!</p>
                </div>
              </div>
              <div className="flex justify-center md:justify-start">
                <Link href="#" className="donkey-button flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  <span>View Chart</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 relative overflow-hidden bg-bubbles">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
              <span className="meme-text">About</span> <span className="fish-text">DONKEY FISH</span>
            </h2>
            <p className="text-white/90 max-w-2xl mx-auto text-lg font-bold">
              The legendary tale of the most ridiculous creature in crypto history! 🐴🐟
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="underwater-glass p-6 rounded-xl shadow-lg comic-border">
                <h3 className="text-2xl font-bold meme-text mb-4">What is a Donkey Fish? 🤔</h3>
                <p className="text-gray-900 mb-4 font-bold">
                  Legend says that deep in the crypto ocean, a stubborn donkey fell in love with a beautiful fish. Their
                  offspring became the most ridiculous yet profitable creature ever seen! 🐴❤️🐟
                </p>
                <p className="text-gray-900 font-bold">
                  Part land animal, part sea creature, 100% MEME POWER! The Donkey Fish refuses to follow market trends
                  and just keeps swimming upstream to the moon! 🚀
                </p>
              </div>

              <div className="mt-6 underwater-glass p-6 rounded-xl shadow-lg comic-border">
                <h3 className="text-2xl font-bold fish-text mb-4">The Donkey Fish Gang 🐴🐟</h3>
                <p className="text-gray-900 mb-4 font-bold">
                  Our community is full of stubborn jackasses who refuse to sell and slippery fish who know how to swim
                  through market crashes! Together, we're unstoppable! 💪
                </p>
                <p className="text-gray-900 font-bold">
                  Don't be a jackass - join the school and HODL your way to fishy riches! 🤑
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="underwater-glass p-6 rounded-xl shadow-lg comic-border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-meme-pink p-3 rounded-full comic-border">
                    <Rocket className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold meme-text">Our Mission 🎯</h3>
                </div>
                <p className="text-gray-900 font-bold">
                  To create the most ridiculous, profitable, and entertaining meme coin in crypto history! We're here to
                  make you rich while having the time of your life! 🎉💰
                </p>
              </div>

              <div className="underwater-glass p-6 rounded-xl shadow-lg comic-border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-[rgba(14,165,233)] p-3 rounded-full comic-border">
                    <Crown className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold ocean-text">Our Vision 👑</h3>
                </div>
                <p className="text-gray-900 font-bold">
                  To become the king of all meme coins by being the most stubborn, slippery, and profitable hybrid
                  creature in the entire crypto ocean! 🌊👑
                </p>
              </div>

              <div className="underwater-glass p-6 rounded-xl shadow-lg comic-border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-[rgba(34,197,94,1)] p-3 rounded-full comic-border">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold fish-text">Why DONKEY FISH? 🤷‍♂️</h3>
                </div>
                <ul className="text-gray-900 space-y-2 font-bold">
                  <li className="flex items-start gap-2">
                    <span className="min-w-[20px] mt-1">🐴</span>
                    <span>Stubborn like a donkey - we never give up!</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="min-w-[20px] mt-1">🐟</span>
                    <span>Slippery like a fish - impossible to catch!</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="min-w-[20px] mt-1">💰</span>
                    <span>Profitable like nothing you've ever seen!</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Slideshow Section */}
      <section className="py-16 relative overflow-hidden bg-waves">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-8">
            <span className="meme-text">Meet The</span> <span className="fish-text">Donkey Fish Gang!</span>
          </h2>
          <p className="text-center text-white/90 max-w-2xl mx-auto mb-12 text-lg font-bold">
            Our ridiculous family of hybrid creatures is here to take you to the moon! 🚀
          </p>
          <div className="max-w-2xl mx-auto">
            <DonkeyFishSlideshow />
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      {/* <section className="py-16 relative overflow-hidden bg-bubbles">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-8">
            <span className="meme-text">Donkey Fish</span> <span className="ocean-text">Gallery</span>
          </h2>
          <p className="text-center text-white/90 max-w-2xl mx-auto mb-12 text-lg font-bold">
            Check out our collection of the most ridiculous creatures in crypto! 🎨
          </p>
          <DonkeyFishGallery />
        </div>
      </section> */}

      {/* How To Buy Section */}
      <section className="py-16 relative bg-waves">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-6">
            <span className="meme-text">How To Buy</span> <span className="fish-text">$DONK</span>
          </h2>
          <p className="text-center text-white/90 max-w-2xl mx-auto mb-12 text-lg font-bold">
            Don't be a jackass! Follow these simple steps to join the school! 🐴🐟
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="underwater-glass p-6 text-white relative shadow-xl transform hover:scale-105 transition-transform comic-border">
              <div className="absolute -top-6 -left-6 bg-meme-yellow rounded-full w-16 h-16 flex items-center justify-center text-3xl font-extrabold border-4 border-black shadow-lg animate-meme-pulse comic-border text-black">
                01
              </div>
              <h3 className="text-2xl font-bold mb-4 mt-4 meme-text">Get A Wallet 👛</h3>
              <p className="text-gray-900 font-bold">
                Download Phantom, Solflare or any Solana wallet. Don't be a jackass - make sure it's legit! 🔒
              </p>
              <div className="mt-4 flex justify-center">
                <Wallet className="w-12 h-12 text-meme-yellow animate-meme-pulse" />
              </div>
            </div>

            <div className="underwater-glass p-6 text-white relative shadow-xl transform hover:scale-105 transition-transform comic-border">
              <div className="absolute -top-6 -left-6 bg-fish-green rounded-full w-16 h-16 flex items-center justify-center text-3xl font-extrabold border-4 border-black shadow-lg animate-fish-wiggle comic-border text-black">
                02
              </div>
              <h3 className="text-2xl font-bold mb-4 mt-4 fish-text">Swap For $DONK 🔄</h3>
              <p className="text-gray-900 font-bold">
                Use Jupiter, Raydium, or Orca to swap your SOL for $DONK. Easy as feeding a fish! 🐟
              </p>
              <div className="mt-4 flex justify-center">
                <TrendingUp className="w-12 h-12 text-fish-green animate-fish-wiggle" />
              </div>
            </div>

            <div className="underwater-glass p-6 text-white relative shadow-xl transform hover:scale-105 transition-transform comic-border">
              <div className="absolute -top-6 -left-6 bg-ocean-blue rounded-full w-16 h-16 flex items-center justify-center text-3xl font-extrabold border-4 border-black shadow-lg animate-donkey-hop comic-border text-black">
                03
              </div>
              <h3 className="text-2xl font-bold mb-4 mt-4 ocean-text">HODL & Enjoy! 🚀</h3>
              <p className="text-gray-900  font-bold">
                Hold your $DONK like a stubborn donkey and watch it swim to the moon! 🌙
              </p>
              <div className="mt-4 flex justify-center">
                <Crown className="w-12 h-12 text-ocean-blue animate-donkey-hop" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-16 relative overflow-hidden bg-bubbles">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
              <span className="meme-text">Join The</span> <span className="fish-text">School!</span>
            </h2>
            <p className="text-white/90 max-w-2xl mx-auto text-lg font-bold">
              Don't swim alone! Join thousands of jackasses and fish in the most ridiculous community ever! 🐴🐟
            </p>
          </div>

<div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
  <Link
    href="#"
    className="bg-blue-500 text-white p-6 rounded-xl hover:bg-blue-600 transition-all shadow-lg flex flex-col items-center justify-center gap-3 transform hover:scale-105 comic-border"
  >
    <MessageCircle className="w-10 h-10 text-blue-600" />
    <span className="font-bold text-lg text-black">Telegram</span>
    <span className="text-sm text-gray-900">Join the pond!</span>
  </Link>

  <Link
    href="#"
    className="bg-black text-white p-6 rounded-xl hover:bg-gray-800 transition-all shadow-lg flex flex-col items-center justify-center gap-3 transform hover:scale-105 border-4 border-meme-yellow comic-border"
  >
    <Twitter className="w-10 h-10 text-meme-yellow" />
    <span className="font-bold text-lg text-black">Twitter</span>
    <span className="text-sm text-gray-900">Follow updates!</span>
  </Link>

  <Link
    href="#"
    className="bg-gradient-to-r from-meme-pink to-meme-orange text-black p-6 rounded-xl hover:opacity-90 transition-all shadow-lg flex flex-col items-center justify-center gap-3 transform hover:scale-105 comic-border"
  >
    <Users className="w-10 h-10" />
    <span className="font-bold text-lg">Discord</span>
    <span className="text-sm">Gang HQ!</span>
  </Link>
</div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center relative overflow-hidden bg-black">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <div className="inline-block underwater-glass px-6 py-3 rounded-full text-xl font-bold mb-4 animate-meme-pulse comic-border">
              <span className="meme-text">$DONK TO THE MOON!</span> 🚀🐴🐟
            </div>
          </div>

          <div className="text-sm text-white/70 mt-12 font-bold">
            © 2025 Donkey Fish. All rights reserved. Don't be a jackass - this is not financial advice!
          </div>

          <div className="mt-4 text-xs text-white/70 font-bold">
            $DONK is a meme coin with no intrinsic value. Only invest what you can afford to lose, you beautiful
            jackass! 🐴❤️
          </div>
        </div>
      </footer>
    </div>
  )
}
