import type { HistoryItem } from "@/lib/api";
import { imageUrl } from "@/lib/constants";

const BANNER = "/images/pages/history/history-page-heading.D8-h8Ylg.png";

export default function HistoryPageView({ items }: { items: HistoryItem[] }) {
  return (
    <div className="history-page">
      <section className="page-heading">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={BANNER} className="img-fluid" alt="" loading="eager" />
        <div className="page-heading-info">
          <div>
            <h1 className="text-uppercase">HISTORY</h1>
            <h4 className="text-uppercase">
              HISTORY IS STILL BEING WRITTEN...
            </h4>
          </div>
        </div>
      </section>

      <section className="section-content content-vision py-5">
        <div className="container">
          <div className="row">
            <div className="col-sm-10 m-auto">
              <div className="timeline">
                {items.map((item, index) => {
                  const isRight = index % 2 === 1;
                  return (
                    <div
                      key={item.id}
                      className={`timeline-box${isRight ? " right" : ""}`}
                    >
                      {!isRight ? (
                        <div className="row align-items-center">
                          <div className="col col-6">
                            <div className="timeline-content">
                              <p>{item.description}</p>
                              <h4>{item.year}</h4>
                            </div>
                          </div>
                          <div className="col col-6">
                            <div className="timeline-image">
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img
                                src={imageUrl(item.image)}
                                className="img-fluid"
                                alt={item.description}
                                loading="lazy"
                              />
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="row align-items-center">
                          <div className="col col-6">
                            <div className="timeline-image">
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img
                                src={imageUrl(item.image)}
                                className="img-fluid"
                                alt=""
                                loading="lazy"
                              />
                            </div>
                          </div>
                          <div className="col col-6">
                            <div className="timeline-content">
                              <p>{item.description}</p>
                              <h4>{item.year}</h4>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
