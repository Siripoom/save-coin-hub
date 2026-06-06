import Image from "next/image";
import {
  getPublishedPortfolio,
  portfolioTypeLabel,
  portfolioImgClass,
} from "@/lib/data/public-content";

export default async function PortfolioGrid() {
  const portfolio = await getPublishedPortfolio();
  const CARDS = portfolio.map((p) => ({
    type: portfolioTypeLabel(p.type),
    imgClass: portfolioImgClass(p.type),
    imageUrl: p.imageUrl,
    location: p.location,
    title: p.name,
    desc: p.description,
  }));

  return (
    <section className="portfolio-grid-section">
      <div className="safe-container">
        <div className="section-head-row">
          <div>
            <h2 className="safe-section-title">
              ผลงานติดตั้ง<span>ที่ผ่านมา</span>
            </h2>
            <p className="safe-section-desc">
              ตัวอย่างผลงานการติดตั้งตู้จำหน่ายสินค้าอัตโนมัติในพื้นที่จริง
            </p>
          </div>
          <a className="safe-btn safe-btn-outline" href="#portfolio-detail">
            ดูรายละเอียดผลงานเด่น
          </a>
        </div>

        <div className="portfolio-grid">
          {CARDS.map((card) => (
            <article key={card.title} className="portfolio-card">
              {card.imageUrl ? (
                <div
                  className="portfolio-img"
                  style={{ position: "relative", overflow: "hidden" }}
                >
                  <Image
                    src={card.imageUrl}
                    alt={card.title}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              ) : (
                <div className={`portfolio-img `} />
              )}
              <div className="portfolio-card-body">
                <div className="portfolio-meta">
                  <span className="portfolio-type">{card.type}</span>
                  <span className="portfolio-location">{card.location}</span>
                </div>
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
                <a href="#portfolio-detail" className="portfolio-link">
                  ดูรายละเอียด ›
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
