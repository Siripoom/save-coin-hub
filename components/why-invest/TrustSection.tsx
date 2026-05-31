const TRUSTS = [
  { emoji: "🏢", label: "Installed Works", title: "มีผลงานติดตั้งจริง", desc: "มีตัวอย่างผลงานจริง ช่วยเพิ่มความมั่นใจในการตัดสินใจลงทุน", stat: "100+ แห่ง", from: "from-blue-100", to: "to-blue-300" },
  { emoji: "👨‍🔧", label: "Support Team", title: "ทีมงานมืออาชีพ", desc: "มีทีมงานคอยให้คำปรึกษา แนะนำสินค้า และดูแลการติดตั้ง", stat: "พร้อมดูแล", from: "from-sky-100", to: "to-blue-300" },
  { emoji: "✅", label: "Ready to Install", title: "สินค้าพร้อมติดตั้ง", desc: "มีสินค้าและระบบที่พร้อมรองรับการใช้งานสำหรับพื้นที่หลากหลายประเภท", stat: "100%", from: "from-blue-100", to: "to-cyan-300" },
]

export default function TrustSection() {
  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10">
          <p className="text-blue-600 font-semibold">TRUST</p>
          <h2 className="text-3xl lg:text-4xl font-bold mt-2">
            ความน่าเชื่อถือของ <span className="text-blue-600">SAFE</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {TRUSTS.map((t) => (
            <div key={t.title} className="bg-white rounded-[2rem] overflow-hidden border border-blue-100 card-shadow">
              <div className={`h-52 bg-gradient-to-br ${t.from} ${t.to} flex items-center justify-center`}>
                <div className="text-center text-blue-700">
                  <div className="text-6xl mb-3">{t.emoji}</div>
                  <p className="font-semibold">{t.label}</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{t.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{t.desc}</p>
                <p className="text-3xl font-extrabold text-blue-600 mt-5">{t.stat}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
