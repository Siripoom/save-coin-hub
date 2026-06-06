import Link from "next/link"
import Image from "next/image"

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

        <div className="hero-visual">
          <Image
            src="/hero.png"
            alt="ผลงานติดตั้งตู้หยอดเหรียญ SAFE — ตู้น้ำ ตู้กาแฟ และตู้น้ำแข็ง"
            width={1448}
            height={1086}
            sizes="(max-width: 980px) 100vw, 50vw"
            className="hero-image"
          />
        </div>
      </div>
    </section>
  )
}
