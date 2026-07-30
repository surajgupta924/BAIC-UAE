import type { NewsItem } from "@/lib/api";
import { imageUrl } from "@/lib/constants";

const BANNER = "/images/pages/news-release/news-page-heading.2v6iVI-1.png";

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
            <div className="row">
              {items.map((item) => (
                <div className="col-sm-4" key={item.id}>
                  <div
                    className="card text-center mt-4"
                    style={{ height: "45rem", marginBottom: "2rem" }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={
                        item.id === 22 ||
                        (item.image || "").includes("595_1719573619") ||
                        (item.image || "").includes("news-partnership-africa")
                          ? "/images/api/news-partnership-africa-v1.jpg?v=20260730k"
                          : imageUrl(item.image)
                      }
                      className="card-img-top"
                      alt="..."
                      loading="lazy"
                    />
                    <div className="card-body">
                      <h5 className="card-title">{item.title}</h5>
                      <p className="card-text">{item.subTitle}</p>
                    </div>
                    <div className="card-bottom mb-2">
                      <a href="#" className="btn btn-dark">
                        See more
                      </a>
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
