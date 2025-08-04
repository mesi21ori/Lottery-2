'use client'
import { ScrollingAnnouncementBar } from "@/components/dashboard/scrolling-announcement-bar"
import { GameInfoSection } from "@/components/dashboard/game-info-section"
import { NavigationMenu } from "@/components/dashboard/navigation-menu"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { cookies } from "next/headers"
import { cn } from "@/lib/utils"
import { GenericTablePageContent } from "@/components/dashboard/generic-table-page-content"
import { renderReportRowCells } from "@/components/dashboard/table-row-renderers"
import { useState } from "react"

interface LotteryDashboardProps {
  username: string
  userRole: "user" | "admin"
}


export default function ChoiceWinningReportPage({ username, userRole }: LotteryDashboardProps) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [selectedGame, setSelectedGame] = useState("Dear Single")
  const [tableData, setTableData] = useState<any[]>([])
 
  const tableHeaders = [
    { label: "Sr. No.", sortable: true },
    { label: "Date", sortable: true },
    { label: "Session", sortable: true },
    { label: "Group Name", sortable: true },
    { label: "Winning Pos.", sortable: true },
    { label: "Qty.", sortable: true },
    { label: "Amt.", sortable: true },
    { label: "Winning Qty.", sortable: true },
    { label: "Winning Amt.", sortable: true },
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

      {/* Main Content Area */}
      <main className="flex-1 p-3 sm:p-4">
        <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg p-4">
          {/* Date and Game Info */}
          <GameInfoSection selectedGame={selectedGame} onGameChange={setSelectedGame} />

          <GenericTablePageContent
            title="Choice Winning Report"
            tableHeaders={tableHeaders}
            defaultStartDate={new Date("2025-08-04T00:00:00")}
            defaultEndDate={new Date("2025-08-04T00:00:00")}
            renderRowCells={renderReportRowCells}
            data={[]} // No data for now
          />
        </div>
      </main>
    </div>
  )
}
