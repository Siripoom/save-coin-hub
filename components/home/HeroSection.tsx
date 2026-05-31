export default function HeroSection() {
  return (
    <section className="hero">
      <div className="safe-container hero-grid">
        <div>
          <span className="eyebrow">✨ SAFE Vending Solutions</span>
          <h1>
            เริ่มต้นธุรกิจ<br />
            ตู้หยอดเหรียญอัตโนมัติ<br />
            กับ <span>SAFE</span>
          </h1>
          <p>
            ครบจบในที่เดียว ตั้งแต่เครื่องคุณภาพสูง ติดตั้ง อบรม จนถึงระบบบริหารออนไลน์
            สร้างรายได้ passive income ได้ทุกที่ทุกเวลา
          </p>
          <div className="hero-actions">
            <a href="/products" className="btn btn-primary">🛒 ดูสินค้า</a>
            <a href="#contact" className="btn btn-line">LINE ติดต่อผ่าน LINE</a>
          </div>
        </div>

        <div className="hero-visual" aria-label="ภาพจำลองตู้ SAFE">
          <div className="machine water">
            <div className="machine-title">SAFE<br />WATER</div>
            <div className="machine-screen">💧</div>
            <div className="machine-dots">
              <span /><span /><span /><span /><span /><span />
            </div>
          </div>
          <div className="machine coffee">
            <div className="machine-title">SAFE<br />COFFEE</div>
            <div className="machine-screen">☕</div>
            <div className="machine-dots">
              <span /><span /><span /><span /><span /><span />
            </div>
          </div>
          <div className="machine ice">
            <div className="machine-title">SAFE<br />ICE</div>
            <div className="machine-screen">🧊</div>
            <div className="machine-dots">
              <span /><span /><span /><span /><span /><span />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
