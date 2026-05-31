import Link from "next/link"

export default function PortfolioHero() {
  return (
    <section className="portfolio-hero">
      <div className="safe-container portfolio-hero-inner">
        <div>
          <div className="breadcrumb">
            <Link href="/">หน้าหลัก</Link>
            <span>›</span>
            <span>ผลงาน</span>
          </div>
          <h1>ผลงานของเรา</h1>
          <p>
            รวมผลงานการติดตั้งตู้หยอดเหรียญและตู้อัตโนมัติของ SAFE
            ที่ได้รับความไว้วางใจจากลูกค้าหลากหลายพื้นที่ทั่วประเทศ
          </p>
          <div className="hero-highlights">
            <span className="hero-chip">✓ ติดตั้งจริงทั่วประเทศ</span>
            <span className="hero-chip">✓ ทีมงานมืออาชีพ</span>
            <span className="hero-chip">✓ บริการหลังการขาย</span>
          </div>
        </div>

        <div className="hero-machine-wrap" aria-hidden="true">
          <div className="machine-card machine-water"><strong>SAFE<br />WATER</strong></div>
          <div className="machine-card machine-coffee"><strong>SAFE<br />COFFEE</strong></div>
          <div className="machine-card machine-ice"><strong>SAFE<br />ICE</strong></div>
        </div>
      </div>
    </section>
  )
}
