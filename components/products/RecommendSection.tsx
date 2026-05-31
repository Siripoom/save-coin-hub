const SOLUTIONS = [
  { title: "สำหรับหอพัก / คอนโด", desc: "แนะนำตู้น้ำดื่มอัตโนมัติและตู้จำหน่ายสินค้าที่ใช้งานง่าย ประหยัดพื้นที่" },
  { title: "สำหรับโรงงาน / สำนักงาน", desc: "เหมาะกับตู้กาแฟ ตู้น้ำดื่ม และระบบบริการอัตโนมัติสำหรับพนักงาน" },
  { title: "สำหรับตลาด / ปั๊มน้ำมัน", desc: "เหมาะกับตู้น้ำแข็งและตู้น้ำดื่มที่รองรับการใช้งานต่อเนื่องตลอดวัน" },
]

export default function RecommendSection() {
  return (
    <section className="p-section">
      <div className="safe-container">
        <div className="recommend-section">
          <div className="recommend-head">
            <div>
              <h2>ไม่แน่ใจว่าควรเลือกตู้แบบไหนดี?</h2>
              <p>ให้ทีม SAFE ช่วยประเมินพื้นที่และแนะนำสินค้าที่เหมาะกับคุณ เพื่อให้เริ่มต้นลงทุนได้มั่นใจมากขึ้น</p>
            </div>
            <div className="hero-actions">
              <a href="#consult" className="btn btn-white">ขอคำปรึกษาฟรี</a>
              <a href="/portfolio" className="btn btn-outline">ดูตัวอย่างผลงาน</a>
            </div>
          </div>
          <div className="solution-grid">
            {SOLUTIONS.map((s) => (
              <div key={s.title} className="solution-card">
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
