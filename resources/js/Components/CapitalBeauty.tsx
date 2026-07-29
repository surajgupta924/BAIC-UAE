import Link from "next/link";
import type { CapitalBeautyData } from "@/lib/api";
import { imageUrl } from "@/lib/constants";

interface CapitalBeautyProps {
  data: CapitalBeautyData;
}

export default function CapitalBeauty({ data }: CapitalBeautyProps) {
  return (
    <section className="section-beauty">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={imageUrl(data.bannerImage)}
        className="img-fluid"
        alt="Beauty Banner"
        loading="lazy"
      />
      <div className="beauty-info">
        <h2 className="text-uppercase">{data.bannerTitle.trim()}</h2>
        <h4>{data.bannerSubTitle}</h4>
        <div className="text-center">
          <Link href="/capital-beauty" className="btn btn-outline-secondary">
            {data.bannerTitle.trim()}
          </Link>
        </div>
      </div>
    </section>
  );
}
