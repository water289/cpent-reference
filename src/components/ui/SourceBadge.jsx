import { getSourceLabel } from '../../data/sourceLabels'

export default function SourceBadge({ source, size = 'sm' }) {
  const { label, color } = getSourceLabel(source)
  const sizeClasses = {
    xs: 'text-[10px] px-1.5 py-0.5',
    sm: 'text-xs px-2 py-0.5',
    md: 'text-xs px-3 py-1',
  }[size]

  return (
    <span className={`inline-flex items-center rounded font-medium border ${sizeClasses} ${color}`}>
      {label}
    </span>
  )
}
