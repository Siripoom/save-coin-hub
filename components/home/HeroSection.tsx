import Image from 'next/image'

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

        <div className="hero-visual">
          <Image
            src="/hero.png"
            alt="ตู้หยอดเหรียญอัตโนมัติ SAFE — ตู้น้ำ ตู้กาแฟ และตู้น้ำแข็ง"
            width={1448}
            height={1086}
            priority
            sizes="(max-width: 980px) 100vw, 50vw"
            className="hero-image"
          />
        </div>
      </div>
    </section>
  )
}
