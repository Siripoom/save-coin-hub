import ProductsHero from "@/components/products/ProductsHero"
import ProductFilter from "@/components/products/ProductFilter"
import ProductGrid from "@/components/products/ProductGrid"
import RecommendSection from "@/components/products/RecommendSection"
import ComparisonSection from "@/components/products/ComparisonSection"
import ProductCtaSection from "@/components/products/ProductCtaSection"

export default function ProductsPage() {
  return (
    <main className="safe-products-page">
      <ProductsHero />
      <ProductFilter />
      <ProductGrid />
      <RecommendSection />
      <ComparisonSection />
      <ProductCtaSection />
    </main>
  )
}
