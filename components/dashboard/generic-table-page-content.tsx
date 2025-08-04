"use client"

import type React from "react"

import { Label } from "@/components/ui/label"
import { useState } from "react"
import { format } from "date-fns"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CalendarIcon, ChevronUp, ChevronDown } from "lucide-react"

interface GenericTablePageContentProps {
  title: string
  tableHeaders: { label: string; sortable: boolean }[]
  data?: any[] 
  showGroupFilter?: boolean
  sessionOptions?: string[]
  defaultStartDate?: Date
  defaultEndDate?: Date
  defaultSession?: string
  defaultGroup?: string
  
  renderRowCells: (rowData: any, headers: { label: string; sortable: boolean }[]) => React.ReactNode
}

export function GenericTablePageContent({
  title,
  tableHeaders,
  data,
  showGroupFilter = false,
  sessionOptions = ["ALL", "MOR", "DAY", "EVE"], 
  defaultStartDate = new Date(),
  defaultEndDate = new Date(),
  defaultSession = "ALL",
  defaultGroup = "ALL",
  renderRowCells,
}: GenericTablePageContentProps) {
  const [startDate, setStartDate] = useState<Date | undefined>(defaultStartDate)
  const [endDate, setEndDate] = useState<Date | undefined>(defaultEndDate)
  const [selectedSession, setSelectedSession] = useState(defaultSession)
  const [selectedGroup, setSelectedGroup] = useState(defaultGroup)

  const totalEntries = data ? data.length : 0

  return (
    <Card className="border-none shadow-none rounded-lg p-4 bg-white">
      <CardHeader className="py-4">
        <CardTitle className="text-xl font-semibold text-red-800 text-center">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-start gap-4">
          <div className="flex flex-wrap items-end gap-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="date-range-start" className="text-gray-700">
                Date Range
              </Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-full sm:w-[140px] justify-start text-left font-normal bg-white border border-gray-300 rounded-md",
                      !startDate && "text-muted-foreground",
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {startDate ? format(startDate, "dd/MM/yyyy") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar mode="single" selected={startDate} onSelect={setStartDate} initialFocus />
                </PopoverContent>
              </Popover>
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="date-range-end" className="sr-only">
                Date Range End
              </Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-full sm:w-[140px] justify-start text-left font-normal bg-white border border-gray-300 rounded-md",
                      !endDate && "text-muted-foreground",
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {endDate ? format(endDate, "dd/MM/yyyy") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar mode="single" selected={endDate} onSelect={setEndDate} initialFocus />
                </PopoverContent>
              </Popover>
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="session-select" className="text-gray-700">
                Session
              </Label>
              <Select value={selectedSession} onValueChange={setSelectedSession}>
                <SelectTrigger
                  id="session-select"
                  className="w-full sm:w-[100px] bg-white border border-gray-300 rounded-md"
                >
                  <SelectValue placeholder="Select Session" />
                </SelectTrigger>
                <SelectContent>
                  {sessionOptions.map((option) => (
                    <SelectItem key={option} value={option}>
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            {showGroupFilter && (
              <div className="flex flex-col gap-2">
                <Label htmlFor="group-select" className="text-gray-700">
                  Group
                </Label>
                <Select value={selectedGroup} onValueChange={setSelectedGroup}>
                  <SelectTrigger
                    id="group-select"
                    className="w-full sm:w-[100px] bg-white border border-gray-300 rounded-md"
                  >
                    <SelectValue placeholder="Select Group" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ALL">ALL</SelectItem>
                    <SelectItem value="Dear-1st">Dear-1st</SelectItem>
                    <SelectItem value="Dear-2nd">Dear-2nd</SelectItem>
                    <SelectItem value="Dear-3rd">Dear-3rd</SelectItem>
                    <SelectItem value="Dear-4th">Dear-4th</SelectItem>
                    <SelectItem value="Dear-5th">Dear-5th</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            )}
            <div className="flex gap-2 pt-8">
              <Button className="bg-red-700 hover:bg-red-800 text-white px-6 py-2 rounded-md font-semibold shadow-md">
                Search
              </Button>
              <Button
                variant="outline"
                className="text-gray-700 border-gray-300 px-6 py-2 rounded-md font-semibold hover:bg-gray-50 bg-transparent"
              >
                Cancel
              </Button>
            </div>
          </div>
        </div>
        <div className="flex justify-end items-center gap-2">
          <Label htmlFor="search-input" className="text-gray-700">
            Search:
          </Label>
          <Input
            id="search-input"
            type="text"
            placeholder=""
            className="w-48 border border-gray-300 rounded-md focus:border-red-500 focus:ring-red-500"
          />
        </div>

        {/* Table Section */}
        <div className="overflow-x-auto rounded-lg border border-gray-200">
          <Table className="min-w-full">
            <TableHeader>
              <TableRow className="bg-red-700 hover:bg-red-700 text-white">
                {tableHeaders.map((header, index) => (
                  <TableHead key={index} className="px-3 py-2 text-center text-white text-sm">
                    <div className="flex items-center justify-center gap-1">
                      {header.label}
                      {header.sortable && (
                        <div className="flex flex-col text-xs">
                          <ChevronUp className="h-3 w-3 -mb-1" />
                          <ChevronDown className="h-3 w-3 -mt-1" />
                        </div>
                      )}
                    </div>
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {data && data.length > 0 ? (
                data.map((row, rowIndex) => (
                  <TableRow
                    key={rowIndex} 
                    className={cn(rowIndex % 2 === 0 ? "bg-blue-50" : "bg-green-50", "hover:bg-opacity-80")}
                  >
                    {renderRowCells(row, tableHeaders)}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={tableHeaders.length} className="text-center py-4 text-gray-500">
                    No data available in table
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <div className="text-sm text-gray-600 text-right pr-2">
          {`Showing ${totalEntries > 0 ? 1 : 0} to ${totalEntries} of ${totalEntries} entries`}
        </div>
      </CardContent>
    </Card>
  )
}
