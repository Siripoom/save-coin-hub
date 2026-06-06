const ROWS = [
  { type: "ตู้น้ำ", suitable: "หอพัก คอนโด ชุมชน โรงงาน", highlight: "ใช้งานประจำ มีความต้องการต่อเนื่อง", maintenance: "เปลี่ยนไส้กรอง ตรวจระบบน้ำ และทำความสะอาด", note: "เหมาะสำหรับเริ่มต้น" },
  { type: "ตู้กาแฟ", suitable: "สำนักงาน โรงงาน จุดพักคอย", highlight: "เพิ่มความสะดวกและสร้างรายได้จากเครื่องดื่ม", maintenance: "เติมวัตถุดิบ ตรวจระบบชง และทำความสะอาด", note: "เหมาะกับพื้นที่คนทำงาน" },
  { type: "ตู้น้ำแข็ง", suitable: "ตลาด ร้านค้า ปั๊มน้ำมัน ชุมชน", highlight: "ความต้องการสูงในพื้นที่ค้าขาย", maintenance: "ตรวจระบบผลิตน้ำแข็งและความสะอาด", note: "เหมาะกับพื้นที่ขายอาหาร" },
]

export default function ComparisonSection() {
  return (
    <section className="p-section">
      <div className="safe-container">
        <div className="section-head">
          <div>
            <div className="eyebrow">COMPARISON</div>
            <h2 className="section-title">เปรียบเทียบสินค้าเบื้องต้น</h2>
            <p className="section-desc">ตารางนี้ช่วยให้เห็นภาพรวมว่าสินค้าแต่ละประเภทเหมาะกับพื้นที่แบบใด</p>
          </div>
        </div>

        <div className="comparison-wrap">
          <table className="comparison-table">
            <thead>
              <tr>
                <th>ประเภทสินค้า</th>
                <th>เหมาะสำหรับ</th>
                <th>จุดเด่น</th>
                <th>การดูแล</th>
                <th>แนะนำ</th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((r) => (
                <tr key={r.type}>
                  <td><strong>{r.type}</strong></td>
                  <td>{r.suitable}</td>
                  <td><span className="check">✓</span> {r.highlight}</td>
                  <td>{r.maintenance}</td>
                  <td>{r.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
