"use client"

import { useState } from "react"

const TABS = ["ทั้งหมด", "ธุรกิจและการลงทุน", "สินค้าและบริการ", "การตลาด", "ไอเดียสร้างรายได้", "ข่าวสารและกิจกรรม"]

export default function BlogToolbar() {
  const [active, setActive] = useState("ทั้งหมด")

  return (
    <section className="blog-toolbar">
      <div className="safe-container">
        <div className="toolbar-card">
          <div className="category-tabs">
            {TABS.map((tab) => (
              <button
                key={tab}
                type="button"
                className={`tab-btn${active === tab ? " active" : ""}`}
                onClick={() => setActive(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="search-box">
            <input type="text" placeholder="ค้นหาบทความ..." />
            <span>⌕</span>
          </div>
        </div>
      </div>
    </section>
  )
}
