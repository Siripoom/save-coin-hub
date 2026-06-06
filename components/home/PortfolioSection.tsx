import { getPublishedPortfolio, portfolioTypeLabel } from "@/lib/data/public-content"
import type { PortfolioItem } from "@/lib/admin/types"
import { Droplet, Coffee, Snowflake, Building2, MapPin, type LucideIcon } from "lucide-react"

const TYPE_ICON: Record<PortfolioItem["type"], LucideIcon> = {
  water: Droplet,
  coffee: Coffee,
  ice: Snowflake,
  mixed: Building2,
}

export default async function PortfolioSection() {
  const portfolio = await getPublishedPortfolio()
  const PORTFOLIOS = portfolio.slice(0, 3).map((p) => ({
    id: p.id,
    Icon: TYPE_ICON[p.type],
    label: portfolioTypeLabel(p.type),
    location: p.name,
    place: p.location,
    machines: `${portfolioTypeLabel(p.type)} ${p.machineCount} เครื่อง`,
  }))

  return (
    <section className="section">
      <div className="safe-container">
        <div className="section-header">
          <div className="section-label">ผลงาน</div>
          <h2>ผลงานที่ภูมิใจทั่วประเทศ</h2>
          <p>กว่า 5,000 จุดติดตั้งทั่วประเทศไทย</p>
        </div>

        <div className="portfolio-grid">
          {PORTFOLIOS.map((p) => (
            <div key={p.id} className="card portfolio-card">
              <div className="thumb">
                <span className="thumb-badge"><p.Icon size={15} /> {p.label}</span>
              </div>
              <div className="portfolio-body">
                <h3>{p.location}</h3>
                <p className="portfolio-place"><MapPin size={15} /> {p.place}</p>
                <p>{p.machines}</p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "32px" }}>
          <a href="/portfolio" className="btn btn-outline">ดูผลงานทั้งหมด →</a>
        </div>
      </div>
    </section>
  )
}
