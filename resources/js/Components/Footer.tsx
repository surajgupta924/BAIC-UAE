import Link from "next/link";
import type { HomepageData, VehicleModel } from "@/lib/api";
import {
  COMPANY_NAME,
  LOGO_SRC,
  SITE_NAME,
  SUPPORT_ADDRESS_LINE1,
  SUPPORT_ADDRESS_LINE2,
  SUPPORT_EMAIL,
  SUPPORT_PHONE_DISPLAY,
  SUPPORT_PHONE_TEL,
  SUPPORT_WEBSITE,
  SUPPORT_WEBSITE_URL,
} from "@/lib/site";

interface FooterProps {
  homepage: HomepageData;
  models: VehicleModel[];
}

export default function Footer({ homepage, models }: FooterProps) {
  return (
    <footer id="footer" className="section-footer pt-5 pb-4">
      <div className="container">
        <div className="footer-logo mb-5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={LOGO_SRC}
            alt={SITE_NAME}
            className="omni-logo-img footer"
            width={240}
            height={70}
          />
        </div>
        <div className="sitemap">
          <div className="row row-cols-2 row-cols-sm-3 row-cols-lg-5 row-cols-xl-5">
            <div className="col">
              <h4>Models</h4>
              <div className="footerlinks">
                <ul>
                  {models.map((m) => (
                    <li key={m.id}>
                      <Link href={`/model/${encodeURIComponent(m.name)}`}>
                        {m.name}
                      </Link>
                    </li>
                  ))}
                </ul>
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
                    <Link href="/about-baic">About BAIC</Link>
                  </li>
                  <li>
                    <Link href="/about-omni-net">About Omni Net</Link>
                  </li>
                  <li>
                    <Link href="/about-arcfox">About Arcfox</Link>
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
                    <Link href="/our-service">Service</Link>
                  </li>
                  <li>
                    <Link href="/test-drive">Book a Test Drive</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-contact mt-4 mb-4">
          <strong>{COMPANY_NAME}</strong>
          <br />
          {SUPPORT_ADDRESS_LINE1}
          <br />
          {SUPPORT_ADDRESS_LINE2}
          <br />
          T: <a href={`tel:${SUPPORT_PHONE_TEL}`}>{SUPPORT_PHONE_DISPLAY}</a>
          <br />
          E: <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
          <br />
          W:{" "}
          <a href={SUPPORT_WEBSITE_URL} target="_blank" rel="noopener noreferrer">
            {SUPPORT_WEBSITE}
          </a>
        </div>
        <div className="copyright-bar">
          <div className="row align-items-center">
            <div className="col-sm-8">
              <div className="copyright">
                © {COMPANY_NAME} {new Date().getFullYear()}. All Rights Reserved{" "}
                <Link href="/terms-and-conditions">Terms & Conditions</Link>{" "}
                <Link href="/cookie-policy">Cookie Policy</Link>{" "}
                <Link href="/data-protection">Data Protection</Link>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="footer-social-icons">
                {homepage.facebook_link ? (
                  <a
                    href={homepage.facebook_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                  >
                    <i className="fa-brands fa-facebook-f" />
                  </a>
                ) : null}
                {homepage.instagram_link ? (
                  <a
                    href={homepage.instagram_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ms-3"
                    aria-label="Instagram"
                  >
                    <i className="fa-brands fa-instagram" />
                  </a>
                ) : null}
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
