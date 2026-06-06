'use client'

import { useState, useTransition } from 'react'
import { useRouter } from 'next/navigation'
import { Plus, Pencil, Trash2, Search } from 'lucide-react'
import AdminBadge from '@/components/admin/ui/AdminBadge'
import AdminModal from '@/components/admin/ui/AdminModal'
import BlogForm from './BlogForm'
import { saveBlogPost, deleteBlogPost } from '@/app/admin/actions/blog-actions'
import type { BlogPost } from '@/lib/admin/types'

export default function BlogAdminTable({ initialData }: { initialData: BlogPost[] }) {
  const router = useRouter()
  const [, startTransition] = useTransition()
  const [items, setItems] = useState(initialData)
  const [search, setSearch] = useState('')
  const [editPost, setEditPost] = useState<BlogPost | undefined>()
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
    i.category.toLowerCase().includes(search.toLowerCase())
  )

  const handleSave = (post: BlogPost) => {
    // Optimistic update, then persist and re-sync from Firestore
    setItems(prev =>
      prev.find(i => i.id === post.id)
        ? prev.map(i => i.id === post.id ? post : i)
        : [post, ...prev]
    )
    setShowForm(false)
    setEditPost(undefined)
    startTransition(async () => {
      await saveBlogPost(post)
      router.refresh()
    })
  }

  const handleDelete = (id: string) => {
    setItems(prev => prev.filter(i => i.id !== id))
    setDeleteId(null)
    startTransition(async () => {
      await deleteBlogPost(id)
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
                placeholder="ค้นหาชื่อ / หมวดหมู่..."
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
            </div>
          </div>
          <button
            className="admin-btn admin-btn-primary admin-btn-sm"
            onClick={() => { setEditPost(undefined); setShowForm(true) }}
          >
            <Plus size={14} />
            เพิ่มบทความ
          </button>
        </div>

        <div className="admin-table-wrap">
          <table className="admin-table">
            <thead>
              <tr>
                <th>ชื่อบทความ</th>
                <th>หมวดหมู่</th>
                <th>ผู้เขียน</th>
                <th>วันที่เผยแพร่</th>
                <th>สถานะ</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 ? (
                <tr><td colSpan={6} className="admin-empty">ไม่พบรายการ</td></tr>
              ) : (
                filtered.map(post => (
                  <tr key={post.id}>
                    <td>
                      <div style={{ fontWeight: 700, color: '#0f172a', maxWidth: 320 }}>{post.title}</div>
                      <div style={{ fontSize: 12, color: '#64748b', marginTop: 2 }}>/{post.slug}</div>
                    </td>
                    <td>
                      <span className="admin-badge admin-badge-gray">{post.category}</span>
                    </td>
                    <td style={{ color: '#64748b' }}>{post.authorName}</td>
                    <td style={{ color: '#64748b' }}>{post.publishedAt}</td>
                    <td><AdminBadge type="blog" status={post.status} /></td>
                    <td>
                      <div className="admin-table-actions">
                        <button
                          className="admin-btn admin-btn-ghost admin-btn-icon admin-btn-sm"
                          onClick={() => { setEditPost(post); setShowForm(true) }}
                          title="แก้ไข"
                        >
                          <Pencil size={13} />
                        </button>
                        <button
                          className="admin-btn admin-btn-danger admin-btn-icon admin-btn-sm"
                          onClick={() => setDeleteId(post.id)}
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

      {/* Add/Edit modal — lg to fit Tiptap */}
      <AdminModal
        open={showForm}
        onClose={() => { setShowForm(false); setEditPost(undefined) }}
        title={editPost ? 'แก้ไขบทความ' : 'เพิ่มบทความใหม่'}
        size="lg"
      >
        <BlogForm
          post={editPost}
          onSave={handleSave}
          onCancel={() => { setShowForm(false); setEditPost(undefined) }}
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
              ลบบทความ
            </button>
          </>
        }
      >
        <p style={{ fontSize: 15, color: '#334155' }}>คุณต้องการลบบทความนี้ใช่หรือไม่? การกระทำนี้ไม่สามารถย้อนกลับได้</p>
      </AdminModal>
    </>
  )
}
