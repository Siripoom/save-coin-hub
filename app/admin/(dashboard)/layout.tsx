import { verifySession } from '@/lib/auth'
import DashboardShell from '@/components/admin/layout/DashboardShell'

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  await verifySession()

  return <DashboardShell>{children}</DashboardShell>
}
