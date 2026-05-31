"use client"

import { useState } from "react"

const TABS = ["ทั้งหมด", "ตู้น้ำ", "ตู้กาแฟ", "ตู้น้ำแข็ง", "อื่น ๆ"]

export default function PortfolioFilter() {
  const [active, setActive] = useState("ทั้งหมด")

  return (
    <section className="filter-section">
      <div className="safe-container">
        <div className="portfolio-filter">
          <div className="filter-tabs" aria-label="Portfolio filter tabs">
            {TABS.map((tab) => (
              <button
                key={tab}
                type="button"
                className={`filter-tab${active === tab ? " active" : ""}`}
                onClick={() => setActive(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
          <input
            className="filter-search"
            type="search"
            placeholder="ค้นหาผลงาน เช่น มหาวิทยาลัย, โรงงาน, คอนโด..."
          />
        </div>
      </div>
    </section>
  )
}
