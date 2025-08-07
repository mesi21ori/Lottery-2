'use client'

import { useEffect, useMemo, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Copy, Share2, Twitter, Facebook } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'

type Props = {
  title?: string
  url?: string
  className?: string
}

export default function ShareButtons({ title = 'Check this out', url, className = '' }: Props) {
  const [currentUrl, setCurrentUrl] = useState(url ?? '')
  const { toast } = useToast()

  useEffect(() => {
    if (!url && typeof window !== 'undefined') {
      setCurrentUrl(window.location.href)
    }
  }, [url])

  const encodedTitle = useMemo(() => encodeURIComponent(title), [title])
  const encodedUrl = useMemo(() => encodeURIComponent(currentUrl), [currentUrl])

  async function handleNativeShare() {
    if (typeof navigator !== 'undefined' && (navigator as any).share) {
      try {
        await (navigator as any).share({ title, url: currentUrl })
      } catch {
        // no-op on cancel
      }
    } else {
      await copy()
    }
  }

  async function copy() {
    try {
      await navigator.clipboard.writeText(currentUrl)
      toast({ title: 'Link copied', description: 'The article link has been copied.' })
    } catch {
      toast({ title: 'Copy failed', description: 'Could not copy link.', variant: 'destructive' })
    }
  }

  return (
    <div className={`flex flex-wrap items-center gap-2 ${className}`}>
      <Button
        onClick={handleNativeShare}
        className="bg-black text-white hover:bg-red-600"
        type="button"
      >
        <Share2 className="mr-2 h-4 w-4" />
        Share
      </Button>
      <a
        href={`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button type="button" variant="outline" className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white">
          <Twitter className="mr-2 h-4 w-4" />
          Post on X
        </Button>
      </a>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button type="button" variant="outline" className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white">
          <Facebook className="mr-2 h-4 w-4" />
          Facebook
        </Button>
      </a>
      <Button
        onClick={copy}
        type="button"
        variant="ghost"
        className="text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-900"
      >
        <Copy className="mr-2 h-4 w-4" />
        Copy link
      </Button>
    </div>
  )
}
