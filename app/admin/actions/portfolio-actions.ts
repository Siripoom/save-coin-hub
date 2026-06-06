'use server'

import { revalidatePath } from 'next/cache'
import { verifySession } from '@/lib/auth'
import { portfolioRepo } from '@/lib/firebase/repos'
import type { PortfolioItem } from '@/lib/admin/types'

function revalidatePortfolio() {
  revalidatePath('/admin/portfolio')
  revalidatePath('/')
  revalidatePath('/portfolio')
}

export async function savePortfolioItem(item: PortfolioItem): Promise<PortfolioItem> {
  await verifySession()
  const existing = await portfolioRepo.getById(item.id)
  const saved = existing
    ? await portfolioRepo.update(item.id, item)
    : await portfolioRepo.create(item)
  revalidatePortfolio()
  return saved
}

export async function deletePortfolioItem(id: string): Promise<void> {
  await verifySession()
  await portfolioRepo.remove(id)
  revalidatePortfolio()
}
