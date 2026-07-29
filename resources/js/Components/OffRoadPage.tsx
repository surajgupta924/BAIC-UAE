"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import type { OffRoadData } from "@/lib/api";
import { imageUrl } from "@/lib/constants";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const ASSET = "/images/pages/off-road";

const TIMELINE = [
  { year: "1960-1963", src: `${ASSET}/1960.Bow044Ty.jpg` },
  { year: "1966", src: `${ASSET}/1966.1lwiwNds.jpg` },
  { year: "1974", src: `${ASSET}/1974.CmSgBJQv.jpg` },
  { year: "1999", src: `${ASSET}/1999.CdpfTJUd.jpg` },
  { year: "2002", src: `${ASSET}/2002.BpnIOnz4.jpg` },
  { year: "2008", src: `${ASSET}/2008.BZPT45ft.jpg` },
  { year: "2009", src: `${ASSET}/2009.CgRTQ7i9.jpg` },
  { year: "2013", src: `${ASSET}/2013.CnxQICo3.jpg` },
  { year: "2015", src: `${ASSET}/2015.CRe5GGo5.jpg` },
  { year: "Today", src: `${ASSET}/slide.sbSrMOuT.png` },
];

function PreLine({ text }: { text: string }) {
  return (
    <span style={{ whiteSpace: "pre-line" }}>{text.replace(/\r\n/g, "\n")}</span>
  );
}

export default function OffRoadPageView({ data }: { data: OffRoadData }) {
  return (
    <div className="off-road-page">
      <section className="page-heading">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imageUrl(data.bannerImage)}
          className="img-fluid"
          alt=""
          loading="eager"
        />
        <div className="page-heading-info">
          <div>
            <h1 className="text-uppercase">{data.bannerTitle}</h1>
            <p style={{ fontSize: "1.5rem" }}>{data.bannerDescription}</p>
          </div>
        </div>
      </section>

      <section className="section-vehicle-ability position-relative">
        <div className="car-pattern1">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`${ASSET}/pattern1-offroad.DsTU1eVe.png`}
            className="img-fluid"
            alt=""
            loading="lazy"
          />
        </div>

        <div className="section-vehicle-verification-ability">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-sm-7">
                <div className="verification-ability-content">
                  <p>{data.image1Description}</p>
                  <div className="title mt-5 mb-3 text-uppercase">
                    <h2>{data.image1Title}</h2>
                  </div>
                  <p>
                    <PreLine text={data.image1MainDescription} />
                  </p>
                </div>
              </div>
              <div className="col-sm-5 p-0">
                <div className="verification-ability-image">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={imageUrl(data.image1)}
                    className="img-fluid"
                    alt=""
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section-vehicle-production-ability">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-sm-6 p-0">
                <div className="production-ability-image">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={imageUrl(data.image2)}
                    className="img-fluid"
                    alt=""
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="production-ability-content">
                  <div className="title mb-3 text-uppercase">
                    <h2>{data.image2Title}</h2>
                  </div>
                  <p>{data.image2Description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-reliability">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 text-white">
              <h3 className="text-uppercase">{data.image3Title}</h3>
              <p>{data.image3Description}</p>
            </div>
          </div>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imageUrl(data.image3)}
          className="img-fluid"
          alt=""
          loading="lazy"
        />
      </section>

      <section className="section-timeline py-5">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <Swiper
                className="sliderCarvariations"
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                pagination={{
                  clickable: true,
                  renderBullet(index, className) {
                    const label = TIMELINE[index]?.year ?? "";
                    return `<div class="${className}"><span>${label}</span></div>`;
                  },
                }}
                scrollbar
              >
                {TIMELINE.map((item) => (
                  <SwiperSlide key={item.year}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.src}
                      className="img-fluid"
                      alt={item.year}
                      loading="lazy"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
