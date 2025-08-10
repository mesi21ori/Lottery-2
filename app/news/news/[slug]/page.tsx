import type { Metadata, ResolvingMetadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { CalendarDays, Eye, Tag } from 'lucide-react'
import SiteHeader from "@/components/site-header"
import {
  getNewsBySlug,
  getMostViewed,
  getAllNews,
  formatDate
} from "@/lib/news-data"
import NewsListItem from "@/components/dashboard/news-list-item"
import ReadingProgress from "@/components/dashboard/reading-progress"
import ShareButtons from "@/components/dashboard/share-buttons"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import RelatedNews from "@/components/dashboard/related-news"

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata(
  { params }: Props,
  _parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = await params
  const item = getNewsBySlug(slug)
  if (!item) {
    return {
      title: "News Not Found"
    }
  }
  return {
    title: item.title,
    description: item.excerpt,
    openGraph: {
      title: item.title,
      description: item.excerpt,
      images: [{ url: item.image }]
    },
    twitter: {
      title: item.title,
      description: item.excerpt,
      images: [{ url: item.image }]
    }
  }
}

function calcReadingTime(text: string) {
  const words = text.trim().split(/\s+/).length
  const minutes = Math.max(1, Math.ceil(words / 200))
  return `${minutes} min read`
}

export default async function NewsDetailPage({ params }: Props) {
  const { slug } = await params
  const item = getNewsBySlug(slug)
  if (!item) notFound()

  const bodyText = item.content.join(" ")
  const readingTime = calcReadingTime(bodyText)

  // Related by tag, otherwise by latest excluding current
  const all = getAllNews()
  const related =
    (item.tags?.length
      ? all.filter(
          (n) =>
            n.slug !== item.slug &&
            n.tags?.some((t) => item.tags?.includes(t))
        )
      : all.filter((n) => n.slug !== item.slug)
    ).slice(0, 3)

  const mostViewed = getMostViewed(5).filter((n) => n.slug !== item.slug)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: item.title,
    datePublished: item.date,
    author: item.author ? { '@type': 'Person', name: item.author } : undefined,
    image: [item.image],
    description: item.excerpt,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `/news/news/${item.slug}`
    }
  }

  return (
    <>
      <ReadingProgress />
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-4 py-8 md:px-6 md:py-12">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6 text-sm">
          <ol className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
            <li>
              <Link href="/news" className="font-medium text-red-600 hover:text-red-700">
                News
              </Link>
            </li>
            <li className="text-gray-400">{'/'}</li>
            <li aria-current="page" className="truncate font-semibold text-gray-900 dark:text-gray-50">
              {item.title}
            </li>
          </ol>
        </nav>

        <article className="grid gap-8 lg:grid-cols-[1fr_320px]">
          <div>
            <header className="mb-4 space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                {(item.tags ?? ['News']).map((t, i) => (
                  <Badge key={`${t}-${i}`} className="bg-red-600 text-white hover:bg-red-700">
                    <Tag className="mr-1 h-3.5 w-3.5" />
                    {t}
                  </Badge>
                ))}
              </div>
              <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-50">
                {item.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-300">
                <span className="inline-flex items-center gap-1">
                  <CalendarDays className="h-4 w-4 text-red-600" />
                  {formatDate(item.date)}
                </span>
                <span className="inline-flex items-center gap-1">
                  <Eye className="h-4 w-4 text-red-600" />
                  {item.views.toLocaleString()} views
                </span>
                <span>{readingTime}</span>
              </div>
            </header>

            <figure className="mb-6 overflow-hidden rounded-xl">
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                width={1200}
                height={630}
                className="h-[300px] w-full object-cover"
                priority
              />
              <figcaption className="sr-only">{item.title}</figcaption>
            </figure>

            {/* Article body */}
            <div className="prose prose-neutral max-w-none dark:prose-invert">
              {item.content.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Share */}
            <Separator className="my-8" />
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-50">
                Share this article
              </h2>
              <ShareButtons title={item.title} />
            </div>

            {/* Related */}
            <RelatedNews items={related} title="Related articles" />
          </div>

          {/* Sidebar */}
          <aside aria-label="Most viewed" className="space-y-4 lg:sticky lg:top-24 lg:h-fit">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-50">
              Most Viewed
            </h2>
            <ul className="space-y-2">
              {mostViewed.map((n) => (
                <NewsListItem key={n.id} item={n} compact />
              ))}
            </ul>
          </aside>
        </article>

        {/* JSON-LD for rich results */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </main>
    </>
  )
}

/**
 * The dynamic metadata for this page is handled by generateMetadata, which Next.js injects into <head> for improved SEO and shareability. [^1]
 */
