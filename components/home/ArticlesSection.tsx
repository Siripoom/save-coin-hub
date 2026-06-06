import { getPublishedPosts, formatThaiDate } from "@/lib/data/public-content"

export default async function ArticlesSection() {
  const posts = await getPublishedPosts()
  const ARTICLES = posts.slice(0, 3).map((p) => ({
    id: p.id,
    cat: p.category,
    title: p.title,
    excerpt: p.excerpt,
    date: formatThaiDate(p.publishedAt),
  }))

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
            <a key={a.id} href="/blog" className="card article-card">
              <div className="article-thumb" />
              <div className="article-body">
                <span className="article-cat">{a.cat}</span>
                <h3>{a.title}</h3>
                <p className="article-excerpt">{a.excerpt}</p>
                <p className="article-date">{a.date}</p>
              </div>
            </a>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "32px" }}>
          <a href="/blog" className="btn btn-outline">อ่านบทความทั้งหมด →</a>
        </div>
      </div>
    </section>
  )
}
