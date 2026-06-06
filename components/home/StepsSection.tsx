import { Handshake, ClipboardCheck, Wrench, CircleDollarSign } from 'lucide-react'

const STEPS = [
  { num: "01", Icon: Handshake,        title: "ปรึกษาฟรี", desc: "ติดต่อทีมงาน SAFE เพื่อรับคำปรึกษาฟรีและเลือกรุ่นที่เหมาะกับพื้นที่ของคุณ" },
  { num: "02", Icon: ClipboardCheck,   title: "วางแผนและสั่งซื้อ", desc: "วางแผนธุรกิจร่วมกัน เลือกรุ่น สั่งซื้อ และชำระเงินตามเงื่อนไขที่ตกลง" },
  { num: "03", Icon: Wrench,           title: "ติดตั้งและอบรม", desc: "ทีมช่างมืออาชีพติดตั้งให้ครบถ้วน พร้อมอบรมการใช้งานและดูแลรักษา" },
  { num: "04", Icon: CircleDollarSign, title: "เริ่มสร้างรายได้", desc: "เปิดใช้งานและเริ่มสร้างรายได้ทันที พร้อมระบบติดตามผ่านแอปพลิเคชัน" },
]

export default function StepsSection() {
  return (
    <section className="section steps-section">
      <div className="safe-container">
        <div className="section-header">
          <div className="section-label">ขั้นตอน</div>
          <h2>เริ่มต้นง่าย เพียง 4 ขั้นตอน</h2>
          <p>จากศูนย์สู่รายได้ passive income ใน 4 ขั้นตอนง่ายๆ กับ SAFE</p>
        </div>

        <div className="step-line">
          {STEPS.map((s) => (
            <div key={s.num} className="step-item">
              <div className="step-number">{s.num}</div>
              <div className="step-icon"><s.Icon size={32} /></div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
