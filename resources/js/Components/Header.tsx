"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import type {
  HomepageData,
  ModelCategory,
  VehicleModel,
} from "@/lib/api";
import { imageUrl } from "@/lib/constants";
import {
  LOGO_SRC,
  SITE_NAME,
  SUPPORT_PHONE_DISPLAY,
  SUPPORT_PHONE_TEL,
} from "@/lib/site";

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
  | null;

const INNOVATION_LINKS = [
  { href: "/capital-beauty", label: "Capital Beauty" },
  { href: "/concept-car", label: "Concept Car" },
  { href: "/off-road", label: "Off-Road" },
  { href: "/research-development", label: "POWER" },
];

const ABOUT_LINKS = [
  { href: "/about-baic", label: "About BAIC" },
  { href: "/about-omni-net", label: "About Omni Net" },
  { href: "/about-arcfox", label: "About Arcfox" },
];

const NEWSROOM_LINKS = [
  { href: "/news-release", label: "News Release" },
  { href: "/subcribe", label: "Subscribe" },
  { href: "/media-contact", label: "Media Contact" },
];

const CONNECT_LINKS = [
  { href: "/contact-us", label: "Contact Us" },
];

const ABOUT_PATHS = ABOUT_LINKS.map((l) => l.href);
const HOVER_CLOSE_DELAY_MS = 180;

export default function Header({ models, categories }: HeaderProps) {
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [openMenu, setOpenMenu] = useState<OpenMenu>(null);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [desktopHover, setDesktopHover] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(
      "(min-width: 992px) and (hover: hover) and (pointer: fine)",
    );
    const sync = () => setDesktopHover(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 992) setMobileNavOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    setOpenMenu(null);
    setMobileNavOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!openMenu) return;
    const onPointerDown = (event: PointerEvent) => {
      const target = event.target as Node | null;
      if (target && headerRef.current?.contains(target)) return;
      setOpenMenu(null);
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [openMenu]);

  useEffect(
    () => () => {
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current);
    },
    [],
  );

  const cancelClose = useCallback(() => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  }, []);

  const openNow = useCallback(
    (id: OpenMenu) => {
      cancelClose();
      setOpenMenu(id);
    },
    [cancelClose],
  );

  const scheduleClose = useCallback(() => {
    cancelClose();
    closeTimerRef.current = setTimeout(() => {
      setOpenMenu(null);
      closeTimerRef.current = null;
    }, HOVER_CLOSE_DELAY_MS);
  }, [cancelClose]);

  const closeAll = () => {
    cancelClose();
    setOpenMenu(null);
    setMobileNavOpen(false);
  };

  const toggleMenu = (id: OpenMenu) => {
    cancelClose();
    setOpenMenu((m) => (m === id ? null : id));
  };

  const hoverHandlers = (id: OpenMenu) =>
    desktopHover
      ? {
          onMouseEnter: () => openNow(id),
          onMouseLeave: () => scheduleClose(),
        }
      : {};

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

  const aboutActive =
    ABOUT_PATHS.some((path) => pathname?.startsWith(path)) ||
    openMenu === "about";

  const MegaLinks = ({
    id,
    links,
  }: {
    id: OpenMenu;
    links: { href: string; label: string }[];
  }) => (
    <div
      className={`dropdown-menu megamenu${openMenu === id ? " show" : ""}`}
      aria-labelledby={`dropdown-${id}`}
      hidden={openMenu !== id}
      onMouseEnter={desktopHover ? cancelClose : undefined}
      onMouseLeave={desktopHover ? scheduleClose : undefined}
    >
      <div className="dropdown-links">
        {links.map((link) => (
          <Link
            key={link.href}
            className={`dropdown-item${pathname === link.href ? " is-active" : ""}`}
            href={link.href}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );

  return (
    <header className="site-header sticky" ref={headerRef}>
      <div className="pre-header">
        <div className="container pre-header-inner">
          <Link href="/test-drive" className="pre-header-link">
            Book a Test Drive
          </Link>
          <span className="pre-header-mark">{SITE_NAME}</span>
          <a href={`tel:${SUPPORT_PHONE_TEL}`} className="pre-header-link">
            Call Support {SUPPORT_PHONE_DISPLAY}
          </a>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <Link className="navbar-brand logo" href="/" onClick={closeAll}>
            <Image
              src={LOGO_SRC}
              alt={SITE_NAME}
              width={180}
              height={48}
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
            className={`collapse navbar-collapse justify-content-end${mobileNavOpen ? " show" : ""}`}
            id="navbarNav"
          >
            <ul className="navbar-nav ms-auto">
              <li
                className={`nav-item dropdown spacedItems${openMenu === "models" ? " show" : ""}`}
                {...hoverHandlers("models")}
              >
                <Link
                  className="nav-link dropdown-toggle"
                  href="/"
                  id="dropdown-models"
                  onClick={(e) => {
                    e.preventDefault();
                    toggleMenu("models");
                  }}
                >
                  Models
                </Link>
                <div
                  className={`dropdown-menu megamenu${openMenu === "models" ? " show" : ""}`}
                  aria-labelledby="dropdown-models"
                  hidden={openMenu !== "models"}
                  onMouseEnter={desktopHover ? cancelClose : undefined}
                  onMouseLeave={desktopHover ? scheduleClose : undefined}
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
              </li>

              <li
                className={`nav-item dropdown spacedItems${openMenu === "innovation" ? " show" : ""}`}
                {...hoverHandlers("innovation")}
              >
                <button
                  type="button"
                  className="nav-link dropdown-toggle"
                  id="dropdown-innovation"
                  aria-expanded={openMenu === "innovation"}
                  onClick={() => toggleMenu("innovation")}
                >
                  Innovation
                </button>
                <MegaLinks id="innovation" links={INNOVATION_LINKS} />
              </li>

              <li
                className={`nav-item dropdown spacedItems${aboutActive ? " show" : ""}`}
                {...hoverHandlers("about")}
              >
                <button
                  type="button"
                  className="nav-link dropdown-toggle"
                  id="dropdown-about"
                  aria-expanded={openMenu === "about"}
                  onClick={() => toggleMenu("about")}
                >
                  About
                </button>
                <MegaLinks id="about" links={ABOUT_LINKS} />
              </li>

              <li
                className={`nav-item dropdown spacedItems${openMenu === "newsroom" ? " show" : ""}`}
                {...hoverHandlers("newsroom")}
              >
                <button
                  type="button"
                  className="nav-link dropdown-toggle"
                  id="dropdown-newsroom"
                  aria-expanded={openMenu === "newsroom"}
                  onClick={() => toggleMenu("newsroom")}
                >
                  Newsroom
                </button>
                <MegaLinks id="newsroom" links={NEWSROOM_LINKS} />
              </li>

              <li
                className={`nav-item dropdown spacedItems${openMenu === "connect" ? " show" : ""}`}
                {...hoverHandlers("connect")}
              >
                <button
                  type="button"
                  className="nav-link dropdown-toggle"
                  id="dropdown-connect"
                  aria-expanded={openMenu === "connect"}
                  onClick={() => toggleMenu("connect")}
                >
                  Connect
                </button>
                <MegaLinks id="connect" links={CONNECT_LINKS} />
              </li>

              <li className="nav-item navredhover spacedItems">
                <Link className="nav-link navredhover" href="/our-service">
                  Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
