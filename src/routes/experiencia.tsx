import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/experiencia")({
  head: () => ({
    meta: [
      { title: "Experiencia — Marta Mariño Alvite" },
      { name: "description", content: "Experiencia profesional de Marta Mariño Alvite en automatización, IA aplicada e integración de sistemas." },
      { property: "og:title", content: "Experiencia — Marta Mariño Alvite" },
      { property: "og:description", content: "Trayectoria profesional y logros destacados." },
    ],
  }),
  component: Experiencia,
});

function Experiencia() {
  return (
    <>
      <section className="container-prose pt-20 pb-12">
        <p className="uppercase-eyebrow mb-6">Experiencia profesional</p>
        <h1 className="font-serif text-5xl md:text-6xl leading-tight max-w-4xl">
          Aprender haciendo, en entornos reales.
        </h1>
      </section>

      <section className="border-t border-border">
        <div className="container-prose py-16">
          <article className="grid md:grid-cols-12 gap-12">
            <aside className="md:col-span-4 space-y-2">
              <p className="font-mono text-xs text-muted-foreground">Enero 2026 — Actualidad</p>
              <p className="text-sm text-foreground/80">A Coruña · DevOps & Automatización</p>
              <p className="mt-4 inline-block text-xs uppercase tracking-[0.18em] text-gold border border-gold/40 px-2 py-1">
                En activo
              </p>
            </aside>
            <div className="md:col-span-8">
              <h2 className="font-serif text-3xl md:text-4xl">
                Desarrolladora de automatizaciones
              </h2>
              <p className="text-muted-foreground mt-1">ilatina</p>

              <ul className="mt-8 space-y-4 text-foreground/85 leading-relaxed">
                <li className="flex gap-4">
                  <span className="text-gold font-mono text-xs mt-2">01</span>
                  <span>Incorporada para impulsar la creación del área de automatización de la empresa, desarrollando soluciones internas y para clientes.</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-gold font-mono text-xs mt-2">02</span>
                  <span>Diseño, desarrollo y mantenimiento de flujos automatizados con <strong>n8n</strong> y <strong>Make</strong>, integrando APIs, bases de datos, servicios externos y herramientas de comunicación.</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-gold font-mono text-xs mt-2">03</span>
                  <span>Desarrollo de <strong>bots de WhatsApp</strong> capaces de responder dudas, derivar conversaciones a humanos, interpretar imágenes, procesar audios y gestionar citas.</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-gold font-mono text-xs mt-2">04</span>
                  <span>Integración con Chatwoot, Evolution API, Meta API, Google APIs, WordPress, Easypanel, VPS y Docker.</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-gold font-mono text-xs mt-2">05</span>
                  <span>Automatizaciones para captación de leads, scraping de información empresarial, generación de correos personalizados y enriquecimiento de bases de datos.</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-gold font-mono text-xs mt-2">06</span>
                  <span>Sistemas automáticos para generación de artículos SEO con imágenes creadas mediante IA y publicación en WordPress.</span>
                </li>
                <li className="flex gap-4">
                  <span className="text-gold font-mono text-xs mt-2">07</span>
                  <span>Participación en proyectos de diseño web, campañas digitales, SEO, WordPress, JavaScript y resolución de incidencias técnicas.</span>
                </li>
              </ul>

              <div className="mt-10 border-l-2 border-gold pl-6 py-2 bg-muted/40">
                <p className="uppercase-eyebrow">Logro destacado</p>
                <p className="mt-2 text-foreground/90 leading-relaxed">
                  Tras finalizar las prácticas DUAL, la empresa decidió contratarme. En total
                  acumulo ya <strong>6 meses de experiencia</strong> en el área de DevOps y automatización,
                  habiendo aprendido <strong>n8n</strong> desde cero y desarrollado soluciones de producción
                  en tiempo récord.
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="container-prose py-16">
          <p className="uppercase-eyebrow">Disponibilidad</p>
          <div className="mt-6 grid md:text-muted-foreground">
            <p className="text-muted-foreground">Horario actual</p>
            <p className="mt-1 text-foreground font-serif text-lg">8:00 — 15:00 en ilatina</p>
          </div>
          <div>
            <p className="text-muted-foreground">Disponibilidad entrevistas</p>
            <p className="mt-1 text-foreground font-serif text-lg">Tardes · flexible</p>
          </div>
          <div>
            <p className="text-muted-foreground">Modalidad preferida</p>
            <p className="mt-1 text-foreground font-serif text-lg">Presencial · híbrida · remoto</p>
          </div>
          <div>
            <p className="text-muted-foreground">Ubicación</p>
            <p className="mt-1 text-foreground font-serif text-lg">A Coruña y alrededores</p>
          </div>
        </div>
        </div>
      </section>
    </>
  );
}
