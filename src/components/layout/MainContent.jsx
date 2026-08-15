export default function MainContent({ children, className = '' }) {
  return (
    <main className={`
      flex-1 min-w-0 overflow-y-auto scrollbar-thin
      px-4 py-6 md:px-6 lg:px-8
      ${className}
    `}>
      <div className="mx-auto max-w-7xl">
        {children}
      </div>
    </main>
  )
}
