import { Head, Link } from "@inertiajs/react";
import SiteChrome from "@/components/SiteChrome";
import type { VehicleModel } from "@/lib/api";
import { imageUrl } from "@/lib/constants";

export default function Model({ model }: { model: VehicleModel }) {
  return (
    <SiteChrome title={model.name}>
      <Head title={model.name} />
      <div className="container py-5">
        <div className="row align-items-center g-4 mb-5">
          <div className="col-lg-7">
            <img
              src={imageUrl(model.image1)}
              alt={model.name}
              className="img-fluid"
              width={900}
              height={520}
            />
          </div>
          <div className="col-lg-5">
            <p className="overviewp">{model.description}</p>
            <div className="row vehicle-features mt-4">
              <div className="col-4">
                <div className="vehicle-feature-box text-center">
                  <h4>{model.power}</h4>
                  <p className="caractertext">POWER</p>
                </div>
              </div>
              <div className="col-4">
                <div className="vehicle-feature-box text-center">
                  <h4>{model.torque}</h4>
                  <p className="caractertext">TORQUE</p>
                </div>
              </div>
              <div className="col-4">
                <div className="vehicle-feature-box text-center">
                  <h4>{model.wheelbase}</h4>
                  <p className="caractertext">WHEELBASE</p>
                </div>
              </div>
            </div>
            <div className="mt-4 d-flex gap-2 flex-wrap">
              <Link href="/test-drive" className="btn btn-dark">
                Test Drive
              </Link>
              <Link href="/contact-us" className="btn btn-outline-dark">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </SiteChrome>
  );
}
