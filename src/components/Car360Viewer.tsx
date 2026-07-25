"use client";

import { useCallback, useEffect, useRef, useState } from "react";

interface Car360ViewerProps {
  frames: string[];
  alt: string;
  className?: string;
}

const PIXELS_PER_FRAME = 5;

export default function Car360Viewer({
  frames,
  alt,
  className = "",
}: Car360ViewerProps) {
  const frameCount = frames.length;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [ready, setReady] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [showHint, setShowHint] = useState(true);
  const startXRef = useRef(0);
  const indexRef = useRef(0);
  const draggingRef = useRef(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const framesKey = frames.join("|");

  useEffect(() => {
    indexRef.current = currentIndex;
  }, [currentIndex]);

  useEffect(() => {
    if (frameCount === 0) return;

    let cancelled = false;
    setReady(false);
    setCurrentIndex(0);
    indexRef.current = 0;
    setShowHint(true);

    let loaded = 0;
    const images: HTMLImageElement[] = [];

    frames.forEach((src) => {
      const img = new window.Image();
      images.push(img);
      const finish = () => {
        loaded += 1;
        // Show viewer as soon as the first few frames are ready
        if (!cancelled && loaded >= Math.min(4, frameCount)) {
          setReady(true);
        }
      };
      img.onload = finish;
      img.onerror = finish;
      img.src = src;
    });

    const safety = window.setTimeout(() => {
      if (!cancelled) setReady(true);
    }, 2500);

    return () => {
      cancelled = true;
      window.clearTimeout(safety);
      images.forEach((img) => {
        img.onload = null;
        img.onerror = null;
      });
    };
  }, [framesKey, frameCount, frames]);

  const rotateByDelta = useCallback(
    (clientX: number) => {
      if (frameCount < 2) return;
      const delta = clientX - startXRef.current;
      const step = Math.trunc(delta / PIXELS_PER_FRAME);
      if (step === 0) return;

      let next = indexRef.current + step;
      next = ((next % frameCount) + frameCount) % frameCount;
      indexRef.current = next;
      setCurrentIndex(next);
      startXRef.current = clientX;
      setShowHint(false);
    },
    [frameCount],
  );

  useEffect(() => {
    const onMove = (event: PointerEvent) => {
      if (!draggingRef.current) return;
      event.preventDefault();
      rotateByDelta(event.clientX);
    };
    const onUp = () => {
      if (!draggingRef.current) return;
      draggingRef.current = false;
      setIsDragging(false);
    };
    window.addEventListener("pointermove", onMove, { passive: false });
    window.addEventListener("pointerup", onUp);
    window.addEventListener("pointercancel", onUp);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("pointercancel", onUp);
    };
  }, [rotateByDelta]);

  const onPointerDown = useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      event.preventDefault();
      draggingRef.current = true;
      setIsDragging(true);
      startXRef.current = event.clientX;
      setShowHint(false);
      try {
        wrapperRef.current?.setPointerCapture(event.pointerId);
      } catch {
        // ignore capture errors
      }
    },
    [],
  );

  if (frameCount === 0) return null;

  const canRotate = frameCount >= 2;

  return (
    <div
      ref={wrapperRef}
      className={`car-360-viewer${isDragging ? " is-dragging" : ""}${ready ? " is-ready" : ""}${canRotate ? "" : " is-static"} ${className}`.trim()}
      onPointerDown={canRotate ? onPointerDown : undefined}
      role="img"
      aria-label={
        canRotate
          ? `${alt} 360 degree view. Drag left or right to rotate.`
          : `${alt} color view.`
      }
    >
      {!ready && <div className="car-360-loading">Loading…</div>}

      <div className="car-360-stage-inner">
        {frames.map((src, index) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={`${src}-${index}`}
            src={src}
            alt={index === currentIndex ? alt : ""}
            className={`car-360-frame${index === currentIndex ? " is-active" : ""}`}
            draggable={false}
          />
        ))}
      </div>

      {showHint && ready && canRotate && (
        <div className="car-360-hint" aria-hidden>
          <span>Drag to rotate 360°</span>
        </div>
      )}
    </div>
  );
}
