"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import type {
  HomepageData,
  ModelCategory,
  VehicleModel,
} from "@/lib/api";
import { imageUrl } from "@/lib/constants";

interface HeaderProps {
  homepage: HomepageData;
  models: VehicleModel[];
  categories: ModelCategory[];
}

type OpenMenu =
  | "models"
  | "innovation"
  | "about"
  | "newsroom"
  | "connect"
  | "lang"
  | null;

const INNOVATION_LINKS = [
  { href: "/capital-beauty", label: "Capital Beauty" },
  { href: "/concept-car", label: "Concept Car" },
  { href: "/off-road", label: "Off-Road" },
  { href: "/research-development", label: "POWER" },
];

const ABOUT_LINKS = [
  { href: "/overview", label: "Overview" },
  { href: "/vision", label: "Vision" },
  { href: "/history", label: "History" },
  { href: "/csr", label: "CSR" },
  { href: "/after-sales-service", label: "After-Sales Service" },
];

const NEWSROOM_LINKS = [
  { href: "/news-release", label: "News Release" },
  { href: "/subcribe", label: "Subscribe" },
  { href: "/media-contact", label: "Media Contact" },
];

const CONNECT_LINKS = [
  { href: "/contact-us", label: "Contact Us" },
  { href: "/distributor-center", label: "Distributor Center" },
  { href: "/multimedia", label: "Download Center" },
];

const INNOVATION_PATHS = INNOVATION_LINKS.map((l) => l.href);

export default function Header({
  homepage,
  models,
  categories,
}: HeaderProps) {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<OpenMenu>(null);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 992) setMobileNavOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const closeAll = () => {
    setOpenMenu(null);
    setMobileNavOpen(false);
  };

  const brandBlocks = useMemo(() => {
    const brands: Array<"BAIC" | "Arcfox"> = ["BAIC", "Arcfox"];
    return brands
      .map((brand) => {
        const brandModels = models.filter(
          (m) => (m.brand ?? "BAIC") === brand,
        );
        const cats = categories
          .map((cat) => ({
            ...cat,
            models: brandModels.filter((m) => m.categoryId === cat.id),
          }))
          .filter((cat) => cat.models.length > 0);
        return { brand, categories: cats };
      })
      .filter((block) => block.categories.length > 0);
  }, [models, categories]);

  const innovationActive =
    INNOVATION_PATHS.some((path) => pathname?.startsWith(path)) ||
    openMenu === "innovation";

  const MegaLinks = ({
    id,
    links,
  }: {
    id: OpenMenu;
    links: { href: string; label: string }[];
  }) =>
    openMenu === id ? (
      <div
        className="dropdown-menu megamenu show"
        aria-labelledby={`dropdown-${id}`}
      >
        <div className="dropdown-links">
          {links.map((link) => (
            <Link
              key={link.href}
              className={`dropdown-item${pathname === link.href ? " is-active" : ""}`}
              href={link.href}
              onClick={closeAll}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    ) : null;

  return (
    <header className="site-header sticky">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <Link className="navbar-brand logo" href="/" onClick={closeAll}>
            <Image
              src={imageUrl(homepage.logo)}
              alt="BAIC Nigeria"
              width={160}
              height={45}
              className="img-fluid"
              priority
              unoptimized
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={mobileNavOpen}
            aria-controls="navbarNav"
            onClick={() => setMobileNavOpen((open) => !open)}
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className={`collapse navbar-collapse${mobileNavOpen ? " show" : ""}`}
            id="navbarNav"
          >
            <ul className="navbar-nav m-auto">
              <li
                className={`nav-item dropdown spacedItems${openMenu === "models" ? " show" : ""}`}
                onMouseEnter={() => setOpenMenu("models")}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <Link
                  className="nav-link dropdown-toggle"
                  href="/"
                  id="dropdown-models"
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenMenu((m) => (m === "models" ? null : "models"));
                  }}
                >
                  Models
                </Link>
                {openMenu === "models" && (
                  <div
                    className="dropdown-menu megamenu show"
                    aria-labelledby="dropdown-models"
                  >
                    <div className="container">
                      {brandBlocks.map(({ brand, categories: brandCats }) => (
                        <div key={brand} className="carmodels-brand">
                          <h3 className="brand-heading">{brand}</h3>
                          {brandCats.map((cat) => (
                            <div
                              key={`${brand}-${cat.id}`}
                              className="carmodels-type"
                            >
                              <h4>{cat.name}</h4>
                              <div className="row">
                                {cat.models.map((model) => (
                                  <div
                                    key={model.id}
                                    className="col col-4 col-sm-3 col-lg-2"
                                  >
                                    <Link
                                      className="modelbox"
                                      href={`/model/${encodeURIComponent(model.name)}`}
                                      onClick={closeAll}
                                    >
                                      <Image
                                        src={imageUrl(model.image1)}
                                        alt={model.name}
                                        width={120}
                                        height={80}
                                        unoptimized
                                      />
                                      <span>{model.name}</span>
                                    </Link>
                                  </div>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </li>

              <li
                className={`nav-item dropdown spacedItems${innovationActive ? " show" : ""}`}
                onMouseEnter={() => setOpenMenu("innovation")}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <button
                  type="button"
                  className="nav-link dropdown-toggle"
                  id="dropdown-innovation"
                  onClick={() =>
                    setOpenMenu((m) =>
                      m === "innovation" ? null : "innovation",
                    )
                  }
                >
                  Innovation
                </button>
                <MegaLinks id="innovation" links={INNOVATION_LINKS} />
              </li>

              <li
                className={`nav-item dropdown spacedItems${openMenu === "about" ? " show" : ""}`}
                onMouseEnter={() => setOpenMenu("about")}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <button
                  type="button"
                  className="nav-link dropdown-toggle"
                  id="dropdown-about"
                  onClick={() =>
                    setOpenMenu((m) => (m === "about" ? null : "about"))
                  }
                >
                  About
                </button>
                <MegaLinks id="about" links={ABOUT_LINKS} />
              </li>

              <li
                className={`nav-item dropdown spacedItems${openMenu === "newsroom" ? " show" : ""}`}
                onMouseEnter={() => setOpenMenu("newsroom")}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <button
                  type="button"
                  className="nav-link dropdown-toggle"
                  id="dropdown-newsroom"
                  onClick={() =>
                    setOpenMenu((m) =>
                      m === "newsroom" ? null : "newsroom",
                    )
                  }
                >
                  Newsroom
                </button>
                <MegaLinks id="newsroom" links={NEWSROOM_LINKS} />
              </li>

              <li
                className={`nav-item dropdown spacedItems${openMenu === "connect" ? " show" : ""}`}
                onMouseEnter={() => setOpenMenu("connect")}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <button
                  type="button"
                  className="nav-link dropdown-toggle"
                  id="dropdown-connect"
                  onClick={() =>
                    setOpenMenu((m) => (m === "connect" ? null : "connect"))
                  }
                >
                  Connect
                </button>
                <MegaLinks id="connect" links={CONNECT_LINKS} />
              </li>

              <li className="nav-item navredhover spacedItems">
                <Link
                  className="nav-link navredhover"
                  href="/our-service"
                  onClick={closeAll}
                >
                  Service
                </Link>
              </li>
              <li className="nav-item navredhover spacedItems">
                <a
                  className="nav-link navredhover"
                  href="https://www.baicglobal.com/worldwide"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeAll}
                >
                  Worldwide
                </a>
              </li>
            </ul>
            <div
              className="dropdown d-flex ms-auto"
              onMouseEnter={() => setOpenMenu("lang")}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <button
                className="btn btn-transparent dropdown-toggle border-0"
                type="button"
                onClick={() =>
                  setOpenMenu((m) => (m === "lang" ? null : "lang"))
                }
              >
                EN
              </button>
              {openMenu === "lang" && (
                <ul className="dropdown-menu dropdown-menu-end show">
                  <li>
                    <button type="button" className="dropdown-item active">
                      EN
                    </button>
                  </li>
                  <li>
                    <button type="button" className="dropdown-item" disabled>
                      AR
                    </button>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
