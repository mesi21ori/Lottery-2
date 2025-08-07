import Image from "next/image"
import Link from "next/link"
import { Eye } from 'lucide-react'
import { formatDate, NewsItem } from "@/lib/news-data"

type Props = {
  item?: NewsItem
  href?: string
  compact?: boolean
}

export default function NewsListItem({
  item = {
    id: "sample",
    slug: "sample-news",
    title: "Sample Lottery News",
    excerpt: "Short description for sample list item.",
    content: ["Full content here"],
    image:
      "/placeholder.svg?height=300&width=400",
    date: new Date().toISOString(),
    views: 100
  },
  href = `/news/news/${item?.slug}`,
  compact = false
}: Props) {
  return (
    <li className="flex items-center gap-3 rounded-md p-2 transition hover:bg-gray-50 dark:hover:bg-gray-900/50">
      <Link href={href} className="flex-shrink-0">
        <Image
          src={item.image || "/placeholder.svg"}
          alt={item.title}
          width={compact ? 72 : 96}
          height={compact ? 48 : 64}
          className="h-16 w-24 rounded object-cover"
        />
      </Link>
      <div className="min-w-0 flex-1">
        <h4 className="truncate font-medium text-gray-900 hover:underline dark:text-gray-50">
          <Link href={href}>{item.title}</Link>
        </h4>
        <p className="line-clamp-2 text-xs text-gray-600 dark:text-gray-300">
          {item.excerpt}
        </p>
        <div className="mt-1 flex items-center gap-2 text-[11px] text-gray-500">
          <span>{formatDate(item.date)}</span>
          <span className="inline-flex items-center gap-1">
            <Eye className="h-3 w-3 text-red-600" />
            {item.views.toLocaleString()}
          </span>
        </div>
      </div>
    </li>
  )
}
