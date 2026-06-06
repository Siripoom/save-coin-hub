import Image from "next/image"

const PRODUCTS = [
  { type: "water", image: "/water.png", badge: "ตู้น้ำ", title: "ตู้น้ำดื่มอัตโนมัติ RO 5 ขั้นตอน", desc: "ตู้น้ำดื่มหยอดเหรียญ ระบบกรองคุณภาพ เหมาะสำหรับหอพัก ชุมชน และสำนักงาน", features: ["ระบบกรอง RO 5 ขั้นตอน", "น้ำสะอาด ปลอดภัย", "ดูแลผ่านระบบออนไลน์"] },
  { type: "coffee", image: "/coffee.png", badge: "ตู้กาแฟ", title: "ตู้กาแฟอัตโนมัติ Premium Coffee", desc: "ตู้กาแฟอัตโนมัติพร้อมเมนูหลากหลาย เหมาะกับออฟฟิศ โรงงาน และพื้นที่พักคอย", features: ["เมนูกาแฟหลากหลาย", "ชงอัตโนมัติ", "รสชาติมาตรฐาน"] },
  { type: "ice", image: "/ice.png", badge: "ตู้น้ำแข็ง", title: "ตู้น้ำแข็งอัตโนมัติ Crystal Ice", desc: "ผลิตน้ำแข็งสะอาด ได้มาตรฐาน เหมาะสำหรับตลาด ร้านค้า และชุมชน", features: ["น้ำแข็งสะอาด", "ผลิตได้ต่อเนื่อง", "รองรับการใช้งาน 24 ชั่วโมง"] },
]

export default function ProductGrid() {
  return (
    <section id="products" className="p-section">
      <div className="safe-container">
        <div className="section-head">
          <div>
            <div className="eyebrow">PRODUCTS</div>
            <h2 className="section-title">สินค้าทั้งหมด</h2>
            <p className="section-desc">
              เลือกสินค้าที่เหมาะกับพื้นที่และกลุ่มลูกค้าของคุณ
              พร้อมระบบดูแลและคำแนะนำจากทีมงาน SAFE
            </p>
          </div>
        </div>

        <div className="product-grid">
          {PRODUCTS.map((p, i) => (
            <article key={i} className="product-card">
              <div className="product-image">
                <Image src={p.image} alt={p.title} width={1122} height={1402} sizes="(max-width: 720px) 100vw, 33vw" />
              </div>
              <div className="product-content">
                <span className="p-badge">{p.badge}</span>
                <h3 className="product-title">{p.title}</h3>
                <p className="product-desc">{p.desc}</p>
                <ul className="p-feature-list">
                  {p.features.map((f) => <li key={f}>{f}</li>)}
                </ul>
                <div className="product-actions">
                  <a href="#consult" className="btn btn-outline btn-sm">ดูรายละเอียด</a>
                  <a href="#consult" className="btn btn-primary btn-sm">สอบถามราคา</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
