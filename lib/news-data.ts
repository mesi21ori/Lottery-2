export type NewsItem = {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string[]
  image: string
  date: string // ISO string
  views: number
  author?: string
  tags?: string[]
}

const news: NewsItem[] = [
  {
    id: "1",
    slug: "record-jackpot-winner-announced",
    title: "Record Jackpot Winner Announced",
    excerpt:
      "A single ticket matched all numbers in last night's drawing, setting a new state record jackpot.",
    content: [
      "In a historic drawing, a single ticket matched all five numbers plus the bonus ball, securing the largest jackpot in the state's history.",
      "The winning ticket was purchased at Lucky Mart on Main Street. Retailer bonus and additional details are expected to be released later today.",
      "Winners are encouraged to sign the back of their ticket and consult financial and legal advisors before claiming."
    ],
    image:
      "/placeholder.svg?height=630&width=1200",
    date: new Date().toISOString(),
    views: 15230,
    author: "Lottery Newsroom",
    tags: ["jackpot", "winners"]
  },
  {
    id: "2",
    slug: "new-scratch-off-series-launch",
    title: "New Scratch-Off Series Launch This Weekend",
    excerpt:
      "Exciting new scratch-off games with top prizes up to $1,000,000 arrive in retailers statewide.",
    content: [
      "The Lottery is releasing a new lineup of scratch-off tickets featuring bigger prizes and improved odds across multiple price points.",
      "Players can choose from $1, $5, $10, and $20 tickets, each offering unique game mechanics and bonus multipliers."
    ],
    image:
      "/placeholder.svg?height=630&width=1200",
    date: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2).toISOString(),
    views: 8450,
    author: "Editorial Team",
    tags: ["scratch-off", "products"]
  },
  {
    id: "3",
    slug: "retailer-spotlight-lucky-mart",
    title: "Retailer Spotlight: Lucky Mart on Main",
    excerpt:
      "Local shop celebrates multiple winning tickets and community contributions.",
    content: [
      "Lucky Mart has become a community hotspot, with several notable winning tickets sold over the past year.",
      "The retailer attributes success to friendly staff, responsible play messaging, and community events."
    ],
    image:
      "/placeholder.svg?height=630&width=1200",
    date: new Date(Date.now() - 1000 * 60 * 60 * 24 * 5).toISOString(),
    views: 6230,
    author: "Community Desk",
    tags: ["retailers"]
  },
  {
    id: "4",
    slug: "responsible-play-awareness-month",
    title: "Responsible Play Awareness Month Kicks Off",
    excerpt:
      "Resources and tips for playing responsibly, including setting limits and recognizing the odds.",
    content: [
      "The Lottery is committing additional resources toward promoting responsible play and awareness initiatives.",
      "Players are reminded that games are for entertainment and should never be viewed as an income strategy."
    ],
    image:
      "/placeholder.svg?height=630&width=1200",
    date: new Date(Date.now() - 1000 * 60 * 60 * 24 * 10).toISOString(),
    views: 4890,
    author: "Public Affairs",
    tags: ["responsible play"]
  },
  {
    id: "5",
    slug: "how-to-claim-your-prize",
    title: "How to Claim Your Prize: A Step-by-Step Guide",
    excerpt:
      "Everything you need to know about claiming prizes securely and efficiently.",
    content: [
      "Claiming is easy: sign your ticket, keep it safe, and use official channels to validate winnings.",
      "For large prizes, schedule an appointment at a claim center and bring valid ID and tax documentation."
    ],
    image:
      "/placeholder.svg?height=630&width=1200",
    date: new Date(Date.now() - 1000 * 60 * 60 * 24 * 12).toISOString(),
    views: 19120,
    author: "Player Support",
    tags: ["how-to", "guides"]
  }
]

// Helpers
export function getAllNews(): NewsItem[] {
  return [...news].sort((a, b) => +new Date(b.date) - +new Date(a.date))
}

export function getRecentNews(): NewsItem | undefined {
  return getAllNews()[0]
}

export function getMostViewed(limit = 5): NewsItem[] {
  return [...news].sort((a, b) => b.views - a.views).slice(0, limit)
}

export function getNewsBySlug(slug: string): NewsItem | undefined {
  return news.find((n) => n.slug === slug)
}

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric"
  })
}
