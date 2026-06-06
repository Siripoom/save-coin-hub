// Shared content types. Persisted in Firestore via the Admin SDK (lib/firebase).
// createdAt/updatedAt are ISO strings once read back from Firestore Timestamps;
// they are optional because admin forms build objects without them (repos set them on write).

export type ApplicationStatus = 'pending' | 'reviewing' | 'interviewing' | 'rejected'
export type PortfolioStatus   = 'published' | 'draft'
export type BlogStatus        = 'published' | 'draft'
export type PromotionStatus   = 'active' | 'expired' | 'scheduled'
export type JobPostingStatus  = 'published' | 'draft'

export interface Timestamps {
  createdAt?: string // ISO string
  updatedAt?: string // ISO string
}

export interface JobApplication extends Timestamps {
  id: string
  name: string
  phone: string
  email: string
  position: string
  jobType: 'fulltime' | 'parttime'
  workMode: 'onsite' | 'online'
  experience: string
  preferredTime: string
  appliedAt: string // ISO date string
  status: ApplicationStatus
  notes?: string
}

export interface PortfolioItem extends Timestamps {
  id: string
  name: string
  type: 'water' | 'coffee' | 'ice' | 'mixed'
  location: string
  machineCount: number
  installDate: string // YYYY-MM-DD
  imageUrl?: string
  status: PortfolioStatus
  description: string
}

export interface BlogPost extends Timestamps {
  id: string
  title: string
  slug: string
  category: string
  excerpt: string
  content: string // HTML from Tiptap
  authorName: string
  publishedAt: string // YYYY-MM-DD
  status: BlogStatus
  coverImageUrl?: string
  readTime?: string // e.g. "8 นาทีในการอ่าน" — shown on public blog cards
  metaTitle?: string
  metaDescription?: string
}

export interface Promotion extends Timestamps {
  id: string
  title: string
  description: string
  badge?: string
  startDate: string // YYYY-MM-DD
  endDate: string   // YYYY-MM-DD
  status: PromotionStatus
  imageLabel: string
  // Presentational fields used by the public promotions grid
  gradient?: string  // Tailwind gradient stops, e.g. "from-blue-700 to-sky-400"
  eyebrow?: string   // small line above the headline
  headline?: string  // large multiline headline on the card banner
}

export interface JobPosting extends Timestamps {
  id: string
  icon: string        // emoji shown on the job card, e.g. "📊"
  title: string
  tags: string[]      // e.g. ["Full time", "Offline"]
  dept: string        // department, e.g. "แผนกการตลาด"
  desc: string
  status: JobPostingStatus
}
