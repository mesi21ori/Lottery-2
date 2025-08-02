"use client"

import { useState } from "react"
import { NavigationMenu } from "./navigation-menu"
import { GameInfoSection } from "./game-info-section"
import { BookingTable } from "./booking-table"
import { ActionButtons } from "./action-buttons"
import { cn } from "@/lib/utils" // Import cn for conditional classes
import { ScrollingAnnouncementBar } from "./scrolling-announcement-bar" // Import ScrollingAnnouncementBar

interface LotteryDashboardProps {
  username: string
}

export function LotteryDashboard({ username }: LotteryDashboardProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Top Bar */}
      <header className="bg-gradient-to-r from-purple-800 to-purple-900 text-white py-3 px-4 sm:px-6 flex items-center justify-between shadow-md">
        <div className="flex items-center gap-4">
          {/* Hide "Welcome" text on small screens when mobile menu is open */}
          <span className={cn("text-lg font-semibold", isMobileMenuOpen && "hidden sm:block")}>
            Welcome: {username}
          </span>
        </div>

        <NavigationMenu isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />
      </header>

      {/* New section below navigation with continuous marquee scroll */}
      <ScrollingAnnouncementBar />

      {/* Main Content Area */}
      <main className="flex-1 p-3 sm:p-4">
        <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg p-4">
          {/* Date and Game Info */}
          <GameInfoSection />

          {/* Booking Table */}
          <BookingTable />

          {/* Bottom Buttons */}
          <ActionButtons />
        </div>
      </main>
    </div>
  )
}
