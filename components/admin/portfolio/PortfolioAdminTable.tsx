'use client'

import { useState, useTransition } from 'react'
import { useRouter } from 'next/navigation'
import { Plus, Pencil, Trash2, Search } from 'lucide-react'
import AdminBadge from '@/components/admin/ui/AdminBadge'
import AdminModal from '@/components/admin/ui/AdminModal'
import PortfolioForm from './PortfolioForm'
import { savePortfolioItem, deletePortfolioItem } from '@/app/admin/actions/portfolio-actions'
import type { PortfolioItem } from '@/lib/admin/types'

const TYPE_LABEL: Record<string, string> = {
  water: 'ตู้น้ำ', coffee: 'ตู้กาแฟ', ice: 'ตู้น้ำแข็ง', mixed: 'หลายประเภท',
}

export default function PortfolioAdminTable({ initialData }: { initialData: PortfolioItem[] }) {
  const router = useRouter()
  const [, startTransition] = useTransition()
  const [items, setItems] = useState(initialData)
  const [search, setSearch] = useState('')
  const [editItem, setEditItem] = useState<PortfolioItem | undefined>()
  const [showForm, setShowForm] = useState(false)
  const [deleteId, setDeleteId] = useState<string | null>(null)

  // Re-sync with authoritative server data after router.refresh() (render-phase reset)
  const [prevInitial, setPrevInitial] = useState(initialData)
  if (prevInitial !== initialData) {
    setPrevInitial(initialData)
    setItems(initialData)
  }

  const filtered = items.filter(i =>
    !search || i.name.toLowerCase().includes(search.toLowerCase()) || i.location.toLowerCase().includes(search.toLowerCase())
  )

  const handleSave = (item: PortfolioItem) => {
    setItems(prev =>
      prev.find(i => i.id === item.id)
        ? prev.map(i => i.id === item.id ? item : i)
        : [item, ...prev]
    )
    setShowForm(false)
    setEditItem(undefined)
    startTransition(async () => {
      await savePortfolioItem(item)
      router.refresh()
    })
  }

  const handleDelete = (id: string) => {
    setItems(prev => prev.filter(i => i.id !== id))
    setDeleteId(null)
    startTransition(async () => {
      await deletePortfolioItem(id)
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
                placeholder="ค้นหาชื่อ / สถานที่..."
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
            เพิ่มผลงาน
          </button>
        </div>

        <div className="admin-table-wrap">
          <table className="admin-table">
            <thead>
              <tr>
                <th>ชื่อผลงาน</th>
                <th>ประเภท</th>
                <th>สถานที่</th>
                <th>จำนวนเครื่อง</th>
                <th>วันที่ติดตั้ง</th>
                <th>สถานะ</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 ? (
                <tr><td colSpan={7} className="admin-empty">ไม่พบรายการ</td></tr>
              ) : (
                filtered.map(item => (
                  <tr key={item.id}>
                    <td style={{ fontWeight: 700, color: '#0f172a' }}>{item.name}</td>
                    <td>{TYPE_LABEL[item.type]}</td>
                    <td style={{ color: '#64748b' }}>{item.location}</td>
                    <td style={{ textAlign: 'center' }}>{item.machineCount} ตู้</td>
                    <td style={{ color: '#64748b' }}>{item.installDate}</td>
                    <td><AdminBadge type="portfolio" status={item.status} /></td>
                    <td>
                      <div className="admin-table-actions">
                        <button
                          className="admin-btn admin-btn-ghost admin-btn-icon admin-btn-sm"
                          onClick={() => { setEditItem(item); setShowForm(true) }}
                          title="แก้ไข"
                        >
                          <Pencil size={13} />
                        </button>
                        <button
                          className="admin-btn admin-btn-danger admin-btn-icon admin-btn-sm"
                          onClick={() => setDeleteId(item.id)}
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

      {/* Add/Edit modal */}
      <AdminModal
        open={showForm}
        onClose={() => { setShowForm(false); setEditItem(undefined) }}
        title={editItem ? 'แก้ไขผลงาน' : 'เพิ่มผลงานใหม่'}
        size="lg"
      >
        <PortfolioForm
          item={editItem}
          onSave={handleSave}
          onCancel={() => { setShowForm(false); setEditItem(undefined) }}
        />
      </AdminModal>

      {/* Confirm delete modal */}
      <AdminModal
        open={!!deleteId}
        onClose={() => setDeleteId(null)}
        title="ยืนยันการลบ"
        size="sm"
        footer={
          <>
            <button onClick={() => setDeleteId(null)} className="admin-btn admin-btn-ghost">ยกเลิก</button>
            <button onClick={() => deleteId && handleDelete(deleteId)} className="admin-btn admin-btn-danger">
              ลบผลงาน
            </button>
          </>
        }
      >
        <p style={{ fontSize: 15, color: '#334155' }}>คุณต้องการลบผลงานนี้ใช่หรือไม่? การกระทำนี้ไม่สามารถย้อนกลับได้</p>
      </AdminModal>
    </>
  )
}
