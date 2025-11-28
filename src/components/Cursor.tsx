import { useEffect, useRef } from "react";

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const trailRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let trailX = 0;
    let trailY = 0;
    let targetX = 0;
    let targetY = 0;
    let rafId: number | null = null;

    const handleMouseMove = (e: MouseEvent) => {
      if (!cursorRef.current) return;
      cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const animate = () => {
      trailX += (targetX - trailX) * 0.15;
      trailY += (targetY - trailY) * 0.15;

      if (trailRef.current) {
        const dx = targetX - trailX;
        const dy = targetY - trailY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        const width = Math.min(180, 40 + distance * 0.9);
        const height = Math.min(50, 12 + distance * 0.25);

        trailRef.current.style.width = `${width}px`;
        trailRef.current.style.height = `${height}px`;
        trailRef.current.style.borderRadius = `${height / 2}px`;
        trailRef.current.style.transform = `translate(${trailX - width / 2}px, ${trailY - height / 2}px) rotate(${Math.atan2(dy, dx)}rad)`;
        trailRef.current.style.opacity = `${0.3 + Math.min(0.5, distance * 0.01)}`;
      }

      rafId = requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", handleMouseMove);
    rafId = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 0,
          height: 0,
          borderRadius: "50%",
          backgroundColor: "#FCFCFC",
          pointerEvents: "none",
          transform: "translate(-50%, -50%)",
          zIndex: 9999,
          mixBlendMode: "difference",
        }}
      />
      <div
        ref={trailRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          backgroundColor: "var(--primary)",
          pointerEvents: "none",
          filter: "blur(20px)",
          zIndex: 9998,
          transformOrigin: "center",
        }}
      />
    </>
  );
}
