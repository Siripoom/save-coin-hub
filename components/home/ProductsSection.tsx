import Image from "next/image"

const PRODUCTS = [
  {
    id: "water",
    image: "/water.png",
    title: "ตู้น้ำดื่มหยอดเหรียญ",
    desc: "ตู้น้ำดื่มอัตโนมัติคุณภาพสูง ระบบกรองน้ำ RO หลายขั้นตอน น้ำสะอาดปลอดภัย ได้มาตรฐาน อย.",
    features: ["ระบบกรอง RO 5 ขั้นตอน", "แสดงผลดิจิทัล LED", "รับชำระเงินสด/QR Code", "แจ้งเตือนอัตโนมัติ"],
    href: "/products",
    label: "ดูตู้น้ำ",
  },
  {
    id: "coffee",
    image: "/coffee.png",
    title: "ตู้กาแฟหยอดเหรียญ",
    desc: "ตู้กาแฟอัตโนมัติสูตรพรีเมียม เมล็ดกาแฟคัดพิเศษ บดสดทุกแก้ว รสชาติเข้มข้น หอมกรุ่น",
    features: ["เมล็ดกาแฟพิเศษ 100%", "บดสดทุกแก้ว", "เมนูหลากหลาย 10+ รายการ", "ทำความสะอาดอัตโนมัติ"],
    href: "/products",
    label: "ดูตู้กาแฟ",
  },
  {
    id: "ice",
    image: "/ice.png",
    title: "ตู้น้ำแข็งหยอดเหรียญ",
    desc: "ตู้น้ำแข็งอัตโนมัติ น้ำแข็งสะอาด ปลอดภัย ผลิตจากน้ำกรอง RO ความจุสูง เหมาะสำหรับทุกพื้นที่",
    features: ["น้ำแข็งสะอาดปลอดภัย", "ความจุ 50 กก./วัน", "ระบบทำความเย็นประหยัดไฟ", "เลือกปริมาณได้"],
    href: "/products",
    label: "ดูตู้น้ำแข็ง",
  },
]

export default function ProductsSection() {
  return (
    <section className="section" style={{ background: "var(--brand-muted)" }}>
      <div className="safe-container">
        <div className="section-header">
          <div className="section-label">สินค้าของเรา</div>
          <h2>ตู้หยอดเหรียญคุณภาพสูง<br />ครบทุกประเภท</h2>
          <p>เลือกตู้ที่เหมาะกับพื้นที่และเป้าหมายทางธุรกิจของคุณ</p>
        </div>

        <div className="product-grid">
          {PRODUCTS.map((p) => (
            <div key={p.id} className="card">
              <div className={`product-image ${p.id}`}>
                <Image
                  src={p.image}
                  alt={p.title}
                  width={320}
                  height={320}
                  sizes="(max-width: 720px) 100vw, 33vw"
                />
              </div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <ul className="feature-list">
                {p.features.map((f) => (
                  <li key={f}>✓ {f}</li>
                ))}
              </ul>
              <a href={p.href} className="btn btn-primary" style={{ display: "block", textAlign: "center", marginTop: "auto" }}>
                {p.label} →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
