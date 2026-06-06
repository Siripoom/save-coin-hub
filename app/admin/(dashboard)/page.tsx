import type { Metadata } from 'next'
import DashboardStats from '@/components/admin/dashboard/DashboardStats'
import DashboardRecentActivity from '@/components/admin/dashboard/DashboardRecentActivity'
import DashboardQuickActions from '@/components/admin/dashboard/DashboardQuickActions'

export const metadata: Metadata = { title: 'แดชบอร์ด · SAFE Admin' }

export default function DashboardPage() {
  return (
    <>
      <div className="admin-page-header">
        <div>
          <h1 className="admin-page-title">ภาพรวมระบบ</h1>
          <p className="admin-page-subtitle">ยินดีต้อนรับกลับสู่ SAFE Admin Dashboard</p>
        </div>
      </div>

      <DashboardStats />

      <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 20 }}>
        <DashboardRecentActivity />
        <DashboardQuickActions />
      </div>
    </>
  )
}
