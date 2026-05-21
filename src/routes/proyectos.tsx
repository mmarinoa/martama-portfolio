import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/proyectos")({
  head: () => ({
    meta: [
      { title: "Proyectos — Marta Mariño Alvite" },
      { name: "description", content: "Proyectos destacados de desarrollo, automatización e IA aplicada." },
      { property: "og:title", content: "Proyectos — Marta Mariño Alvite" },
      { property: "og:description", content: "Selección de proyectos de software, automatización e IA." },
    ],
  }),
  component: Proyectos,
});

const featured = {
  title: "Sistema de triaje inteligente para urgencias",
  type: "Proyecto individual de fin de ciclo",
  stack: ["Android Java", "XML", "Django", "SQLite", "API propia", "n8n", "HTML", "CSS", "JavaScript"],
  body: [
    "Desarrollo completo de un sistema inteligente para clasificar pacientes según su nivel de urgencia y agilizar la toma de decisiones en zonas de urgencias.",
    "Basado en un problema real citado por enfermeras en prácticas en un hospital de A Coruña: el personal médico invertía varios minutos revisando pacientes y motivos de consulta antes de priorizar la atención.",
    "Aplicación Android con Java y layouts XML, backend en Django, base de datos SQLite y API propia para la comunicación entre sistemas. Automatizaciones con n8n y panel web con HTML, CSS y JavaScript.",
  ],
  goal: "Reducir tiempos de revisión inicial, mejorar la priorización de pacientes y apoyar al personal sanitario en la toma de decisiones.",
};

const projects = [
  {
    n: "02",
    title: "Bot de WhatsApp con IA y derivación a humano",
    stack: "n8n · Evolution API · Chatwoot · APIs · IA",
    desc: "Automatización conversacional capaz de responder dudas, gestionar citas, interpretar imágenes y audios, y transferir conversaciones a una persona cuando es necesario.",
  },
  {
    n: "03",
    title: "Captador de leads automatizado",
    stack: "n8n · Google Maps API · Scraping · BBDD · IA",
    desc: "Obtención y enriquecimiento de datos de empresas, identificación de información relevante y generación de correos personalizados.",
  },
  {
    n: "04",
    title: "Generador automático de artículos SEO",
    stack: "n8n · WordPress · IA generativa · APIs",
    desc: "Creación de artículos e imágenes con IA y publicación automática en WordPress para mejorar contenidos SEO.",
  },
  {
    n: "05",
    title: "Automatización de comentarios y mensajes en Meta",
    stack: "Meta API · n8n · Instagram · Facebook",
    desc: "Respuestas automáticas a comentarios y mensajes directos, integrando canales sociales con flujos automatizados.",
  },
];

function Proyectos() {
  return (
    <>
      <section className="container-prose pt-20 pb-12">
        <p className="uppercase-eyebrow mb-6">Proyectos seleccionados</p>
        <h1 className="font-serif text-5xl md:text-6xl leading-tight max-w-4xl">
          Soluciones reales construidas con tecnología actual.
        </h1>
      </section>

      {/* Featured */}
      <section className="border-t border-border">
        <div className="container-prose py-16 grid md:grid-cols-12 gap-12">
          <aside className="md:col-span-4">
            <p className="font-mono text-xs text-gold">01 · Proyecto destacado</p>
            <p className="mt-3 text-sm text-muted-foreground">{featured.type}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {featured.stack.map((t) => (
                <span key={t} className="text-xs border border-border px-2 py-1 font-mono text-foreground/80">
                  {t}
                </span>
              ))}
            </div>
          </aside>
          <div className="md:col-span-8">
            <h2 className="font-serif text-3xl md:text-4xl leading-tight">{featured.title}</h2>
            <div className="mt-6 space-y-4 text-foreground/85 leading-relaxed">
              {featured.body.map((p, i) => <p key={i}>{p}</p>)}
            </div>
            <div className="mt-8 border-t border-border pt-6">
              <p className="uppercase-eyebrow">Objetivo</p>
              <p className="mt-2 font-serif text-xl italic text-foreground/90">{featured.goal}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Other projects */}
      <section className="border-t border-border">
        <div className="container-prose py-16">
          <p className="uppercase-eyebrow mb-10">Otros proyectos y automatizaciones</p>
          <div className="divide-y divide-border border-y border-border">
            {projects.map((p) => (
              <article key={p.n} className="py-10 grid md:grid-cols-12 gap-6 group">
                <div className="md:col-span-1 font-mono text-xs text-gold pt-2">{p.n}</div>
                <div className="md:col-span-5">
                  <h3 className="font-serif text-2xl md:text-3xl leading-snug group-hover:text-primary transition-colors">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-xs font-mono text-muted-foreground">{p.stack}</p>
                </div>
                <p className="md:col-span-6 text-foreground/80 leading-relaxed">{p.desc}</p>
              </article>
            ))}
          </div>

          <p className="mt-10 text-sm text-muted-foreground">
            Más proyectos disponibles en{" "}
            <a href="https://github.com/mmarinoa" target="_blank" rel="noreferrer" className="text-foreground underline underline-offset-4 hover:text-gold">
              github.com/mmarinoa
            </a>.
          </p>
        </div>
      </section>
    </>
  );
}
