import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export async function verifySession(): Promise<void> {
  const cookieStore = await cookies()
  const session = cookieStore.get('admin_session')?.value
  if (!session || session !== process.env.ADMIN_SESSION_TOKEN) {
    redirect('/admin/login')
  }
}

export async function createSession(): Promise<void> {
  const cookieStore = await cookies()
  cookieStore.set('admin_session', process.env.ADMIN_SESSION_TOKEN!, {
    httpOnly: true,
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 7, // 7 days
  })
}

export async function destroySession(): Promise<void> {
  const cookieStore = await cookies()
  cookieStore.delete('admin_session')
}
