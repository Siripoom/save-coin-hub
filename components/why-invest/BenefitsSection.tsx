const BENEFITS = [
  { icon: "💵", title: "สร้างรายได้เสริม", desc: "เพิ่มโอกาสสร้างรายได้จากพื้นที่ว่างหรือพื้นที่ที่มีผู้ใช้งานประจำ" },
  { icon: "📍", title: "เพิ่มมูลค่าให้พื้นที่", desc: "ทำให้พื้นที่มีบริการที่สะดวกขึ้น และช่วยเพิ่มประโยชน์ในการใช้งานจริง" },
  { icon: "⏱️", title: "ไม่ต้องดูแลตลอดเวลา", desc: "ระบบตู้ทำงานอัตโนมัติ เหมาะกับเจ้าของพื้นที่ที่ต้องการความสะดวก" },
  { icon: "🚀", title: "เริ่มต้นธุรกิจได้ง่าย", desc: "มีทีมงานช่วยแนะนำตั้งแต่เลือกสินค้า ประเมินพื้นที่ ไปจนถึงการติดตั้ง" },
]

const ADVANTAGES = [
  { icon: "📊", title: "สร้างรายได้เสริม", desc: "มีโอกาสสร้างรายได้จากการใช้งานของลูกค้า" },
  { icon: "📦", title: "ใช้พื้นที่น้อย", desc: "เหมาะกับหอพัก คอนโด โรงงาน ตลาด และสำนักงาน" },
  { icon: "⚙️", title: "ระบบดูแลง่าย", desc: "ช่วยลดภาระการบริหารจัดการหน้าร้าน" },
  { icon: "🤝", title: "บริการหลังการขาย", desc: "มีทีมงานให้คำปรึกษาและดูแลหลังติดตั้ง" },
]

export default function BenefitsSection() {
  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12">
        <div>
          <p className="text-blue-600 font-semibold">BENEFITS</p>
          <h2 className="text-3xl font-bold mt-2 mb-8">ประโยชน์ที่ผู้ลงทุนหรือเจ้าของพื้นที่จะได้รับ</h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {BENEFITS.map((b) => (
              <div key={b.title} className="bg-white p-6 rounded-3xl border border-blue-100 card-shadow">
                <div className="text-3xl mb-3">{b.icon}</div>
                <h3 className="font-bold text-lg mb-2 text-blue-700">{b.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="text-blue-600 font-semibold">ADVANTAGES</p>
          <h2 className="text-3xl font-bold mt-2 mb-8">เปรียบเทียบข้อดีของการลงทุนกับ SAFE</h2>
          <div className="bg-white rounded-[2rem] border border-blue-100 card-shadow p-6">
            <div className="grid sm:grid-cols-2 gap-6">
              {ADVANTAGES.map((a) => (
                <div key={a.title} className="text-center p-5 rounded-3xl bg-blue-50">
                  <div className="mx-auto w-16 h-16 rounded-full bg-white text-blue-600 flex items-center justify-center text-3xl mb-4">{a.icon}</div>
                  <h3 className="font-bold text-blue-800 mb-2">{a.title}</h3>
                  <p className="text-sm text-slate-600">{a.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
