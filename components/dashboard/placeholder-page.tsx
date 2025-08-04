export function PlaceholderPage({ title }: { title: string }) {
  return (
    <div className="flex items-center justify-center h-[calc(100vh-200px)] text-2xl font-bold text-gray-500">
      {title} Content Goes Here
    </div>
  )
}
