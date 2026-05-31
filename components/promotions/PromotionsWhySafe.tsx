const REASONS = [
  {
    icon: "👥",
    title: "ทีมงานมืออาชีพ",
    desc: "ทีมงานที่มีประสบการณ์กว่า 10 ปีในธุรกิจตู้หยอดเหรียญ พร้อมให้คำปรึกษาและดูแลตลอด 24 ชั่วโมง",
  },
  {
    icon: "📍",
    title: "ติดตั้งทั่วประเทศ",
    desc: "ให้บริการติดตั้งและบำรุงรักษาครอบคลุมทุกจังหวัดทั่วประเทศไทย ไม่มีค่าใช้จ่ายเพิ่มเติม",
  },
  {
    icon: "🔧",
    title: "บริการหลังการขาย",
    desc: "ระบบแจ้งซ่อมออนไลน์ตลอด 24 ชั่วโมง พร้อมช่างเทคนิคเข้าบริการภายใน 24 ชั่วโมง",
  },
  {
    icon: "🎁",
    title: "โปรโมชั่นต่อเนื่อง",
    desc: "ข้อเสนอพิเศษและโปรโมชั่นใหม่ตลอดทั้งปี เพื่อให้ลูกค้าได้รับผลตอบแทนสูงสุด",
  },
]

export default function PromotionsWhySafe() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold text-slate-950">
            ทำไมต้องเลือกลงทุนกับ SAFE?
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            มากกว่าแค่ตู้หยอดเหรียญ — เราคือพาร์ทเนอร์ธุรกิจที่คุณไว้วางใจได้
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {REASONS.map((r) => (
            <div
              key={r.title}
              className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-2xl">
                {r.icon}
              </div>
              <h3 className="mb-2 font-extrabold text-slate-950">{r.title}</h3>
              <p className="text-sm leading-6 text-slate-600">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
