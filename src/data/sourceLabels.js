export const SOURCE_LABELS = {
  'Argha Dey CPENT Notes (94% scorer)': {
    label: 'ARGHA DEY NOTES',
    color: 'text-amber-300 bg-amber-900/30 border-amber-700',
  },
  'cpent-reference': {
    label: 'PROJECT REFERENCE',
    color: 'text-blue-300 bg-blue-900/30 border-blue-700',
  },
}

export function getSourceLabel(source) {
  if (!source) return { label: 'PRACTICE / INFERENCE', color: 'text-purple-300 bg-purple-900/30 border-purple-700' }
  if (source.includes('Argha Dey')) return SOURCE_LABELS['Argha Dey CPENT Notes (94% scorer)']
  if (source === 'cpent-reference') return SOURCE_LABELS['cpent-reference']
  return { label: 'PRACTICE / INFERENCE', color: 'text-purple-300 bg-purple-900/30 border-purple-700' }
}

export function getSourceVariant(source) {
  const slug = source || ''
  if (slug.includes('Argha Dey')) return 'argha-dey'
  if (slug === 'cpent-reference') return 'standard'
  return 'inference'
}
