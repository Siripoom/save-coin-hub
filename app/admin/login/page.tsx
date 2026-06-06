import type { Metadata } from 'next'
import LoginForm from '@/components/admin/login/LoginForm'

export const metadata: Metadata = {
  title: 'Admin Login · SAFE',
}

export default function LoginPage() {
  return <LoginForm />
}
