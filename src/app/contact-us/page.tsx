import SiteChrome from "@/components/SiteChrome";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact Us | BAIC UAE",
};

export default function ContactUsPage() {
  return (
    <SiteChrome title="Contact Us">
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-5">
            <h2 className="h4 mb-3">Al Shaali Moto</h2>
            <p>
              Official BAIC distributor in the United Arab Emirates.
            </p>
            <ul className="list-unstyled contact-details">
              <li className="mb-2">
                <strong>Phone:</strong>{" "}
                <a href="tel:009718002242823">800 224 2823</a>
              </li>
              <li className="mb-2">
                <strong>Showroom:</strong> Al Ittihad Road — Al Khabaisi, Dubai
              </li>
              <li className="mb-2">
                <strong>Facebook:</strong>{" "}
                <a
                  href="https://www.facebook.com/BAICUAE"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  BAICUAE
                </a>
              </li>
              <li>
                <strong>Instagram:</strong>{" "}
                <a
                  href="https://www.instagram.com/baicuae/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @baicuae
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </SiteChrome>
  );
}
