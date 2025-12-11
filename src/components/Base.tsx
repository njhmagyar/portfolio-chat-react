export default function Base({ children }) {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 dark:bg-black dark:text-gray-100">
      { children }
    </div>
  )
}