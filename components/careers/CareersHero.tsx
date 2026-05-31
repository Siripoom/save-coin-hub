export default function CareersHero() {
  return (
    <section className="hero-careers">
      <div className="safe-container">
        <div className="hero-grid">
          <div>
            <h1>ร่วมงานกับ <span>SAFE</span></h1>
            <p>
              เป็นส่วนหนึ่งของธุรกิจตู้จำหน่ายสินค้าอัตโนมัติและตู้อัตโนมัติ
              ที่กำลังเติบโต พร้อมโอกาสในการพัฒนาทักษะและสร้างอนาคตที่มั่นคงไปด้วยกัน
            </p>
            <div className="hero-actions">
              <a href="#jobs" className="c-btn c-btn-primary">💼 ดูตำแหน่งงาน</a>
              <a href="#apply" className="c-btn c-btn-outline">✈️ สมัครงานเลย</a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-photo large">
              <div className="photo-placeholder">ทีมงาน SAFE<br />และบรรยากาศการทำงาน</div>
            </div>
            <div className="hero-photo">
              <div className="photo-placeholder">SAFE<br />WATER</div>
            </div>
            <div className="hero-photo">
              <div className="photo-placeholder">SAFE<br />COFFEE / ICE</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
