const HIGHLIGHTS = [
  "ติดตั้งตู้น้ำ SAFE 600 จำนวน 3 ตู้",
  "รองรับการใช้งานมากกว่า 1,000 ลิตรต่อวัน",
  "น้ำดื่มสะอาด ระบบ RO 5 ขั้นตอน",
  "ช่วยลดการใช้ขวดพลาสติก และเป็นมิตรต่อสิ่งแวดล้อม",
  "บริการหลังการขายและบำรุงรักษาโดยทีมงานมืออาชีพ",
]

export default function PortfolioDetail() {
  return (
    <section id="portfolio-detail" className="portfolio-detail-section">
      <div className="safe-container">
        <div className="portfolio-detail-card">
          <div>
            <div className="detail-gallery-main">
              <span className="detail-badge">ติดตั้งล่าสุด</span>
            </div>
            <div className="thumb-row">
              <div className="thumb active" />
              <div className="thumb" />
              <div className="thumb" />
              <div className="thumb" />
            </div>
          </div>

          <div className="detail-content">
            <span className="portfolio-type">ตู้น้ำ</span>
            <h2>มหาวิทยาลัยเกษตรศาสตร์</h2>
            <div className="detail-submeta">
              <span>📍 กรุงเทพมหานคร</span>
              <span>📅 ติดตั้งเมื่อ 12 พฤษภาคม 2567</span>
            </div>

            <p>
              ติดตั้งตู้น้ำดื่มอัตโนมัติ SAFE 600 จำนวน 3 ตู้ บริเวณคณะวิศวกรรมศาสตร์
              เพื่อให้บริการน้ำดื่มสะอาดระบบ RO คุณภาพสูงแก่ นักศึกษา อาจารย์ และบุคลากรตลอด 24 ชั่วโมง
            </p>

            <ul className="highlight-list">
              {HIGHLIGHTS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <div className="detail-info-grid">
              <div className="detail-info-item">
                <small>ประเภท</small>
                <strong>ตู้น้ำ</strong>
              </div>
              <div className="detail-info-item">
                <small>จำนวนตู้</small>
                <strong>3 ตู้</strong>
              </div>
              <div className="detail-info-item">
                <small>กลุ่มลูกค้า</small>
                <strong>สถานศึกษา</strong>
              </div>
              <div className="detail-info-item">
                <small>บริการดูแล</small>
                <strong>รายเดือน</strong>
              </div>
            </div>

            <a href="#contact" className="safe-btn safe-btn-primary">
              ติดต่อสอบถาม / ขอรายละเอียดเพิ่มเติม
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
