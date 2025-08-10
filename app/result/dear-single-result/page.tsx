'use client'

import { useState } from "react"
import { ScrollingAnnouncementBar } from "@/components/dashboard/scrolling-announcement-bar"
import { GameInfoSection } from "@/components/dashboard/game-info-section"
import { NavigationMenu } from "@/components/dashboard/navigation-menu"
import { cn } from "@/lib/utils"
import { GenericTablePageContent } from "@/components/dashboard/generic-table-page-content"
import { renderDearSingleResultRowCells } from "@/components/dashboard/table-row-renderers"

export default function Page() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [selectedGame, setSelectedGame] = useState("Dear Single")

  // ✅ Get username dynamically (e.g., from localStorage, session, etc.)
  // To avoid Next.js type conflicts during build
  const [username] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("username") || "defaultUser"
    }
    return "defaultUser"
  })

  const tableHeaders = [
    { label: "Sr. No.", sortable: true },
    { label: "Date", sortable: true },
    { label: "Session", sortable: true },
    { label: "Dear-1st", sortable: true },
    { label: "Dear-2nd", sortable: true },
    { label: "Dear-3rd", sortable: true },
    { label: "Dear-4th", sortable: true },
    { label: "Dear-5th Last", sortable: true },
  ]

  const sessionTimes = ["ALL", "MOR", "DAY", "EVE"]

  const dummyData = [
    { srNo: 1, date: "2025-07-04", session: "MOR", d1: 2, d2: 5, d3: 3, d4: 0, d5: 5 },
    { srNo: 2, date: "2025-07-04", session: "DAY", d1: 6, d2: 5, d3: 6, d4: 8, d5: 4 },
    { srNo: 3, date: "2025-07-04", session: "EVE", d1: 2, d2: 2, d3: 4, d4: 5, d5: 7 },
    { srNo: 4, date: "2025-07-05", session: "MOR", d1: 3, d2: 6, d3: 5, d4: 6, d5: 1 },
    { srNo: 5, date: "2025-07-05", session: "DAY", d1: 7, d2: 7, d3: 8, d4: 7, d5: 1 },
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

      <ScrollingAnnouncementBar text="🎯 Welcome to Three Circle 7 Lottery • Latest Results Available • Play Responsibly • Good Luck! • 🎯 Welcome to Three Circle 7 Lottery • Latest Results Available • Play Responsibly • Good Luck! •" />

      <main className="flex-1 p-3 sm:p-4">
        <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg p-4">
          <GameInfoSection selectedGame={selectedGame} onGameChange={setSelectedGame} />

          <GenericTablePageContent
            title="Dear Single Result"
            tableHeaders={tableHeaders}
            data={dummyData}
            sessionOptions={sessionTimes}
            defaultStartDate={new Date("2025-07-04T00:00:00")}
            defaultEndDate={new Date("2025-08-04T00:00:00")}
            renderRowCells={renderDearSingleResultRowCells}
          />
        </div>
      </main>
    </div>
  )
}
