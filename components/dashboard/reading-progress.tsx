'use client'

import { useEffect, useState } from 'react'

type Props = {
  height?: number
  className?: string
}

export default function ReadingProgress({ height = 3, className = '' }: Props) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    function onScroll() {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement
      const total = scrollHeight - clientHeight
      const p = total > 0 ? Math.min(100, Math.max(0, (scrollTop / total) * 100)) : 0
      setProgress(p)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none fixed left-0 right-0 top-0 z-40 ${className}`}
      style={{ height }}
    >
      <div className="h-full w-full bg-black/40" />
      <div
        className="absolute left-0 top-0 h-full bg-red-600 transition-[width]"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}
