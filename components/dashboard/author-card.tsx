import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { formatDate } from '@/lib/news-data'

type Props = {
  name?: string
  role?: string
  publishedAt?: string
}

export default function AuthorCard({
  name = 'Lottery Newsroom',
  role = 'Editorial',
  publishedAt = new Date().toISOString()
}: Props) {
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()

  return (
    <div className="flex items-center gap-4 rounded-xl border border-gray-200 p-4 dark:border-gray-800">
      <Avatar className="h-12 w-12">
        <AvatarImage
          src="/placeholder.svg?height=64&width=64"
          alt={`${name} avatar`}
        />
        <AvatarFallback>{initials}</AvatarFallback>
      </Avatar>
      <div>
        <p className="font-medium text-gray-900 dark:text-gray-50">{name}</p>
        <p className="text-sm text-gray-600 dark:text-gray-300">{role}</p>
        <p className="text-xs text-gray-500">Published {formatDate(publishedAt)}</p>
      </div>
    </div>
  )
}
