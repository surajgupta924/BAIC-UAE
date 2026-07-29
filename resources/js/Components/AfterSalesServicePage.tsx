import Link from "next/link";
import type { AfterSalesServiceData, FeatureServiceItem } from "@/lib/api";
import { imageUrl } from "@/lib/constants";

const ASSET = "/images/pages/after-sales-service";

const PILLARS = [
  {
    img: `${ASSET}/s1.CzkPzRnc.png`,
    title: "Integrity",
    text: "Original spare parts and transparent and reasonable price",
    featured: true,
  },
  {
    img: `${ASSET}/s2.XZQ9PXES.png`,
    title: "Warm",
    text: "Convenient service service dealers and quick repair and maintenance",
    featured: false,
  },
  {
    img: `${ASSET}/s3.DaWAO6pD.png`,
    title: "Care",
    text: "Focus on customer needs and dedicated after-sales service",
    featured: false,
  },
  {
    img: `${ASSET}/s4.Ba7EMywF.png`,
    title: "Professional",
    text: "Advanced facilities and professional service team",
    featured: false,
  },
] as const;

export default function AfterSalesServicePageView({
  data,
  features,
}: {
  data: AfterSalesServiceData;
  features: FeatureServiceItem[];
}) {
  return (
    <div className="after-sales-service-page">
      <section className="page-heading overviewopacity">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imageUrl(data.bannerImage)}
          className="img-fluid"
          alt=""
          loading="eager"
        />
        <div className="page-heading-info-sales">
          <div>
            <h1 className="text-uppercase">{data.title}</h1>
          </div>
        </div>
      </section>

      <section className="section-content py-5">
        <div className="container">
          <div className="row mb-4">
            <div className="col-sm-12 col-lg-12 m-auto">
              <p className="text-uppercase text-center fw-bold">
                {data.subTitle}
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4">
              <div className="sales-service-box featured">
                <div className="sales-image">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={PILLARS[0].img}
                    className="img-fluid"
                    alt=""
                    loading="lazy"
                  />
                </div>
                <div className="sales-content">
                  <h3>{PILLARS[0].title}</h3>
                  <p>{PILLARS[0].text}</p>
                </div>
              </div>
            </div>
            <div className="col-sm-8">
              <div className="row">
                <div className="col-sm-6">
                  <div className="sales-service-box">
                    <div className="sales-image">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={PILLARS[1].img}
                        className="img-fluid"
                        alt=""
                        loading="lazy"
                      />
                    </div>
                    <div className="sales-content">
                      <h3>{PILLARS[1].title}</h3>
                      <p>{PILLARS[1].text}</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="sales-service-box">
                    <div className="sales-image">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={PILLARS[2].img}
                        className="img-fluid"
                        alt=""
                        loading="lazy"
                      />
                    </div>
                    <div className="sales-content">
                      <h3>{PILLARS[2].title}</h3>
                      <p>{PILLARS[2].text}</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12">
                  <div className="sales-service-box">
                    <div className="sales-image">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={PILLARS[3].img}
                        className="img-fluid"
                        alt=""
                        loading="lazy"
                      />
                    </div>
                    <div className="sales-content">
                      <h3>{PILLARS[3].title}</h3>
                      <p>{PILLARS[3].text}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-sales-services py-5">
        <div className="container">
          <div className="row">
            <div className="col-sm-10 m-auto">
              <div className="text-center text-white mt-3">
                <h4>{data.worldTitle}</h4>
                <p>{data.worldSubTitle}</p>
              </div>
              <div className="map-image my-5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={imageUrl(data.worldimage)}
                  className="img-fluid mx-auto"
                  alt=""
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <div className="featured-service-banner mt-5">
                <div className="featured-service-image">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={imageUrl(data.featureimage)}
                    className="img-fluid"
                    alt=""
                    loading="lazy"
                  />
                </div>
                <div className="featured-service-content">
                  <h4>{data.featureTitle}</h4>
                  <p>{data.featureSubTitle}</p>
                </div>
              </div>
            </div>
          </div>
          {features.length > 0 ? (
            <div className="row">
              {features.map((item) => (
                <div className="col-sm-4" key={item.id}>
                  <div className="qabox">
                    <div className="qabox-image">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={imageUrl(item.image)}
                        className="img-fluid"
                        alt={item.title}
                        loading="lazy"
                      />
                    </div>
                    <h4>{item.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </section>

      <section className="section-questionnaire">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`${ASSET}/banner-questionnaire.D50LZ_l9.png`}
          className="img-fluid"
          alt=""
          loading="lazy"
        />
        <div className="section-questionnaire-content">
          <div>
            <h3>Please Click To Fill In The Questionnaire</h3>
            <h5>45 after-sales service channels and 189 service dealers</h5>
            <Link href="/contact-us" className="btn btn-outline-light">
              AFTER SALES SERVICE
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
