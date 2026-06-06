'use client'

import { useState } from 'react'
import type { Promotion, PromotionStatus } from '@/lib/admin/types'

interface Props {
  promo?: Promotion
  onSave: (p: Promotion) => void
  onCancel: () => void
}

export default function PromotionForm({ promo, onSave, onCancel }: Props) {
  const [form, setForm] = useState<Omit<Promotion, 'id'>>({
    title: promo?.title ?? '',
    description: promo?.description ?? '',
    badge: promo?.badge ?? '',
    startDate: promo?.startDate ?? '',
    endDate: promo?.endDate ?? '',
    status: promo?.status ?? 'scheduled',
    imageLabel: promo?.imageLabel ?? '',
  })

  const set = (key: keyof typeof form, value: unknown) =>
    setForm(prev => ({ ...prev, [key]: value }))

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSave({ id: promo?.id ?? `promo-${Date.now()}`, ...form })
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="admin-form-grid">
        <div className="admin-form-group full">
          <label>ชื่อโปรโมชั่น *</label>
          <input
            required
            value={form.title}
            onChange={e => set('title', e.target.value)}
            placeholder="เช่น แพ็กเกจเริ่มต้นสุดคุ้ม"
          />
        </div>

        <div className="admin-form-group">
          <label>ป้ายกำกับ (Badge)</label>
          <input
            value={form.badge}
            onChange={e => set('badge', e.target.value)}
            placeholder="เช่น ยอดนิยม, Hot Deal"
          />
        </div>

        <div className="admin-form-group">
          <label>ชื่อบนรูปภาพ</label>
          <input
            value={form.imageLabel}
            onChange={e => set('imageLabel', e.target.value)}
            placeholder="เช่น ตู้น้ำ SAFE"
          />
        </div>

        <div className="admin-form-group">
          <label>วันที่เริ่มต้น *</label>
          <input
            type="date"
            required
            value={form.startDate}
            onChange={e => set('startDate', e.target.value)}
          />
        </div>

        <div className="admin-form-group">
          <label>วันที่สิ้นสุด *</label>
          <input
            type="date"
            required
            value={form.endDate}
            onChange={e => set('endDate', e.target.value)}
          />
        </div>

        <div className="admin-form-group full">
          <label>สถานะการแสดงผล</label>
          <div className="admin-toggle-wrap" style={{ marginTop: 6 }}>
            <label className="admin-toggle">
              <input
                type="checkbox"
                checked={form.status === 'active'}
                onChange={e => set('status', e.target.checked ? 'active' : 'scheduled' as PromotionStatus)}
              />
              <span className="admin-toggle-track" />
              <span className="admin-toggle-thumb" />
            </label>
            <span className="admin-toggle-label">
              {form.status === 'active' ? 'กำลังใช้งาน (เปิดการแสดงผล)' : 'ปิดการแสดงผล'}
            </span>
          </div>
        </div>

        <div className="admin-form-group full">
          <label>รายละเอียดโปรโมชั่น *</label>
          <textarea
            required
            value={form.description}
            onChange={e => set('description', e.target.value)}
            placeholder="อธิบายรายละเอียดของโปรโมชั่น..."
            rows={4}
          />
        </div>
      </div>

      <div className="admin-modal-footer">
        <button type="button" onClick={onCancel} className="admin-btn admin-btn-ghost">ยกเลิก</button>
        <button type="submit" className="admin-btn admin-btn-primary">
          {promo ? 'บันทึกการแก้ไข' : 'เพิ่มโปรโมชั่น'}
        </button>
      </div>
    </form>
  )
}
