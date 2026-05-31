export default function WhyInvestHero() {
  return (
    <section className="safe-gradient relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute -right-20 top-10 w-96 h-96 rounded-full border-[40px] border-blue-200" />
        <div className="absolute left-8 bottom-8 w-40 h-40 rounded-full border-[22px] border-sky-200" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-16 lg:py-20 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-blue-100 text-blue-700 text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-600" />
            โอกาสลงทุนกับธุรกิจตู้อัตโนมัติ
          </div>

          <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight text-slate-950">
            ลงทุนกับ <span className="text-blue-600">SAFE</span><br />
            สร้างรายได้จากพื้นที่ว่างอย่างมั่นใจ
          </h1>

          <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-xl">
            SAFE มอบโอกาสทางธุรกิจตู้หยอดเหรียญอัตโนมัติ ทั้งตู้น้ำ ตู้กาแฟ และตู้น้ำแข็ง
            พร้อมระบบที่ดูแลง่าย สินค้าพร้อมติดตั้ง และทีมงานมืออาชีพคอยให้คำปรึกษา
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contact" className="inline-flex items-center justify-center px-7 py-3 rounded-2xl bg-blue-600 text-white font-semibold shadow-lg shadow-blue-200 hover:bg-blue-700 transition">
              ปรึกษาฟรี
            </a>
            <a href="#process" className="inline-flex items-center justify-center px-7 py-3 rounded-2xl bg-white text-blue-700 font-semibold border border-blue-200 hover:bg-blue-50 transition">
              ดูขั้นตอนลงทุน
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -top-8 -right-6 bg-white rounded-3xl card-shadow p-5 hidden md:block">
            <ul className="space-y-4 text-sm">
              {[
                { title: "ลงทุนเริ่มต้นง่าย", sub: "ไม่ยุ่งยาก คืนทุนตามการใช้งาน" },
                { title: "ดูแลระบบครบวงจร", sub: "มีทีมงานพร้อมให้คำแนะนำ" },
                { title: "รายได้ต่อเนื่อง", sub: "เหมาะกับพื้นที่ที่มีผู้ใช้งานประจำ" },
              ].map((item) => (
                <li key={item.title} className="flex gap-3">
                  <span className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">✓</span>
                  <div>
                    <p className="font-semibold text-slate-900">{item.title}</p>
                    <p className="text-slate-500">{item.sub}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white/70 backdrop-blur rounded-[2rem] p-6 card-shadow border border-white">
            <div className="grid grid-cols-3 gap-4 items-end">
              <div className="bg-gradient-to-b from-blue-500 to-blue-700 rounded-3xl h-80 shadow-xl flex flex-col items-center justify-between p-4 text-white">
                <div className="text-center"><p className="font-bold text-xl">SAFE</p><p className="text-sm">WATER</p></div>
                <div className="w-20 h-28 rounded-2xl bg-white/80" />
                <p className="text-xs bg-white/20 px-3 py-1 rounded-full">ตู้น้ำ</p>
              </div>
              <div className="bg-gradient-to-b from-slate-800 to-slate-950 rounded-3xl h-96 shadow-xl flex flex-col items-center justify-between p-4 text-white">
                <div className="text-center"><p className="font-bold text-xl">SAFE</p><p className="text-sm">COFFEE</p></div>
                <div className="w-20 h-20 rounded-full bg-amber-100" />
                <p className="text-xs bg-white/20 px-3 py-1 rounded-full">ตู้กาแฟ</p>
              </div>
              <div className="bg-gradient-to-b from-sky-400 to-blue-700 rounded-3xl h-80 shadow-xl flex flex-col items-center justify-between p-4 text-white">
                <div className="text-center"><p className="font-bold text-xl">SAFE</p><p className="text-sm">ICE</p></div>
                <div className="w-20 h-28 rounded-2xl bg-white/80" />
                <p className="text-xs bg-white/20 px-3 py-1 rounded-full">ตู้น้ำแข็ง</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
