export default function MainContent({ children, className = '' }) {
  return (
    <main className={`
      flex-1 min-w-0 overflow-y-auto scrollbar-thin
      px-6 py-8 md:px-8 lg:px-10
      ${className}
    `} style={{ background: 'var(--surface-base)' }}>
      <div className="mx-auto max-w-7xl w-full animate-fade-in">
        {children}
      </div>
    </main>
  )
}
