"use client";

import { useEffect } from "react";
import type { ConceptCarData } from "@/lib/api";
import { imageUrl } from "@/lib/constants";

const ASSET = "/images/pages/concept-car";

const COPY = {
  balancedFive: "The balanced number: Five",
  joyful: "Joyful",
  offRoad: "Off-road performance",
  outdoor: "Outdoor Experience",
  stylish: "Stylish journey",
};

function inView(el: Element, pad: number) {
  const rect = el.getBoundingClientRect();
  return rect.top >= -pad && rect.bottom <= window.innerHeight + pad;
}

function toggle(selector: string, className: string, pad: number) {
  document.querySelectorAll(selector).forEach((el) => {
    el.classList.toggle(className, inView(el, pad));
  });
}

function runConceptAnimations() {
  toggle(".car_text", "car_text_an", 300);
  toggle(".fangkuai", "text", 300);
  toggle(".light", "light_an", 200);
  toggle(".car1", "car1_animation1", 100);
  toggle(".car2", "car1_animation2", 200);
  toggle(".car3", "car1_animation3", 300);
  toggle(".title1", "car_title1_an", 100);
  toggle(".title2", "car_title2_an", 200);
  toggle(".title3", "car_title3_an", 300);
  toggle(".describe1", "describe1_an", 500);
  toggle(".describe2", "describe2_an", 500);
  toggle(".describe3", "describe3_an", 500);
  toggle(".zhezhao", "zhezhao1", 500);
  toggle(".car_line_box", "car_an", 500);
  toggle(".arrow_box", "zhezhao1", 500);
  toggle(".arrow_left", "left_arrow", 500);
  toggle(".arrow_right", "right_arrow", 600);
  toggle(".text_box", "text1", 500);
  toggle(".car_line_box_shadow", "car_an", 900);
  toggle(".car_line_box2", "car_an", 100);
}

export default function ConceptCarPage({ data }: { data: ConceptCarData }) {
  useEffect(() => {
    runConceptAnimations();
    const onScroll = () => runConceptAnimations();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div className="concept-car-page">
      <section className="page-heading">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imageUrl(data.bannerImage)}
          className="img-fluid"
          alt="Concept Car"
          loading="eager"
        />
      </section>

      <section className="section-content py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-8">
              <div className="title-joy mb-4">
                <h2>{data.section_1_title}</h2>
                <p>{data.section_1_description}</p>
              </div>
            </div>
            <div className="col-sm-3 ms-auto">
              <div className="imgbox">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={imageUrl(data.section_1_image)}
                  className="img-fluid"
                  alt="JOY"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-car-variations pb-5">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imageUrl(data.section_2_image)}
          className="img-fluid"
          alt="Car variations"
          loading="lazy"
        />
      </section>

      <section className="section-regarding_text pb-0">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-lg-10 m-auto text-center">
              <p>{data.section_2_description}</p>
            </div>
          </div>
        </div>
      </section>

      <section id="wrapper" className="carAnimationTop">
        <div className="car_box">
          <div className="car_text">{COPY.balancedFive}</div>
          <div className="fangkuai">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${ASSET}/icon.DnMGHVYE.png`} alt="" loading="lazy" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${ASSET}/icon.DnMGHVYE.png`} alt="" loading="lazy" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${ASSET}/icon.DnMGHVYE.png`} alt="" loading="lazy" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${ASSET}/icon.DnMGHVYE.png`} alt="" loading="lazy" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${ASSET}/icon.DnMGHVYE.png`} alt="" loading="lazy" />
          </div>
          <div className="car_content">
            <div className="three_car">
              <div className="k_text">
                <div className="car_title1 title1">{COPY.joyful}</div>
                <div className="describe describe1">{COPY.offRoad}</div>
              </div>
              <div className="zhezhao" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`${ASSET}/v1.-3i_p_X0.png`}
                className="car_animation car1 img-fluid"
                alt=""
                loading="lazy"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`${ASSET}/light1.png`}
                className="light car1_light img-fluid"
                alt=""
                loading="lazy"
              />
            </div>
            <div className="three_car">
              <div className="k_text">
                <div className="car_title1 title2">{COPY.joyful}</div>
                <div className="describe describe2">{COPY.outdoor}</div>
              </div>
              <div className="zhezhao" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`${ASSET}/v2.DWa3iC5I.png`}
                className="car_animation car2 img-fluid"
                alt=""
                loading="lazy"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`${ASSET}/light2.B-9AHxmk.png`}
                className="light car2_light img-fluid"
                alt=""
                loading="lazy"
              />
            </div>
            <div className="three_car">
              <div className="k_text">
                <div className="car_title1 title3">{COPY.joyful}</div>
                <div className="describe describe3">{COPY.stylish}</div>
              </div>
              <div className="zhezhao" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`${ASSET}/v3.CinXRJT5.png`}
                className="car_animation car3 img-fluid"
                alt=""
                loading="lazy"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`${ASSET}/light3.piT2vWW2.png`}
                className="light car3_light img-fluid"
                alt=""
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-regarding_text">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 m-auto text-center">
              <p>{data.section_4_main_description}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="carAnimationTop1">
        <div className="carAnimation_arrow">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`${ASSET}/car_image1.BC6EdTbW.jpg`}
            className="topimage"
            alt=""
            loading="lazy"
          />
          <div className="zhezhao" />
          <div className="car_line">
            <div className="car_line_box">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`${ASSET}/car_line1.DIaJztQ_.png`}
                className="car_line_img"
                alt=""
                loading="lazy"
              />
            </div>
          </div>
          <div className="arrow_box">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`${ASSET}/car_image1_arrow_left.D1yCG5M1.png`}
              className="arrow_left"
              alt=""
              loading="lazy"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`${ASSET}/car_image1_arrow_right.BDynP03-.png`}
              className="arrow_right"
              alt=""
              loading="lazy"
            />
          </div>
          <div className="text_box">
            <div className="left_text">
              <div className="left_box_subtext hover_mobile">
                <div
                  className="content"
                  style={{ maxHeight: "10vw", WebkitLineClamp: 1 }}
                >
                  {data.section_5_description}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="carAnimationTop2">
        <div className="carAnimation_arrow">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`${ASSET}/car_image2.C1Sf7hHa.jpg`}
            className="topimage"
            alt=""
            loading="lazy"
          />
          <div className="zhezhao" />
          <div className="car_line car_line_shadow">
            <div className="car_line_box_shadow">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`${ASSET}/car_imag2_line1.CWkT-0G-.png`}
                style={{ height: "211.2px" }}
                alt=""
                loading="lazy"
              />
            </div>
          </div>
          <div className="car_line1">
            <div className="car_line_box2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`${ASSET}/car_imag2_line2.Dwcz0lgq.png`}
                style={{ height: "383.981px" }}
                alt=""
                loading="lazy"
              />
            </div>
          </div>
          <div className="text_box">
            <div className="left_text">
              <div className="left_box_subtext hover_mobile">
                <div
                  className="content"
                  style={{ maxHeight: "10vw", WebkitLineClamp: 1 }}
                >
                  {data.section_6_description}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-stylish pt-5 pb-4">
        <div className="container">
          <div className="row mb-4 align-items-center">
            <div className="col-sm-5">
              <div className="title-stylish">
                <h2 className="fw-bold orientaltext">{data.section_7_title}</h2>
                <p>{data.section_7_description}</p>
              </div>
            </div>
            <div className="col-sm-7">
              <div className="img-box">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={imageUrl(data.section_7_image)}
                  className="img-fluid w-100"
                  alt=""
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-sm-7">
              <div className="img-box">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={imageUrl(data.section_8_image)}
                  className="img-fluid w-100"
                  alt=""
                  loading="lazy"
                />
              </div>
            </div>
            <div className="col-sm-5">
              <div className="title-stylish p-5">
                <p className="p-2">{data.section_8_description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-scenario-design">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imageUrl(data.section_9_image)}
          className="img-fluid"
          alt=""
          loading="lazy"
        />
        <div className="scenario-design-content">
          <h3>{data.section_9_title}</h3>
        </div>
      </section>

      <section className="section-panels py-5">
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <div className="panel-box text-center mb-4">
                <h4 className="mb-4">{data.section_10_title1}</h4>
                <div className="panel-image">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={imageUrl(data.section_10_image1)}
                    className="img-fluid"
                    alt=""
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="panel-box text-center mb-4">
                <h4 className="mb-4">{data.section_10_title2}</h4>
                <div className="panel-image">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={imageUrl(data.section_10_image2)}
                    className="img-fluid"
                    alt=""
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="panel-box text-center mb-4">
                <h4 className="mb-4">{data.section_10_title3}</h4>
                <div className="panel-image">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={imageUrl(data.section_10_image3)}
                    className="img-fluid"
                    alt=""
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4">
              <div className="panel-box">
                <h4 className="mb-4 textbiid">{data.section_10_title4}</h4>
              </div>
            </div>
            <div className="col-sm-8">
              <div className="panel-box">
                <div className="panel-image">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={imageUrl(data.section_10_image4)}
                    className="img-fluid"
                    alt=""
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
