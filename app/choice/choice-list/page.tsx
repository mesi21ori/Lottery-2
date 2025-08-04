"use client" // Added use client

import { ScrollingAnnouncementBar } from "@/components/dashboard/scrolling-announcement-bar"
import { GameInfoSection } from "@/components/dashboard/game-info-section"
import { NavigationMenu } from "@/components/dashboard/navigation-menu"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { cn } from "@/lib/utils"
import { GenericTablePageContent } from "@/components/dashboard/generic-table-page-content"
import { renderListRowCells } from "@/components/dashboard/table-row-renderers"
import { useState } from "react" // Import useState

export default function ChoiceListPage() {
  // This will cause an error in client component, needs to be passed as prop or fetched client-side
  // const username = cookies().get("username")?.value || "Guest"
  const username = "Guest" // Placeholder for client-side component

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false) // Manage mobile menu state
  const [selectedGame, setSelectedGame] = useState("Booking - Choice") // Default game for GameInfoSection

  const tableHeaders = [
    { label: "Sr. No.", sortable: true },
    { label: "Date", sortable: true },
    { label: "Session", sortable: true },
    { label: "Item", sortable: true },
    { label: "From", sortable: true },
    { label: "To", sortable: true },
    { label: "Ticket Name", sortable: true },
    { label: "Qty.", sortable: true },
    { label: "Amt.", sortable: true },
  ]

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
     <header className="bg-gradient-to-r from-red-800 to-red-900 text-white py-3 px-4 sm:px-6 flex items-center justify-between shadow-md">
        <div className="flex items-center gap-4">
          <span className={cn("text-lg font-semibold", isMobileMenuOpen && "hidden sm:block")}>
            Three Circle 7 - Welcome: {username}
          </span>
        </div>
        <NavigationMenu isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />
      </header>

      {/* Scrolling Announcement Bar */}
      <ScrollingAnnouncementBar text="🎯 Welcome to Three Circle 7 Lottery • Latest Results Available • Play Responsibly • Good Luck! • 🎯 Welcome to Three Circle 7 Lottery • Latest Results Available • Play Responsibly • Good Luck! •" />

   <main className="flex-1 p-3 sm:p-4">
        <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg p-4">
          {/* Date and Game Info */}
          <GameInfoSection selectedGame={selectedGame} onGameChange={setSelectedGame} />
          
          <GenericTablePageContent
            title="Choice List"
            tableHeaders={tableHeaders}
            showGroupFilter={false}
            defaultStartDate={new Date("2025-04-08T00:00:00")}
            defaultEndDate={new Date("2025-04-08T00:00:00")}
            renderRowCells={renderListRowCells}
            data={[]} // No data for now
          />
        </div>
      </main>
    </div>
  )
}
