'use client'

import { useState, useTransition } from 'react'
import { useRouter } from 'next/navigation'
import { Plus, Pencil, Trash2, Search } from 'lucide-react'
import AdminBadge from '@/components/admin/ui/AdminBadge'
import AdminModal from '@/components/admin/ui/AdminModal'
import JobForm from './JobForm'
import { saveJobPosting, deleteJobPosting } from '@/app/admin/actions/jobs-actions'
import type { JobPosting } from '@/lib/admin/types'

export default function JobsAdminTable({ initialData }: { initialData: JobPosting[] }) {
  const router = useRouter()
  const [, startTransition] = useTransition()
  const [items, setItems] = useState(initialData)
  const [search, setSearch] = useState('')
  const [editItem, setEditItem] = useState<JobPosting | undefined>()
  const [showForm, setShowForm] = useState(false)
  const [deleteId, setDeleteId] = useState<string | null>(null)

  // Re-sync with authoritative server data after router.refresh() (render-phase reset)
  const [prevInitial, setPrevInitial] = useState(initialData)
  if (prevInitial !== initialData) {
    setPrevInitial(initialData)
    setItems(initialData)
  }

  const filtered = items.filter(i =>
    !search ||
    i.title.toLowerCase().includes(search.toLowerCase()) ||
    i.dept.toLowerCase().includes(search.toLowerCase())
  )

  const handleSave = (job: JobPosting) => {
    setItems(prev =>
      prev.find(i => i.id === job.id)
        ? prev.map(i => i.id === job.id ? job : i)
        : [job, ...prev]
    )
    setShowForm(false)
    setEditItem(undefined)
    startTransition(async () => {
      await saveJobPosting(job)
      router.refresh()
    })
  }

  const handleDelete = (id: string) => {
    setItems(prev => prev.filter(i => i.id !== id))
    setDeleteId(null)
    startTransition(async () => {
      await deleteJobPosting(id)
      router.refresh()
    })
  }

  return (
    <>
      <div className="admin-card">
        <div className="admin-toolbar">
          <div className="admin-toolbar-left">
            <div className="admin-search">
              <Search size={15} className="admin-search-icon" />
              <input
                type="text"
                placeholder="ค้นหาตำแหน่ง / แผนก..."
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
            </div>
          </div>
          <button
            className="admin-btn admin-btn-primary admin-btn-sm"
            onClick={() => { setEditItem(undefined); setShowForm(true) }}
          >
            <Plus size={14} />
            เพิ่มตำแหน่งงาน
          </button>
        </div>

        <div className="admin-table-wrap">
          <table className="admin-table">
            <thead>
              <tr>
                <th>ตำแหน่ง</th>
                <th>แผนก</th>
                <th>แท็ก</th>
                <th>สถานะ</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 ? (
                <tr><td colSpan={5} className="admin-empty">ไม่พบรายการ</td></tr>
              ) : (
                filtered.map(job => (
                  <tr key={job.id}>
                    <td>
                      <div style={{ fontWeight: 700, color: '#0f172a' }}>
                        <span style={{ marginRight: 8 }}>{job.icon}</span>{job.title}
                      </div>
                    </td>
                    <td style={{ color: '#64748b' }}>{job.dept}</td>
                    <td>
                      <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
                        {job.tags.map(t => (
                          <span key={t} className="admin-badge admin-badge-gray">{t}</span>
                        ))}
                      </div>
                    </td>
                    <td><AdminBadge type="portfolio" status={job.status} /></td>
                    <td>
                      <div className="admin-table-actions">
                        <button
                          className="admin-btn admin-btn-ghost admin-btn-icon admin-btn-sm"
                          onClick={() => { setEditItem(job); setShowForm(true) }}
                          title="แก้ไข"
                        >
                          <Pencil size={13} />
                        </button>
                        <button
                          className="admin-btn admin-btn-danger admin-btn-icon admin-btn-sm"
                          onClick={() => setDeleteId(job.id)}
                          title="ลบ"
                        >
                          <Trash2 size={13} />
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

      <AdminModal
        open={showForm}
        onClose={() => { setShowForm(false); setEditItem(undefined) }}
        title={editItem ? 'แก้ไขตำแหน่งงาน' : 'เพิ่มตำแหน่งงานใหม่'}
        size="lg"
      >
        <JobForm
          job={editItem}
          onSave={handleSave}
          onCancel={() => { setShowForm(false); setEditItem(undefined) }}
        />
      </AdminModal>

      <AdminModal
        open={!!deleteId}
        onClose={() => setDeleteId(null)}
        title="ยืนยันการลบ"
        size="sm"
        footer={
          <>
            <button onClick={() => setDeleteId(null)} className="admin-btn admin-btn-ghost">ยกเลิก</button>
            <button onClick={() => deleteId && handleDelete(deleteId)} className="admin-btn admin-btn-danger">
              ลบตำแหน่งงาน
            </button>
          </>
        }
      >
        <p style={{ fontSize: 15, color: '#334155' }}>คุณต้องการลบตำแหน่งงานนี้ใช่หรือไม่?</p>
      </AdminModal>
    </>
  )
}
