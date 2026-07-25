import Image from "next/image";
import SiteChrome from "@/components/SiteChrome";
import { getCapitalBeauty } from "@/lib/fetch-data";
import { imageUrl } from "@/lib/constants";

export const metadata = {
  title: "Capital Beauty | BAIC UAE",
};

export default async function CapitalBeautyPage() {
  const data = await getCapitalBeauty();

  return (
    <SiteChrome title={data.bannerTitle.trim() || "Capital Beauty"}>
      <section className="section-beauty capital-beauty-page">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imageUrl(data.bannerImage)}
          className="img-fluid"
          alt="Capital Beauty"
        />
      </section>
      <div className="container py-5">
        <h2 className="text-uppercase mb-3">{data.bannerSubTitle}</h2>
        {data.image1 ? (
          <div className="row align-items-center g-4 mb-5">
            <div className="col-md-6">
              <Image
                src={imageUrl(data.image1)}
                alt="Capital Beauty"
                width={800}
                height={500}
                className="img-fluid"
                unoptimized
              />
            </div>
            <div className="col-md-6">
              <p className="overviewp">{data.image1Description}</p>
            </div>
          </div>
        ) : (
          <p className="overviewp">{data.image1Description}</p>
        )}
      </div>
    </SiteChrome>
  );
}
