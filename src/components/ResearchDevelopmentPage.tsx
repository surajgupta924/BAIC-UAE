import type { ResearchDevelopmentData } from "@/lib/api";
import { imageUrl } from "@/lib/constants";

function PreLine({ text }: { text: string }) {
  return (
    <span style={{ whiteSpace: "pre-line" }}>{text.replace(/\r\n/g, "\n")}</span>
  );
}

const CAPABILITIES = [
  ["Vehicle", "Architecture"],
  ["POWER", "Development"],
  ["Modelling", "Design"],
  ["Perfomance", "Development"],
  ["Intelligent", "Network"],
  ["Trail Production", "Test"],
  ["EIC", "Development"],
] as const;

export default function ResearchDevelopmentPageView({
  data,
}: {
  data: ResearchDevelopmentData;
}) {
  return (
    <div className="research-development-page" dir="ltr">
      <section className="page-heading">
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
          </div>
        </div>
      </section>

      <section className="section-baic-institude py-5">
        <div className="container">
          <div className="row">
            <div className="col-sm-10 m-auto text-center">
              <div className="institude-timeline">
                <h3 className="custom-title">{data.section1_title}</h3>
                <p>{data.section1_short_description_1}</p>
              </div>
              <div>
                <ul>
                  {CAPABILITIES.map(([a, b]) => (
                    <li key={`${a}-${b}`}>
                      {a} {b}
                    </li>
                  ))}
                </ul>
              </div>
              <p>{data.section1_short_description_2}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-vehicle-innovation">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <div>
                <h2>{data.section2_title}</h2>
                <p>{data.section2_description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-connected-vehicle py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={imageUrl(data.section3_image)}
                className="img-fluid"
                alt=""
                loading="lazy"
              />
            </div>
            <div className="col-sm-6">
              <div>
                <h2>{data.section3_title}</h2>
              </div>
              <p>{data.section3_description}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-power-engine pb-5">
        <div className="container">
          <div className="row mb-5 engine-row1">
            <div className="col-sm-6">
              <div>
                <h2>{data.section4_left_title}</h2>
              </div>
              <p className="engine-features">
                <PreLine text={data.section4_left_description} />
              </p>
            </div>
            <div className="col-sm-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={imageUrl(data.section4_left_image)}
                className="img-fluid"
                alt=""
                loading="lazy"
              />
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-sm-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={imageUrl(data.section4_right_image)}
                className="img-fluid"
                alt=""
                loading="lazy"
              />
            </div>
            <div className="col-sm-6">
              <div>
                <h2>{data.section4_right_title}</h2>
              </div>
              <p className="engine-features">
                <PreLine text={data.section4_right_description} />
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-vehicle-future">
        <div className="container">
          <div className="row">
            <div className="col-sm-8 m-auto text-center">
              <h3>{data.section5_title}</h3>
              <p>{data.section5_description}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-cooperate py-5">
        <div className="container">
          <div className="row">
            <div className="col-sm-10 m-auto text-center">
              <div className="title mb-4 text-uppercase">
                <h2>{data.section6_title}</h2>
              </div>
              <p>{data.section6_description}</p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="section-vehicle-innovation"
        style={{
          backgroundImage: `url(${imageUrl(data.section7_image)})`,
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <div className="title mb-3 text-white">
                <h2 className="text-uppercase">{data.section7_title}</h2>
                <p>
                  <PreLine text={data.section7_description} />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-eic-technology py-5">
        <div className="container">
          <div className="row">
            <div className="col-sm-5">
              <div className="title mb-5">
                <h5 className="mb-3">{data.section8_main_title}</h5>
                <h2>{data.section8_left_title}</h2>
              </div>
              <p>{data.section8_left_description}</p>
            </div>
            <div className="col-sm-5 ms-auto">
              <div className="imgbox">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={imageUrl(data.section8_left_image)}
                  className="img-fluid"
                  alt=""
                  loading="lazy"
                />
              </div>
              <div className="imgbox">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={imageUrl(data.section8_left_image1)}
                  className="img-fluid"
                  alt=""
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-sm-5">
              <div className="imgbox">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={imageUrl(data.section8_right_image)}
                  className="img-fluid"
                  alt=""
                  loading="lazy"
                />
              </div>
            </div>
            <div className="col-sm-5 ms-auto">
              <p>{data.section8_right_title}</p>
              <p>{data.section8_right_description}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-intelligent-energy pb-5">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <div className="image-intelligent-energy">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={imageUrl(data.section9_image)}
                  className="img-fluid"
                  alt=""
                  loading="lazy"
                />
              </div>
              <div>
                <h2>{data.section9_title}</h2>
              </div>
              <p>{data.section9_description}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-acquire py-5">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <div>
                <h2 className="fw-bold mb-4">{data.section10_title}</h2>
              </div>
              <p>{data.section10_short_description}</p>
            </div>
          </div>
          <div className="row mt-4 mb-5 align-items-center">
            <div className="col-sm-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={imageUrl(data.section10_image)}
                className="img-fluid"
                alt=""
                loading="lazy"
              />
            </div>
            <div className="col-sm-6">
              <p>
                <PreLine text={data.section10_right_description} />
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <div>
                <h2>{data.section11_title}</h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-swapping-station">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imageUrl(data.section11_image)}
          className="img-fluid"
          alt=""
          loading="lazy"
        />
      </section>

      <section className="section-battery-technology pt-5">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title mb-3">
                <h2>{data.section12_main_title}</h2>
              </div>
              <div className="imgbox mb-5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={imageUrl(data.section12_image)}
                  className="img-fluid d-flex m-auto"
                  alt=""
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-sm-3">
              <h4 className="text-uppercase fw-light">{data.section12_title}</h4>
            </div>
            <div className="col-sm-8 ms-auto">
              <p>{data.section12_description}</p>
            </div>
          </div>
          <div className="row align-items-center mt-5">
            <div className="col-sm-4">
              <div className="title mb-3">
                <h2>{data.section13_main_title}</h2>
              </div>
              <p>{data.section13_main_description}</p>
            </div>
          </div>
          <div className="row align-items-center mt-5">
            <div className="col-sm-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={imageUrl(data.section13_left_image)}
                className="img-fluid"
                alt=""
                loading="lazy"
              />
            </div>
            <div className="col-sm-4 ms-auto">
              <p>{data.section13_right_description}</p>
            </div>
          </div>
          <div
            className="row align-items-center mt-5"
            style={{ marginBottom: "-15%" }}
          >
            <div className="col-sm-10">
              <div className="title mb-3">
                <h2>{data.section14_title}</h2>
              </div>
              <p>{data.section14_description}</p>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={imageUrl(data.section14_image)}
                className="img-fluid"
                alt=""
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
