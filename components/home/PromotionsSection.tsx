const PROMOS = [
  {
    badge: "🔥 HOT DEAL",
    title: "แพ็กเกจเริ่มต้น",
    subtitle: "สำหรับผู้เริ่มต้นธุรกิจ",
    price: "ราคาพิเศษ",
    features: ["ตู้น้ำ 1 เครื่อง", "ติดตั้งฟรี", "อบรมการใช้งานฟรี", "ประกัน 2 ปี", "ระบบออนไลน์ฟรี 1 ปี"],
    cta: "สอบถามราคา",
  },
  {
    badge: "⭐ BEST VALUE",
    title: "แพ็กเกจธุรกิจ",
    subtitle: "สำหรับนักลงทุนจริงจัง",
    price: "ราคาพิเศษ",
    features: ["ตู้น้ำ + ตู้กาแฟ + ตู้น้ำแข็ง", "ติดตั้งฟรีทุกเครื่อง", "อบรมทีมงานฟรี", "ประกัน 3 ปี", "ระบบออนไลน์ฟรี 3 ปี", "บำรุงรักษาฟรี 1 ปี"],
    cta: "สอบถามราคา",
  },
]

export default function PromotionsSection() {
  return (
    <section className="section promo-wrap">
      <div className="safe-container">
        <div className="section-header">
          <div className="section-label" style={{ background: "rgba(255,255,255,0.2)", color: "#fff" }}>โปรโมชั่น</div>
          <h2 style={{ color: "#fff" }}>โปรโมชั่นพิเศษ<br />จำนวนจำกัด</h2>
          <p style={{ color: "rgba(255,255,255,0.8)" }}>รีบจองก่อนหมด!</p>
        </div>

        <div className="product-grid">
          {PROMOS.map((p) => (
            <div key={p.title} className="card" style={{ background: "rgba(255,255,255,0.1)", color: "#fff", border: "1px solid rgba(255,255,255,0.2)" }}>
              <div style={{ marginBottom: "12px" }}><span className="badge">{p.badge}</span></div>
              <h3 style={{ color: "#fff" }}>{p.title}</h3>
              <p style={{ color: "rgba(255,255,255,0.7)" }}>{p.subtitle}</p>
              <div style={{ fontSize: "1.5rem", fontWeight: 700, color: "#ffd700", margin: "16px 0" }}>{p.price}</div>
              <ul className="feature-list" style={{ color: "rgba(255,255,255,0.9)" }}>
                {p.features.map((f) => (
                  <li key={f}>✓ {f}</li>
                ))}
              </ul>
              <a href="/promotions" className="btn btn-line" style={{ display: "block", textAlign: "center", marginTop: "auto" }}>
                {p.cta} →
              </a>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "32px" }}>
          <a href="/promotions" style={{ color: "rgba(255,255,255,0.8)", textDecoration: "underline" }}>ดูโปรโมชั่นทั้งหมด →</a>
        </div>
      </div>
    </section>
  )
}
