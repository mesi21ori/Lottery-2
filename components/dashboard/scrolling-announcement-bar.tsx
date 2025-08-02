"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"

export function ScrollingAnnouncementBar() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const [translateX, setTranslateX] = useState(0)
  const animationFrameId = useRef<number | null>(null)

  const scrollingContent = (
    <>
      <Button className="bg-blue-800 hover:bg-blue-900 text-white rounded-full px-4 py-2 text-sm font-semibold flex-shrink-0">
        Dear Lottery
      </Button>
      <Button className="bg-blue-800 hover:bg-blue-900 text-white rounded-full px-4 py-2 text-sm font-semibold flex-shrink-0">
        01:00 PM
      </Button>
      <Button className="bg-green-600 hover:bg-green-700 text-white rounded-full px-4 py-2 text-sm font-semibold flex-shrink-0">
        06:00 PM
      </Button>
      <Button className="bg-red-600 hover:bg-red-700 text-white rounded-full px-4 py-2 text-sm font-semibold flex-shrink-0">
        08:00 PM
      </Button>
      <Button className="bg-red-600 hover:bg-red-700 text-white rounded-full px-4 py-2 text-sm font-semibold flex-shrink-0">
        LOTTERY SAMBAD RESULT 1PM, 6PM, 8PM
      </Button>
      <Button className="bg-lime-500 hover:bg-lime-600 text-white rounded-full px-4 py-2 text-sm font-semibold flex-shrink-0">
        NAGALAND STATE LOTTERY
      </Button>
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500 text-lg font-bold flex-shrink-0">
        24X7 LIVE
      </span>
    </>
  )

  useEffect(() => {
    const contentElement = contentRef.current
    const containerElement = scrollContainerRef.current

    if (!contentElement || !containerElement) return

    const contentWidth = contentElement.scrollWidth // Actual width of the content
    const containerWidth = containerElement.clientWidth // Visible width of the container
    const scrollSpeed = 3 // Speed of scrolling

    let animationFrameId: number | null = null

    const animate = () => {
      if (!isHovered) {
        setTranslateX((prevX) => {
          let newX = prevX - scrollSpeed // Move by 'scrollSpeed' pixels

          // If content has scrolled completely off-screen to the left
          if (newX <= -contentWidth) {
            // Reset to start from the right side of the container
            newX = containerWidth
          }
          return newX
        })
      }
      animationFrameId = requestAnimationFrame(animate)
    }

    // Initial position: start from the right edge of the container
    setTranslateX(containerWidth)

    animationFrameId = requestAnimationFrame(animate)

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
    }
  }, [isHovered])

  return (
    <div
      ref={scrollContainerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="bg-blue-50 py-3 px-6 shadow-sm mb-6 rounded-lg overflow-hidden relative h-16 flex items-center"
    >
      <div
        ref={contentRef}
        className="flex flex-nowrap gap-4 absolute"
        style={{ transform: `translateX(${translateX}px)`, minWidth: "max-content" }}
      >
        {scrollingContent} {/* Only one copy for classic marquee effect */}
      </div>
    </div>
  )
}
