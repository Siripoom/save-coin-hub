"use client"

export default function BlogNewsletter() {
  return (
    <section className="newsletter">
      <div className="safe-container">
        <div className="newsletter-box">
          <div>
            <h2>ไม่พลาดทุกบทความและข่าวสาร</h2>
            <p>ติดตามความรู้ ข่าวสารสินค้า และเคล็ดลับการลงทุนจากทีมงาน SAFE</p>
          </div>
          <form
            className="newsletter-form"
            onSubmit={(e) => e.preventDefault()}
          >
            <input type="email" placeholder="กรอกอีเมลของคุณ" required />
            <button type="submit">ติดตามเรา</button>
          </form>
        </div>
      </div>
    </section>
  )
}
