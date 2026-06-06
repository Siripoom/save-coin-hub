'use server'

import { revalidatePath } from 'next/cache'
import { verifySession } from '@/lib/auth'
import { blogRepo } from '@/lib/firebase/repos'
import type { BlogPost } from '@/lib/admin/types'

function revalidateBlog() {
  revalidatePath('/admin/blog')
  revalidatePath('/')
  revalidatePath('/blog')
}

export async function saveBlogPost(post: BlogPost): Promise<BlogPost> {
  await verifySession()
  const existing = await blogRepo.getById(post.id)
  const saved = existing ? await blogRepo.update(post.id, post) : await blogRepo.create(post)
  revalidateBlog()
  return saved
}

export async function deleteBlogPost(id: string): Promise<void> {
  await verifySession()
  await blogRepo.remove(id)
  revalidateBlog()
}
