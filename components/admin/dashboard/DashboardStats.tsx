import Link from 'next/link'
import { FileText, Briefcase, BookOpen, Tag } from 'lucide-react'
import { applicationRepo, portfolioRepo, blogRepo, promotionRepo } from '@/lib/firebase/repos'

export default async function DashboardStats() {
  const [applications, portfolio, posts, promotions] = await Promise.all([
    applicationRepo.list(),
    portfolioRepo.list(),
    blogRepo.list(),
    promotionRepo.list(),
  ])

  const newApplications = applications.filter(a => a.status === 'pending').length
  const publishedPosts = posts.filter(p => p.status === 'published').length
  const activePromos = promotions.filter(p => p.status === 'active').length

  const STATS = [
    { icon: FileText, label: 'ใบสมัครงาน', value: applications.length, change: `${newApplications} รายการใหม่`, href: '/admin/applications', color: '#0b73ef' },
    { icon: Briefcase, label: 'ผลงานทั้งหมด', value: portfolio.length, change: `${portfolio.filter(p => p.status === 'published').length} เผยแพร่แล้ว`, href: '/admin/portfolio', color: '#7c3aed' },
    { icon: BookOpen, label: 'บทความ', value: posts.length, change: `${publishedPosts} เผยแพร่แล้ว`, href: '/admin/blog', color: '#0891b2' },
    { icon: Tag, label: 'โปรโมชั่น', value: promotions.length, change: `${activePromos} กำลังใช้งาน`, href: '/admin/promotions', color: '#15803d' },
  ]

  return (
    <div className="admin-stats-grid">
      {STATS.map(({ icon: Icon, label, value, change, href, color }) => (
        <Link key={href} href={href} className="admin-stat-card" style={{ textDecoration: 'none' }}>
          <div className="admin-stat-icon" style={{ background: `${color}18`, borderColor: `${color}28`, color }}>
            <Icon size={22} />
          </div>
          <div>
            <div className="admin-stat-label">{label}</div>
            <div className="admin-stat-value">{value}</div>
            <div className="admin-stat-change">{change}</div>
          </div>
        </Link>
      ))}
    </div>
  )
}
