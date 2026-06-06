'use client'

import { useState } from 'react'
import { Upload } from 'lucide-react'
import TiptapEditor from './TiptapEditor'
import { uploadImage } from '@/app/admin/actions/upload-actions'
import type { BlogPost, BlogStatus } from '@/lib/admin/types'

const CATEGORIES = ['คู่มือการลงทุน', 'การเงินและการลงทุน', 'เคล็ดลับธุรกิจ', 'การดูแลรักษา', 'แนวโน้มตลาด', 'ข่าวสาร']

interface Props {
  post?: BlogPost
  onSave: (p: BlogPost) => void
  onCancel: () => void
}

export default function BlogForm({ post, onSave, onCancel }: Props) {
  const [form, setForm] = useState<Omit<BlogPost, 'id'>>({
    title: post?.title ?? '',
    slug: post?.slug ?? '',
    category: post?.category ?? CATEGORIES[0],
    excerpt: post?.excerpt ?? '',
    content: post?.content ?? '<p>เริ่มเขียนบทความที่นี่...</p>',
    authorName: post?.authorName ?? 'ทีมงาน SAFE',
    publishedAt: post?.publishedAt ?? new Date().toISOString().split('T')[0],
    status: post?.status ?? 'draft',
    coverImageUrl: post?.coverImageUrl ?? '',
    readTime: post?.readTime ?? '',
    metaTitle: post?.metaTitle ?? '',
    metaDescription: post?.metaDescription ?? '',
  })
  const [coverFileName, setCoverFileName] = useState('')
  const [uploading, setUploading] = useState(false)

  const set = (key: keyof typeof form, value: unknown) =>
    setForm(prev => ({ ...prev, [key]: value }))

  const handleCoverUpload = async (file: File) => {
    setCoverFileName(file.name)
    setUploading(true)
    try {
      const fd = new FormData()
      fd.append('file', file)
      fd.append('folder', 'blog-covers')
      const { url } = await uploadImage(fd)
      set('coverImageUrl', url)
    } catch (err) {
      setCoverFileName('')
      alert(err instanceof Error ? err.message : 'อัปโหลดไม่สำเร็จ')
    } finally {
      setUploading(false)
    }
  }

  const handleTitleChange = (title: string) => {
    setForm(prev => ({
      ...prev,
      title,
      slug: prev.slug || title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '').slice(0, 60),
    }))
  }

  // Pass status directly into the payload to avoid reading stale async state
  const save = (status: BlogStatus) =>
    onSave({ id: post?.id ?? `blog-${Date.now()}`, ...form, status })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    save(form.status)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="admin-form-grid">
        <div className="admin-form-group full">
          <label>ชื่อบทความ *</label>
          <input
            required
            value={form.title}
            onChange={e => handleTitleChange(e.target.value)}
            placeholder="ชื่อบทความ"
          />
        </div>

        <div className="admin-form-group full">
          <label>Slug (URL)</label>
          <input
            value={form.slug}
            onChange={e => set('slug', e.target.value)}
            placeholder="url-slug"
          />
          <span className="admin-form-hint">จะถูกใช้เป็น URL ของบทความ</span>
        </div>

        <div className="admin-form-group">
          <label>หมวดหมู่</label>
          <select value={form.category} onChange={e => set('category', e.target.value)}>
            {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>

        <div className="admin-form-group">
          <label>ผู้เขียน</label>
          <input
            value={form.authorName}
            onChange={e => set('authorName', e.target.value)}
          />
        </div>

        <div className="admin-form-group">
          <label>วันที่เผยแพร่</label>
          <input
            type="date"
            value={form.publishedAt}
            onChange={e => set('publishedAt', e.target.value)}
          />
        </div>

        <div className="admin-form-group">
          <label>สถานะ</label>
          <select value={form.status} onChange={e => set('status', e.target.value as BlogStatus)}>
            <option value="draft">Draft</option>
            <option value="published">Published</option>
          </select>
        </div>

        <div className="admin-form-group full">
          <label>สรุปย่อ (Excerpt)</label>
          <textarea
            value={form.excerpt}
            onChange={e => set('excerpt', e.target.value)}
            placeholder="สรุปเนื้อหาบทความสั้นๆ ใช้แสดงในรายการบทความ..."
            rows={2}
          />
        </div>

        <div className="admin-form-group full">
          <label>รูปภาพปก</label>
          <label className="admin-upload-box">
            <Upload size={24} style={{ color: '#0b73ef', margin: '0 auto' }} />
            <strong>{uploading ? 'กำลังอัปโหลด...' : (coverFileName || 'คลิกเพื่ออัปโหลดรูปปก')}</strong>
            <span style={{ fontSize: 13 }}>แนะนำขนาด 1200×630px</span>
            <input
              type="file"
              accept="image/*"
              disabled={uploading}
              onChange={e => {
                const file = e.target.files?.[0]
                if (file) handleCoverUpload(file)
              }}
            />
          </label>
          {form.coverImageUrl && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={form.coverImageUrl} alt="ตัวอย่างรูปปก" style={{ marginTop: 8, maxHeight: 120, borderRadius: 8 }} />
          )}
        </div>

        <div className="admin-form-group full">
          <label>Meta Title</label>
          <input
            value={form.metaTitle ?? ''}
            onChange={e => set('metaTitle', e.target.value)}
            placeholder="หัวข้อสำหรับ SEO (ถ้าแตกต่างจากชื่อบทความ)"
          />
        </div>

        <div className="admin-form-group full">
          <label>Meta Description</label>
          <textarea
            value={form.metaDescription ?? ''}
            onChange={e => set('metaDescription', e.target.value)}
            placeholder="คำอธิบายสำหรับ SEO (150–160 ตัวอักษร)"
            rows={2}
          />
        </div>

        <div className="admin-form-group full">
          <label>เนื้อหาบทความ</label>
          <TiptapEditor
            content={form.content}
            onChange={html => set('content', html)}
          />
        </div>
      </div>

      <div className="admin-modal-footer">
        <button type="button" onClick={onCancel} className="admin-btn admin-btn-ghost">ยกเลิก</button>
        <button
          type="button"
          onClick={() => save('draft')}
          className="admin-btn admin-btn-outline admin-btn-sm"
        >
          บันทึก Draft
        </button>
        <button
          type="button"
          onClick={() => save('published')}
          className="admin-btn admin-btn-primary"
        >
          {post ? 'บันทึกการแก้ไข' : 'เผยแพร่บทความ'}
        </button>
      </div>
    </form>
  )
}
