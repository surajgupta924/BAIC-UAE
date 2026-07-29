"use client";

import Car360Section from "@/components/Car360Section";

/**
 * Local 360° model viewer (full frame packs mirrored from 360.baicuae.com).
 * Using the local viewer ensures every catalog model can rotate, including
 * cars the remote app only shows as static images.
 */
export default function Car360Embed() {
  return (
    <div className="car-360-iframe-wrap">
      <Car360Section />
    </div>
  );
}
