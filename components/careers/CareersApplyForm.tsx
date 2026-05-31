"use client"

import { useRef } from "react"

export default function CareersApplyForm() {
  const fileRef = useRef<HTMLInputElement>(null)

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
          <form className="form-card" onSubmit={(e) => e.preventDefault()}>
            <div className="form-grid">
              <div className="form-group">
                <label>ชื่อ-นามสกุล</label>
                <input type="text" placeholder="กรอกชื่อ-นามสกุล" />
              </div>
              <div className="form-group">
                <label>เบอร์โทรศัพท์</label>
                <input type="tel" placeholder="กรอกเบอร์โทรศัพท์" />
              </div>
              <div className="form-group">
                <label>อีเมล</label>
                <input type="email" placeholder="กรอกอีเมล" />
              </div>
              <div className="form-group">
                <label>เวลาที่สะดวกให้ติดต่อกลับ</label>
                <select>
                  <option>เลือกเวลาที่สะดวก</option>
                  <option>09:00 - 12:00 น.</option>
                  <option>13:00 - 16:00 น.</option>
                  <option>หลัง 17:00 น.</option>
                </select>
              </div>
              <div className="form-group two">
                <label>ประสบการณ์ทำงาน</label>
                <input type="text" placeholder="ระบุประสบการณ์ทำงานโดยย่อ" />
              </div>
              <div className="form-group">
                <label>ความสนใจแบบ Online หรือ Offline</label>
                <div className="radio-row">
                  <label><input type="radio" name="work_mode" defaultChecked /> Online</label>
                  <label><input type="radio" name="work_mode" /> Offline</label>
                </div>
              </div>
              <div className="form-group">
                <label>ความสนใจแบบ Full time หรือ Part time</label>
                <div className="radio-row">
                  <label><input type="radio" name="job_type" defaultChecked /> Full time</label>
                  <label><input type="radio" name="job_type" /> Part time</label>
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
            <div className="submit-row">
              <button type="submit" className="c-btn c-btn-primary">ส่งใบสมัคร</button>
            </div>
          </form>

          <aside className="success-card">
            <div className="success-icon">✓</div>
            <h3>ส่งข้อมูลเรียบร้อยแล้ว</h3>
            <p>ขอบคุณสำหรับการสมัครงาน ทีมงานจะติดต่อกลับตามข้อมูลที่ท่านระบุไว้</p>
            <a href="/" className="c-btn c-btn-outline">กลับสู่หน้าหลัก</a>
          </aside>
        </div>
      </div>
    </section>
  )
}
