import type { Metadata } from 'next'
import PromotionsAdminTable from '@/components/admin/promotions/PromotionsAdminTable'
import { promotionRepo } from '@/lib/firebase/repos'

export const metadata: Metadata = { title: 'จัดการโปรโมชั่น · SAFE Admin' }

export default async function PromotionsPage() {
  const promotions = await promotionRepo.list()
  return (
    <>
      <div className="admin-page-header">
        <div>
          <h1 className="admin-page-title">โปรโมชั่น</h1>
          <p className="admin-page-subtitle">จัดการโปรโมชั่นและข้อเสนอพิเศษทั้งหมด</p>
        </div>
      </div>
      <PromotionsAdminTable initialData={promotions} />
    </>
  )
}
