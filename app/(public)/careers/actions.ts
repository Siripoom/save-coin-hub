'use server'

import { revalidatePath } from 'next/cache'
import { applicationRepo } from '@/lib/firebase/repos'
import type { JobApplication } from '@/lib/admin/types'

export type ApplyState = { ok: boolean; error?: string }

// PUBLIC action — no verifySession. Anyone can submit a job application.
// status and appliedAt are set server-side (never trusted from the client),
// and every field is validated/length-capped.
export async function submitApplication(
  _prev: ApplyState | null,
  formData: FormData
): Promise<ApplyState> {
  const str = (key: string) => String(formData.get(key) ?? '').trim()

  const name = str('name')
  const phone = str('phone')
  const email = str('email')
  const position = str('position') || 'ไม่ระบุตำแหน่ง'
  const experience = str('experience')
  const preferredTime = str('preferredTime') || '-'

  if (!name || name.length > 120) return { ok: false, error: 'กรุณากรอกชื่อ-นามสกุลให้ถูกต้อง' }
  if (!/^[0-9+\-\s()]{6,20}$/.test(phone)) return { ok: false, error: 'เบอร์โทรศัพท์ไม่ถูกต้อง' }
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) return { ok: false, error: 'อีเมลไม่ถูกต้อง' }

  const workMode: JobApplication['workMode'] =
    formData.get('work_mode') === 'offline' ? 'onsite' : 'online'
  const jobType: JobApplication['jobType'] =
    formData.get('job_type') === 'parttime' ? 'parttime' : 'fulltime'

  const application: JobApplication = {
    id: `app-${Date.now()}`,
    name,
    phone,
    email,
    position: position.slice(0, 160),
    jobType,
    workMode,
    experience: experience.slice(0, 2000),
    preferredTime,
    appliedAt: new Date().toISOString().slice(0, 10), // server-set
    status: 'pending', // server-set
  }

  await applicationRepo.create(application)
  revalidatePath('/admin/applications')
  return { ok: true }
}
