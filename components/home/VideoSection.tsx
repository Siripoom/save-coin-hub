const VIDEOS = [
  { id: 1, emoji: "🎬", title: "รีวิวตู้น้ำ SAFE WATER รุ่นใหม่ 2024", views: "12,543 views" },
  { id: 2, emoji: "🎬", title: "วิธีดูแลรักษาตู้กาแฟอัตโนมัติ", views: "8,921 views" },
  { id: 3, emoji: "🎬", title: "รีวิวจากลูกค้าจริง สร้างรายได้จากตู้น้ำ", views: "15,200 views" },
]

export default function VideoSection() {
  return (
    <section className="section" style={{ background: "var(--brand-muted)" }}>
      <div className="safe-container">
        <div className="section-header">
          <div className="section-label">วิดีโอ</div>
          <h2>วิดีโอแนะนำสินค้า<br />และรีวิวจากลูกค้า</h2>
          <p>ดูการทำงานของเครื่องจริง รีวิวจากลูกค้าที่ใช้จริง</p>
        </div>

        <div className="video-panel">
          <div className="video-featured">
            <div className="video-placeholder">
              <div style={{ fontSize: "4rem" }}>▶</div>
              <p>แนะนำ SAFE Vending Solutions</p>
              <p style={{ opacity: 0.7, fontSize: "0.9rem" }}>รู้จักกับตู้หยอดเหรียญคุณภาพสูงจาก SAFE</p>
            </div>
          </div>

          <div className="video-list">
            {VIDEOS.map((v) => (
              <div key={v.id} className="video-item">
                <div className="video-thumb">{v.emoji}</div>
                <div>
                  <p style={{ fontWeight: 600, marginBottom: "4px" }}>{v.title}</p>
                  <p style={{ fontSize: "0.85rem", color: "var(--brand-primary)" }}>{v.views}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
