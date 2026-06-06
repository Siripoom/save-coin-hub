'use client'

import { useActionState } from 'react'
import { loginAction } from '@/app/admin/actions/auth-actions'
import { AlertCircle, Eye, EyeOff, Lock, Mail } from 'lucide-react'
import { useState } from 'react'

const initialState = null

export default function LoginForm() {
  const [state, formAction, isPending] = useActionState(loginAction, initialState)
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="admin-login-page">
      <div className="admin-login-card">
        <div className="admin-login-logo">SAFE</div>
        <p className="admin-login-sub">ระบบจัดการหลังบ้าน · Admin Dashboard</p>

        {state?.error && (
          <div className="admin-login-error">
            <AlertCircle size={16} />
            {state.error}
          </div>
        )}

        <form action={formAction} style={{ width: '100%' }}>
          <div className="admin-form-group" style={{ marginBottom: 14 }}>
            <label htmlFor="email">อีเมล</label>
            <div style={{ position: 'relative', width: '100%' }}>
              <Mail
                size={16}
                style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: '#64748b', pointerEvents: 'none' }}
              />
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="admin@example.com"
                style={{ paddingLeft: 38 }}
                autoComplete="username"
              />
            </div>
          </div>

          <div className="admin-form-group" style={{ marginBottom: 24 }}>
            <label htmlFor="password">รหัสผ่าน</label>
            <div style={{ position: 'relative', width: '100%' }}>
              <Lock
                size={16}
                style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: '#64748b', pointerEvents: 'none' }}
              />
              <input
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                required
                placeholder="••••••••"
                style={{ paddingLeft: 38, paddingRight: 42 }}
                autoComplete="current-password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(p => !p)}
                style={{
                  position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)',
                  background: 'none', border: 'none', cursor: 'pointer', color: '#64748b', padding: 0,
                  display: 'flex', alignItems: 'center',
                }}
                aria-label={showPassword ? 'ซ่อนรหัสผ่าน' : 'แสดงรหัสผ่าน'}
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={isPending}
            className="admin-btn admin-btn-primary"
            style={{ width: '100%', height: 46, fontSize: 16 }}
          >
            {isPending ? 'กำลังเข้าสู่ระบบ...' : 'เข้าสู่ระบบ'}
          </button>
        </form>

        <p style={{ textAlign: 'center', marginTop: 20, fontSize: 13, color: '#94a3b8' }}>
          เฉพาะผู้ดูแลระบบที่ได้รับอนุญาตเท่านั้น
        </p>
      </div>
    </div>
  )
}
