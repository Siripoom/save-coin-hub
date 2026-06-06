import type { Metadata } from 'next'
import ApplicationsTable from '@/components/admin/applications/ApplicationsTable'
import { applicationRepo } from '@/lib/firebase/repos'

export const metadata: Metadata = { title: 'จัดการใบสมัครงาน · SAFE Admin' }

export default async function ApplicationsPage() {
  const applications = await applicationRepo.list()
  return (
    <>
      <div className="admin-page-header">
        <div>
          <h1 className="admin-page-title">ใบสมัครงาน</h1>
          <p className="admin-page-subtitle">จัดการและติดตามสถานะผู้สมัครงานทั้งหมด</p>
        </div>
      </div>
      <ApplicationsTable initialData={applications} />
    </>
  )
}
