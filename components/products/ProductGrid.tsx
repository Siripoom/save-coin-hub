const PRODUCTS = [
  { type: "water", badge: "ตู้น้ำ", title: "ตู้น้ำดื่มอัตโนมัติ RO 5 ขั้นตอน", desc: "ตู้น้ำดื่มหยอดเหรียญ ระบบกรองคุณภาพ เหมาะสำหรับหอพัก ชุมชน และสำนักงาน", features: ["ระบบกรอง RO 5 ขั้นตอน", "น้ำสะอาด ปลอดภัย", "ดูแลผ่านระบบออนไลน์"] },
  { type: "water", badge: "ตู้น้ำ", title: "ตู้น้ำดื่มหยอดเหรียญ รุ่นประหยัดพื้นที่", desc: "ขนาดกะทัดรัด ติดตั้งง่าย เหมาะกับพื้นที่จำกัดและผู้เริ่มต้นลงทุน", features: ["ใช้พื้นที่น้อย", "ประหยัดพลังงาน", "เหมาะกับคอนโดและหอพัก"] },
  { type: "coffee", badge: "ตู้กาแฟ", title: "ตู้กาแฟอัตโนมัติ Premium Coffee", desc: "ตู้กาแฟอัตโนมัติพร้อมเมนูหลากหลาย เหมาะกับออฟฟิศ โรงงาน และพื้นที่พักคอย", features: ["เมนูกาแฟหลากหลาย", "ชงอัตโนมัติ", "รสชาติมาตรฐาน"] },
  { type: "coffee", badge: "ตู้กาแฟ", title: "ตู้กาแฟสดระบบดิจิทัล", desc: "รองรับการขายแบบอัตโนมัติ ใช้งานสะดวก พร้อมระบบจัดการยอดขายเบื้องต้น", features: ["หน้าจอใช้งานง่าย", "รองรับหลายเมนู", "เหมาะกับพื้นที่คนหนาแน่น"] },
  { type: "ice", badge: "ตู้น้ำแข็ง", title: "ตู้น้ำแข็งอัตโนมัติ Crystal Ice", desc: "ผลิตน้ำแข็งสะอาด ได้มาตรฐาน เหมาะสำหรับตลาด ร้านค้า และชุมชน", features: ["น้ำแข็งสะอาด", "ผลิตได้ต่อเนื่อง", "รองรับการใช้งาน 24 ชั่วโมง"] },
  { type: "ice", badge: "ตู้น้ำแข็ง", title: "ตู้น้ำแข็งหยอดเหรียญกำลังผลิตสูง", desc: "เหมาะกับพื้นที่ที่มีความต้องการใช้น้ำแข็งจำนวนมาก เช่น ตลาดสดและปั๊มน้ำมัน", features: ["กำลังผลิตสูง", "ดูแลง่าย", "เหมาะกับพื้นที่ค้าขาย"] },
  { type: "other", badge: "สินค้าอื่น ๆ", title: "ตู้จำหน่ายสินค้าอัตโนมัติ", desc: "สำหรับจำหน่ายสินค้าอุปโภคบริโภค เครื่องดื่ม หรือสินค้าตามความต้องการ", features: ["ปรับสินค้าได้หลายประเภท", "เหมาะกับสำนักงานและโรงเรียน", "เพิ่มจุดขายได้ง่าย"] },
  { type: "other", badge: "ระบบเสริม", title: "ระบบบริหารจัดการตู้ออนไลน์", desc: "ระบบช่วยติดตามยอดขาย สถานะตู้ และข้อมูลสำคัญ เพื่อให้บริหารธุรกิจง่ายขึ้น", features: ["ดูยอดขายเบื้องต้น", "ติดตามสถานะตู้", "ช่วยวางแผนการดูแล"] },
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
                <div className={`machine-mockup${p.type !== "water" ? ` ${p.type}` : ""}`} />
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
