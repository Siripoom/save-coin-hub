import Link from "next/link"

export default function ProductsHero() {
  return (
    <section className="products-hero">
      <div className="safe-container hero-inner">
        <div>
          <div className="breadcrumb">
            <Link href="/">หน้าหลัก</Link>
            <span>/</span>
            <span>สินค้า</span>
          </div>
          <h1 className="hero-title">
            สินค้าและตู้หยอดเหรียญของ <span>SAFE</span>
          </h1>
          <p className="hero-desc">
            เราคัดสรรตู้หยอดเหรียญและตู้อัตโนมัติคุณภาพสูง เพื่อช่วยให้คุณเริ่มต้นธุรกิจได้ง่าย
            ดูแลง่าย และสร้างรายได้จากพื้นที่ว่างได้อย่างมั่นใจ
          </p>
          <div className="hero-actions">
            <a href="#products" className="btn btn-primary">ดูสินค้าทั้งหมด</a>
            <a href="#consult" className="btn btn-outline">ปรึกษาและรับข้อเสนอพิเศษ</a>
          </div>
        </div>

        <div className="hero-products" aria-label="SAFE Product Mockup">
          <div className="hero-base" />
          <div className="hero-product-card water"><strong>SAFE<br />WATER</strong></div>
          <div className="hero-product-card coffee"><strong>SAFE<br />COFFEE</strong></div>
          <div className="hero-product-card ice"><strong>SAFE<br />ICE</strong></div>
        </div>
      </div>
    </section>
  )
}
