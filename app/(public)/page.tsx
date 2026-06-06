import HeroSection from "@/components/home/HeroSection"
import IntroSection from "@/components/home/IntroSection"
import ProductsSection from "@/components/home/ProductsSection"
import WhyInvestSection from "@/components/home/WhyInvestSection"
import StepsSection from "@/components/home/StepsSection"
import PortfolioSection from "@/components/home/PortfolioSection"
import PromotionsSection from "@/components/home/PromotionsSection"
import VideoSection from "@/components/home/VideoSection"
import ArticlesSection from "@/components/home/ArticlesSection"
import CtaSection from "@/components/home/CtaSection"

// Content comes from Firestore at request time; opt out of build-time static generation.
export const dynamic = "force-dynamic"

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <IntroSection />
      <ProductsSection />
      <WhyInvestSection />
      <StepsSection />
      <PortfolioSection />
      <PromotionsSection />
      <VideoSection />
      <ArticlesSection />
      <CtaSection />
    </main>
  )
}
