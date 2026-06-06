"use client"

import { useState } from "react"
import type { JobPosting } from "@/lib/admin/types"

const FILTERS = ["ทั้งหมด", "งานประจำ", "พาร์ทไทม์", "Online", "Offline"]

// Maps a filter pill to a tag substring the job must contain to match
const FILTER_TAG: Record<string, string> = {
  "งานประจำ": "full",
  "พาร์ทไทม์": "part",
  "Online": "online",
  "Offline": "offline",
}

export default function CareersJobs({ jobs }: { jobs: JobPosting[] }) {
  const [active, setActive] = useState("ทั้งหมด")

  const JOBS = jobs.filter((job) => {
    if (active === "ทั้งหมด") return true
    const needle = FILTER_TAG[active]
    return job.tags.some((t) => t.toLowerCase().includes(needle))
  })

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
