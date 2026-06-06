'use server'

import { revalidatePath } from 'next/cache'
import { verifySession } from '@/lib/auth'
import { jobPostingRepo } from '@/lib/firebase/repos'
import type { JobPosting } from '@/lib/admin/types'

function revalidateJobs() {
  revalidatePath('/admin/jobs')
  revalidatePath('/careers')
}

export async function saveJobPosting(job: JobPosting): Promise<JobPosting> {
  await verifySession()
  const existing = await jobPostingRepo.getById(job.id)
  const saved = existing
    ? await jobPostingRepo.update(job.id, job)
    : await jobPostingRepo.create(job)
  revalidateJobs()
  return saved
}

export async function deleteJobPosting(id: string): Promise<void> {
  await verifySession()
  await jobPostingRepo.remove(id)
  revalidateJobs()
}
