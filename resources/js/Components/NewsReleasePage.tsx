import type { NewsItem } from "@/lib/api";
import { imageUrl } from "@/lib/constants";

const BANNER = "/images/pages/news-release/news-page-heading.2v6iVI-1.png";

const LOCAL_NEWS_IMAGES: Record<number, string> = {
  22: "/images/api/news-partnership-africa-v1.jpg?v=20260730k",
  37: "/images/api/news-distributor-africa-v1.jpg?v=20260730l",
};

function newsCardImage(item: NewsItem): string {
  if (LOCAL_NEWS_IMAGES[item.id]) return LOCAL_NEWS_IMAGES[item.id];
  const img = item.image || "";
  if (img.includes("news-partnership-africa") || img.includes("595_1719573619")) {
    return LOCAL_NEWS_IMAGES[22];
  }
  if (img.includes("news-distributor-africa") || img.includes("646_1719575198")) {
    return LOCAL_NEWS_IMAGES[37];
  }
  return imageUrl(img);
}

export default function NewsReleasePageView({ items }: { items: NewsItem[] }) {
  return (
    <div className="news-release-page">
      <section className="page-heading overviewopacity">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={BANNER} className="img-fluid" alt="" loading="eager" />
        <div className="page-heading-info-release">
          <div>
            <h1 className="text-uppercase">NEWS RELEASE</h1>
          </div>
        </div>
      </section>

      <section className="section-content">
        <div className="container">
          {items.length > 0 ? (
            <div className="row g-3">
              {items.map((item) => (
                <div className="col-sm-4" key={item.id}>
                  <div className="card text-center">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={newsCardImage(item)}
                      className="card-img-top"
                      alt="..."
                      loading="lazy"
                    />
                    <div className="card-body">
                      <h5 className="card-title">{item.title}</h5>
                      <p className="card-text">{item.subTitle}</p>
                      <div className="card-bottom">
                        <a href="#" className="btn btn-dark">
                          See more
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </section>
    </div>
  );
}
