"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"

export function ScrollingAnnouncementBar() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const animationFrameId = useRef<number | null>(null)
  const positionX = useRef<number>(0)
  const lastTimestamp = useRef<number>(0)

  const [isHovered, setIsHovered] = useState(false)
  const [translateX, setTranslateX] = useState(0)

  const scrollSpeed = 1.5

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

    const contentWidth = contentElement.scrollWidth
    const containerWidth = containerElement.clientWidth

    // ✅ Set initial position ONCE
    positionX.current = containerWidth
    setTranslateX(containerWidth)

    const animate = (timestamp: number) => {
      if (!lastTimestamp.current) lastTimestamp.current = timestamp

      const deltaTime = timestamp - lastTimestamp.current
      lastTimestamp.current = timestamp

      // ✅ Update only when not hovered
      if (!isHovered) {
        positionX.current -= scrollSpeed * (deltaTime / 16)

        if (positionX.current <= -contentWidth) {
          positionX.current = containerWidth
        }

        setTranslateX(positionX.current)
      }

      animationFrameId.current = requestAnimationFrame(animate)
    }

    animationFrameId.current = requestAnimationFrame(animate)

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current)
      }
    }
  }, []) // ✅ only run once on mount

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
        style={{
          transform: `translateX(${translateX}px)`,
          minWidth: "max-content",
          transition: "transform 0.016s linear",
        }}
      >
        {scrollingContent}
      </div>
    </div>
  )
}
