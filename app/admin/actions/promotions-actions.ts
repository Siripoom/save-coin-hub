'use server'

import { revalidatePath } from 'next/cache'
import { verifySession } from '@/lib/auth'
import { promotionRepo } from '@/lib/firebase/repos'
import type { Promotion } from '@/lib/admin/types'

function revalidatePromotions() {
  revalidatePath('/admin/promotions')
  revalidatePath('/')
  revalidatePath('/promotions')
}

export async function savePromotion(promo: Promotion): Promise<Promotion> {
  await verifySession()
  const existing = await promotionRepo.getById(promo.id)
  const saved = existing
    ? await promotionRepo.update(promo.id, promo)
    : await promotionRepo.create(promo)
  revalidatePromotions()
  return saved
}

export async function deletePromotion(id: string): Promise<void> {
  await verifySession()
  await promotionRepo.remove(id)
  revalidatePromotions()
}
