import type { Metadata } from 'next'
import BlogAdminTable from '@/components/admin/blog/BlogAdminTable'
import { blogRepo } from '@/lib/firebase/repos'

export const metadata: Metadata = { title: 'จัดการบทความ · SAFE Admin' }

export default async function BlogPage() {
  const posts = await blogRepo.list()
  return (
    <>
      <div className="admin-page-header">
        <div>
          <h1 className="admin-page-title">บทความ</h1>
          <p className="admin-page-subtitle">จัดการบทความและเนื้อหาทั้งหมดของเว็บไซต์</p>
        </div>
      </div>
      <BlogAdminTable initialData={posts} />
    </>
  )
}
