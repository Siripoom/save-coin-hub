import Link from "next/link"
import { NAV_LINKS, FOOTER_PRODUCTS, CONTACT } from "@/lib/site-config"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="safe-container">
        <div className="footer-grid">
          <div>
            <div className="logo">SAFE</div>
            <p style={{ marginTop: "12px" }}>
              ผู้เชี่ยวชาญด้านตู้หยอดเหรียญอัตโนมัติครบวงจร สินค้าคุณภาพ บริการด้วยใจ
              ช่วยให้คุณสร้างรายได้จากทุกพื้นที่อย่างยั่งยืน
            </p>
            <div className="socials">
              <a href="#" aria-label="Facebook">f</a>
              <a href="#" aria-label="LINE">L</a>
              <a href="#" aria-label="YouTube">▶</a>
              <a href="#" aria-label="TikTok">♪</a>
            </div>
          </div>

          <div>
            <h3>เมนู</h3>
            <ul>
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3>สินค้าของเรา</h3>
            <ul>
              {FOOTER_PRODUCTS.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3>ติดต่อเรา</h3>
            <ul>
              <li>📍 {CONTACT.address}</li>
              <li>📞 {CONTACT.phone}</li>
              <li>✉️ {CONTACT.email}</li>
              <li>🌐 {CONTACT.website}</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2024 SAFE Vending Solutions Co., Ltd. All rights reserved.</span>
          <span>นโยบายความเป็นส่วนตัว | ข้อกำหนดและเงื่อนไข</span>
        </div>
      </div>
    </footer>
  )
}
