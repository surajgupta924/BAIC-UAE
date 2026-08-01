"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import type { HomepageData } from "@/lib/api";
import { imageUrl, localPath } from "@/lib/constants";
import { NAIRA_SYMBOL_SRC, SLIDER_EMI_NGN } from "@/lib/site";
import "swiper/css";
import "swiper/css/pagination";

interface HeroBannerProps {
  homepage: HomepageData;
}

const slides = (homepage: HomepageData) => [
  {
    desktop: homepage.banner_image1,
    mobile: homepage.banner_image1_mobile,
    title: homepage.banner_image1_title,
    description: homepage.banner_image1_description,
    btn1: homepage.banner_image1_button1,
    btn1Url: homepage.banner_image1_button1_url,
    btn2: homepage.banner_image1_button2,
    btn2Url: homepage.banner_image1_button2_url,
  },
  {
    desktop: homepage.banner_image2,
    mobile: homepage.banner_image2_mobile,
    title: homepage.banner_image2_title,
    description: homepage.banner_image2_description,
    btn1: homepage.banner_image2_button1,
    btn1Url: homepage.banner_image2_button1_url,
    btn2: homepage.banner_image2_button2,
    btn2Url: homepage.banner_image2_button2_url,
  },
  {
    desktop: homepage.banner_image3,
    mobile: homepage.banner_image3_mobile,
    title: homepage.banner_image3_title,
    description: homepage.banner_image3_description,
    btn1: homepage.banner_image3_button1,
    btn1Url: homepage.banner_image3_button1_url,
    btn2: homepage.banner_image3_button2,
    btn2Url: homepage.banner_image3_button2_url,
  },
];

function emiForTitle(title: string) {
  return (
    SLIDER_EMI_NGN[title] ??
    Object.entries(SLIDER_EMI_NGN).find(([key]) =>
      title.toLowerCase().includes(key.toLowerCase()),
    )?.[1] ??
    null
  );
}

export default function HeroBanner({ homepage }: HeroBannerProps) {
  const items = slides(homepage);

  return (
    <section className="section-banner">
      <div className="slider-banner">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          autoHeight
          loop
          observer
          observeParents
        >
          {items.map((slide, index) => {
            const emi = emiForTitle(slide.title || "");
            return (
              <SwiperSlide key={index}>
                <picture>
                  <source
                    media="(max-width: 768px)"
                    srcSet={imageUrl(slide.mobile)}
                  />
                  <Image
                    src={imageUrl(slide.desktop)}
                    alt={slide.title}
                    width={2048}
                    height={1160}
                    className="img-fluid"
                    priority={index === 0}
                    unoptimized
                  />
                </picture>

                {/* HTML Naira badge covers any baked-in Dubai Dirham mark */}
                {emi ? (
                  <div className="hero-emi-badge" aria-label="EMI starting from">
                    <span className="hero-emi-badge__label">
                      EMI STARTING
                      <br />
                      FROM
                    </span>
                    <span className="hero-emi-badge__price">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={NAIRA_SYMBOL_SRC}
                        alt="NGN"
                        className="hero-emi-badge__naira"
                        width={28}
                        height={28}
                      />
                      <span className="hero-emi-badge__amount">{emi.amount}</span>
                    </span>
                  </div>
                ) : null}

                <div className="slider-info slider-info--cta-only">
                  <div>
                    <div className="text-center slider-action-buttons">
                      <Link
                        href={localPath(slide.btn1Url)}
                        className="btn btn-outline-light"
                      >
                        {slide.btn1}
                      </Link>
                    </div>
                    <div className="text-center slider-action-buttons">
                      <Link
                        href={localPath(slide.btn2Url)}
                        className="btn btn-light"
                      >
                        {slide.btn2}
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}
