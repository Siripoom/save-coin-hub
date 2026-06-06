import CareersHero from "@/components/careers/CareersHero"
import CareersWorkCulture from "@/components/careers/CareersWorkCulture"
import CareersJobs from "@/components/careers/CareersJobs"
import CareersApplyForm from "@/components/careers/CareersApplyForm"
import CareersWhyJoin from "@/components/careers/CareersWhyJoin"
import CareersCta from "@/components/careers/CareersCta"
import { getPublishedJobPostings } from "@/lib/data/public-content"

export const dynamic = "force-dynamic"

export default async function CareersPage() {
  const jobs = await getPublishedJobPostings()
  return (
    <main className="safe-careers-page">
      <CareersHero />
      <CareersWorkCulture />
      <CareersJobs jobs={jobs} />
      <CareersApplyForm />
      <CareersWhyJoin />
      <CareersCta />
    </main>
  )
}
