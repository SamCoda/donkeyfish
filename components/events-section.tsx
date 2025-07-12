"use client"

import { useState, useEffect } from "react"
import { EventCard } from "./event-card"
import { Calendar, Filter, ChevronLeft, ChevronRight } from "lucide-react"

// Event types for filtering
const eventTypes = ["All", "AMA", "Launch", "Airdrop", "Community"] as const
type EventType = (typeof eventTypes)[number]

// Sample events data
const events = [
  {
    id: 1,
    title: "Butanol Token Launch Party",
    date: "June 15, 2025",
    time: "18:00 UTC",
    location: "Discord + Twitter Spaces",
    type: "Launch" as const,
    description:
      "Join us for the official launch of $BUTA token! We'll be celebrating with giveaways, special guests, and exclusive announcements about the future of Butanol. The first 100 attendees will receive a special NFT commemorating the launch.",
    link: "#",
    attendees: 1240,
  },
  {
    id: 2,
    title: "AMA with Butanol Developers",
    date: "June 20, 2025",
    time: "15:00 UTC",
    location: "Telegram",
    type: "AMA" as const,
    description:
      "Get your questions answered by the Butanol development team! We'll be discussing tokenomics, roadmap, and future plans for the Butanol ecosystem. Submit your questions in advance for a chance to win $BUTA tokens.",
    link: "#",
    attendees: 567,
  },
  {
    id: 3,
    title: "Toxic Frog NFT Airdrop",
    date: "July 1, 2025",
    time: "12:00 UTC",
    location: "Solana Blockchain",
    type: "Airdrop" as const,
    description:
      "Holders of at least 10,000 $BUTA tokens will be eligible for our exclusive Toxic Frog NFT airdrop. These NFTs will provide special benefits within the Butanol ecosystem, including governance rights and access to exclusive events.",
    link: "#",
    attendees: 3200,
  },
  {
    id: 4,
    title: "Buta Gang Community Meetup",
    date: "July 15, 2025",
    time: "19:00 UTC",
    location: "Virtual Reality - Decentraland",
    type: "Community" as const,
    description:
      "Meet fellow Butans in our first virtual reality meetup! Explore our custom-built Butanol headquarters in Decentraland, participate in games, and win prizes. Special appearances by crypto influencers and surprise announcements!",
    link: "#",
    attendees: 890,
  },
  {
    id: 5,
    title: "Butanol Trading Competition",
    date: "August 1, 2025",
    time: "00:00 UTC",
    location: "Multiple DEXs",
    type: "Community" as const,
    description:
      "Trade $BUTA on participating DEXs during the competition period for a chance to win from our prize pool of 1,000,000 $BUTA tokens! The top 100 traders by volume will receive rewards, with the #1 trader winning 100,000 $BUTA.",
    link: "#",
    attendees: 1500,
  },
]

export function EventsSection() {
  const [selectedType, setSelectedType] = useState<EventType>("All")
  const [visibleEvents, setVisibleEvents] = useState(events)
  const [currentPage, setCurrentPage] = useState(1)
  const eventsPerPage = 3

  // Filter events based on selected type
  useEffect(() => {
    if (selectedType === "All") {
      setVisibleEvents(events)
    } else {
      setVisibleEvents(events.filter((event) => event.type === selectedType))
    }
    setCurrentPage(1)
  }, [selectedType])

  // Calculate pagination
  const totalPages = Math.ceil(visibleEvents.length / eventsPerPage)
  const startIndex = (currentPage - 1) * eventsPerPage
  const endIndex = startIndex + eventsPerPage
  const currentEvents = visibleEvents.slice(startIndex, endIndex)

  // Handle pagination
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  return (
    <div className="py-16 relative overflow-hidden bg-dots">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <div className="inline-block glass px-4 py-1 rounded-full text-sm font-bold mb-2 animate-pulse-glow">
            <Calendar className="w-4 h-4 inline-block mr-2 text-neon-green" />
            UPCOMING EVENTS
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold neon-text mb-4">Join the Buta Gang Events</h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Stay connected with the Butanol community through our exciting events, AMAs, airdrops, and more!
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <div className="glass p-1 rounded-full flex items-center">
            <Filter className="w-4 h-4 text-neon-green mx-2" />
            {eventTypes.map((type) => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  selectedType === type ? "bg-neon-green text-black" : "text-white hover:bg-black/30"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Events grid */}
        <div className="grid gap-6 mb-8">
          {currentEvents.map((event) => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4">
            <button
              onClick={prevPage}
              disabled={currentPage === 1}
              className={`p-2 rounded-full ${
                currentPage === 1 ? "bg-gray-700 cursor-not-allowed" : "bg-neon-green text-black"
              }`}
            >
              <ChevronLeft size={20} />
            </button>
            <span className="text-white">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={nextPage}
              disabled={currentPage === totalPages}
              className={`p-2 rounded-full ${
                currentPage === totalPages ? "bg-gray-700 cursor-not-allowed" : "bg-neon-green text-black"
              }`}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        )}

        {/* CTA */}
        <div className="mt-12 text-center">
          <div className="glass p-6 rounded-xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold neon-text mb-4">Host Your Own Butanol Event</h3>
            <p className="text-white/80 mb-6">
              Are you a community member with a great idea for a Butanol event? Submit your proposal and we might
              sponsor it with $BUTA tokens!
            </p>
            <button className="toxic-button">Submit Event Proposal</button>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-1/4 right-1/5 animate-float">
        <div className="bg-toxic-pink/30 w-16 h-16 rounded-full flex items-center justify-center">
          <Calendar className="w-8 h-8 text-toxic-pink" />
        </div>
      </div>
      <div className="absolute bottom-1/3 left-1/5 animate-float" style={{ animationDelay: "1s" }}>
        <div className="bg-neon-green/30 w-12 h-12 rounded-full flex items-center justify-center">
          <Calendar className="w-6 h-6 text-neon-green" />
        </div>
      </div>
    </div>
  )
}
