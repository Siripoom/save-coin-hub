const ITEMS = [
  { icon: "👥", title: "ทีมงานมืออาชีพ", number: "", desc: "ทำงานร่วมกับผู้เชี่ยวชาญที่มีประสบการณ์ในอุตสาหกรรม" },
  { icon: "📈", title: "โครงการเติบโตต่อเนื่อง", number: "100+", desc: "ธุรกิจขยายตัวอย่างต่อเนื่อง สร้างโอกาสใหม่ ๆ ให้คุณ" },
  { icon: "⚙️", title: "ระบบการทำงานชัดเจน", number: "", desc: "กระบวนการทำงานเป็นระบบ โปร่งใส และตรวจสอบได้" },
  { icon: "🤍", title: "ดูแลพนักงานอย่างใส่ใจ", number: "", desc: "สวัสดิการครบครัน และกิจกรรมสร้างความผูกพันภายในองค์กร" },
]

export default function CareersWhyJoin() {
  return (
    <section className="c-section">
      <div className="safe-container">
        <h2 className="c-title">ทำไมต้องมาร่วมงานกับ <span>SAFE</span></h2>
        <div className="trust-grid" style={{ marginTop: 24 }}>
          {ITEMS.map((item) => (
            <div key={item.title} className="trust-card">
              <div className="trust-icon">{item.icon}</div>
              <div>
                {item.number && <div className="trust-number">{item.number}</div>}
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
