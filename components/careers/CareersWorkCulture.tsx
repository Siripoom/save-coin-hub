const BENEFITS = [
  { icon: "📈", title: "เติบโตไปพร้อมองค์กร", desc: "มีโอกาสพัฒนาในสายอาชีพ พร้อมประสบการณ์จากงานจริง" },
  { icon: "👥", title: "ทำงานเป็นกันเอง", desc: "ทีมงานพร้อมสนับสนุน ทำงานร่วมกันอย่างสร้างสรรค์" },
  { icon: "🎓", title: "พัฒนาทักษะ", desc: "เรียนรู้สิ่งใหม่ ๆ อย่างต่อเนื่องเพื่อเพิ่มศักยภาพ" },
  { icon: "💙", title: "สวัสดิการเหมาะสม", desc: "ดูแลพนักงานอย่างใส่ใจในทุกช่วงของการทำงาน" },
]

export default function CareersWorkCulture() {
  return (
    <section className="c-section">
      <div className="safe-container">
        <div className="culture-grid">
          <div className="culture-images">
            <div className="culture-image" />
            <div className="culture-image small" />
          </div>
          <div>
            <h2 className="c-title">บรรยากาศการทำงานและโอกาสที่คุณจะได้รับ</h2>
            <p className="c-desc">
              ที่ SAFE เราเชื่อว่าคนเก่งคือหัวใจสำคัญของการเติบโต
              เราสร้างสภาพแวดล้อมการทำงานที่เปิดกว้าง ให้ทุกคนได้เรียนรู้ เติบโต และสร้างคุณค่าร่วมกัน
            </p>
            <div className="benefit-grid">
              {BENEFITS.map((b) => (
                <div key={b.title} className="benefit-card">
                  <div className="benefit-icon">{b.icon}</div>
                  <h3>{b.title}</h3>
                  <p>{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
