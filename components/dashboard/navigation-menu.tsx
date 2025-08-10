"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronDown, LogOut, Menu, X } from "lucide-react"
import { logout } from "@/app/logout/actions" // Import the logout action
import Link from "next/link" // Import Link from next/link

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
                "text-white hover:bg-red-700 px-3 py-1 rounded-md",
                isMobile && "w-full justify-center py-2",
              )}
            >
              {item} <ChevronDown className="ml-1 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="bg-red-800 text-white border-none">
            <DropdownMenuItem asChild className="hover:bg-red-700 cursor-pointer">
              <Link href={`/${item.toLowerCase()}/add-${item.toLowerCase()}`}>Add {item}</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild className="hover:bg-red-700 cursor-pointer">
              <Link href={`/${item.toLowerCase()}/${item.toLowerCase()}-list`}>{item} List</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ))}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className={cn("text-white hover:bg-red-700 px-3 py-1 rounded-md", isMobile && "w-full justify-center py-2")}
          >
            Result <ChevronDown className="ml-1 h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="bg-red-800 text-white border-none">
          <DropdownMenuItem asChild className="hover:bg-red-700 cursor-pointer">
            <Link href="/result/dear-single-result">Dear Single Result</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild className="hover:bg-red-700 cursor-pointer">
            <Link href="/result/rajshree-punjab-result">Rajshree Punjab Result</Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className={cn("text-white hover:bg-red-700 px-3 py-1 rounded-md", isMobile && "w-full justify-center py-2")}
          >
            Report <ChevronDown className="ml-1 h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="bg-red-800 text-white border-none">
          <DropdownMenuItem asChild className="hover:bg-red-700 cursor-pointer">
            <Link href="/report/dear-single-winning-report">Dear Single Winning Report</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild className="hover:bg-red-700 cursor-pointer">
            <Link href="/report/rajshree-punjab-winning-report">Rajshree Punjab Winning Report</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild className="hover:bg-red-700 cursor-pointer">
            <Link href="/report/choice-winning-report">Choice Winning Report</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild className="hover:bg-red-700 cursor-pointer">
            <Link href="/report/choice-customer-report">Choice Customer</Link>
          </DropdownMenuItem>
             <DropdownMenuItem asChild className="hover:bg-red-700 cursor-pointer">
            <Link href="/news">News</Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <Button
        variant="ghost"
        className={cn("text-white hover:bg-red-700 px-3 py-1 rounded-md", isMobile && "w-full justify-center py-2")}
        asChild
      >
        <Link href="/password-change">Profile</Link>
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
        className="text-white hover:bg-red-700 sm:hidden"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        <span className="sr-only">Toggle menu</span>
      </Button>
      {/* Mobile navigation menu (conditionally rendered below header) */}
      {isMobileMenuOpen && (
        <nav className="bg-red-800 text-white py-4 px-4 sm:hidden flex flex-col items-center gap-4">
          {/* Mobile-specific balance and logout */}
          <div className="flex items-center gap-4 w-full justify-center mb-4">
            <span className="text-lg font-semibold">Balance: 0.00</span>
            <form action={logout}>
              <Button type="submit" variant="ghost" size="icon" className="text-white hover:bg-red-700">
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
