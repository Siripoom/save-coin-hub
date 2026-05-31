import CareersHero from "@/components/careers/CareersHero"
import CareersWorkCulture from "@/components/careers/CareersWorkCulture"
import CareersJobs from "@/components/careers/CareersJobs"
import CareersApplyForm from "@/components/careers/CareersApplyForm"
import CareersWhyJoin from "@/components/careers/CareersWhyJoin"
import CareersCta from "@/components/careers/CareersCta"

export default function CareersPage() {
  return (
    <main className="safe-careers-page">
      <CareersHero />
      <CareersWorkCulture />
      <CareersJobs />
      <CareersApplyForm />
      <CareersWhyJoin />
      <CareersCta />
    </main>
  )
}
