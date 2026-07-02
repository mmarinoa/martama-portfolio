import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Marta Mariño Alvite — Desarrolladora · Automatización & IA" },
      { name: "description", content: "Portfolio de Marta Mariño Alvite. Desarrolladora junior especializada en automatización, integración de APIs e IA aplicada." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="container-prose pt-20 md:pt-28 pb-20">
        <p className="uppercase-eyebrow mb-8">Portfolio · 2026</p>
        <div className="grid md:grid-cols-12 gap-10 items-end">
          <div className="md:col-span-9">
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight">
              Marta Mariño Alvite
            </h1>
            <p className="mt-8 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed">
              Desarrolladora junior de aplicaciones multiplataforma, centrada en
              <span className="text-foreground"> automatización de procesos</span>,
              <span className="text-foreground"> integración de APIs</span> e
              <span className="text-foreground"> inteligencia artificial aplicada</span>.
            </p>
          </div>
          <div className="md:col-span-3 md:text-right space-y-1 text-sm text-muted-foreground">
            <p>Bergondo, A Coruña</p>
            <p>España</p>
            <p className="text-foreground mt-3">Actualmente trabajando</p>
          </div>
        </div>

        <div className="mt-14 flex flex-wrap gap-4">
          <a
            href="https://github.com/mmarinoa"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground text-sm tracking-wide hover:opacity-90 transition"
          >
            Ver proyectos →
          </a>
          <Link
            to="/contacto"
            className="inline-flex items-center px-6 py-3 border border-foreground/30 text-sm tracking-wide hover:bg-foreground hover:text-background transition"
          >
            Contactar
          </Link>
        </div>
      </section>

      {/* ENFOQUE */}
      <section className="border-t border-border">
        <div className="container-prose py-20 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <p className="uppercase-eyebrow">01 · Perfil</p>
            <h2 className="font-serif text-3xl md:text-4xl mt-4">Un enfoque práctico al desarrollo.</h2>
          </div>
          <div className="md:col-span-8 text-lg leading-relaxed text-foreground/85 space-y-5">
            <p>
              Actualmente finalizo el <em>CFGS en Desarrollo de Aplicaciones Multiplataforma</em>
              {" "}y realizo prácticas DUAL en <strong>ilatina</strong>, donde he impulsado la creación
              del área de automatización de la empresa.
            </p>
            <p>
              Desarrollo soluciones con n8n, Make, bots de WhatsApp, Meta API, Google APIs,
              WordPress y servicios desplegados en VPS. Destaco por la rapidez de aprendizaje,
              el pensamiento lógico y la capacidad de resolver problemas en entornos reales.
            </p>
          </div>
        </div>
      </section>

      {/* ÁREAS */}
      <section className="border-t border-border">
        <div className="container-prose py-20">
          <p className="uppercase-eyebrow">02 · Áreas de interés</p>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-5 gap-px bg-border">
            {[
              { n: "01", t: "Software Engineering", d: "Desarrollo de aplicaciones multiplataforma y backend." },
              { n: "02", t: "Automation & AI", d: "Flujos automatizados e IA aplicada a procesos reales." },
              { n: "03", t: "Technology Consulting", d: "Análisis y resolución de problemas técnicos." },
              { n: "04", t: "Data / BI", d: "Tratamiento, integración y visualización de datos." },
              { n: "05", t: "Cloud & Integración", d: "Despliegue de servicios e integración de sistemas." },
            ].map((b) => (
              <div key={b.n} className="bg-background p-6 min-h-[180px]">
                <p className="font-mono text-xs text-gold">{b.n}</p>
                <h3 className="font-serif text-xl mt-2">{b.t}</h3>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border">
        <div className="container-prose py-20 grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-8">
            <h2 className="font-serif text-3xl md:text-5xl leading-tight">
              ¿Tienes un proyecto en mente?
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl">
              Estoy abierta a oportunidades en desarrollo de software, automatización, IA aplicada,
              datos y consultoría tecnológica.
            </p>
          </div>
          <div className="md:col-span-4 md:text-right">
            <Link
              to="/contacto"
              className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground text-sm tracking-wide hover:opacity-90 transition"
            >
              Hablemos →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
