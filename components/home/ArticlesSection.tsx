const ARTICLES = [
  { id: 1, cat: "ธุรกิจ", title: "5 เหตุผลที่ตู้น้ำหยอดเหรียญยังเป็นธุรกิจที่น่าลงทุนใน 2024", date: "15 ม.ค. 2024" },
  { id: 2, cat: "เทคโนโลยี", title: "เทคโนโลยีใหม่ในตู้กาแฟอัตโนมัติ ทำไมลูกค้าถึงชอบ", date: "22 ม.ค. 2024" },
  { id: 3, cat: "การลงทุน", title: "วิธีเลือกทำเลวางตู้หยอดเหรียญให้ได้กำไรสูงสุด", date: "1 ก.พ. 2024" },
  { id: 4, cat: "แนะนำ", title: "ดูแลรักษาตู้น้ำอย่างไรให้อายุการใช้งานยาวนาน", date: "8 ก.พ. 2024" },
]

export default function ArticlesSection() {
  return (
    <section className="section">
      <div className="safe-container">
        <div className="section-header">
          <div className="section-label">บทความ</div>
          <h2>บทความและความรู้<br />ด้านธุรกิจตู้หยอดเหรียญ</h2>
          <p>อัปเดตข่าวสารและความรู้เพื่อเพิ่มโอกาสทางธุรกิจ</p>
        </div>

        <div className="article-grid">
          {ARTICLES.map((a) => (
            <div key={a.id} className="article-card">
              <div className="article-img">📰</div>
              <div className="article-body">
                <span className="badge">{a.cat}</span>
                <h3>{a.title}</h3>
                <p className="article-date">{a.date}</p>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "48px" }}>
          <a href="/blog" className="btn btn-outline">อ่านบทความทั้งหมด →</a>
        </div>
      </div>
    </section>
  )
}
