import type { Metadata } from 'next'
import PortfolioAdminTable from '@/components/admin/portfolio/PortfolioAdminTable'
import { portfolioRepo } from '@/lib/firebase/repos'

export const metadata: Metadata = { title: 'จัดการผลงาน · SAFE Admin' }

export default async function PortfolioPage() {
  const items = await portfolioRepo.list()
  return (
    <>
      <div className="admin-page-header">
        <div>
          <h1 className="admin-page-title">ผลงาน</h1>
          <p className="admin-page-subtitle">จัดการผลงานการติดตั้งและโครงการทั้งหมด</p>
        </div>
      </div>
      <PortfolioAdminTable initialData={items} />
    </>
  )
}
