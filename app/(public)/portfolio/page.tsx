import PortfolioHero from "@/components/portfolio/PortfolioHero"
import PortfolioFilter from "@/components/portfolio/PortfolioFilter"
import PortfolioGrid from "@/components/portfolio/PortfolioGrid"
import PortfolioDetail from "@/components/portfolio/PortfolioDetail"
import PortfolioStats from "@/components/portfolio/PortfolioStats"
import PortfolioCta from "@/components/portfolio/PortfolioCta"

export default function PortfolioPage() {
  return (
    <main className="safe-portfolio-page">
      <PortfolioHero />
      <PortfolioFilter />
      <PortfolioGrid />
      <PortfolioDetail />
      <PortfolioStats />
      <PortfolioCta />
    </main>
  )
}
