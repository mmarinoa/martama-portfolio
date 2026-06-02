import { useEffect, useRef, useState, useCallback } from "react";
import type { AutomationImage } from "@/data/automations";

type Props = {
  images: AutomationImage[];
  index: number;
  onClose: () => void;
  onIndexChange: (i: number) => void;
};

export function Lightbox({ images, index, onClose, onIndexChange }: Props) {
  const [zoom, setZoom] = useState(1);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const dragRef = useRef<{ x: number; y: number; px: number; py: number } | null>(null);
  const touchRef = useRef<{ x: number; t: number } | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const img = images[index];
  const reset = useCallback(() => { setZoom(1); setPos({ x: 0, y: 0 }); }, []);

  const next = useCallback(() => { onIndexChange((index + 1) % images.length); reset(); }, [index, images.length, onIndexChange, reset]);
  const prev = useCallback(() => { onIndexChange((index - 1 + images.length) % images.length); reset(); }, [index, images.length, onIndexChange, reset]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === "+" || e.key === "=") setZoom((z) => Math.min(z + 0.25, 5));
      else if (e.key === "-") setZoom((z) => Math.max(z - 0.25, 1));
      else if (e.key === "0") reset();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [next, prev, onClose, reset]);

  const onWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    setZoom((z) => Math.max(1, Math.min(5, z - e.deltaY * 0.002)));
  };

  const onMouseDown = (e: React.MouseEvent) => {
    if (zoom === 1) return;
    dragRef.current = { x: e.clientX, y: e.clientY, px: pos.x, py: pos.y };
  };
  const onMouseMove = (e: React.MouseEvent) => {
    if (!dragRef.current) return;
    setPos({ x: dragRef.current.px + (e.clientX - dragRef.current.x), y: dragRef.current.py + (e.clientY - dragRef.current.y) });
  };
  const onMouseUp = () => { dragRef.current = null; };

  const onTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 1 && zoom === 1) {
      touchRef.current = { x: e.touches[0].clientX, t: Date.now() };
    } else if (e.touches.length === 1 && zoom > 1) {
      dragRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY, px: pos.x, py: pos.y };
    }
  };
  const onTouchMove = (e: React.TouchEvent) => {
    if (dragRef.current && e.touches.length === 1) {
      setPos({ x: dragRef.current.px + (e.touches[0].clientX - dragRef.current.x), y: dragRef.current.py + (e.touches[0].clientY - dragRef.current.y) });
    }
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchRef.current && e.changedTouches.length === 1) {
      const dx = e.changedTouches[0].clientX - touchRef.current.x;
      if (Math.abs(dx) > 50) { dx < 0 ? next() : prev(); }
    }
    touchRef.current = null;
    dragRef.current = null;
  };

  const toggleFullscreen = async () => {
    if (!document.fullscreenElement) await containerRef.current?.requestFullscreen?.();
    else await document.exitFullscreen?.();
  };

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[100] bg-black/95 flex flex-col"
      role="dialog"
      aria-modal="true"
      aria-label="Visor de imagen ampliada"
    >
      {/* Top bar */}
      <div className="flex items-center justify-between px-4 py-3 text-white/90 text-sm gap-3">
        <div className="font-mono text-xs">
          {index + 1} / {images.length}
        </div>
        <div className="flex items-center gap-2">
          <button onClick={() => setZoom((z) => Math.max(1, z - 0.25))} className="px-3 py-1.5 hover:bg-white/10 rounded" aria-label="Reducir zoom">−</button>
          <span className="font-mono text-xs w-12 text-center">{Math.round(zoom * 100)}%</span>
          <button onClick={() => setZoom((z) => Math.min(5, z + 0.25))} className="px-3 py-1.5 hover:bg-white/10 rounded" aria-label="Aumentar zoom">+</button>
          <button onClick={reset} className="px-3 py-1.5 hover:bg-white/10 rounded text-xs" aria-label="Restablecer zoom">Reset</button>
          <button onClick={toggleFullscreen} className="px-3 py-1.5 hover:bg-white/10 rounded text-xs hidden sm:inline-block" aria-label="Pantalla completa">⛶</button>
          <a href={img.src} target="_blank" rel="noreferrer" className="px-3 py-1.5 hover:bg-white/10 rounded text-xs hidden sm:inline-block">Open full size</a>
          <button onClick={onClose} className="px-3 py-1.5 hover:bg-white/10 rounded text-lg" aria-label="Cerrar">✕</button>
        </div>
      </div>

      {/* Image area */}
      <div
        className="flex-1 relative overflow-hidden select-none"
        onWheel={onWheel}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        style={{ cursor: zoom > 1 ? (dragRef.current ? "grabbing" : "grab") : "default" }}
      >
        <img
          src={img.src}
          alt={img.alt}
          draggable={false}
          className="absolute top-1/2 left-1/2 max-w-[95vw] max-h-[80vh] object-contain transition-transform duration-150 ease-out"
          style={{ transform: `translate(-50%, -50%) translate(${pos.x}px, ${pos.y}px) scale(${zoom})` }}
        />

        <button onClick={prev} aria-label="Imagen anterior" className="absolute left-3 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white text-2xl">‹</button>
        <button onClick={next} aria-label="Imagen siguiente" className="absolute right-3 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white text-2xl">›</button>
      </div>

      {/* Caption + thumbs */}
      <div className="px-4 py-3 text-white/80 text-sm text-center">{img.alt}</div>
      <div className="flex justify-center gap-2 pb-4 px-4 overflow-x-auto">
        {images.map((im, i) => (
          <button
            key={i}
            onClick={() => { onIndexChange(i); reset(); }}
            className={`h-14 w-20 shrink-0 overflow-hidden border-2 transition ${i === index ? "border-white" : "border-white/20 hover:border-white/50"}`}
            aria-label={`Ir a imagen ${i + 1}`}
          >
            <img src={im.src} alt="" className="h-full w-full object-cover opacity-80" />
          </button>
        ))}
      </div>
    </div>
  );
}
