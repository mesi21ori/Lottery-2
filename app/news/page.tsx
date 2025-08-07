import type { Metadata } from "next"
import Link from "next/link"
import NewsCard from "@/components/dashboard/news-card"
import NewsListItem from "@/components/dashboard/news-list-item"
import NewsSlider from "@/components/dashboard/news-slider"
import SiteHeader from "@/components/site-header"
import { getAllNews, getMostViewed } from "@/lib/news-data"

export const metadata: Metadata = {
  title: "Lottery News",
  description:
    "Latest lottery news: recent winners, most viewed updates, and announcements.",
  openGraph: {
    title: "Lottery News",
    description:
      "Stay updated with recent lottery winners, announcements, and top stories.",
    type: "website"
  }
}

export default function NewsPage() {
  const all = getAllNews()
  const mostViewed = getMostViewed(5)

  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-7xl px-4 py-8 md:px-6 md:py-12">
        <header className="mb-8 flex items-end justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-red-600">
              News
            </p>
            <h1 className="mt-1 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-50">
              Latest Lottery News
            </h1>
            <p className="mt-2 max-w-2xl text-gray-600 dark:text-gray-300">
              See the most recent updates first, discover what others are reading,
              and browse all stories.
            </p>
          </div>
        </header>

        {/* Slider + Most Viewed */}
        <section aria-labelledby="latest" className="mb-10">
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <NewsSlider items={all.slice(0, 6)} />
            </div>
            <aside className="rounded-xl border border-gray-200 p-4 dark:border-gray-800">
              <div className="mb-3 flex items-center justify-between">
                <h2
                  id="latest"
                  className="text-lg font-semibold text-gray-900 dark:text-gray-50"
                >
                  Most Viewed
                </h2>
                <Link
                  href="#all-news"
                  className="text-sm font-medium text-red-600 hover:text-red-700"
                >
                  View all
                </Link>
              </div>
              <ul className="space-y-2">
                {mostViewed.map((item) => (
                  <NewsListItem key={item.id} item={item} />
                ))}
              </ul>
            </aside>
          </div>
        </section>

        {/* All News */}
        <section aria-labelledby="all-news">
          <div className="mb-4 flex items-center justify-between">
            <h2
              id="all-news"
              className="text-xl font-bold text-gray-900 dark:text-gray-50"
            >
              All News
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {all.map((item) => (
              <NewsCard key={item.id} item={item} />
            ))}
          </div>
        </section>
      </main>
    </>
  )
}
