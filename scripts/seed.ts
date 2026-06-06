/**
 * One-off seed: migrate the existing mock data into Firestore.
 * Run with:  npm run seed
 *
 * Standalone Node script (not part of the Next.js bundle), so it initializes its own
 * Admin app instead of importing lib/firebase/admin.ts (that module is `server-only`).
 */
import { cert, getApps, initializeApp } from 'firebase-admin/app'
import { FieldValue, getFirestore } from 'firebase-admin/firestore'
import { COLLECTIONS } from '../lib/firebase/collections'
import { mockBlogPosts } from '../lib/admin/blog-data'
import { mockPromotions } from '../lib/admin/promotions-data'
import { mockPortfolio } from '../lib/admin/portfolio-data'
import { mockApplications } from '../lib/admin/applications-data'
import { mockJobPostings } from '../lib/admin/jobs-data'

// Load .env.local (Node 20.12+). Harmless if vars are already present in the environment.
try {
  process.loadEnvFile('.env.local')
} catch {
  /* env already set, or file missing */
}

const privateKey = process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n')
if (!process.env.FIREBASE_PROJECT_ID || !process.env.FIREBASE_CLIENT_EMAIL || !privateKey) {
  console.error('Missing Firebase Admin credentials in .env.local')
  process.exit(1)
}

if (!getApps().length) {
  initializeApp({
    credential: cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey,
    }),
  })
}

const db = getFirestore()
db.settings({ ignoreUndefinedProperties: true })

async function seedCollection<T extends { id: string }>(name: string, rows: T[]) {
  const batch = db.batch()
  for (const row of rows) {
    const { id, ...data } = row
    batch.set(db.collection(name).doc(id), {
      ...data,
      createdAt: FieldValue.serverTimestamp(),
      updatedAt: FieldValue.serverTimestamp(),
    })
  }
  await batch.commit()
  console.log(`  ✓ ${name}: ${rows.length} docs`)
}

async function main() {
  console.log('Seeding Firestore…')
  await seedCollection(COLLECTIONS.blogPosts, mockBlogPosts)
  await seedCollection(COLLECTIONS.promotions, mockPromotions)
  await seedCollection(COLLECTIONS.portfolioItems, mockPortfolio)
  await seedCollection(COLLECTIONS.jobApplications, mockApplications)
  await seedCollection(COLLECTIONS.jobPostings, mockJobPostings)
  console.log('Done.')
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
