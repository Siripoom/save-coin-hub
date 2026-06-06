// Single source of truth for public pages.
// Public Server Components read managed content from Firestore (via the repos), filtered by
// status. Admin edits are reflected here after their server action calls revalidatePath().

import 'server-only'
import { blogRepo, portfolioRepo, promotionRepo, jobPostingRepo } from '@/lib/firebase/repos'
import type { PortfolioItem, PromotionStatus } from '@/lib/admin/types'

// --- Filtered content (only what visitors should see) ---
export async function getPublishedPosts() {
  const posts = await blogRepo.list()
  return posts.filter(p => p.status === 'published')
}

export async function getPublishedPortfolio() {
  const items = await portfolioRepo.list()
  return items.filter(p => p.status === 'published')
}

// Show active + expired promos (currently relevant); hide ones still scheduled
export async function getVisiblePromotions() {
  const promos = await promotionRepo.list()
  return promos.filter(p => p.status !== 'scheduled')
}

export async function getActivePromotions() {
  const promos = await promotionRepo.list()
  return promos.filter(p => p.status === 'active')
}

export async function getPublishedJobPostings() {
  const jobs = await jobPostingRepo.list()
  return jobs.filter(j => j.status === 'published')
}

// --- Helpers / enum → display mappers (pure, no I/O) ---
export function formatThaiDate(iso: string): string {
  return new Date(iso).toLocaleDateString('th-TH', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}

const PORTFOLIO_TYPE: Record<PortfolioItem['type'], { label: string; imgClass: string }> = {
  water: { label: 'ตู้น้ำ', imgClass: 'water' },
  coffee: { label: 'ตู้กาแฟ', imgClass: 'coffee' },
  ice: { label: 'ตู้น้ำแข็ง', imgClass: 'ice' },
  mixed: { label: 'หลายประเภท', imgClass: 'water' },
}
export const portfolioTypeLabel = (t: PortfolioItem['type']) => PORTFOLIO_TYPE[t].label
export const portfolioImgClass = (t: PortfolioItem['type']) => PORTFOLIO_TYPE[t].imgClass

// Tailwind classes are written as literals here so the scanner picks them up
export function promoStatusView(status: PromotionStatus): {
  label: string
  color: string
  expired: boolean
} {
  switch (status) {
    case 'expired':
      return { label: 'หมดเขตแล้ว', color: 'bg-slate-800', expired: true }
    case 'scheduled':
      return { label: 'เร็วๆ นี้', color: 'bg-amber-500', expired: false }
    default:
      return { label: 'กำลังใช้งาน', color: 'bg-green-500', expired: false }
  }
}
