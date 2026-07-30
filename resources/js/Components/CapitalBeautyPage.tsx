import type { CapitalBeautyData } from "@/lib/api";
import { imageUrl } from "@/lib/constants";

const STYLE = "/images/pages/capital-beauty";

export default function CapitalBeautyPageView({
  data,
}: {
  data: CapitalBeautyData;
}) {
  return (
    <div className="capital-beauty-page">
      <section className="section-beauty">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imageUrl(data.bannerImage)}
          className="img-fluid"
          alt="Capital Beauty"
          loading="eager"
        />
        <div className="beauty-info">
          <h2>{data.bannerTitle.trim()}</h2>
          <h4 className="text-uppercase font-w-6">{data.bannerSubTitle}</h4>
        </div>
      </section>

      <section className="section-content">
        <div className="beauty-introduction my-5">
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-sm-4 col-lg-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={imageUrl(data.image1)}
                  className="img-fluid"
                  alt="CAPITAL BEAUTY"
                  loading="lazy"
                />
              </div>
              <div className="col-sm-6 col-lg-8 text-end">
                <h4>{data.image1Description}</h4>
              </div>
            </div>
          </div>
        </div>

        <div className="stripe-glory-dream">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <ul className="glory-stripe">
                  <li>
                    <div className="img-box">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={imageUrl(data.gdImage1)}
                        className="img-fluid"
                        alt=""
                        loading="lazy"
                      />
                    </div>
                  </li>
                  <li>
                    <div className="img-box">
                      <span>Glory</span>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={imageUrl(data.gdImage2)}
                        className="img-fluid"
                        alt=""
                        loading="lazy"
                      />
                    </div>
                  </li>
                  <li>
                    <div className="img-box">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={imageUrl(data.gdImage3)}
                        className="img-fluid"
                        alt=""
                        loading="lazy"
                      />
                    </div>
                  </li>
                  <li>
                    <div className="img-box">
                      <span>Dream</span>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={imageUrl(data.gdImage4)}
                        className="img-fluid"
                        alt=""
                        loading="lazy"
                      />
                    </div>
                  </li>
                  <li>
                    <div className="img-box">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={imageUrl(data.gdImage5)}
                        className="img-fluid"
                        alt=""
                        loading="lazy"
                      />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="beauty-concept pt-5">
          <div className="container">
            <div className="row">
              <div className="col-sm-4">
                <div className="beauty-style-box">
                  <div className="style-box-image">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`${STYLE}/style1.CLoY_m0D.png`}
                      className="img-fluid"
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <div className="style-box-content">
                    <h4 className="text-uppercase fw-bold">CONFIDENCE</h4>
                    <h6>Peaceful, calm, simple</h6>
                  </div>
                </div>
                <div className="beauty-style-box">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`${STYLE}/style4empty.DknRFMVP.jpg`}
                    className="img-fluid"
                    alt=""
                    loading="lazy"
                  />
                  <div className="style-box-content">
                    <h4 className="text-uppercase fw-bold">COLOR</h4>
                    <h6>
                      ASTHETICS OF
                      <br />
                      CAPITAL BEAUTY
                    </h6>
                  </div>
                </div>
              </div>

              <div className="col-sm-4">
                <h3 className="text-center py-4 text-uppercase fw-bold">
                  Capital Beauty:
                  <br />
                  <br />
                  KEYWORDS OF THE DESIGN CONCEPT ARE...
                </h3>
                <div className="beauty-style-box">
                  <div className="style-box-image">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`${STYLE}/style2.nCzRnRSl.png`}
                      className="img-fluid"
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <div className="style-box-content">
                    <h4 className="text-uppercase fw-bold">WARMTH</h4>
                    <h6>Friendly, practical, comfortable</h6>
                  </div>
                </div>
                <div className="beauty-style-box">
                  <div className="style-box-image">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`${STYLE}/style5.BkwjFO8J.png`}
                      className="img-fluid"
                      alt=""
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>

              <div className="col-sm-4">
                <div className="beauty-style-box">
                  <div className="style-box-image">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`${STYLE}/style3.BjJZxjTP.png`}
                      className="img-fluid"
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <div className="style-box-content">
                    <h4 className="text-uppercase fw-bold">ORIENTAL STYLE</h4>
                    <h6>Unique, aesthetic, stylish</h6>
                  </div>
                </div>
                <div className="beauty-style-box">
                  <div className="style-box-image">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`${STYLE}/style6.CUr8thR9.png`}
                      className="img-fluid"
                      alt=""
                      loading="lazy"
                    />
                  </div>
                  <div className="style-box-content" />
                </div>
                <h2
                  className="text-center p-2 text-uppercase fw-light"
                  style={{ lineHeight: 1 }}
                >
                  THE ESSENCE OF
                  <br />
                  <br />
                  <span className="fw-bold">
                    LEAVING
                    <br />
                    BLANK
                  </span>
                  <br />
                  EXPANDS NEW REVERIE
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div className="section-beauty-simplicity">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-sm-5">
                <div className="beauty-simplicity-content">
                  <h2>{data.image2Title}</h2>
                  <p>{data.image2Description}</p>
                </div>
              </div>
              <div className="col-sm-7">
                <div className="beauty-simplicity-image">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={imageUrl(data.image2)}
                    className="img-fluid"
                    alt="MODERN SIMPLICITY"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-sm-8 p-5">
                <div className="beauty-simplicity-image">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/api/capital-warm-experience-team-v2.png?v=20260730"
                    className="img-fluid"
                    alt="WARM EXPERIENCE"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="col-sm-4">
                <div className="beauty-simplicity-content text-end">
                  <h2>{data.image3Title}</h2>
                  <p>{data.image3Description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="banner-box">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imageUrl(data.image4)}
            className="img-fluid"
            alt=""
            loading="lazy"
          />
        </div>
      </section>
    </div>
  );
}
