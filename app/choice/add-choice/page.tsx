"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { Toaster } from "@/components/ui/toaster"
import { NavigationMenu } from "@/components/dashboard/navigation-menu"
import { ScrollingAnnouncementBar } from "@/components/dashboard/scrolling-announcement-bar"
import { GameInfoSection } from "@/components/dashboard/game-info-section"
import { BookingTable } from "@/components/dashboard/booking-table"
import { ActionButtons } from "@/components/dashboard/action-buttons"

interface LotteryDashboardProps {
  username: string
  userRole: "user" | "admin"
}

export function AddChoicePage({ username, userRole }: LotteryDashboardProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [selectedGame, setSelectedGame] = useState("Dear Single")
  const [tableData, setTableData] = useState<any[]>([])
  useEffect(() => {
    if (selectedGame === "Dear Single") {
      setTableData([
        { group: "DEAR-1st", inputs: Array(10).fill(""), qty: "-", amt: "-", result: "7" },
        { group: "DEAR-2nd", inputs: Array(10).fill(""), qty: "-", amt: "-", result: "5" },
        { group: "DEAR-3rd", inputs: Array(10).fill(""), qty: "-", amt: "-", result: "0" },
        { group: "DEAR-4th", inputs: Array(10).fill(""), qty: "-", amt: "-", result: "8" },
        { group: "DEAR-5th Last", inputs: Array(10).fill(""), qty: "-", amt: "-", result: "-" },
        { group: "All", inputs: Array(10).fill(""), qty: "-", amt: "-", result: "-" },
      ])
    } else if (selectedGame === "Rajshree Punjab") {
      setTableData([
        { group: "RAJSHREE-1st", inputs: Array(10).fill(""), qty: "-", amt: "-", result: "-" },
        { group: "RAJSHREE-2nd", inputs: Array(10).fill(""), qty: "-", amt: "-", result: "-" },
        { group: "RAJSHREE-3rd", inputs: Array(10).fill(""), qty: "-", amt: "-", result: "-" },
        { group: "RAJSHREE-4th", inputs: Array(10).fill(""), qty: "-", amt: "-", result: "-" },
        { group: "RAJSHREE-5th", inputs: Array(10).fill(""), qty: "-", amt: "-", result: "-" },
        { group: "Last", inputs: Array(10).fill(""), qty: "-", amt: "-", result: "-" },
        { group: "All", inputs: Array(10).fill(""), qty: "-", amt: "-", result: "-" },
      ])
    }
  }, [selectedGame])

  const handleInputChange = (rowIndex: number, colIndex: number, value: string) => {

    if (value.length > 1 || (value && !/^\d$/.test(value))) return

    setTableData((prev) => {
      const newData = [...prev]
      newData[rowIndex].inputs[colIndex] = value

      const filledInputs = newData[rowIndex].inputs.filter((input: string) => input !== "").length
      newData[rowIndex].qty = filledInputs > 0 ? filledInputs.toString() : "-"
      newData[rowIndex].amt = filledInputs > 0 ? (filledInputs * 5).toString() : "-"

      return newData
    })
  }

  const handleBuy = () => {
    console.log("Purchase made for:", selectedGame, tableData)
  }

  const handleClear = () => {
    setTableData((prev) =>
      prev.map((row) => ({
        ...row,
        inputs: Array(10).fill(""),
        qty: "-",
        amt: "-",
      })),
    )
  }

  const handleCancel = () => {
    handleClear()
  }

  const handleSingleResult = () => {
    setTableData((prev) =>
      prev.map((row) => ({
        ...row,
        result: Math.floor(Math.random() * 10).toString(),
      })),
    )
  }

  const handleSingleReport = () => {
  
    console.log("Report generated for:", selectedGame, tableData)
  }

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "F4") {
        event.preventDefault()
        handleBuy()
      } else if (event.key === "F6") {
        event.preventDefault()
        handleClear()
      } else if (event.key === "F7") {
        event.preventDefault()
        handleCancel()
      } else if (event.ctrlKey && event.key === "h") {
        event.preventDefault()
        handleSingleResult()
      } else if (event.ctrlKey && event.key === "r") {
        event.preventDefault()
        handleSingleReport()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Top Bar */}
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

          {/* Booking Table */}
          <BookingTable selectedGame={selectedGame} tableData={tableData} onInputChange={handleInputChange} />

          {/* Bottom Buttons */}
          <ActionButtons
            selectedGame={selectedGame}
            tableData={tableData}
            onBuy={handleBuy}
            onClear={handleClear}
            onCancel={handleCancel}
            onSingleResult={handleSingleResult}
            onSingleReport={handleSingleReport}
          />
        </div>
      </main>

      <Toaster />
    </div>
  )
}
