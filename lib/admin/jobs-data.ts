import type { JobPosting } from './types'

// Seed data for job postings — previously hardcoded in components/careers/CareersJobs.tsx.
export const mockJobPostings: JobPosting[] = [
  { id: 'job-001', icon: '📊', title: 'เจ้าหน้าที่การตลาด', tags: ['Full time', 'Offline'], dept: 'แผนกการตลาด', desc: 'วางแผนและดำเนินงานด้านการตลาดออนไลน์และออฟไลน์ เพื่อสร้างการรับรู้และเพิ่มยอดขายให้บริษัท', status: 'published' },
  { id: 'job-002', icon: '🗂️', title: 'แอดมินประสานงาน', tags: ['Full time', 'Online'], dept: 'แผนกประสานงาน', desc: 'ดูแลการติดต่อประสานงานภายในองค์กรและลูกค้า จัดการเอกสารและข้อมูลต่าง ๆ ให้เป็นระบบ', status: 'published' },
  { id: 'job-003', icon: '🔧', title: 'ช่างเทคนิคติดตั้ง', tags: ['Full time', 'Offline'], dept: 'แผนกบริการและติดตั้ง', desc: 'ติดตั้งและบำรุงรักษาตู้จำหน่ายสินค้าอัตโนมัติ ตรวจสอบระบบ และให้บริการหน้างาน', status: 'published' },
  { id: 'job-004', icon: '🤝', title: 'ฝ่ายขาย', tags: ['Full time', 'Offline'], dept: 'แผนกฝ่ายขาย', desc: 'นำเสนอสินค้าและบริการ ดูแลลูกค้า และปิดการขาย เพื่อบรรลุเป้าหมายของบริษัท', status: 'published' },
  { id: 'job-005', icon: '🎧', title: 'เจ้าหน้าที่บริการลูกค้า', tags: ['Full time', 'Online'], dept: 'แผนกบริการลูกค้า', desc: 'ตอบคำถาม ให้คำแนะนำ และแก้ไขปัญหาลูกค้าผ่านช่องทางต่าง ๆ อย่างรวดเร็วและเป็นมืออาชีพ', status: 'published' },
  { id: 'job-006', icon: '🎬', title: 'คอนเทนต์ครีเอเตอร์', tags: ['Part time', 'Online'], dept: 'แผนกการตลาด', desc: 'สร้างสรรค์คอนเทนต์สำหรับสื่อออนไลน์ วิดีโอ และกราฟิก เพื่อสื่อสารแบรนด์ให้เข้าถึงกลุ่มเป้าหมาย', status: 'published' },
]
