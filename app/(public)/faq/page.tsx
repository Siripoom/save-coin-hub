import FaqHero from "@/components/faq/FaqHero"
import FaqAccordion from "@/components/faq/FaqAccordion"
import CtaSection from "@/components/home/CtaSection"

export default function FaqPage() {
  return (
    <main className="safe-faq-page">
      <FaqHero />
      <FaqAccordion />
      <CtaSection />
    </main>
  )
}
