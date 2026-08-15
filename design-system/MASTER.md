# CPENT Reference — Design System

## Foundation

### Color Palette
- **Primary**: `#0B0F19` (deep navy, near-black)
- **Secondary**: `#141927` (card background)
- **Tertiary**: `#1C2333` (deeper card background)
- **Code Block**: `#0D1117` (terminal-like dark)

### Accent Colors
| Token | Color | Use |
|-------|-------|-----|
| accent-primary | `#E8A020` | Gold — primary actions, links, dashboard highlights |
| accent-web | `#3B82F6` | Blue — web zone |
| accent-binary | `#EF4444` | Red — binary exploitation |
| accent-iot | `#10B981` | Green — IoT firmware |
| accent-ctf | `#A855F7` | Purple — CTF/pentest concepts |
| accent-recon | `#6B7280` | Gray — recon phase |

### Zone Colors
| Zone ID | Display Name | Color |
|---------|-------------|-------|
| recon | Recon | `#6B7280` (gray) |
| active-directory | Active Directory | `#E8A020` (gold) |
| web | Web Application | `#3B82F6` (blue) |
| binary-exploitation | Binary Exploitation | `#EF4444` (red) |
| iot-firmware | IoT/Firmware | `#10B981` (green) |
| ctf | CTF | `#A855F7` (purple) |

### Text Colors
| Token | Color | Use |
|-------|-------|-----|
| text-primary | `#E8EAED` | Primary content |
| text-secondary | `#9CA3AF` | Secondary/muted text |
| text-tertiary | `#6B7280` | Tertiary/disabled |
| text-code | `#79C0FF` | Code syntax accent |
| text-success | `#22C55E` | Success states |
| text-warning | `#F59E0B` | Warning states |
| text-error | `#EF4444` | Error/danger states |

### Border Colors
- border: `#1F2D40` (standard borders)
- border-hover: `#374151` (interactive hover borders)

## Typography

### Font Stack
- **Body**: Inter, sans-serif (clean, readable documentation font)
- **Code/Terminal**: JetBrains Mono, monospace (technical content)
- **Display/Headers**: Inter, sans-serif (consistent, professional)

### Scale
| Element | Size | Weight | Line Height | Letter Spacing |
|---------|------|--------|-------------|----------------|
| h1 (page title) | 2.25rem (36px) | 700 | 1.2 | -0.02em |
| h2 (section) | 1.5rem (24px) | 600 | 1.3 | none |
| h3 (card title) | 1.125rem (18px) | 600 | 1.3 | none |
| body | 1rem (16px) | 400 | 1.6 | none |
| caption/labels | 0.75rem (12px) | 600 | 1.4 | 0.05em |
| code/terminal | 0.875rem (14px) | 400 | 1.5 | none |

## Spacing System
Base unit: 4px grid
- xs: 0.25rem (4px)
- sm: 0.5rem (8px)
- md: 0.75rem (12px)
- base: 1rem (16px)
- lg: 1.25rem (20px)
- xl: 1.5rem (24px)
- 2xl: 2rem (32px)
- 3xl: 3rem (48px)

## Components

### Page Header Pattern
All content pages should have:
1. **Breadcrumb** at top (using Breadcrumb component)
2. **Title** in h1
3. **Description** in muted text (optional, max 2-3 lines)
4. **Consistent margin**: `mb-6` between header and content

### Cards
- **Background**: `bg-gray-800` (or `bg-gray-800/50` for secondary)
- **Border**: `border border-gray-700` with `3px solid` left accent colored by zone
- **Hover**: `hover:border-gray-600` transition-all duration-200
- **Padding**: `p-4` for compact, `p-6` for spacious

### Command/ Code Blocks
- **Terminal header**: colored band with zone color, `kali@cpent` prompt style
- **Code area**: dark background, syntax-highlighted monospace
- **Actions**: copy button in top-right corner

### Buttons
- **Primary**: `bg-accent-primary text-black font-medium`
- **Secondary**: `bg-gray-700 text-gray-200`
- **Ghost**: `text-accent-primary hover:bg-accent-primary/10`
- **Icon buttons**: `p-1.5 rounded transition-colors`

### Inputs
- **Background**: `bg-gray-800` / `bg-gray-900`
- **Border**: `border-gray-600` focus: `border-accent-primary`
- **Text**: `text-gray-200`
- **Placeholder**: `placeholder-gray-500`

### Badges
- **Zone**: colored border with zone color text/icon
- **OS**: colored bg based on OS type
- **Type**: colored bg based on tool type
- **Difficulty**: star rating display
- **Noisiness**: colored text (green/yellow/red)

### Layout
- **Sidebar width**: 240px (fixed, collapsed state has icon-only)
- **Context panel**: 288px (fixed right-side)
- **Main content**: fluid, max-width 7xl (1280px), centered with margin-auto
- **Header height**: 48px (top bar)
- **Gutter**: px-4 on mobile, px-6 md:px-8 on larger screens

## Responsive Design
| Breakpoint | Width | Usage |
|------------|-------|-------|
| sm | 640px | Mobile landscape |
| md | 768px | Tablet portrait |
| lg | 1024px | Tablet landscape |
| xl | 1280px | Desktop minimum |
| 2xl | 1536px | Wide desktop |

### Patterns
- **Mobile (sm)**: Single column, sidebar overlays content, context panel is drawer-style
- **Tablet (md)**: Sidebar may be icon-only, main content takes 2/3 width
- **Desktop (lg+)**: Full 3-panel layout (sidebar + main + context)

## Navigation
- **Sidebar**: collapsible with chevron toggle
- **Exam Mode toggle**: bottom of sidebar, prominent red/green states
- **Keyboard shortcuts**: Cmd+K for search palette, Cmd+E for exam mode
- **Breadcrumb**: hierarchical path at top of each page
