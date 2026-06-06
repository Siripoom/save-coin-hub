import 'server-only'
import { cert, getApp, getApps, initializeApp, type App } from 'firebase-admin/app'
import { getFirestore, type Firestore } from 'firebase-admin/firestore'
import { getStorage } from 'firebase-admin/storage'

// Single source for the Firebase Admin SDK. Server-only — credentials never reach the client.
// All Firestore/Storage access goes through this; security rules stay deny-all because the
// Admin SDK bypasses them (it authenticates as a service account).
//
// Initialization is LAZY: importing this module never touches credentials, so `next build`
// (which imports the data layer for analysis) won't crash when env vars are absent. The app
// is created the first time getDb()/getBucket() is actually called at request time.

type StorageBucket = ReturnType<ReturnType<typeof getStorage>['bucket']>

let firestore: Firestore | undefined
let storageBucket: StorageBucket | undefined

function getAdminApp(): App {
  if (getApps().length) return getApp()

  const projectId = process.env.FIREBASE_PROJECT_ID
  const clientEmail = process.env.FIREBASE_CLIENT_EMAIL
  // Private keys are stored with escaped newlines in env; restore real newlines or auth fails.
  const privateKey = process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n')

  if (!projectId || !clientEmail || !privateKey) {
    throw new Error(
      'Missing Firebase Admin credentials. Set FIREBASE_PROJECT_ID, FIREBASE_CLIENT_EMAIL, and FIREBASE_PRIVATE_KEY.'
    )
  }

  return initializeApp({
    credential: cert({ projectId, clientEmail, privateKey }),
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  })
}

export function getDb(): Firestore {
  if (!firestore) {
    firestore = getFirestore(getAdminApp())
    // Admin forms may submit optional fields as undefined; drop them rather than throw.
    try {
      firestore.settings({ ignoreUndefinedProperties: true })
    } catch {
      // settings() throws if called more than once (HMR) — safe to ignore
    }
  }
  return firestore
}

export function getBucket(): StorageBucket {
  if (!storageBucket) storageBucket = getStorage(getAdminApp()).bucket()
  return storageBucket
}
