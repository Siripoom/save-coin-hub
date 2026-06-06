import { Play } from "lucide-react"

const VIDEOS = [
  { id: 1, title: "รีวิวตู้น้ำ SAFE WATER รุ่นใหม่ 2024", views: "12,543 views" },
  { id: 2, title: "วิธีดูแลรักษาตู้กาแฟอัตโนมัติ", views: "8,921 views" },
  { id: 3, title: "รีวิวจากลูกค้าจริง สร้างรายได้จากตู้น้ำ", views: "15,200 views" },
]

export default function VideoSection() {
  return (
    <section className="section video-section">
      <div className="safe-container">
        <div className="section-header">
          <div className="section-label">วิดีโอ</div>
          <h2>วิดีโอแนะนำสินค้า<br />และรีวิวจากลูกค้า</h2>
          <p>ดูการทำงานของเครื่องจริง รีวิวจากลูกค้าที่ใช้จริง</p>
        </div>

        <div className="video-panel">
          <div className="featured-video">
            <div className="video-thumb">
              <button className="play-btn" aria-label="เล่นวิดีโอ">
                <Play size={28} fill="currentColor" />
              </button>
              <span className="duration">05:24</span>
              <div className="video-label">
                <h3>แนะนำ SAFE Vending Solutions</h3>
              </div>
            </div>
            <div className="video-info">
              <p>รู้จักกับตู้หยอดเหรียญคุณภาพสูงจาก SAFE ครบทุกขั้นตอน ตั้งแต่ติดตั้งจนเริ่มสร้างรายได้</p>
            </div>
          </div>

          <div className="video-list">
            {VIDEOS.map((v) => (
              <div key={v.id} className="video-item">
                <div className="video-item-thumb">
                  <span className="play-mini"><Play size={16} fill="currentColor" /></span>
                </div>
                <div>
                  <h3>{v.title}</h3>
                  <p>{v.views}</p>
                  <a href="/blog" className="watch">ดูวิดีโอ →</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
