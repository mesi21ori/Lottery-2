import Image from "next/image"
import Link from "next/link"
import { CalendarDays, Eye, ArrowRight } from 'lucide-react'
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { formatDate, NewsItem } from "@/lib/news-data"

type Props = {
  item?: NewsItem
  href?: string
  variant?: "default" | "featured"
}

export default function NewsCard({
  item = {
    id: "sample",
    slug: "sample-news",
    title: "Sample Lottery News",
    excerpt: "A short description about the latest lottery news and updates.",
    content: ["Full content goes here."],
    image:
      "/placeholder.svg?height=630&width=1200",
    date: new Date().toISOString(),
    views: 100
  },
  href = `/news/news/${item?.slug}`,
  variant = "default"
}: Props) {
  if (variant === "featured") {
    return (
      <Link
        href={href}
        className="group relative block overflow-hidden rounded-xl"
        aria-label={item.title}
      >
        <Image
          src={item.image || "/placeholder.svg"}
          alt={item.title}
          width={1200}
          height={630}
          className="h-[320px] w-full object-cover sm:h-[420px]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/0" />
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
          <div className="mb-2 flex items-center gap-4 text-sm text-gray-200">
            <span className="inline-flex items-center gap-1">
              <CalendarDays className="h-4 w-4 text-red-500" />
              {formatDate(item.date)}
            </span>
            <span className="inline-flex items-center gap-1">
              <Eye className="h-4 w-4 text-red-500" />
              {item.views.toLocaleString()}
            </span>
          </div>
          <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
            {item.title}
          </h2>
          <p className="mt-2 max-w-3xl text-gray-200">{item.excerpt}</p>
          <Button
            variant="secondary"
            className="mt-4 inline-flex items-center gap-2 bg-red-600 text-white hover:bg-red-700"
          >
            Read more
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </Link>
    )
  }

  return (
    <Card className="overflow-hidden border border-gray-200 shadow-sm transition hover:shadow-md dark:border-gray-800">
      <Link href={href} aria-label={item.title}>
        <Image
          src={item.image || "/placeholder.svg"}
          alt={item.title}
          width={1200}
          height={630}
          className="h-48 w-full object-cover"
        />
      </Link>
      <CardContent className="space-y-3 p-5">
        <div className="flex items-center gap-4 text-xs text-gray-500">
          <span className="inline-flex items-center gap-1">
            <CalendarDays className="h-4 w-4 text-red-600" />
            {formatDate(item.date)}
          </span>
          <span className="inline-flex items-center gap-1">
            <Eye className="h-4 w-4 text-red-600" />
            {item.views.toLocaleString()}
          </span>
        </div>
        <h3 className="line-clamp-2 text-lg font-semibold text-gray-900 dark:text-gray-50">
          <Link href={href} className="hover:underline">
            {item.title}
          </Link>
        </h3>
        <p className="line-clamp-3 text-sm text-gray-600 dark:text-gray-300">
          {item.excerpt}
        </p>
      </CardContent>
      <CardFooter className="p-5 pt-0">
        <Button
          asChild
          className="inline-flex items-center gap-2 bg-red-600 text-white hover:bg-red-700"
        >
          <Link href={href}>
            Read more
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
