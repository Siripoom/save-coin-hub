import PromotionsHero from "@/components/promotions/PromotionsHero"
import PromotionsFilter from "@/components/promotions/PromotionsFilter"
import PromotionsGrid from "@/components/promotions/PromotionsGrid"
import PromotionDetail from "@/components/promotions/PromotionDetail"
import PromotionsWhySafe from "@/components/promotions/PromotionsWhySafe"
import PromotionsCta from "@/components/promotions/PromotionsCta"

export default function PromotionsPage() {
  return (
    <main>
      <PromotionsHero />
      <PromotionsFilter />
      <PromotionsGrid />
      <PromotionDetail />
      <PromotionsWhySafe />
      <PromotionsCta />
    </main>
  )
}
