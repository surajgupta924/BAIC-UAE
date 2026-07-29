import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Research & Development",
    href: "/research-development",
    image: "/images/research.BQeg7WcW.jpg",
    col: "col-12 col-sm-6",
  },
  {
    title: "Off-Road Vehicle",
    href: "/off-road",
    image: "/images/off-road-home.UmanChz8.jpg",
    col: "col-12 col-sm-6",
  },
  {
    title: "BAIC History",
    href: "/history",
    image: "/images/baic-history.HEAf_F-F.jpg",
    col: "col-12 col-sm-5",
  },
  {
    title: "Learn Everything About BAIC Here",
    href: "/overview",
    image: "/images/service5.rOB2QFFQ.png",
    col: "col-12 col-sm-7",
  },
];

export default function ServicesSection() {
  return (
    <section className="section-services pt-5 pb-3">
      <div className="container">
        <div className="row">
          {services.map((service) => (
            <div key={service.href} className={service.col}>
              <Link href={service.href} className="service-box">
                <div className="service-image">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={600}
                    height={450}
                    className="img-fluid"
                  />
                </div>
                <h3>{service.title}</h3>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
