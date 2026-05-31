export default function PortfolioCta() {
  return (
    <section id="contact" className="portfolio-cta">
      <div className="safe-container portfolio-cta-inner">
        <div className="cta-machines" aria-hidden="true">
          <div className="cta-mini-machine">WATER</div>
          <div className="cta-mini-machine">COFFEE</div>
          <div className="cta-mini-machine">ICE</div>
        </div>
        <div>
          <h2>สนใจติดตั้งกับ SAFE? ปรึกษาฟรี</h2>
          <p>ทีมงานพร้อมให้คำแนะนำ เลือกตู้ที่เหมาะสมกับพื้นที่ของคุณ เริ่มต้นธุรกิจอัตโนมัติด้วยโซลูชันจาก SAFE</p>
        </div>
        <div className="cta-actions">
          <a href="https://line.me" className="safe-btn safe-btn-line">ติดต่อผ่าน LINE</a>
          <a href="tel:021234567" className="safe-btn safe-btn-outline">โทรสอบถาม 02-123-4567</a>
        </div>
      </div>
    </section>
  )
}
