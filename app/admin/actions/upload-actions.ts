'use server'

import { randomUUID } from 'crypto'
import { verifySession } from '@/lib/auth'
import { getBucket } from '@/lib/firebase/admin'

// Folders the admin is allowed to write to (prevents arbitrary storage paths).
const ALLOWED_FOLDERS = ['blog-covers', 'portfolio-images'] as const
type Folder = (typeof ALLOWED_FOLDERS)[number]

const MAX_BYTES = 5 * 1024 * 1024 // 5MB — matches the upload UI copy

/**
 * Uploads an image to Firebase Storage via the Admin SDK and returns a public download URL.
 * The file carries a `firebaseStorageDownloadTokens` value, so the resulting URL is publicly
 * readable regardless of Storage security rules (token-based access) — no client Firebase SDK.
 */
export async function uploadImage(formData: FormData): Promise<{ url: string }> {
  await verifySession()

  const file = formData.get('file')
  const folder = formData.get('folder') as Folder

  if (!(file instanceof File)) throw new Error('ไม่พบไฟล์')
  if (!ALLOWED_FOLDERS.includes(folder)) throw new Error('ปลายทางไม่ถูกต้อง')
  if (!file.type.startsWith('image/')) throw new Error('รองรับเฉพาะไฟล์รูปภาพ')
  if (file.size > MAX_BYTES) throw new Error('ไฟล์ใหญ่เกิน 5MB')

  const ext = file.name.includes('.') ? file.name.split('.').pop() : 'jpg'
  const path = `${folder}/${Date.now()}-${randomUUID()}.${ext}`
  const token = randomUUID()
  const buffer = Buffer.from(await file.arrayBuffer())

  const bucket = getBucket()
  await bucket.file(path).save(buffer, {
    contentType: file.type,
    metadata: { metadata: { firebaseStorageDownloadTokens: token } },
  })

  const encodedPath = encodeURIComponent(path)
  const url = `https://firebasestorage.googleapis.com/v0/b/${bucket.name}/o/${encodedPath}?alt=media&token=${token}`
  return { url }
}
