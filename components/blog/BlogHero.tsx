import Link from "next/link"

export default function BlogHero() {
  return (
    <section className="blog-hero">
      <div className="safe-container">
        <div className="breadcrumb">
          <Link href="/">หน้าหลัก</Link>
          <span>/</span>
          <span>บทความและข่าวสาร</span>
        </div>
        <h1>บทความและข่าวสาร</h1>
        <p>
          รวมบทความด้านธุรกิจตู้หยอดเหรียญ แนวทางการลงทุน ข่าวสารสินค้า
          และไอเดียเพิ่มรายได้จากพื้นที่ว่างไปกับ SAFE
        </p>
      </div>
    </section>
  )
}
