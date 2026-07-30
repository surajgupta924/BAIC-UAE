import Link from "next/link";

const BANNER = "/images/pages/our-service/service-banner-v1.png?v=20260730j";
const BOOKING = "/images/pages/our-service/booking.x1rTBXGR.jpg";
const FEEDBACK = "/images/pages/our-service/feedback.BGyvPy5t.jpg";
const NEW_SALES = "/images/pages/our-service/new_sales.CJ0jgf0g.jpeg";

const CARDS = [
  {
    image: BOOKING,
    title: "Booking",
    text: "Is your vehicle due for service? Skip the lines at service centers and schedule your appointment today!",
    cta: "Book Appointment",
    href: "/booking",
    textClassName: "card-text mb-4",
    textStyle: { marginBottom: "2.1rem" },
  },
  {
    image: FEEDBACK,
    title: "Feedback",
    text: "Call the service desk for help with your request, questions and problems. Get help over a Phone or Email.",
    cta: "Send a Feedback",
    href: "/feedback",
    textClassName: "card-text mb-4",
  },
  {
    image: NEW_SALES,
    title: "BAIC X7 Recall Notice (2022–2023 Models)",
    text: "Certain BAIC X7 models (2022–2023) are being recalled due to a technical issue with the electrical fuse box. Owners are requested to book a service appointment for the free replacement and safety update.",
    cta: "See More",
    href: "/booking",
    textClassName: "card-text mb-4",
  },
];

export default function OurServicePageView() {
  return (
    <div className="our-service-page">
      <section className="page-heading">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={BANNER} className="img-fluid" alt="Service" loading="eager" />
        {/* Title is baked into the banner image — keep overlay for a11y only */}
        <div className="page-heading-info-release visually-hidden">
          <div>
            <h1 className="text-uppercase">Service</h1>
          </div>
        </div>
      </section>

      <section className="section-content">
        <div className="container">
          <div className="row">
            <p className="card-text mb-4 mt-4 text-center">
              Need a helping hand? check select.
            </p>
            {CARDS.map((card) => (
              <div className="col-sm-4" key={card.title}>
                <div
                  className="card text-center mt-4"
                  style={{ marginBottom: "2rem" }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="card-img-top"
                    src={card.image}
                    alt="..."
                    loading="lazy"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{card.title}</h5>
                    <p
                      className={card.textClassName}
                      style={"textStyle" in card ? card.textStyle : undefined}
                    >
                      {card.text}
                    </p>
                  </div>
                  <div className="card-bottom mb-2">
                    <Link href={card.href} className="btn btn-dark">
                      {card.cta}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
