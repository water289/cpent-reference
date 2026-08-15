export default function Badge({ children, variant = 'default', className = '' }) {
  const baseClasses = 'inline-flex items-center px-2 py-0.5 rounded text-xs font-medium font-display'
  const variantClasses = {
    zone: 'border border-current',
    os: '',
    type: '',
    difficulty: '',
    default: 'bg-gray-700 text-gray-200',
    success: 'bg-green-900 text-green-200',
    warning: 'bg-yellow-900 text-yellow-200',
    error: 'bg-red-900 text-red-200',
  }
  return (
    <span className={`${baseClasses} ${variantClasses[variant] || variantClasses.default} ${className}`}>
      {children}
    </span>
  )
}
