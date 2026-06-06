'use client'

import { useEffect } from 'react'
import { X } from 'lucide-react'

interface AdminModalProps {
  open: boolean
  onClose: () => void
  title: string
  children: React.ReactNode
  size?: 'sm' | 'md' | 'lg'
  footer?: React.ReactNode
}

export default function AdminModal({
  open,
  onClose,
  title,
  children,
  size = 'md',
  footer,
}: AdminModalProps) {
  useEffect(() => {
    if (!open) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  if (!open) return null

  const sizeClass = size === 'lg' ? 'admin-modal-lg' : size === 'sm' ? 'admin-modal-sm' : ''

  return (
    <div className="admin-modal-overlay" onClick={onClose}>
      <div
        className={`admin-modal ${sizeClass}`}
        onClick={e => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="admin-modal-title"
      >
        <div className="admin-modal-header">
          <h2 id="admin-modal-title" className="admin-modal-title">{title}</h2>
          <button
            onClick={onClose}
            className="admin-btn admin-btn-ghost admin-btn-icon admin-btn-sm"
            aria-label="ปิด"
          >
            <X size={16} />
          </button>
        </div>

        <div>{children}</div>

        {footer && <div className="admin-modal-footer">{footer}</div>}
      </div>
    </div>
  )
}
