import Image from "next/image"

export default function PromotionsHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-sky-100">
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute -right-20 top-10 h-72 w-72 rounded-full bg-sky-300 blur-3xl" />
        <div className="absolute left-0 bottom-0 h-52 w-52 rounded-full bg-blue-200 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-16 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="mb-4 inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            โปรโมชั่นสำหรับผู้สนใจลงทุนกับ SAFE
          </p>
          <h1 className="text-4xl font-extrabold leading-tight text-slate-950 md:text-5xl">
            โปรโมชั่นพิเศษ
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
            ข้อเสนอสุดคุ้มสำหรับตู้หยอดเหรียญ ตู้น้ำ ตู้กาแฟ และตู้น้ำแข็ง
            พร้อมทีมงานให้คำปรึกษา ติดตั้ง และดูแลหลังการขาย
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#promotions" className="inline-flex items-center justify-center rounded-2xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-200 transition hover:bg-blue-700">
              ดูโปรโมชั่นทั้งหมด
            </a>
            <a href="#contact-promo" className="inline-flex items-center justify-center rounded-2xl border border-green-400 bg-white px-6 py-3 font-semibold text-green-600 transition hover:bg-green-50">
              ติดต่อผ่าน LINE
            </a>
          </div>
        </div>

        <div className="relative">
          <Image
            src="/hero.png"
            alt="โปรโมชั่นตู้หยอดเหรียญ SAFE — ตู้น้ำ ตู้กาแฟ และตู้น้ำแข็ง"
            width={1448}
            height={1086}
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="w-full h-auto rounded-[2rem] shadow-2xl shadow-blue-100"
          />
        </div>
      </div>
    </section>
  )
}
