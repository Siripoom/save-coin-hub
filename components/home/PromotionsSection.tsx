import { getActivePromotions } from "@/lib/data/public-content"

export default async function PromotionsSection() {
  const promos = await getActivePromotions()
  const PROMOS = promos.slice(0, 2).map((p) => ({
    badge: p.badge ?? "โปรโมชั่น",
    title: p.title,
    subtitle: p.eyebrow ?? "",
    price: "ราคาพิเศษ",
    desc: p.description,
    cta: "สอบถามราคา",
  }))

  return (
    <section className="section promo-wrap">
      <div className="safe-container">
        <div className="section-header">
          <div className="section-label promo-label">โปรโมชั่น</div>
          <h2>โปรโมชั่นพิเศษ<br />จำนวนจำกัด</h2>
          <p>รีบจองก่อนหมด!</p>
        </div>

        <div className="promo-cards">
          {PROMOS.map((p) => (
            <div key={p.title} className="promo-deal">
              <span className="promo-badge">{p.badge}</span>
              <h3>{p.title}</h3>
              {p.subtitle && <p className="promo-sub">{p.subtitle}</p>}
              <p className="promo-desc">{p.desc}</p>
              <div className="promo-price">{p.price}</div>
              <a href="/promotions" className="btn btn-primary promo-cta">{p.cta} →</a>
            </div>
          ))}
        </div>

        <div className="promo-footer">
          <a href="/promotions" className="btn btn-outline">ดูโปรโมชั่นทั้งหมด →</a>
        </div>
      </div>
    </section>
  )
}
