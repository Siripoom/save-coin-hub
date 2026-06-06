import Link from 'next/link'
import { Plus, BookOpen, Briefcase, Tag, FileText } from 'lucide-react'

const ACTIONS = [
  { href: '/admin/blog', icon: BookOpen, label: 'เพิ่มบทความใหม่' },
  { href: '/admin/portfolio', icon: Briefcase, label: 'เพิ่มผลงานใหม่' },
  { href: '/admin/promotions', icon: Tag, label: 'เพิ่มโปรโมชั่น' },
  { href: '/admin/applications', icon: FileText, label: 'ดูใบสมัครงาน' },
]

export default function DashboardQuickActions() {
  return (
    <div className="admin-card">
      <div className="admin-card-header">
        <h2 className="admin-card-title">
          <Plus size={16} />
          Quick Actions
        </h2>
      </div>
      <div style={{ padding: 16 }}>
        <div className="admin-quick-grid">
          {ACTIONS.map(({ href, icon: Icon, label }) => (
            <Link key={href} href={href} className="admin-quick-action">
              <div className="admin-quick-icon">
                <Icon size={18} />
              </div>
              {label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
