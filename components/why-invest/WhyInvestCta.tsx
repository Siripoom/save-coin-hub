import { CONTACT } from "@/lib/site-config"

export default function WhyInvestCta() {
  return (
    <section id="contact" className="blue-section py-12 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute -left-20 top-6 w-72 h-72 rounded-full border-[35px] border-white" />
        <div className="absolute right-10 bottom-0 w-96 h-96 rounded-full border-[48px] border-white" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-8 items-center">
          <div className="hidden lg:flex gap-3 items-end">
            <div className="w-24 h-36 rounded-3xl bg-white/90" />
            <div className="w-24 h-44 rounded-3xl bg-slate-900/90" />
            <div className="w-24 h-36 rounded-3xl bg-white/90" />
          </div>

          <div className="text-white text-center lg:text-left">
            <h2 className="text-3xl lg:text-4xl font-extrabold">สนใจลงทุนกับ SAFE ปรึกษาฟรี</h2>
            <p className="mt-4 text-blue-50 leading-relaxed">
              ทีมงานพร้อมให้คำแนะนำ เลือกตู้ที่เหมาะสมกับพื้นที่ของคุณ
              เริ่มต้นธุรกิจง่าย สร้างรายได้อย่างมั่นใจไปกับ SAFE
            </p>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col gap-4 lg:items-end">
            <a href={CONTACT.line} className="inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-green-500 text-white font-bold hover:bg-green-600 transition">
              ติดต่อผ่าน LINE
            </a>
            <a href={`tel:${CONTACT.phone}`} className="inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-white text-blue-700 font-bold hover:bg-blue-50 transition">
              โทรสอบถาม {CONTACT.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
