const PORTFOLIOS = [
  { id: 1, emoji: "🏢", location: "คอนโดมิเนียม The Base", place: "กรุงเทพมหานคร", machines: "ตู้น้ำ 3 เครื่อง + ตู้กาแฟ 1 เครื่อง" },
  { id: 2, emoji: "🏭", location: "โรงงานอุตสาหกรรม", place: "นิคมอุตสาหกรรมอมตะซิตี้", machines: "ตู้น้ำ 10 เครื่อง + ตู้น้ำแข็ง 5 เครื่อง" },
  { id: 3, emoji: "⛽", location: "ปั๊มน้ำมัน PTT", place: "จังหวัดนนทบุรี", machines: "ตู้น้ำ 2 เครื่อง + ตู้กาแฟ 2 เครื่อง + ตู้น้ำแข็ง 1 เครื่อง" },
]

export default function PortfolioSection() {
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
            <div key={p.id} className="card">
              <div className="thumb">{p.emoji}</div>
              <h3>{p.location}</h3>
              <p style={{ color: "var(--brand-primary)", fontWeight: 600 }}>📍 {p.place}</p>
              <p>{p.machines}</p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "48px" }}>
          <a href="/portfolio" className="btn btn-outline">ดูผลงานทั้งหมด →</a>
        </div>
      </div>
    </section>
  )
}
