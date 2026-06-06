'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  LayoutDashboard,
  FileText,
  Briefcase,
  BookOpen,
  Tag,
  Users,
  LogOut,
  X,
} from 'lucide-react'

import { logoutAction } from '@/app/admin/actions/auth-actions'

const NAV_ITEMS = [
  { href: '/admin', label: 'แดชบอร์ด', icon: LayoutDashboard, exact: true },
  { href: '/admin/applications', label: 'ใบสมัครงาน', icon: FileText },
  { href: '/admin/jobs', label: 'ตำแหน่งงาน', icon: Users },
  { href: '/admin/portfolio', label: 'ผลงาน', icon: Briefcase },
  { href: '/admin/blog', label: 'บทความ', icon: BookOpen },
  { href: '/admin/promotions', label: 'โปรโมชั่น', icon: Tag },
]

interface AdminSidebarProps {
  open: boolean
  onClose: () => void
}

export default function AdminSidebar({ open, onClose }: AdminSidebarProps) {
  const pathname = usePathname()

  const isActive = (href: string, exact?: boolean) =>
    exact ? pathname === href : pathname.startsWith(href)

  return (
    <>
      <div
        className={`admin-sidebar-overlay ${open ? 'open' : ''}`}
        onClick={onClose}
        aria-hidden="true"
      />
      <aside className={`admin-sidebar ${open ? 'open' : ''}`}>
        <div className="admin-sidebar-logo">
          <span style={{ fontSize: 28, lineHeight: 1 }}>SAFE</span>
          <span>Admin</span>
          <button
            onClick={onClose}
            aria-label="ปิดเมนู"
            className="admin-sidebar-close"
          >
            <X size={18} />
          </button>
        </div>

        <p className="admin-sidebar-section">เมนูหลัก</p>
        <nav className="admin-sidebar-nav">
          {NAV_ITEMS.map(({ href, label, icon: Icon, exact }) => (
            <Link
              key={href}
              href={href}
              onClick={onClose}
              className={`admin-sidebar-link ${isActive(href, exact) ? 'active' : ''}`}
            >
              <Icon size={18} />
              {label}
            </Link>
          ))}
        </nav>

        <div className="admin-sidebar-footer">
          <form action={logoutAction}>
            <button type="submit" className="admin-sidebar-link" style={{ width: '100%' }}>
              <LogOut size={18} />
              ออกจากระบบ
            </button>
          </form>
        </div>
      </aside>
    </>
  )
}
