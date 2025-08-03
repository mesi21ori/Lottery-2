"use client"

import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"

interface ActionButtonsProps {
  selectedGame: string
  tableData: any[]
  onBuy: () => void
  onClear: () => void
  onCancel: () => void
  onSingleResult: () => void
  onSingleReport: () => void
}

export function ActionButtons({
  selectedGame,
  tableData,
  onBuy,
  onClear,
  onCancel,
  onSingleResult,
  onSingleReport,
}: ActionButtonsProps) {
  const { toast } = useToast()

  const handleBuy = () => {
    // Check if any inputs are filled
    const hasInputs = tableData.some((row) => row.inputs.some((input: string) => input && input.trim() !== ""))

    if (!hasInputs) {
      toast({
        title: "No Numbers Selected",
        description: "Please select numbers before buying tickets.",
        variant: "destructive",
      })
      return
    }

    onBuy()
    toast({
      title: "Purchase Successful",
      description: `Tickets purchased for ${selectedGame}!`,
    })
  }

  const handleClear = () => {
    onClear()
    toast({
      title: "Cleared",
      description: "All inputs have been cleared.",
    })
  }

  const handleCancel = () => {
    onCancel()
    toast({
      title: "Cancelled",
      description: "Current session has been cancelled.",
    })
  }

  const handleSingleResult = () => {
    onSingleResult()
    toast({
      title: "Results Generated",
      description: `Single result generated for ${selectedGame}.`,
    })
  }

  const handleSingleReport = () => {
    onSingleReport()
    toast({
      title: "Report Generated",
      description: `Single report generated for ${selectedGame}.`,
    })
  }

  return (
    <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-4">
      <Button
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-md font-semibold shadow-md flex-grow sm:flex-grow-0"
        onClick={handleBuy}
      >
        BUY (F4)
      </Button>
      <Button
        className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-md font-semibold shadow-md flex-grow sm:flex-grow-0"
        onClick={handleClear}
      >
        CLEAR (F6)
      </Button>
      <Button
        className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-md font-semibold shadow-md flex-grow sm:flex-grow-0"
        onClick={handleCancel}
      >
        CANCEL (F7)
      </Button>
      <Button
        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-md font-semibold shadow-md flex-grow sm:flex-grow-0"
        onClick={handleSingleResult}
      >
        Single Result (Ctrl+H)
      </Button>
      <Button
        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-md font-semibold shadow-md flex-grow sm:flex-grow-0"
        onClick={handleSingleReport}
      >
        Single Report (Ctrl+R)
      </Button>
    </div>
  )
}
