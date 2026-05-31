const CARDS = [
  { type: "ตู้น้ำ", imgClass: "water", location: "กรุงเทพมหานคร", title: "มหาวิทยาลัยเกษตรศาสตร์", desc: "ติดตั้งตู้น้ำ SAFE 600 จำนวน 3 ตู้ เพื่อบริการนักศึกษาและบุคลากร" },
  { type: "ตู้กาแฟ", imgClass: "coffee", location: "ปทุมธานี", title: "ปั๊ม ปตท. สาขารังสิต", desc: "ติดตั้งตู้กาแฟอัตโนมัติ SAFE COFFEE เพิ่มทางเลือกเครื่องดื่มคุณภาพ" },
  { type: "ตู้น้ำ", imgClass: "water", location: "กรุงเทพมหานคร", title: "คอนโด Ideo สุขุมวิท 93", desc: "ติดตั้งตู้น้ำ SAFE 800 จำนวน 2 ตู้ อำนวยความสะดวกให้ลูกบ้าน" },
  { type: "ตู้น้ำ", imgClass: "factory", location: "สมุทรสาคร", title: "โรงงานไทยยูเนี่ยน กรุ๊ป", desc: "ติดตั้งตู้น้ำอุตสาหกรรม รองรับการใช้งานจำนวนมากสำหรับพนักงาน" },
  { type: "ตู้น้ำ", imgClass: "water", location: "กรุงเทพมหานคร", title: "อาคารยูไนเต็ด เซ็นเตอร์", desc: "ติดตั้งตู้น้ำ SAFE RO ในอาคารสำนักงาน พร้อมบริการดูแลรักษา" },
  { type: "ตู้น้ำแข็ง", imgClass: "ice", location: "กรุงเทพมหานคร", title: "Community Mall ลาดพร้าว", desc: "ติดตั้งตู้น้ำแข็ง SAFE ICE เพื่อร้านค้าและลูกค้าในพื้นที่" },
  { type: "ตู้น้ำ", imgClass: "water", location: "นนทบุรี", title: "หมู่บ้านแกรนด์ บางกอก", desc: "ติดตั้งตู้น้ำ SAFE 600 จำนวน 2 ตู้ เพิ่มความสะดวกให้ลูกบ้าน" },
  { type: "ตู้กาแฟ", imgClass: "coffee", location: "สมุทรปราการ", title: "บริษัท โลตัสส์ จัดจำหน่าย", desc: "ติดตั้งตู้กาแฟในพื้นที่พักพนักงาน ช่วยเพิ่มความสดชื่นระหว่างวัน" },
]

export default function PortfolioGrid() {
  return (
    <section className="portfolio-grid-section">
      <div className="safe-container">
        <div className="section-head-row">
          <div>
            <h2 className="safe-section-title">ผลงานติดตั้ง<span>ที่ผ่านมา</span></h2>
            <p className="safe-section-desc">ตัวอย่างผลงานการติดตั้งตู้จำหน่ายสินค้าอัตโนมัติในพื้นที่จริง</p>
          </div>
          <a className="safe-btn safe-btn-outline" href="#portfolio-detail">ดูรายละเอียดผลงานเด่น</a>
        </div>

        <div className="portfolio-grid">
          {CARDS.map((card) => (
            <article key={card.title} className="portfolio-card">
              <div className={`portfolio-img ${card.imgClass}`} />
              <div className="portfolio-card-body">
                <div className="portfolio-meta">
                  <span className="portfolio-type">{card.type}</span>
                  <span className="portfolio-location">{card.location}</span>
                </div>
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
                <a href="#portfolio-detail" className="portfolio-link">ดูรายละเอียด ›</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
