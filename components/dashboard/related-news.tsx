import { NewsItem } from "../../lib/news-data"
import NewsCard from "./news-card"

type Props = {
  items?: NewsItem[]
  title?: string
}

export default function RelatedNews({
  items = [],
  title = 'Related articles'
}: Props) {
  if (!items.length) return null
  return (
    <section aria-labelledby="related-articles" className="mt-10">
      <h2 id="related-articles" className="mb-4 text-xl font-bold text-gray-900 dark:text-gray-50">
        {title}
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((n) => (
          <NewsCard key={n.id} item={n} />
        ))}
      </div>
    </section>
  )
}
