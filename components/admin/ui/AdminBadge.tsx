import type { ApplicationStatus, BlogStatus, PortfolioStatus, PromotionStatus } from '@/lib/admin/types'

type BadgeVariant = 'green' | 'blue' | 'yellow' | 'red' | 'gray' | 'purple'

const APPLICATION_BADGE: Record<ApplicationStatus, { label: string; variant: BadgeVariant }> = {
  pending:     { label: 'ใหม่',              variant: 'blue' },
  reviewing:   { label: 'กำลังพิจารณา',     variant: 'yellow' },
  interviewing:{ label: 'นัดสัมภาษณ์',      variant: 'purple' },
  rejected:    { label: 'ไม่ผ่าน',          variant: 'red' },
}

const PORTFOLIO_BADGE: Record<PortfolioStatus, { label: string; variant: BadgeVariant }> = {
  published: { label: 'เผยแพร่', variant: 'green' },
  draft:     { label: 'Draft',   variant: 'gray' },
}

const BLOG_BADGE: Record<BlogStatus, { label: string; variant: BadgeVariant }> = {
  published: { label: 'Published', variant: 'green' },
  draft:     { label: 'Draft',     variant: 'gray' },
}

const PROMOTION_BADGE: Record<PromotionStatus, { label: string; variant: BadgeVariant }> = {
  active:    { label: 'กำลังใช้งาน', variant: 'green' },
  expired:   { label: 'หมดอายุ',     variant: 'gray' },
  scheduled: { label: 'กำหนดการ',    variant: 'blue' },
}

interface AdminBadgeProps {
  type: 'application' | 'portfolio' | 'blog' | 'promotion'
  status: string
}

export default function AdminBadge({ type, status }: AdminBadgeProps) {
  let label = status
  let variant: BadgeVariant = 'gray'

  if (type === 'application') {
    const b = APPLICATION_BADGE[status as ApplicationStatus]
    if (b) { label = b.label; variant = b.variant }
  } else if (type === 'portfolio') {
    const b = PORTFOLIO_BADGE[status as PortfolioStatus]
    if (b) { label = b.label; variant = b.variant }
  } else if (type === 'blog') {
    const b = BLOG_BADGE[status as BlogStatus]
    if (b) { label = b.label; variant = b.variant }
  } else if (type === 'promotion') {
    const b = PROMOTION_BADGE[status as PromotionStatus]
    if (b) { label = b.label; variant = b.variant }
  }

  return (
    <span className={`admin-badge admin-badge-${variant}`}>{label}</span>
  )
}
