"use client";

import Link from "next/link";
import { useState } from "react";

export default function QuickLinks() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {open && (
        <div className="card card-body quicklinks">
          <Link href="/contact-us">
            <span style={{ color: "rgb(0, 0, 0)" }}>
              <i className="fa-solid fa-phone" /> Contact{" "}
            </span>
          </Link>
          <Link href="/test-drive" className="mt-4">
            <span style={{ color: "rgb(0, 0, 0)" }}>
              <i className="fa-solid fa-car" /> Test drive{" "}
            </span>
          </Link>
          <Link href="/our-service" className="mt-4">
            <span style={{ color: "rgb(0, 0, 0)" }}>
              <i className="fa-solid fa-clipboard" /> Service{" "}
            </span>
          </Link>
          <Link href="/subcribe" className="mt-4">
            <span style={{ color: "rgb(0, 0, 0)" }}>
              <i className="fa-solid fa-bell" /> Subscribe{" "}
            </span>
          </Link>
        </div>
      )}
      <button
        type="button"
        className="btn btn-dark btnmenu"
        onClick={() => setOpen((prev) => !prev)}
      >
        {" "}Quick links{" "}
      </button>
    </>
  );
}
