import { CONTACT } from "@/lib/site-config"

export default function CtaSection() {
  return (
    <section id="contact" className="final-cta">
      <div className="safe-container cta-inner">
        <div>
          <h2>สนใจเริ่มต้นธุรกิจกับ SAFE?</h2>
          <p>ปรึกษาฟรี! ทีมผู้เชี่ยวชาญพร้อมให้คำแนะนำและวางแผนธุรกิจให้คุณโดยไม่มีค่าใช้จ่าย</p>
        </div>
        <div className="cta-actions">
          <a href={CONTACT.line} className="btn btn-line">LINE ติดต่อผ่าน LINE</a>
          <a href={`tel:${CONTACT.phone}`} className="btn btn-outline">📞 โทรสอบถาม {CONTACT.phone}</a>
        </div>
      </div>
    </section>
  )
}
