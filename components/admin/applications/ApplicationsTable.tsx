'use client'

import { useState, useTransition } from 'react'
import { useRouter } from 'next/navigation'
import { Eye, Search } from 'lucide-react'
import AdminBadge from '@/components/admin/ui/AdminBadge'
import ApplicationDetailModal from './ApplicationDetailModal'
import { updateApplicationStatus } from '@/app/admin/actions/applications-actions'
import type { JobApplication, ApplicationStatus } from '@/lib/admin/types'

const STATUS_OPTIONS = [
  { value: '', label: 'ทุกสถานะ' },
  { value: 'pending',      label: 'ใหม่' },
  { value: 'reviewing',    label: 'กำลังพิจารณา' },
  { value: 'interviewing', label: 'นัดสัมภาษณ์' },
  { value: 'rejected',     label: 'ไม่ผ่าน' },
]

export default function ApplicationsTable({ initialData }: { initialData: JobApplication[] }) {
  const router = useRouter()
  const [, startTransition] = useTransition()
  const [items, setItems] = useState(initialData)
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState('')
  const [selected, setSelected] = useState<JobApplication | null>(null)

  // Re-sync with authoritative server data after router.refresh() (render-phase reset)
  const [prevInitial, setPrevInitial] = useState(initialData)
  if (prevInitial !== initialData) {
    setPrevInitial(initialData)
    setItems(initialData)
  }

  const handleStatusChange = (id: string, status: ApplicationStatus) => {
    setItems(prev => prev.map(a => a.id === id ? { ...a, status } : a))
    startTransition(async () => {
      await updateApplicationStatus(id, status)
      router.refresh()
    })
  }

  const filtered = items.filter(a => {
    const matchSearch = !search || a.name.toLowerCase().includes(search.toLowerCase()) || a.email.toLowerCase().includes(search.toLowerCase())
    const matchStatus = !statusFilter || a.status === statusFilter
    return matchSearch && matchStatus
  })

  return (
    <>
      <div className="admin-card">
        <div className="admin-toolbar">
          <div className="admin-toolbar-left">
            <div className="admin-search">
              <Search size={15} className="admin-search-icon" />
              <input
                type="text"
                placeholder="ค้นหาชื่อ / อีเมล..."
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
            </div>
            <select
              className="admin-filter-select"
              value={statusFilter}
              onChange={e => setStatusFilter(e.target.value)}
            >
              {STATUS_OPTIONS.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
            </select>
          </div>
          <span style={{ fontSize: 14, color: '#64748b' }}>ทั้งหมด {filtered.length} รายการ</span>
        </div>

        <div className="admin-table-wrap">
          <table className="admin-table">
            <thead>
              <tr>
                <th>ชื่อผู้สมัคร</th>
                <th>เบอร์โทร</th>
                <th>อีเมล</th>
                <th>ตำแหน่ง</th>
                <th>เวลาที่สะดวก</th>
                <th>สถานะ</th>
                <th>วันที่สมัคร</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={8} className="admin-empty">
                    <div className="admin-empty-icon">📋</div>
                    ไม่พบรายการที่ค้นหา
                  </td>
                </tr>
              ) : (
                filtered.map(app => (
                  <tr key={app.id}>
                    <td style={{ fontWeight: 700, color: '#0f172a' }}>{app.name}</td>
                    <td>{app.phone}</td>
                    <td style={{ color: '#0b73ef' }}>{app.email}</td>
                    <td>{app.position}</td>
                    <td>{app.preferredTime}</td>
                    <td><AdminBadge type="application" status={app.status} /></td>
                    <td style={{ color: '#64748b' }}>{app.appliedAt}</td>
                    <td>
                      <div className="admin-table-actions">
                        <button
                          className="admin-btn admin-btn-outline admin-btn-sm"
                          onClick={() => setSelected(app)}
                        >
                          <Eye size={13} />
                          ดูรายละเอียด
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      <ApplicationDetailModal
        app={selected}
        open={!!selected}
        onClose={() => setSelected(null)}
        onStatusChange={handleStatusChange}
      />
    </>
  )
}
