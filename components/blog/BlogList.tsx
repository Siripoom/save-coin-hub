import Image from "next/image"

const POSTS = [
  {
    img: "https://images.unsplash.com/photo-1560472355-536de3962603?q=80&w=900&auto=format&fit=crop",
    alt: "ธุรกิจตู้หยอดเหรียญ",
    category: "ธุรกิจและการลงทุน",
    date: "25 เม.ย. 2567",
    readTime: "8 นาทีในการอ่าน",
    title: "5 เหตุผลที่ธุรกิจตู้หยอดเหรียญยังน่าลงทุน",
    excerpt: "เจาะลึกโอกาสของธุรกิจตู้หยอดเหรียญที่ตอบโจทย์พฤติกรรมผู้บริโภคยุคใหม่ และช่วยสร้างรายได้จากพื้นที่ว่าง",
  },
  {
    img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=900&auto=format&fit=crop",
    alt: "ตู้กาแฟอัตโนมัติ",
    category: "สินค้าและบริการ",
    date: "18 เม.ย. 2567",
    readTime: "6 นาทีในการอ่าน",
    title: "ตู้กาแฟอัตโนมัติ ทางเลือกใหม่ของคนรักกาแฟ",
    excerpt: "ตอบโจทย์ทุกไลฟ์สไตล์ ด้วยรสชาติที่สม่ำเสมอ ใช้งานง่าย และเหมาะกับพื้นที่ที่มีคนใช้งานประจำ",
  },
  {
    img: "https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=900&auto=format&fit=crop",
    alt: "พื้นที่ติดตั้งตู้",
    category: "ไอเดียสร้างรายได้",
    date: "10 เม.ย. 2567",
    readTime: "5 นาทีในการอ่าน",
    title: "พื้นที่แบบไหนเหมาะกับการติดตั้งตู้อัตโนมัติ",
    excerpt: "แนะนำทำเลที่เหมาะกับการติดตั้งตู้ เช่น หอพัก โรงงาน สำนักงาน และพื้นที่ที่มีการสัญจรหนาแน่น",
  },
  {
    img: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?q=80&w=900&auto=format&fit=crop",
    alt: "การตลาดตู้หยอดเหรียญ",
    category: "การตลาด",
    date: "5 เม.ย. 2567",
    readTime: "7 นาทีในการอ่าน",
    title: "เทคนิคเพิ่มยอดขายให้กับตู้หยอดเหรียญ",
    excerpt: "รวมเทคนิคการเลือกสินค้า การจัดวางตำแหน่ง และการสร้างโปรโมชัน เพื่อเพิ่มโอกาสสร้างรายได้",
  },
  {
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=900&auto=format&fit=crop",
    alt: "เริ่มต้นลงทุน",
    category: "ธุรกิจและการลงทุน",
    date: "28 มี.ค. 2567",
    readTime: "9 นาทีในการอ่าน",
    title: "เริ่มต้นธุรกิจตู้หยอดเหรียญ ต้องเตรียมอะไรบ้าง?",
    excerpt: "Checklist ที่ควรรู้ก่อนเริ่มต้นลงทุน ตั้งแต่การเลือกประเภทตู้ การประเมินทำเล ไปจนถึงการดูแลหลังติดตั้ง",
  },
  {
    img: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=900&auto=format&fit=crop",
    alt: "ข่าวสารกิจกรรม SAFE",
    category: "ข่าวสารและกิจกรรม",
    date: "20 มี.ค. 2567",
    readTime: "4 นาทีในการอ่าน",
    title: "SAFE ร่วมออกบูธในงาน Smart SME Expo 2024",
    excerpt: "บรรยากาศภายในงานและการตอบรับจากผู้ที่สนใจลงทุน พร้อมโซลูชันตู้อัตโนมัติสำหรับธุรกิจยุคใหม่",
  },
]

export default function BlogList() {
  return (
    <section className="blog-section">
      <div className="safe-container">
        <div className="section-header">
          <div>
            <div className="section-kicker">SAFE Knowledge</div>
            <h2 className="section-title">บทความล่าสุด</h2>
            <p className="section-desc">
              อัปเดตความรู้และข่าวสารเกี่ยวกับธุรกิจตู้อัตโนมัติ สำหรับผู้ที่สนใจลงทุนหรือเจ้าของพื้นที่
            </p>
          </div>
        </div>

        <div className="blog-grid">
          {POSTS.map((post) => (
            <article key={post.title} className="blog-card">
              <div className="blog-img">
                <Image
                  src={post.img}
                  alt={post.alt}
                  width={900}
                  height={600}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                <span className="category-badge">{post.category}</span>
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <a href="#blog-detail" className="read-more">อ่านต่อ →</a>
              </div>
            </article>
          ))}
        </div>

        <div className="pagination">
          <button className="page-btn" type="button">‹</button>
          <button className="page-btn active" type="button">1</button>
          <button className="page-btn" type="button">2</button>
          <button className="page-btn" type="button">3</button>
          <button className="page-btn" type="button">›</button>
        </div>
      </div>
    </section>
  )
}
