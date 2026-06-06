import Link from "next/link"
import Image from "next/image"

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

        <div className="hero-visual">
          <Image
            src="/hero.png"
            alt="ตู้หยอดเหรียญ SAFE — ตู้น้ำ ตู้กาแฟ และตู้น้ำแข็ง"
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
