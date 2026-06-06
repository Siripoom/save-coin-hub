'use client'

import { useState } from 'react'
import { Upload } from 'lucide-react'
import { uploadImage } from '@/app/admin/actions/upload-actions'
import type { PortfolioItem, PortfolioStatus } from '@/lib/admin/types'

const TYPE_OPTIONS = [
  { value: 'water',  label: 'ตู้น้ำ' },
  { value: 'coffee', label: 'ตู้กาแฟ' },
  { value: 'ice',    label: 'ตู้น้ำแข็ง' },
  { value: 'mixed',  label: 'หลายประเภท' },
]

interface Props {
  item?: PortfolioItem
  onSave: (item: PortfolioItem) => void
  onCancel: () => void
}

export default function PortfolioForm({ item, onSave, onCancel }: Props) {
  const [form, setForm] = useState<Omit<PortfolioItem, 'id'>>({
    name: item?.name ?? '',
    type: item?.type ?? 'water',
    location: item?.location ?? '',
    machineCount: item?.machineCount ?? 1,
    installDate: item?.installDate ?? '',
    imageUrl: item?.imageUrl ?? '',
    status: item?.status ?? 'draft',
    description: item?.description ?? '',
  })
  const [fileName, setFileName] = useState<string>('')
  const [uploading, setUploading] = useState(false)

  const set = (key: keyof typeof form, value: unknown) =>
    setForm(prev => ({ ...prev, [key]: value }))

  const handleUpload = async (file: File) => {
    setFileName(file.name)
    setUploading(true)
    try {
      const fd = new FormData()
      fd.append('file', file)
      fd.append('folder', 'portfolio-images')
      const { url } = await uploadImage(fd)
      set('imageUrl', url)
    } catch (err) {
      setFileName('')
      alert(err instanceof Error ? err.message : 'อัปโหลดไม่สำเร็จ')
    } finally {
      setUploading(false)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSave({
      id: item?.id ?? `port-${Date.now()}`,
      ...form,
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="admin-form-grid">
        <div className="admin-form-group full">
          <label>ชื่อผลงาน *</label>
          <input
            required
            value={form.name}
            onChange={e => set('name', e.target.value)}
            placeholder="เช่น 7-Eleven สาขาลาดพร้าว"
          />
        </div>

        <div className="admin-form-group">
          <label>ประเภทผลงาน</label>
          <select value={form.type} onChange={e => set('type', e.target.value)}>
            {TYPE_OPTIONS.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
          </select>
        </div>

        <div className="admin-form-group">
          <label>จำนวนเครื่อง</label>
          <input
            type="number"
            min={1}
            value={form.machineCount}
            onChange={e => set('machineCount', Number(e.target.value))}
          />
        </div>

        <div className="admin-form-group full">
          <label>สถานที่ติดตั้ง *</label>
          <input
            required
            value={form.location}
            onChange={e => set('location', e.target.value)}
            placeholder="เช่น ลาดพร้าว กรุงเทพมหานคร"
          />
        </div>

        <div className="admin-form-group">
          <label>วันที่ติดตั้ง</label>
          <input
            type="date"
            value={form.installDate}
            onChange={e => set('installDate', e.target.value)}
          />
        </div>

        <div className="admin-form-group">
          <label>สถานะ</label>
          <select value={form.status} onChange={e => set('status', e.target.value as PortfolioStatus)}>
            <option value="published">เผยแพร่</option>
            <option value="draft">Draft</option>
          </select>
        </div>

        <div className="admin-form-group full">
          <label>รูปภาพผลงาน</label>
          <label className="admin-upload-box">
            <Upload size={28} style={{ color: '#0b73ef', margin: '0 auto' }} />
            <strong>{uploading ? 'กำลังอัปโหลด...' : (fileName || 'คลิกเพื่อเลือกรูปภาพ')}</strong>
            <span style={{ fontSize: 13 }}>PNG, JPG หรือ WEBP (ไม่เกิน 5MB)</span>
            <input
              type="file"
              accept="image/*"
              disabled={uploading}
              onChange={e => {
                const file = e.target.files?.[0]
                if (file) handleUpload(file)
              }}
            />
          </label>
          {form.imageUrl && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={form.imageUrl} alt="ตัวอย่างรูปภาพ" style={{ marginTop: 8, maxHeight: 120, borderRadius: 8 }} />
          )}
        </div>

        <div className="admin-form-group full">
          <label>รายละเอียดโดยย่อ</label>
          <textarea
            value={form.description}
            onChange={e => set('description', e.target.value)}
            placeholder="อธิบายเกี่ยวกับผลงานนี้..."
            rows={3}
          />
        </div>
      </div>

      <div className="admin-modal-footer">
        <button type="button" onClick={onCancel} className="admin-btn admin-btn-ghost">ยกเลิก</button>
        <button type="submit" className="admin-btn admin-btn-primary">
          {item ? 'บันทึกการแก้ไข' : 'เพิ่มผลงาน'}
        </button>
      </div>
    </form>
  )
}
