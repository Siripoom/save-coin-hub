const HIGHLIGHTS = [
  "ฟรีค่าติดตั้งและเดินระบบสำหรับทุกรุ่น",
  "ครอบคลุมทุกพื้นที่ทั่วประเทศไทย",
  "รวมค่าแรงและวัสดุในการติดตั้ง",
  "ทีมช่างผู้เชี่ยวชาญพร้อมให้บริการ",
  "ตรวจสอบและทดสอบระบบก่อนส่งมอบ",
]

const CONDITIONS = [
  "สำหรับลูกค้าที่ซื้อตู้ใหม่เท่านั้น",
  "ต้องลงทะเบียนก่อนวันที่ 31 ธ.ค. 2567",
  "ไม่สามารถใช้ร่วมกับโปรโมชั่นอื่น",
  "จำกัด 1 ตู้ต่อ 1 สิทธิ์",
  "บริษัทขอสงวนสิทธิ์เปลี่ยนแปลงเงื่อนไข",
]

export default function PromotionDetail() {
  return (
    <section id="promotion-detail" className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
      <div className="mb-8">
        <h2 className="text-3xl font-extrabold text-slate-950">รายละเอียดโปรโมชั่น</h2>
        <p className="mt-2 text-slate-600">ข้อมูลเพิ่มเติมและเงื่อนไขการรับสิทธิ์</p>
      </div>

      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
        <div className="grid lg:grid-cols-2">
          <div className="bg-gradient-to-br from-blue-700 to-sky-400 p-8 text-white">
            <span className="inline-flex rounded-full bg-green-500 px-3 py-1 text-xs font-bold">
              กำลังใช้งาน
            </span>
            <p className="mt-4 text-sm font-semibold opacity-90">ประหยัดตั้งแต่วันแรก</p>
            <h3 className="mt-3 text-4xl font-extrabold leading-tight">
              ติดตั้งฟรี!<br />0 บาท
            </h3>
            <p className="mt-4 leading-7 opacity-90">
              ฟรีค่าติดตั้งและเดินระบบทั่วประเทศ สำหรับลูกค้าที่เริ่มต้นกับ SAFE
              ไม่ต้องกังวลเรื่องค่าใช้จ่ายเพิ่มเติม ทีมงานมืออาชีพพร้อมดูแลคุณตั้งแต่ต้นจนจบ
            </p>
            <div className="mt-6 flex items-center gap-4 text-sm opacity-80">
              <span>เริ่ม 1 พ.ค. 2567</span>
              <span>—</span>
              <span>สิ้นสุด 31 ธ.ค. 2567</span>
            </div>
            <a
              href="#contact-promo"
              className="mt-8 inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3 font-semibold text-blue-700 transition hover:bg-blue-50"
            >
              รับสิทธิ์โปรโมชั่นนี้
            </a>
          </div>

          <div className="p-8">
            <div className="mb-8">
              <h4 className="mb-4 font-extrabold text-slate-950">สิ่งที่คุณได้รับ</h4>
              <ul className="space-y-3">
                {HIGHLIGHTS.map((h) => (
                  <li key={h} className="flex items-start gap-3 text-sm text-slate-700">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600 text-xs font-bold">✓</span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-extrabold text-slate-950">เงื่อนไขการรับสิทธิ์</h4>
              <ul className="space-y-3">
                {CONDITIONS.map((c) => (
                  <li key={c} className="flex items-start gap-3 text-sm text-slate-500">
                    <span className="mt-0.5 text-slate-300">•</span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-100 bg-slate-50 p-8">
          <p className="mb-4 text-sm font-semibold text-slate-700">ภาพประกอบการติดตั้ง</p>
          <div className="grid grid-cols-3 gap-4">
            {["from-sky-200 to-blue-300", "from-blue-200 to-sky-300", "from-slate-200 to-slate-300"].map((g, i) => (
              <div key={i} className={`h-32 rounded-2xl bg-gradient-to-br ${g}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
