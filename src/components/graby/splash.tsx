import { useEffect, useState } from "react";
import logo from "@/assets/d-removebg-preview.png";

export function Splash() {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFading(true), 1100);
    const removeTimer = setTimeout(() => setVisible(false), 1600);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[100] grid place-items-center bg-background transition-opacity duration-500 ${
        fading ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <span className="inline-flex items-center rounded-2xl bg-logo-plate px-5 py-4 animate-splash-glow animate-logo-in">
        <img src={logo} alt="GraBy" className="h-16 w-auto object-contain" />
      </span>
    </div>
  );
}
