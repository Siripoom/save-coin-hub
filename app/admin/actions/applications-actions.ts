'use server'

import { revalidatePath } from 'next/cache'
import { verifySession } from '@/lib/auth'
import { applicationRepo } from '@/lib/firebase/repos'
import type { ApplicationStatus, JobApplication } from '@/lib/admin/types'

export async function updateApplicationStatus(
  id: string,
  status: ApplicationStatus
): Promise<JobApplication> {
  await verifySession()
  const saved = await applicationRepo.update(id, { status })
  revalidatePath('/admin/applications')
  return saved
}

export async function deleteApplication(id: string): Promise<void> {
  await verifySession()
  await applicationRepo.remove(id)
  revalidatePath('/admin/applications')
}
