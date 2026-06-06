"use client"

import Link from "next/link"
import { useActionState, useRef } from "react"
import { submitApplication, type ApplyState } from "@/app/(public)/careers/actions"

export default function CareersApplyForm() {
  const fileRef = useRef<HTMLInputElement>(null)
  const formRef = useRef<HTMLFormElement>(null)
  const [state, formAction, pending] = useActionState<ApplyState | null, FormData>(
    async (prev, formData) => {
      const result = await submitApplication(prev, formData)
      if (result.ok) formRef.current?.reset()
      return result
    },
    null
  )

  const submitted = state?.ok === true

  return (
    <section className="c-section" id="apply">
      <div className="safe-container">
        <div className="apply-intro">
          <h2 className="c-title">สมัครงานกับ <span>SAFE</span></h2>
          <p className="c-desc">
            กรอกข้อมูลของคุณให้ครบถ้วน ทีมงานจะพิจารณาและติดต่อกลับตามข้อมูลที่ท่านระบุไว้
          </p>
        </div>

        <div className="apply-wrap">
          <form className="form-card" action={formAction} ref={formRef}>
            <div className="form-grid">
              <div className="form-group">
                <label>ชื่อ-นามสกุล</label>
                <input name="name" type="text" placeholder="กรอกชื่อ-นามสกุล" required />
              </div>
              <div className="form-group">
                <label>เบอร์โทรศัพท์</label>
                <input name="phone" type="tel" placeholder="กรอกเบอร์โทรศัพท์" required />
              </div>
              <div className="form-group">
                <label>อีเมล</label>
                <input name="email" type="email" placeholder="กรอกอีเมล" required />
              </div>
              <div className="form-group">
                <label>ตำแหน่งที่สนใจ</label>
                <input name="position" type="text" placeholder="เช่น ช่างเทคนิคติดตั้ง" />
              </div>
              <div className="form-group">
                <label>เวลาที่สะดวกให้ติดต่อกลับ</label>
                <select name="preferredTime" defaultValue="">
                  <option value="" disabled>เลือกเวลาที่สะดวก</option>
                  <option>09:00 - 12:00 น.</option>
                  <option>13:00 - 16:00 น.</option>
                  <option>หลัง 17:00 น.</option>
                </select>
              </div>
              <div className="form-group two">
                <label>ประสบการณ์ทำงาน</label>
                <input name="experience" type="text" placeholder="ระบุประสบการณ์ทำงานโดยย่อ" />
              </div>
              <div className="form-group">
                <label>ความสนใจแบบ Online หรือ Offline</label>
                <div className="radio-row">
                  <label><input type="radio" name="work_mode" value="online" defaultChecked /> Online</label>
                  <label><input type="radio" name="work_mode" value="offline" /> Offline</label>
                </div>
              </div>
              <div className="form-group">
                <label>ความสนใจแบบ Full time หรือ Part time</label>
                <div className="radio-row">
                  <label><input type="radio" name="job_type" value="fulltime" defaultChecked /> Full time</label>
                  <label><input type="radio" name="job_type" value="parttime" /> Part time</label>
                </div>
              </div>
              <div className="form-group full">
                <label>แนบไฟล์ Resume หรือเอกสารประกอบ</label>
                <div className="upload-box" onClick={() => fileRef.current?.click()}>
                  <strong>☁️ ลากไฟล์มาวางที่นี่ หรือคลิกเพื่ออัปโหลด</strong>
                  รองรับไฟล์ PDF, DOC, DOCX, JPG, PNG ขนาดไม่เกิน 10MB
                  <input ref={fileRef} type="file" style={{ display: "none" }} accept=".pdf,.doc,.docx,.jpg,.png" />
                </div>
              </div>
            </div>
            {state && !state.ok && state.error && (
              <p style={{ color: "#dc2626", fontSize: 14, marginTop: 12 }}>{state.error}</p>
            )}
            <div className="submit-row">
              <button type="submit" className="c-btn c-btn-primary" disabled={pending}>
                {pending ? "กำลังส่ง..." : "ส่งใบสมัคร"}
              </button>
            </div>
          </form>

          {submitted && (
            <aside className="success-card">
              <div className="success-icon">✓</div>
              <h3>ส่งข้อมูลเรียบร้อยแล้ว</h3>
              <p>ขอบคุณสำหรับการสมัครงาน ทีมงานจะติดต่อกลับตามข้อมูลที่ท่านระบุไว้</p>
              <Link href="/" className="c-btn c-btn-outline">กลับสู่หน้าหลัก</Link>
            </aside>
          )}
        </div>
      </div>
    </section>
  )
}
