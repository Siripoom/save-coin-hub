import type { ComponentType } from 'react'
import { FileText, Briefcase, BookOpen, Tag } from 'lucide-react'
import { applicationRepo, portfolioRepo, blogRepo, promotionRepo } from '@/lib/firebase/repos'

const formatThaiDate = (iso: string) =>
  new Date(iso).toLocaleDateString('th-TH', { day: 'numeric', month: 'short', year: 'numeric' })

type Activity = { icon: ComponentType<{ size?: number }>; text: React.ReactNode; date: string }

export default async function DashboardRecentActivity() {
  const [applications, portfolio, posts, promotions] = await Promise.all([
    applicationRepo.list(),
    portfolioRepo.list(),
    blogRepo.list(),
    promotionRepo.list(),
  ])

  // Build the feed from the latest items across all content sources
  const ACTIVITIES: Activity[] = [
    ...applications.map(a => ({
      icon: FileText,
      text: <><strong>{a.name}</strong> ส่งใบสมัครตำแหน่ง {a.position}</>,
      date: a.appliedAt,
    })),
    ...posts
      .filter(p => p.status === 'published')
      .map(p => ({
        icon: BookOpen,
        text: <><strong>บทความ</strong> &ldquo;{p.title}&rdquo; ถูกเผยแพร่</>,
        date: p.publishedAt,
      })),
    ...promotions.map(p => ({
      icon: Tag,
      text: <><strong>โปรโมชั่น</strong> &ldquo;{p.title}&rdquo; ถูกเพิ่มเข้าระบบ</>,
      date: p.startDate,
    })),
    ...portfolio.map(p => ({
      icon: Briefcase,
      text: <><strong>ผลงาน</strong> &ldquo;{p.name}&rdquo; ถูกอัปเดต</>,
      date: p.installDate,
    })),
  ]
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 5)

  return (
    <div className="admin-card">
      <div className="admin-card-header">
        <h2 className="admin-card-title">กิจกรรมล่าสุด</h2>
      </div>
      <div className="admin-activity-list" style={{ padding: '0 22px' }}>
        {ACTIVITIES.map((item, i) => (
          <div key={i} className="admin-activity-item">
            <div className="admin-activity-icon">
              <item.icon size={16} />
            </div>
            <div className="admin-activity-text">{item.text}</div>
            <div className="admin-activity-time">{formatThaiDate(item.date)}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
