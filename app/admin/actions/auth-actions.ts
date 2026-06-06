'use server'

import { createSession, destroySession } from '@/lib/auth'
import { redirect } from 'next/navigation'

export async function loginAction(
  _prevState: { error: string } | null,
  formData: FormData
): Promise<{ error: string }> {
  const email = formData.get('email') as string
  const password = formData.get('password') as string

  if (
    email === process.env.ADMIN_EMAIL &&
    password === process.env.ADMIN_PASSWORD
  ) {
    await createSession()
    redirect('/admin')
  }

  return { error: 'อีเมลหรือรหัสผ่านไม่ถูกต้อง' }
}

export async function logoutAction(): Promise<void> {
  await destroySession()
  redirect('/admin/login')
}
