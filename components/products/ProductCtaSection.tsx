import { CONTACT } from "@/lib/site-config"

export default function ProductCtaSection() {
  return (
    <section id="consult" className="p-section">
      <div className="safe-container">
        <div className="product-cta">
          <div className="cta-visual">
            <div className="machine-mockup large" />
          </div>
          <div>
            <div className="eyebrow">CONTACT US</div>
            <h2>สนใจสินค้า SAFE รุ่นไหนเป็นพิเศษ?</h2>
            <p>
              ติดต่อทีมงานเพื่อขอรายละเอียดสินค้า สเปกเบื้องต้น รูปแบบการติดตั้ง
              และคำแนะนำเกี่ยวกับการเลือกตู้ให้เหมาะกับพื้นที่ของคุณ
            </p>
            <div className="cta-actions">
              <a href={CONTACT.line} className="btn line-btn">ติดต่อผ่าน LINE</a>
              <a href={`tel:${CONTACT.phone}`} className="btn btn-primary">โทรสอบถาม {CONTACT.phone}</a>
              <a href={`mailto:${CONTACT.email}`} className="btn btn-outline">ขอใบเสนอราคา</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
