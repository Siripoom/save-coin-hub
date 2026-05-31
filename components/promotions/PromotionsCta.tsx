export default function PromotionsCta() {
  return (
    <section id="contact-promo" className="bg-gradient-to-br from-blue-700 to-sky-500">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="flex flex-col items-center gap-8 text-center lg:flex-row lg:justify-between lg:text-left">
          <div className="text-white">
            <h2 className="text-3xl font-extrabold leading-tight">
              สนใจโปรโมชั่น?<br />ติดต่อทีมงานได้เลยวันนี้
            </h2>
            <p className="mt-4 max-w-xl text-lg opacity-90">
              ทีมงานพร้อมให้คำปรึกษาและแนะนำโปรโมชั่นที่เหมาะกับแผนการลงทุนของคุณ
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="https://line.me"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-green-400 px-8 py-4 font-semibold text-white shadow-lg transition hover:bg-green-500"
            >
              <span>💬</span> ติดต่อผ่าน LINE
            </a>
            <a
              href="tel:021234567"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-white px-8 py-4 font-semibold text-white transition hover:bg-white/10"
            >
              <span>📞</span> โทรสอบถาม 02-123-4567
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
