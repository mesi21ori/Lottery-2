import type React from "react"
import type { Metadata } from "next"
import { Plus_Jakarta_Sans } from "next/font/google" // Import the new font
import "./globals.css"

// Configure the Plus Jakarta Sans font
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans", // Optional: define a CSS variable for the font
})



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      {/* Apply the font class to the body */}
      <body className={plusJakartaSans.className}>{children}</body>
    </html>
  )
}
