import { getVisiblePromotions, promoStatusView, formatThaiDate } from "@/lib/data/public-content"

export default async function PromotionsGrid() {
  const visible = await getVisiblePromotions()
  const PROMOS = visible.map((p) => {
    const sv = promoStatusView(p.status)
    return {
      gradient: p.gradient ?? "from-blue-700 to-sky-400",
      status: sv.label,
      statusColor: sv.color,
      eyebrow: p.eyebrow ?? "",
      headline: p.headline ?? p.title,
      title: p.title,
      desc: p.description,
      start: formatThaiDate(p.startDate),
      end: formatThaiDate(p.endDate),
      expired: sv.expired,
    }
  })

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
