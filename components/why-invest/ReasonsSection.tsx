const REASONS = [
  { icon: "💰", title: "ลงทุนเริ่มต้นง่าย", desc: "เหมาะกับผู้ที่ต้องการสร้างรายได้จากพื้นที่ว่าง โดยไม่จำเป็นต้องมีหน้าร้านขนาดใหญ่" },
  { icon: "🛡️", title: "ระบบดูแลง่าย", desc: "ตู้อัตโนมัติช่วยลดภาระการดูแลหน้าร้าน และรองรับการตรวจสอบข้อมูลได้สะดวก" },
  { icon: "🎧", title: "มีทีมงานให้คำปรึกษา", desc: "ทีมงาน SAFE พร้อมแนะนำสินค้า รูปแบบการลงทุน และแนวทางการติดตั้งที่เหมาะสม" },
  { icon: "📈", title: "สินค้าตอบโจทย์ตลาด", desc: "ตู้น้ำ ตู้กาแฟ และตู้น้ำแข็ง เป็นสินค้าที่ตอบโจทย์การใช้งานประจำวันในหลายพื้นที่" },
]

export default function ReasonsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10">
          <p className="text-blue-600 font-semibold">WHY SAFE</p>
          <h2 className="text-3xl lg:text-4xl font-bold mt-2">
            เหตุผลที่ควรลงทุนกับ <span className="text-blue-600">SAFE</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {REASONS.map((r) => (
            <div key={r.title} className="p-6 rounded-3xl border border-blue-100 bg-white card-shadow">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center text-3xl mb-5">{r.icon}</div>
              <h3 className="text-xl font-bold mb-3">{r.title}</h3>
              <p className="text-slate-600 leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
