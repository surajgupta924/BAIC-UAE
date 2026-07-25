import Link from "next/link";
import Image from "next/image";
import type { HomepageData, VehicleModel } from "@/lib/api";
import { imageUrl } from "@/lib/constants";

interface FooterProps {
  homepage: HomepageData;
  models: VehicleModel[];
}

export default function Footer({ homepage, models }: FooterProps) {
  return (
    <footer id="footer" className="section-footer pt-5 pb-4">
      <div className="container">
        <div className="footer-logo mb-5">
          <Image
            src={imageUrl(homepage.logo)}
            alt="BAIC Nigeria"
            width={200}
            height={60}
            className="img-fluid"
            unoptimized
          />
        </div>
        <div className="sitemap">
          <div className="row row-cols-2 row-cols-sm-3 row-cols-lg-5 row-cols-xl-5">
            <div className="col">
              <h4>Models</h4>
              <div className="footerlinks">
                {(["BAIC", "Arcfox"] as const).map((brand) => {
                  const brandModels = models.filter(
                    (m) => (m.brand ?? "BAIC") === brand,
                  );
                  if (brandModels.length === 0) return null;
                  return (
                    <div key={brand} className="mb-3">
                      <strong className="d-block mb-1">{brand}</strong>
                      <ul>
                        {brandModels.map((m) => (
                          <li key={m.id}>
                            <Link href={`/model/${encodeURIComponent(m.name)}`}>
                              {m.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="col">
              <h4>Innovation</h4>
              <div className="footerlinks">
                <ul>
                  <li>
                    <Link href="/capital-beauty">Capital Beauty</Link>
                  </li>
                  <li>
                    <Link href="/concept-car">Concept Car</Link>
                  </li>
                  <li>
                    <Link href="/off-road">Off-Road</Link>
                  </li>
                  <li>
                    <Link href="/research-development">POWER</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col">
              <h4>About</h4>
              <div className="footerlinks">
                <ul>
                  <li>
                    <Link href="/overview">Overview</Link>
                  </li>
                  <li>
                    <Link href="/vision">Vision</Link>
                  </li>
                  <li>
                    <Link href="/history">History</Link>
                  </li>
                  <li>
                    <Link href="/">CSR</Link>
                  </li>
                  <li>
                    <Link href="/after-sales-service">After-Sales Service</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col">
              <h4>Newsroom</h4>
              <div className="footerlinks">
                <ul>
                  <li>
                    <Link href="/news-release">News Release</Link>
                  </li>
                  <li>
                    <Link href="/subcribe">Subscribe</Link>
                  </li>
                  <li>
                    <Link href="/media-contact">Media Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col">
              <h4>Connect</h4>
              <div className="footerlinks">
                <ul>
                  <li>
                    <Link href="/contact-us">Contact Us</Link>
                  </li>
                  <li>
                    <Link href="/distributor-center">Distributor Center</Link>
                  </li>
                  <li>
                    <Link href="/multimedia">Download Center</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-bar">
          <div className="row align-items-center">
            <div className="col-sm-8">
              <div className="copyright">
                © AL SHAALI MOTO 2024. All Rights Reserved{" "}
                <Link href="/terms-and-conditions">Terms & Conditions</Link>{" "}
                <Link href="/cookie-policy">Cookie Policy</Link>{" "}
                <Link href="/data-protection">Data Protection</Link>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="footer-social-icons">
                <a
                  href={homepage.facebook_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <i className="fa-brands fa-facebook-f" />
                </a>
                <a
                  href={homepage.instagram_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ms-3"
                  aria-label="Instagram"
                >
                  <i className="fa-brands fa-instagram" />
                </a>
                {homepage.linkedin_link ? (
                  <a
                    href={homepage.linkedin_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ms-3"
                    aria-label="LinkedIn"
                  >
                    <i className="fa-brands fa-linkedin-in" />
                  </a>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
