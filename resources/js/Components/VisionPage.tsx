import type { VisionItem } from "@/lib/api";
import { imageUrl } from "@/lib/constants";

const BANNER = "/images/pages/vision/vision-page-heading.BnDegSPW.png";

export default function VisionPageView({ items }: { items: VisionItem[] }) {
  return (
    <div className="vision-page">
      <section className="page-heading overviewopacity">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={BANNER} className="img-fluid" alt="" loading="eager" />
        <div className="page-heading-info-vision">
          <div>
            <h4 className="text-uppercase">BRAND VISION</h4>
            <h2 className="text-uppercase">TIME-HONORED BAIC CONTRIBUTES</h2>
          </div>
        </div>
      </section>

      <section className="section-content content-vision py-5">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              {items.map((item, index) => (
                <div
                  key={item.id}
                  className={`vision-banner-box${index % 2 === 0 ? " right" : ""}`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={imageUrl(item.image)}
                    className="img-fluid"
                    alt={item.title}
                    loading="lazy"
                  />
                  <div className="vision-banner-content">
                    <div>
                      <h4>{item.title}</h4>
                      <h3>{item.subTitle}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
