"use client"

import { useState } from "react"

const FILTERS = ["ทั้งหมด", "กำลังใช้งาน", "หมดเขตแล้ว", "ลงทุนเริ่มต้น", "ผ่อนชำระ", "โปรติดตั้ง", "แพ็กเกจสุดคุ้ม"]

export default function PromotionsFilter() {
  const [active, setActive] = useState("ทั้งหมด")

  return (
    <section id="promotions" className="mx-auto max-w-7xl px-6 pt-5 pb-3 lg:px-8">
      <div className="mb-5 flex items-center gap-2 text-sm text-slate-500">
        <span>หน้าหลัก</span><span>/</span>
        <span className="font-semibold text-blue-600">โปรโมชั่น</span>
      </div>

      <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <h2 className="text-3xl font-extrabold text-slate-950">โปรโมชั่นทั้งหมด</h2>
          <p className="mt-2 text-slate-600">เลือกข้อเสนอที่เหมาะกับแผนการลงทุนของคุณ</p>
        </div>
        <div className="relative w-full lg:w-80">
          <input
            type="text"
            placeholder="ค้นหาโปรโมชั่น..."
            className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-3 pr-11 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
          />
          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">⌕</span>
        </div>
      </div>

      <div className="flex flex-wrap gap-3 rounded-3xl border border-slate-200 bg-white p-3 shadow-sm">
        {FILTERS.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setActive(f)}
            className={`rounded-2xl px-5 py-2.5 text-sm font-semibold transition ${
              active === f
                ? "bg-blue-600 text-white"
                : "text-slate-600 hover:bg-blue-50 hover:text-blue-600"
            }`}
          >
            {f}
          </button>
        ))}
      </div>
    </section>
  )
}
