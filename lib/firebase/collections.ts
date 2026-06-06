// Firestore collection names — single source of truth, shared by repos and the seed script.
export const COLLECTIONS = {
  blogPosts: 'blog_posts',
  promotions: 'promotions',
  portfolioItems: 'portfolio_items',
  jobApplications: 'job_applications',
  jobPostings: 'job_postings',
} as const
