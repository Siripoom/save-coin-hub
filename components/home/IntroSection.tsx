export default function IntroSection() {
  return (
    <section className="section">
      <div className="safe-container">
        <div className="intro-grid">
          <div>
            <div className="section-label">เกี่ยวกับเรา</div>
            <h2>ผู้นำด้านตู้หยอดเหรียญ<br />อัตโนมัติครบวงจร</h2>
            <p>
              SAFE Vending Solutions คือผู้เชี่ยวชาญด้านตู้หยอดเหรียญอัตโนมัติที่มีประสบการณ์มากกว่า
              10 ปี เราให้บริการทั้งตู้น้ำ ตู้กาแฟ และตู้น้ำแข็ง พร้อมระบบบริหารจัดการออนไลน์ที่ทันสมัย
            </p>
            <p>
              ด้วยเทคโนโลยีล้ำสมัยและทีมงานมืออาชีพ เราพร้อมช่วยให้คุณสร้าง passive income
              จากธุรกิจตู้หยอดเหรียญได้อย่างมั่นคงและยั่งยืน
            </p>
            <a href="/why-invest" className="btn btn-primary" style={{ display: "inline-block", marginTop: "24px" }}>
              ทำไมต้องเลือก SAFE →
            </a>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div className="stat-card">
              <div className="stat-number">10+</div>
              <div className="stat-label">ปีประสบการณ์</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">5,000+</div>
              <div className="stat-label">ลูกค้าที่ไว้วางใจ</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">50+</div>
              <div className="stat-label">จังหวัดทั่วประเทศ</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
