export default function Badge({ children, variant = 'default', className = '' }) {
  const baseClasses = 'inline-flex items-center px-2 py-0.5 rounded-md text-[11px] font-semibold uppercase tracking-wider'
  const variantClasses = {
    zone: 'border',
    os: '',
    type: '',
    difficulty: '',
    default: 'bg-white/[0.06] text-gray-300 border border-white/[0.08]',
    success: 'bg-accent-green/10 text-accent-green border border-accent-green/20',
    warning: 'bg-amber-500/10 text-amber-400 border border-amber-500/20',
    error: 'bg-accent-red/10 text-accent-red border border-accent-red/20',
  }
  return (
    <span className={`${baseClasses} ${variantClasses[variant] || variantClasses.default} ${className}`}>
      {children}
    </span>
  )
}
