import Image from "next/image";
import { getPublishedPosts, formatThaiDate } from "@/lib/data/public-content";

const FALLBACK_IMG =
  "https://images.unsplash.com/photo-1560472355-536de3962603?q=80&w=900&auto=format&fit=crop";

export default async function BlogList() {
  const posts = await getPublishedPosts();
  const POSTS = posts.map((p) => ({
    img: p.coverImageUrl || FALLBACK_IMG,
    alt: p.title,
    category: p.category,
    date: formatThaiDate(p.publishedAt),
    readTime: p.readTime ?? "",
    title: p.title,
    excerpt: p.excerpt,
  }));

  return (
    <section className="blog-section">
      <div className="safe-container">
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
                <a href="#blog-detail" className="read-more">
                  อ่านต่อ →
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="pagination">
          <button className="page-btn" type="button">
            ‹
          </button>
          <button className="page-btn active" type="button">
            1
          </button>
          <button className="page-btn" type="button">
            2
          </button>
          <button className="page-btn" type="button">
            3
          </button>
          <button className="page-btn" type="button">
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
