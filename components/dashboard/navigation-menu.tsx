"use client"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronDown, LogOut, Menu, X } from "lucide-react"
import { logout } from "@/app/logout/actions" // Import the logout action

interface NavigationMenuProps {
  isMobileMenuOpen: boolean
  setIsMobileMenuOpen: (isOpen: boolean) => void
}

export function NavigationMenu({ isMobileMenuOpen, setIsMobileMenuOpen }: NavigationMenuProps) {
  const renderNavItems = (isMobile: boolean) => (
    <>
      {["Single", "Rajshree", "Choice"].map((item) => (
        <DropdownMenu key={item}>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className={cn(
                "text-white hover:bg-purple-700 px-3 py-1 rounded-md",
                isMobile && "w-full justify-center py-2",
              )}
            >
              {item} <ChevronDown className="ml-1 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="bg-purple-800 text-white border-none">
            <DropdownMenuItem className="hover:bg-purple-700 cursor-pointer">Add {item}</DropdownMenuItem>
            <DropdownMenuItem className="hover:bg-purple-700 cursor-pointer">{item} List</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ))}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className={cn(
              "text-white hover:bg-purple-700 px-3 py-1 rounded-md",
              isMobile && "w-full justify-center py-2",
            )}
          >
            Result <ChevronDown className="ml-1 h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="bg-purple-800 text-white border-none">
          <DropdownMenuItem className="hover:bg-purple-700 cursor-pointer">Dear Single Result</DropdownMenuItem>
          <DropdownMenuItem className="hover:bg-purple-700 cursor-pointer">Rajshree Punjab Result</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className={cn(
              "text-white hover:bg-purple-700 px-3 py-1 rounded-md",
              isMobile && "w-full justify-center py-2",
            )}
          >
            Report <ChevronDown className="ml-1 h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="bg-purple-800 text-white border-none">
          <DropdownMenuItem className="hover:bg-purple-700 cursor-pointer">Dear Single Winning Report</DropdownMenuItem>
          <DropdownMenuItem className="hover:bg-purple-700 cursor-pointer">
            Rajshree Punjab Winning Report
          </DropdownMenuItem>
          <DropdownMenuItem className="hover:bg-purple-700 cursor-pointer">Choice Winning Report</DropdownMenuItem>
          <DropdownMenuItem className="hover:bg-purple-700 cursor-pointer">Choice Customer Report</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <Button
        variant="ghost"
        className={cn("text-white hover:bg-purple-700 px-3 py-1 rounded-md", isMobile && "w-full justify-center py-2")}
      >
        Password Change
      </Button>
    </>
  )

  return (
    <>
      {/* Desktop navigation links */}
      <nav className="hidden sm:flex gap-6 text-sm">{renderNavItems(false)}</nav>

      {/* Balance and Logout for desktop */}
      <span className="text-lg font-semibold hidden sm:block">Balance: 0.00</span>
      <form action={logout} className="hidden sm:flex">
        <Button type="submit" variant="ghost" size="icon" className="text-white hover:bg-purple-700">
          <LogOut className="h-5 w-5" />
          <span className="sr-only">Logout</span>
        </Button>
      </form>

      {/* Hamburger menu button (visible only on small screens) */}
      <Button
        variant="ghost"
        size="icon"
        className="text-white hover:bg-purple-700 sm:hidden"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        <span className="sr-only">Toggle menu</span>
      </Button>

      {/* Mobile navigation menu (conditionally rendered below header) */}
      {isMobileMenuOpen && (
        <nav className="bg-purple-800 text-white py-4 px-4 sm:hidden flex flex-col items-center gap-4">
          {/* Mobile-specific balance and logout */}
          <div className="flex items-center gap-4 w-full justify-center mb-4">
            <span className="text-lg font-semibold">Balance: 0.00</span>
            <form action={logout}>
              <Button type="submit" variant="ghost" size="icon" className="text-white hover:bg-purple-700">
                <LogOut className="h-5 w-5" />
                <span className="sr-only">Logout</span>
              </Button>
            </form>
          </div>
          {/* Mobile navigation links */}
          {renderNavItems(true)}
        </nav>
      )}
    </>
  )
}
