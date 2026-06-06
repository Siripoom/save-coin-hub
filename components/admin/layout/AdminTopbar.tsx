'use client'

import { usePathname } from 'next/navigation'
import { Menu } from 'lucide-react'

const PAGE_TITLES: Record<string, string> = {
  '/admin': 'แดชบอร์ด',
  '/admin/applications': 'จัดการใบสมัครงาน',
  '/admin/portfolio': 'จัดการผลงาน',
  '/admin/blog': 'จัดการบทความ',
  '/admin/promotions': 'จัดการโปรโมชั่น',
}

interface AdminTopbarProps {
  onMenuClick: () => void
}

export default function AdminTopbar({ onMenuClick }: AdminTopbarProps) {
  const pathname = usePathname()
  const title = PAGE_TITLES[pathname] ?? 'Admin'

  return (
    <header className="admin-topbar">
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <button
          className="admin-btn admin-btn-ghost admin-btn-icon admin-hamburger"
          onClick={onMenuClick}
          aria-label="เปิดเมนู"
        >
          <Menu size={18} />
        </button>
        <h1 className="admin-topbar-title">{title}</h1>
      </div>

      <div className="admin-topbar-actions">
        <div className="admin-topbar-user">
          <div className="admin-topbar-avatar">A</div>
          <span>Admin</span>
        </div>
      </div>
    </header>
  )
}
