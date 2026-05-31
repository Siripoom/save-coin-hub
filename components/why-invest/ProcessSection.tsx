const STEPS = [
  { num: "1", title: "ปรึกษาเบื้องต้น", desc: "พูดคุยความต้องการ ประเภทสินค้า พื้นที่ และงบประมาณเบื้องต้น" },
  { num: "2", title: "เลือกประเภทสินค้า", desc: "เลือกตู้ที่เหมาะกับกลุ่มลูกค้า เช่น ตู้น้ำ ตู้กาแฟ หรือตู้น้ำแข็ง" },
  { num: "3", title: "ประเมินพื้นที่", desc: "ทีมงานช่วยประเมินทำเล ความเหมาะสม และรูปแบบการติดตั้ง" },
  { num: "4", title: "ติดตั้งพร้อมใช้งาน", desc: "ติดตั้งสินค้า ทดสอบระบบ และเริ่มต้นสร้างรายได้จากพื้นที่ของคุณ" },
]

export default function ProcessSection() {
  return (
    <section id="process" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-blue-600 font-semibold">PROCESS</p>
          <h2 className="text-3xl lg:text-4xl font-bold mt-2">
            ขั้นตอนเริ่มต้นลงทุนกับ <span className="text-blue-600">SAFE</span>
          </h2>
          <p className="text-slate-600 mt-4">เริ่มต้นง่าย มีทีมงานช่วยแนะนำตั้งแต่ขั้นตอนแรกจนพร้อมใช้งาน</p>
        </div>
        <div className="grid md:grid-cols-4 gap-6">
          {STEPS.map((s) => (
            <div key={s.num} className="p-6 rounded-3xl bg-white border border-blue-100 card-shadow">
              <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg mb-5">{s.num}</div>
              <h3 className="font-bold text-xl mb-2">{s.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
