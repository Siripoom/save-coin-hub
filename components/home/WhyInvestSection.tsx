import { TrendingUp, MapPin, Smartphone, Wrench, Package, BarChart3 } from 'lucide-react'

const FEATURES = [
  { Icon: TrendingUp, title: "ROI สูง คืนทุนไว", desc: "คืนทุนภายใน 12-18 เดือน กำไรสูงถึง 60-80% ต่อปี ด้วยต้นทุนการดำเนินงานที่ต่ำ" },
  { Icon: MapPin,     title: "ติดตั้งได้ทุกพื้นที่", desc: "หอพัก คอนโด ตลาด โรงงาน สถานีบริการน้ำมัน ทุกพื้นที่ที่มีคนสัญจร" },
  { Icon: Smartphone, title: "ระบบจัดการออนไลน์", desc: "ติดตามยอดขาย เติมเงิน ตรวจสอบสถานะเครื่องได้ทุกที่ทุกเวลาผ่านแอปพลิเคชัน" },
  { Icon: Wrench,     title: "บริการครบวงจร", desc: "ติดตั้ง อบรม ซ่อมบำรุง และสนับสนุนตลอด 24/7 ด้วยทีมช่างมืออาชีพ" },
  { Icon: Package,    title: "อะไหล่ครบ พร้อมส่ง", desc: "สต็อกอะไหล่พร้อมเสมอ ส่งถึงมือภายใน 24 ชั่วโมง ไม่ต้องกังวลเรื่องการซ่อมแซม" },
  { Icon: BarChart3,  title: "ตลาดเติบโตต่อเนื่อง", desc: "ตลาดตู้หยอดเหรียญไทยเติบโต 15% ต่อปี โอกาสทางธุรกิจยังเปิดกว้าง" },
]

export default function WhyInvestSection() {
  return (
    <section className="section">
      <div className="safe-container">
        <div className="section-header">
          <div className="section-label">ทำไมต้องเลือก SAFE</div>
          <h2>เหตุผลที่นักลงทุนกว่า<br />5,000 รายเลือกเรา</h2>
          <p>SAFE ไม่ใช่แค่ขายเครื่อง แต่เราเป็นพาร์ทเนอร์ธุรกิจที่พร้อมเติบโตไปกับคุณ</p>
        </div>

        <div className="why-grid">
          {FEATURES.map((f) => (
            <div key={f.title} className="feature-card">
              <div className="feature-icon"><f.Icon size={22} /></div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "32px" }}>
          <a href="/why-invest" className="btn btn-primary">อ่านเพิ่มเติม →</a>
        </div>
      </div>
    </section>
  )
}
