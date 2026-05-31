import WhyInvestHero from "@/components/why-invest/WhyInvestHero"
import ReasonsSection from "@/components/why-invest/ReasonsSection"
import BenefitsSection from "@/components/why-invest/BenefitsSection"
import ProcessSection from "@/components/why-invest/ProcessSection"
import TrustSection from "@/components/why-invest/TrustSection"
import WhyInvestCta from "@/components/why-invest/WhyInvestCta"

export default function WhyInvestPage() {
  return (
    <main className="bg-white text-slate-900">
      <WhyInvestHero />
      <ReasonsSection />
      <BenefitsSection />
      <ProcessSection />
      <TrustSection />
      <WhyInvestCta />
    </main>
  )
}
