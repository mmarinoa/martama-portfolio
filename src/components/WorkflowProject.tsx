import { useEffect, useRef, useState } from "react";
import type { AutomationProject } from "@/data/automations";
import { Lightbox } from "@/components/Lightbox";

type Props = { project: AutomationProject; index: number };

export function WorkflowProject({ project, index }: Props) {
  const [current, setCurrent] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [paused, setPaused] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);

  const total = project.images.length;
  const go = (i: number) => setCurrent(((i % total) + total) % total);

  // Autoplay (gentle)
  useEffect(() => {
    if (paused || lightboxOpen) return;
    const id = setInterval(() => setCurrent((c) => (c + 1) % total), 6000);
    return () => clearInterval(id);
  }, [paused, lightboxOpen, total]);

  const onTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 50) (dx < 0 ? go(current + 1) : go(current - 1));
    touchStartX.current = null;
  };

  return (
    <article className="border-t border-border">
      <div className="container-prose py-16 md:py-20 grid lg:grid-cols-12 gap-10">
        {/* Header */}
        <header className="lg:col-span-12">
          <p className="font-mono text-xs text-gold">
            {String(index + 1).padStart(2, "0")} · Workflow
          </p>
          <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl mt-3 leading-tight max-w-4xl">
            {project.title}
          </h3>
        </header>

        {/* Carousel */}
        <div className="lg:col-span-12">
          <div
            className="relative bg-[#0a0a0a] border border-border overflow-hidden group"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <div
              ref={trackRef}
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {project.images.map((im, i) => (
                <button
                  key={i}
                  onClick={() => { setLightboxOpen(true); }}
                  className="min-w-full aspect-[16/9] flex items-center justify-center cursor-zoom-in"
                  aria-label={`Ampliar imagen ${i + 1}: ${im.alt}`}
                >
                  <img
                    src={im.src}
                    alt={im.alt}
                    loading={i === 0 ? "eager" : "lazy"}
                    className="max-w-full max-h-full object-contain"
                  />
                </button>
              ))}
            </div>

            {/* Arrows */}
            <button
              onClick={() => go(current - 1)}
              aria-label="Imagen anterior"
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-black/80 text-white opacity-0 group-hover:opacity-100 focus:opacity-100 transition"
            >‹</button>
            <button
              onClick={() => go(current + 1)}
              aria-label="Imagen siguiente"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 hover:bg-black/80 text-white opacity-0 group-hover:opacity-100 focus:opacity-100 transition"
            >›</button>

            {/* Counter */}
            <div className="absolute top-3 right-3 font-mono text-[11px] text-white/80 bg-black/50 px-2 py-1">
              {current + 1} / {total}
            </div>
          </div>

          {/* Dots */}
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {project.images.map((_, i) => (
              <button
                key={i}
                onClick={() => go(i)}
                aria-label={`Ir a imagen ${i + 1}`}
                className={`h-1.5 transition-all ${i === current ? "w-8 bg-foreground" : "w-3 bg-foreground/25 hover:bg-foreground/50"}`}
              />
            ))}
          </div>
        </div>

        {/* Description + meta */}
        <div className="lg:col-span-8">
          <p className="text-foreground/85 leading-relaxed">{project.description}</p>

          {project.bullets && (
            <div className="mt-6">
              <p className="uppercase-eyebrow mb-3">Qué hace</p>
              <ul className="grid sm:grid-cols-2 gap-y-2 gap-x-6 text-sm text-foreground/85">
                {project.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="text-gold mt-1">→</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <aside className="lg:col-span-4 space-y-6">
          {project.useCase && (
            <div>
              <p className="uppercase-eyebrow mb-2">Caso de uso</p>
              <p className="text-sm text-foreground/80 leading-relaxed">{project.useCase}</p>
            </div>
          )}
          <div>
            <p className="uppercase-eyebrow mb-3">Stack</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((t) => (
                <span key={t} className="text-xs border border-border px-2 py-1 font-mono text-foreground/80">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </aside>
      </div>

      {lightboxOpen && (
        <Lightbox
          images={project.images}
          index={current}
          onClose={() => setLightboxOpen(false)}
          onIndexChange={setCurrent}
        />
      )}
    </article>
  );
}
