const PROMOS = [
  {
    gradient: "from-blue-700 to-sky-400",
    status: "กำลังใช้งาน", statusColor: "bg-green-500",
    eyebrow: "ประหยัดตั้งแต่วันแรก",
    headline: "ติดตั้งฟรี!\n0 บาท",
    title: "ติดตั้งฟรี! ทุกตู้",
    desc: "ฟรีค่าติดตั้งและเดินระบบทั่วประเทศ สำหรับลูกค้าที่เริ่มต้นกับ SAFE",
    start: "1 พ.ค. 2567", end: "31 ธ.ค. 2567", expired: false,
  },
  {
    gradient: "from-blue-800 to-blue-500",
    status: "กำลังใช้งาน", statusColor: "bg-green-500",
    eyebrow: "สำหรับผู้เริ่มต้นธุรกิจ",
    headline: "ผ่อนสบาย\n0% สูงสุด 10 เดือน",
    title: "ผ่อนสบาย 0% สูงสุด 10 เดือน",
    desc: "แบ่งชำระง่าย ดอกเบี้ย 0% สำหรับรุ่นที่ร่วมรายการ",
    start: "1 พ.ค. 2567", end: "30 มิ.ย. 2567", expired: false,
  },
  {
    gradient: "from-sky-500 to-blue-700",
    status: "กำลังใช้งาน", statusColor: "bg-green-500",
    eyebrow: "เฉพาะรุ่นที่ร่วมรายการ",
    headline: "ลดทันที\nสูงสุด 15%",
    title: "ลดทันทีสูงสุด 15%",
    desc: "ส่วนลดพิเศษสำหรับตู้สินค้าและแพ็กเกจที่กำหนด",
    start: "1 พ.ค. 2567", end: "30 มิ.ย. 2567", expired: false,
  },
  {
    gradient: "from-blue-600 to-sky-300",
    status: "กำลังใช้งาน", statusColor: "bg-green-500",
    eyebrow: "",
    headline: "แพ็กเกจสุดคุ้ม\nซื้อ 2 ตู้ขึ้นไป รับส่วนลดเพิ่ม",
    title: "แพ็กเกจซื้อ 2 ตู้ขึ้นไป",
    desc: "เหมาะสำหรับเจ้าของพื้นที่ที่ต้องการติดตั้งหลายจุด",
    start: "1 พ.ค. 2567", end: "31 ส.ค. 2567", expired: false,
  },
  {
    gradient: "from-blue-700 to-cyan-500",
    status: "กำลังใช้งาน", statusColor: "bg-green-500",
    eyebrow: "",
    headline: "เปิดร้านใหม่\nรับเครดิตน้ำแข็ง 5,000 บาท",
    title: "เปิดร้านใหม่ รับเครดิตน้ำแข็ง 5,000 บาท",
    desc: "สำหรับลูกค้าใหม่ที่ติดตั้งตู้น้ำแข็ง SAFE ICE",
    start: "1 พ.ค. 2567", end: "31 ก.ค. 2567", expired: false,
  },
  {
    gradient: "from-slate-700 to-slate-400",
    status: "หมดเขตแล้ว", statusColor: "bg-slate-800",
    eyebrow: "",
    headline: "โปรพิเศษ\nวันแรงงาน\nลดสูงสุด 10%",
    title: "โปรพิเศษวันแรงงาน",
    desc: "โปรโมชันย้อนหลัง พร้อมของแถมพิเศษ",
    start: "1 เม.ย. 2567", end: "30 เม.ย. 2567", expired: true,
  },
]

export default function PromotionsGrid() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-12 pt-6 lg:px-8">
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {PROMOS.map((p) => (
          <article
            key={p.title}
            className={`group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl${p.expired ? " opacity-75" : ""}`}
          >
            <div className={`relative h-56 bg-gradient-to-br ${p.gradient} p-6 text-white`}>
              <span className={`absolute right-4 top-4 rounded-full ${p.statusColor} px-3 py-1 text-xs font-bold`}>
                {p.status}
              </span>
              {p.eyebrow && <p className="text-sm font-semibold opacity-90">{p.eyebrow}</p>}
              <h3 className="mt-4 text-3xl font-extrabold whitespace-pre-line leading-tight">{p.headline}</h3>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-extrabold text-slate-950">{p.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{p.desc}</p>
              <div className="mt-5 flex items-center justify-between text-sm text-slate-500">
                <span>{p.start}</span><span>{p.end}</span>
              </div>
              {p.expired ? (
                <button disabled className="mt-5 inline-flex w-full items-center justify-center rounded-2xl border border-slate-300 px-5 py-3 font-semibold text-slate-500 cursor-not-allowed">
                  หมดเขตแล้ว
                </button>
              ) : (
                <a href="#promotion-detail" className="mt-5 inline-flex w-full items-center justify-center rounded-2xl border border-blue-600 px-5 py-3 font-semibold text-blue-600 transition hover:bg-blue-600 hover:text-white">
                  ดูรายละเอียด
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
