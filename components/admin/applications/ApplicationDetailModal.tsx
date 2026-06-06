'use client'

import AdminModal from '@/components/admin/ui/AdminModal'
import AdminBadge from '@/components/admin/ui/AdminBadge'
import type { JobApplication, ApplicationStatus } from '@/lib/admin/types'

const STATUS_OPTIONS: { value: ApplicationStatus; label: string }[] = [
  { value: 'pending',      label: 'ใหม่' },
  { value: 'reviewing',    label: 'กำลังพิจารณา' },
  { value: 'interviewing', label: 'นัดสัมภาษณ์' },
  { value: 'rejected',     label: 'ไม่ผ่าน' },
]

interface Props {
  app: JobApplication | null
  open: boolean
  onClose: () => void
  onStatusChange: (id: string, status: ApplicationStatus) => void
}

export default function ApplicationDetailModal({ app, open, onClose, onStatusChange }: Props) {
  if (!app) return null

  return (
    <AdminModal open={open} onClose={onClose} title="รายละเอียดผู้สมัคร" size="lg">
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
        <div>
          <h3 style={{ fontSize: 20, fontWeight: 800, color: '#0f172a' }}>{app.name}</h3>
          <p style={{ fontSize: 14, color: '#64748b', marginTop: 2 }}>ยื่นใบสมัครวันที่ {app.appliedAt}</p>
        </div>
        <AdminBadge type="application" status={app.status} />
      </div>

      <div className="admin-info-row">
        <span className="admin-info-label">ตำแหน่ง</span>
        <span className="admin-info-value">{app.position}</span>
      </div>
      <div className="admin-info-row">
        <span className="admin-info-label">อีเมล</span>
        <span className="admin-info-value">
          <a href={`mailto:${app.email}`} style={{ color: '#0b73ef' }}>{app.email}</a>
        </span>
      </div>
      <div className="admin-info-row">
        <span className="admin-info-label">เบอร์โทร</span>
        <span className="admin-info-value">
          <a href={`tel:${app.phone}`} style={{ color: '#0b73ef' }}>{app.phone}</a>
        </span>
      </div>
      <div className="admin-info-row">
        <span className="admin-info-label">ประเภทงาน</span>
        <span className="admin-info-value">{app.jobType === 'fulltime' ? 'เต็มเวลา' : 'พาร์ทไทม์'}</span>
      </div>
      <div className="admin-info-row">
        <span className="admin-info-label">รูปแบบการทำงาน</span>
        <span className="admin-info-value">{app.workMode === 'onsite' ? 'เข้างานที่ออฟฟิศ' : 'ทำงานออนไลน์'}</span>
      </div>
      <div className="admin-info-row">
        <span className="admin-info-label">เวลาที่สะดวก</span>
        <span className="admin-info-value">{app.preferredTime}</span>
      </div>
      <div className="admin-info-row">
        <span className="admin-info-label">ประสบการณ์</span>
        <span className="admin-info-value">{app.experience}</span>
      </div>
      {app.notes && (
        <div className="admin-info-row">
          <span className="admin-info-label">หมายเหตุ</span>
          <span className="admin-info-value">{app.notes}</span>
        </div>
      )}

      <div style={{ marginTop: 22, paddingTop: 18, borderTop: '1px solid #f1f5f9' }}>
        <label style={{ fontSize: 13, fontWeight: 700, color: '#334155', display: 'block', marginBottom: 8 }}>
          เปลี่ยนสถานะ
        </label>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {STATUS_OPTIONS.map(opt => (
            <button
              key={opt.value}
              onClick={() => {
                onStatusChange(app.id, opt.value)
                onClose()
              }}
              className={`admin-btn admin-btn-sm ${app.status === opt.value ? 'admin-btn-primary' : 'admin-btn-outline'}`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>
    </AdminModal>
  )
}
