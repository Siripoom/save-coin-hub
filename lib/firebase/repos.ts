import 'server-only'
import { FieldValue, Timestamp, type DocumentSnapshot } from 'firebase-admin/firestore'
import { getDb } from './admin'
import { COLLECTIONS } from './collections'
import type {
  BlogPost,
  JobApplication,
  JobPosting,
  PortfolioItem,
  Promotion,
} from '@/lib/admin/types'

type WithId = { id: string }

function isoOf(value: unknown): string | undefined {
  return value instanceof Timestamp ? value.toDate().toISOString() : undefined
}

// Generic Firestore repository. Document id == entity id (mock ids like "blog-001" are preserved).
// createdAt/updatedAt are stored as server Timestamps and read back as ISO strings.
function makeRepo<T extends WithId>(collection: string) {
  // Resolved lazily per call so importing this module never initializes Firebase.
  const col = () => getDb().collection(collection)

  function fromDoc(doc: DocumentSnapshot): T {
    const data = doc.data() ?? {}
    return {
      ...data,
      id: doc.id,
      createdAt: isoOf(data.createdAt),
      updatedAt: isoOf(data.updatedAt),
    } as unknown as T
  }

  return {
    fromDoc,

    /** All documents, newest first. */
    async list(): Promise<T[]> {
      const snap = await col().orderBy('createdAt', 'desc').get()
      return snap.docs.map(fromDoc)
    },

    async getById(id: string): Promise<T | null> {
      const doc = await col().doc(id).get()
      return doc.exists ? fromDoc(doc) : null
    },

    /** Create with a caller-supplied id (forms always provide one), else auto-generated. */
    async create(input: T): Promise<T> {
      const data = { ...input } as Record<string, unknown>
      delete data.id
      delete data.createdAt
      delete data.updatedAt

      const ref = input.id ? col().doc(input.id) : col().doc()
      await ref.set({
        ...data,
        createdAt: FieldValue.serverTimestamp(),
        updatedAt: FieldValue.serverTimestamp(),
      })
      return fromDoc(await ref.get())
    },

    async update(id: string, input: Partial<T>): Promise<T> {
      const data = { ...input } as Record<string, unknown>
      delete data.id
      delete data.createdAt // never overwrite the original creation time

      await col().doc(id).set(
        { ...data, updatedAt: FieldValue.serverTimestamp() },
        { merge: true }
      )
      return fromDoc(await col().doc(id).get())
    },

    async remove(id: string): Promise<void> {
      await col().doc(id).delete()
    },
  }
}

export const blogRepo = makeRepo<BlogPost>(COLLECTIONS.blogPosts)
export const promotionRepo = makeRepo<Promotion>(COLLECTIONS.promotions)
export const portfolioRepo = makeRepo<PortfolioItem>(COLLECTIONS.portfolioItems)
export const applicationRepo = makeRepo<JobApplication>(COLLECTIONS.jobApplications)
export const jobPostingRepo = makeRepo<JobPosting>(COLLECTIONS.jobPostings)
