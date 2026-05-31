"use client"

import { useState } from "react"

const FILTERS = ["ทั้งหมด", "งานประจำ", "พาร์ทไทม์", "Online", "Offline"]

const JOBS = [
  { icon: "📊", title: "เจ้าหน้าที่การตลาด", tags: ["Full time", "Offline"], dept: "แผนกการตลาด", desc: "วางแผนและดำเนินงานด้านการตลาดออนไลน์และออฟไลน์ เพื่อสร้างการรับรู้และเพิ่มยอดขายให้บริษัท" },
  { icon: "🗂️", title: "แอดมินประสานงาน", tags: ["Full time", "Online"], dept: "แผนกประสานงาน", desc: "ดูแลการติดต่อประสานงานภายในองค์กรและลูกค้า จัดการเอกสารและข้อมูลต่าง ๆ ให้เป็นระบบ" },
  { icon: "🔧", title: "ช่างเทคนิคติดตั้ง", tags: ["Full time", "Offline"], dept: "แผนกบริการและติดตั้ง", desc: "ติดตั้งและบำรุงรักษาตู้จำหน่ายสินค้าอัตโนมัติ ตรวจสอบระบบ และให้บริการหน้างาน" },
  { icon: "🤝", title: "ฝ่ายขาย", tags: ["Full time", "Offline"], dept: "แผนกฝ่ายขาย", desc: "นำเสนอสินค้าและบริการ ดูแลลูกค้า และปิดการขาย เพื่อบรรลุเป้าหมายของบริษัท" },
  { icon: "🎧", title: "เจ้าหน้าที่บริการลูกค้า", tags: ["Full time", "Online"], dept: "แผนกบริการลูกค้า", desc: "ตอบคำถาม ให้คำแนะนำ และแก้ไขปัญหาลูกค้าผ่านช่องทางต่าง ๆ อย่างรวดเร็วและเป็นมืออาชีพ" },
  { icon: "🎬", title: "คอนเทนต์ครีเอเตอร์", tags: ["Part time", "Online"], dept: "แผนกการตลาด", desc: "สร้างสรรค์คอนเทนต์สำหรับสื่อออนไลน์ วิดีโอ และกราฟิก เพื่อสื่อสารแบรนด์ให้เข้าถึงกลุ่มเป้าหมาย" },
]

export default function CareersJobs() {
  const [active, setActive] = useState("ทั้งหมด")

  return (
    <section className="c-section" id="jobs">
      <div className="safe-container">
        <div className="section-header-row">
          <div>
            <h2 className="c-title">ตำแหน่งงานที่เปิดรับ</h2>
            <p className="c-desc">เลือกตำแหน่งที่เหมาะกับคุณ แล้วส่งใบสมัครให้ทีมงานพิจารณา</p>
          </div>
        </div>

        <div className="filter-pills">
          {FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              className={`pill${active === f ? " active" : ""}`}
              onClick={() => setActive(f)}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="job-grid">
          {JOBS.map((job) => (
            <article key={job.title} className="job-card">
              <div className="job-card-top">
                <div className="job-icon">{job.icon}</div>
                <div>
                  <h3>{job.title}</h3>
                  <div className="tag-row">
                    {job.tags.map((t) => <span key={t} className="tag">{t}</span>)}
                  </div>
                </div>
              </div>
              <div className="job-location">📍 {job.dept}</div>
              <p>{job.desc}</p>
              <a href="#apply" className="c-btn c-btn-primary">สมัครตำแหน่งนี้</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
