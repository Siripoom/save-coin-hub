const STATS = [
  { icon: "📍", value: "1,250+", label: "สถานที่ติดตั้งทั่วประเทศ" },
  { icon: "🏪", value: "3,800+", label: "ตู้จำหน่ายติดตั้งแล้ว" },
  { icon: "👥", value: "850+", label: "ลูกค้าที่ไว้วางใจ" },
  { icon: "🛡️", value: "98%", label: "ความพึงพอใจของลูกค้า" },
]

export default function PortfolioStats() {
  return (
    <section className="portfolio-stats">
      <div className="safe-container">
        <div className="stats-grid">
          {STATS.map((stat) => (
            <div key={stat.label} className="stat-card">
              <div className="stat-icon">{stat.icon}</div>
              <div>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
