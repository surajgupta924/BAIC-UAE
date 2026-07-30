import type { OverviewData } from "@/lib/api";
import { imageUrl } from "@/lib/constants";

function Html({ html, className }: { html: string; className?: string }) {
  return (
    <div
      className={className}
      dangerouslySetInnerHTML={{ __html: html || "" }}
    />
  );
}

export default function OverviewPageView({ data }: { data: OverviewData }) {
  return (
    <div className="overview-page">
      <section className="page-heading overviewopacity">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imageUrl(data.banner_image)}
          className="img-fluid"
          alt=""
          loading="eager"
        />
        <div className="page-heading-info">
          <div>
            <h1 className="text-uppercase">{data.banner_title}</h1>
            <Html html={data.banner_description} />
          </div>
        </div>
      </section>

      <section className="section-content content-overview py-5">
        <div className="container">
          <div className="row">
            <div className="col-sm-10 m-auto">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={imageUrl(data.section1_image)}
                className="img-fluid m-auto d-flex mb-5"
                alt=""
                loading="lazy"
              />
              <h3 className="section-title mb-4 fw-bold text-center">
                {data.section1_title}
              </h3>
              <div className="text-center">
                <Html html={data.section1_description} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="about-service-wrap bluebackground">
        <div className="pattern-overlay circle-patten" />
        <div className="container">
          <div className="section-head">
            <div className="row no-gutters align-items-center">
              <div className="col-lg-7">
                <h3 className="section-title mb-4 fw-bold">
                  {data.section2_title}
                </h3>
                <div className="section-disc">
                  <Html html={data.section2_description} />
                </div>
              </div>
              <div className="col-lg-5">
                <div className="product-item text-center wrap-owner">
                  <figure className="product-image">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/images/api/about-baic-owner-v1.png?v=20260730g"
                      alt={data.section2_image_title1}
                      loading="lazy"
                    />
                  </figure>
                  {/* Name/title are baked into the owner image */}
                  <div className="product-content visually-hidden">
                    <h5>{data.section2_image_title1}</h5>
                  </div>
                  <div className="tilte-own visually-hidden">
                    <h3>{data.section2_image_title2}</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-3">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="about-right-desc">
              <div className="section-head">
                <Html html={data.section3_title1} />
                <Html html={data.section3_description1} />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <figure>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                style={{ maxWidth: "100%", height: "auto" }}
                src={imageUrl(data.section3_image)}
                alt=""
                loading="lazy"
              />
            </figure>
          </div>
        </div>
      </div>

      <div className="about-service-wrap bg-white">
        <div className="pattern-overlay circle-patten" />
        <div className="container">
          <div className="section-head">
            <div className="row no-gutters">
              <div className="col-lg-6">
                <Html html={data.section3_title2} />
                <Html html={data.section3_description2} />
              </div>
              <div className="col-lg-6">
                <div className="section-disc">
                  <Html html={data.section3_description3} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
