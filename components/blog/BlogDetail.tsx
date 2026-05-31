import Image from "next/image"

const RELATED = [
  {
    img: "https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=300&auto=format&fit=crop",
    alt: "พื้นที่ติดตั้ง",
    title: "พื้นที่แบบไหนเหมาะกับการติดตั้งตู้อัตโนมัติ",
    date: "10 เม.ย. 2567",
  },
  {
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=300&auto=format&fit=crop",
    alt: "เริ่มต้นลงทุน",
    title: "เริ่มต้นธุรกิจตู้หยอดเหรียญ ต้องเตรียมอะไรบ้าง?",
    date: "28 มี.ค. 2567",
  },
  {
    img: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?q=80&w=300&auto=format&fit=crop",
    alt: "การตลาด",
    title: "เทคนิคเพิ่มยอดขายให้กับตู้หยอดเหรียญ",
    date: "5 เม.ย. 2567",
  },
]

const CATEGORIES = [
  { label: "ทั้งหมด", count: 24 },
  { label: "ธุรกิจและการลงทุน", count: 8 },
  { label: "สินค้าและบริการ", count: 6 },
  { label: "การตลาด", count: 4 },
  { label: "ข่าวสารและกิจกรรม", count: 6 },
]

export default function BlogDetail() {
  return (
    <section id="blog-detail" className="blog-detail-section">
      <div className="safe-container">
        <div className="section-header">
          <div>
            <div className="section-kicker">Blog Detail Preview</div>
            <h2 className="section-title">ตัวอย่างหน้ารายละเอียดบทความ</h2>
            <p className="section-desc">
              ส่วนนี้สามารถแยกไปทำเป็นหน้า <code>/blog/[slug]</code> ใน Next.js ได้
            </p>
          </div>
        </div>

        <div className="detail-layout">
          <article className="article-main">
            <div className="article-cover">
              <Image
                src="https://images.unsplash.com/photo-1560472355-536de3962603?q=80&w=1400&auto=format&fit=crop"
                alt="5 เหตุผลที่ธุรกิจตู้หยอดเหรียญยังน่าลงทุน"
                width={1400}
                height={840}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>

            <span className="article-category">ธุรกิจและการลงทุน</span>
            <h2>5 เหตุผลที่ธุรกิจตู้หยอดเหรียญยังน่าลงทุน</h2>

            <div className="article-info">
              <span>เผยแพร่วันที่ 25 เม.ย. 2567</span>
              <span>8 นาทีในการอ่าน</span>
              <span>โดย SAFE Team</span>
            </div>

            <div className="article-body">
              <p>
                ธุรกิจตู้หยอดเหรียญและตู้อัตโนมัติยังเป็นหนึ่งในรูปแบบธุรกิจที่ได้รับความนิยม
                เพราะสามารถเริ่มต้นได้ง่าย ใช้พื้นที่ไม่มาก และตอบโจทย์พฤติกรรมผู้บริโภคที่ต้องการความสะดวก
                รวดเร็ว และเข้าถึงสินค้าได้ตลอดเวลา
              </p>

              <h3>1. ความต้องการของผู้บริโภคยังคงเพิ่มขึ้น</h3>
              <p>
                ผู้บริโภคในปัจจุบันให้ความสำคัญกับความสะดวกและความรวดเร็วมากขึ้น
                ตู้อัตโนมัติจึงเป็นทางเลือกที่ช่วยให้ลูกค้าสามารถซื้อสินค้าได้ด้วยตนเอง
                โดยไม่จำเป็นต้องรอพนักงาน
              </p>

              <h3>2. ใช้พื้นที่น้อย แต่สร้างโอกาสรายได้</h3>
              <p>
                จุดเด่นของตู้อัตโนมัติคือสามารถติดตั้งได้ในพื้นที่จำกัด เช่น หอพัก คอนโด โรงงาน
                สำนักงาน ตลาด หรือพื้นที่ที่มีคนสัญจร ทำให้เจ้าของพื้นที่สามารถเพิ่มมูลค่าจากพื้นที่ว่างได้
              </p>

              <div className="article-highlight">
                <strong>ข้อแนะนำจาก SAFE:</strong>{" "}
                ก่อนตัดสินใจติดตั้ง ควรประเมินกลุ่มผู้ใช้งาน ทำเล และประเภทสินค้าที่เหมาะสม
                เพื่อเพิ่มโอกาสสร้างรายได้ในระยะยาว
              </div>

              <h3>3. ระบบดูแลง่ายและตรวจสอบได้</h3>
              <p>
                ตู้อัตโนมัติในปัจจุบันสามารถเชื่อมต่อระบบจัดการออนไลน์ได้
                ช่วยให้ตรวจสอบยอดขาย สถานะเครื่อง และข้อมูลการใช้งานได้สะดวกยิ่งขึ้น
              </p>

              <h3>4. เหมาะกับหลายประเภทธุรกิจ</h3>
              <ul>
                <li>หอพักและคอนโดมิเนียม</li>
                <li>โรงงานและสำนักงาน</li>
                <li>ตลาดและพื้นที่ชุมชน</li>
                <li>ปั๊มน้ำมันและพื้นที่เชิงพาณิชย์</li>
              </ul>

              <h3>5. มีทีมงานให้คำปรึกษาและบริการหลังการขาย</h3>
              <p>
                การมีทีมงานช่วยประเมินพื้นที่ แนะนำประเภทตู้ และดูแลหลังการติดตั้ง
                จะช่วยให้ผู้ลงทุนเริ่มต้นได้อย่างมั่นใจมากขึ้น
              </p>
            </div>
          </article>

          <aside className="sidebar">
            <div className="side-card">
              <h3>หมวดหมู่บทความ</h3>
              <div className="category-list">
                {CATEGORIES.map((cat) => (
                  <a key={cat.label} href="#" className="category-item">
                    <span>{cat.label}</span>
                    <span>{cat.count}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="side-card">
              <h3>บทความที่เกี่ยวข้อง</h3>
              <div className="related-list">
                {RELATED.map((item) => (
                  <a key={item.title} href="#" className="related-item">
                    <div className="related-thumb">
                      <Image
                        src={item.img}
                        alt={item.alt}
                        width={300}
                        height={200}
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      />
                    </div>
                    <div>
                      <h4>{item.title}</h4>
                      <small>{item.date}</small>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
