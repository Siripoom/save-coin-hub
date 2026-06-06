import type { Metadata } from 'next'
import JobsAdminTable from '@/components/admin/jobs/JobsAdminTable'
import { jobPostingRepo } from '@/lib/firebase/repos'

export const metadata: Metadata = { title: 'จัดการตำแหน่งงาน · SAFE Admin' }

export default async function JobsPage() {
  const jobs = await jobPostingRepo.list()
  return (
    <>
      <div className="admin-page-header">
        <div>
          <h1 className="admin-page-title">ตำแหน่งงาน</h1>
          <p className="admin-page-subtitle">จัดการตำแหน่งงานที่เปิดรับสมัครบนหน้าร่วมงานกับเรา</p>
        </div>
      </div>
      <JobsAdminTable initialData={jobs} />
    </>
  )
}
