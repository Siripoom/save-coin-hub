'use client'

import { useState } from 'react'
import type { JobPosting, JobPostingStatus } from '@/lib/admin/types'

interface Props {
  job?: JobPosting
  onSave: (job: JobPosting) => void
  onCancel: () => void
}

export default function JobForm({ job, onSave, onCancel }: Props) {
  const [form, setForm] = useState<Omit<JobPosting, 'id'>>({
    icon: job?.icon ?? '📋',
    title: job?.title ?? '',
    tags: job?.tags ?? [],
    dept: job?.dept ?? '',
    desc: job?.desc ?? '',
    status: job?.status ?? 'published',
  })
  // Tags are edited as a comma-separated string for simplicity
  const [tagsText, setTagsText] = useState((job?.tags ?? []).join(', '))

  const set = (key: keyof typeof form, value: unknown) =>
    setForm(prev => ({ ...prev, [key]: value }))

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const tags = tagsText.split(',').map(t => t.trim()).filter(Boolean)
    onSave({ id: job?.id ?? `job-${Date.now()}`, ...form, tags })
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="admin-form-grid">
        <div className="admin-form-group">
          <label>ไอคอน (Emoji)</label>
          <input
            value={form.icon}
            onChange={e => set('icon', e.target.value)}
            placeholder="📊"
            maxLength={4}
          />
        </div>

        <div className="admin-form-group">
          <label>สถานะ</label>
          <select value={form.status} onChange={e => set('status', e.target.value as JobPostingStatus)}>
            <option value="published">เผยแพร่</option>
            <option value="draft">Draft</option>
          </select>
        </div>

        <div className="admin-form-group full">
          <label>ชื่อตำแหน่ง *</label>
          <input
            required
            value={form.title}
            onChange={e => set('title', e.target.value)}
            placeholder="เช่น เจ้าหน้าที่การตลาด"
          />
        </div>

        <div className="admin-form-group full">
          <label>แผนก *</label>
          <input
            required
            value={form.dept}
            onChange={e => set('dept', e.target.value)}
            placeholder="เช่น แผนกการตลาด"
          />
        </div>

        <div className="admin-form-group full">
          <label>แท็ก (คั่นด้วยจุลภาค)</label>
          <input
            value={tagsText}
            onChange={e => setTagsText(e.target.value)}
            placeholder="Full time, Offline"
          />
          <span className="admin-form-hint">เช่น Full time, Offline</span>
        </div>

        <div className="admin-form-group full">
          <label>รายละเอียดงาน</label>
          <textarea
            value={form.desc}
            onChange={e => set('desc', e.target.value)}
            placeholder="อธิบายหน้าที่และความรับผิดชอบของตำแหน่งนี้..."
            rows={3}
          />
        </div>
      </div>

      <div className="admin-modal-footer">
        <button type="button" onClick={onCancel} className="admin-btn admin-btn-ghost">ยกเลิก</button>
        <button type="submit" className="admin-btn admin-btn-primary">
          {job ? 'บันทึกการแก้ไข' : 'เพิ่มตำแหน่งงาน'}
        </button>
      </div>
    </form>
  )
}
