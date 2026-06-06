'use client'

import { useState, useTransition } from 'react'
import { useRouter } from 'next/navigation'
import { Plus, Pencil, Trash2, Search, ToggleLeft, ToggleRight } from 'lucide-react'
import AdminBadge from '@/components/admin/ui/AdminBadge'
import AdminModal from '@/components/admin/ui/AdminModal'
import PromotionForm from './PromotionForm'
import { savePromotion, deletePromotion } from '@/app/admin/actions/promotions-actions'
import type { Promotion, PromotionStatus } from '@/lib/admin/types'

export default function PromotionsAdminTable({ initialData }: { initialData: Promotion[] }) {
  const router = useRouter()
  const [, startTransition] = useTransition()
  const [items, setItems] = useState(initialData)
  const [search, setSearch] = useState('')
  const [editItem, setEditItem] = useState<Promotion | undefined>()
  const [showForm, setShowForm] = useState(false)
  const [deleteId, setDeleteId] = useState<string | null>(null)

  // Re-sync with authoritative server data after router.refresh() (render-phase reset)
  const [prevInitial, setPrevInitial] = useState(initialData)
  if (prevInitial !== initialData) {
    setPrevInitial(initialData)
    setItems(initialData)
  }

  const filtered = items.filter(i =>
    !search || i.title.toLowerCase().includes(search.toLowerCase())
  )

  const persist = (item: Promotion) => startTransition(async () => {
    await savePromotion(item)
    router.refresh()
  })

  const handleSave = (item: Promotion) => {
    setItems(prev =>
      prev.find(i => i.id === item.id)
        ? prev.map(i => i.id === item.id ? item : i)
        : [item, ...prev]
    )
    setShowForm(false)
    setEditItem(undefined)
    persist(item)
  }

  const handleDelete = (id: string) => {
    setItems(prev => prev.filter(i => i.id !== id))
    setDeleteId(null)
    startTransition(async () => {
      await deletePromotion(id)
      router.refresh()
    })
  }

  const toggleStatus = (id: string) => {
    const target = items.find(i => i.id === id)
    if (!target) return
    const next: PromotionStatus = target.status === 'active' ? 'scheduled' : 'active'
    const updated = { ...target, status: next }
    setItems(prev => prev.map(i => i.id === id ? updated : i))
    persist(updated)
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
                placeholder="ค้นหาชื่อโปรโมชั่น..."
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
            เพิ่มโปรโมชั่น
          </button>
        </div>

        <div className="admin-table-wrap">
          <table className="admin-table">
            <thead>
              <tr>
                <th>ชื่อโปรโมชั่น</th>
                <th>Badge</th>
                <th>วันที่เริ่มต้น</th>
                <th>วันที่สิ้นสุด</th>
                <th>สถานะ</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 ? (
                <tr><td colSpan={6} className="admin-empty">ไม่พบรายการ</td></tr>
              ) : (
                filtered.map(item => (
                  <tr key={item.id}>
                    <td>
                      <div style={{ fontWeight: 700, color: '#0f172a' }}>{item.title}</div>
                      <div style={{ fontSize: 12, color: '#64748b', marginTop: 2, maxWidth: 300 }}>
                        {item.description.slice(0, 60)}...
                      </div>
                    </td>
                    <td>
                      {item.badge ? (
                        <span className="admin-badge admin-badge-blue">{item.badge}</span>
                      ) : (
                        <span style={{ color: '#94a3b8', fontSize: 13 }}>–</span>
                      )}
                    </td>
                    <td style={{ color: '#64748b' }}>{item.startDate}</td>
                    <td style={{ color: '#64748b' }}>{item.endDate}</td>
                    <td><AdminBadge type="promotion" status={item.status} /></td>
                    <td>
                      <div className="admin-table-actions">
                        <button
                          className="admin-btn admin-btn-ghost admin-btn-icon admin-btn-sm"
                          onClick={() => toggleStatus(item.id)}
                          title={item.status === 'active' ? 'ปิดการแสดงผล' : 'เปิดการแสดงผล'}
                        >
                          {item.status === 'active'
                            ? <ToggleRight size={16} style={{ color: '#22c55e' }} />
                            : <ToggleLeft size={16} style={{ color: '#94a3b8' }} />
                          }
                        </button>
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

      <AdminModal
        open={showForm}
        onClose={() => { setShowForm(false); setEditItem(undefined) }}
        title={editItem ? 'แก้ไขโปรโมชั่น' : 'เพิ่มโปรโมชั่นใหม่'}
        size="lg"
      >
        <PromotionForm
          promo={editItem}
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
              ลบโปรโมชั่น
            </button>
          </>
        }
      >
        <p style={{ fontSize: 15, color: '#334155' }}>คุณต้องการลบโปรโมชั่นนี้ใช่หรือไม่?</p>
      </AdminModal>
    </>
  )
}
