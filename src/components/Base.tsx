interface BaseProps {
  children: React.ReactNode
}

export default function Base({ children }: BaseProps) {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 dark:bg-black dark:text-gray-100">
      { children }
    </div>
  )
}