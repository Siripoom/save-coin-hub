"use client"

import { useState } from "react"

const CATEGORIES = ["ทั้งหมด", "ตู้น้ำ", "ตู้กาแฟ", "ตู้น้ำแข็ง"]

export default function ProductFilter() {
  const [active, setActive] = useState("ทั้งหมด")

  return (
    <div className="safe-container">
      <div className="filter-card">
        <div className="filter-row">
          <div className="search-box">
            <span className="search-icon">🔍</span>
            <input type="text" placeholder="ค้นหาสินค้า เช่น ตู้น้ำ ตู้กาแฟ ตู้น้ำแข็ง..." />
          </div>
          <select className="sort-select">
            <option>เรียงตาม: สินค้าแนะนำ</option>
            <option>สินค้าใหม่ล่าสุด</option>
            <option>ยอดนิยม</option>
            <option>เหมาะสำหรับเริ่มต้น</option>
          </select>
        </div>
        <div className="category-pills">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              className={`pill${active === cat ? " active" : ""}`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
