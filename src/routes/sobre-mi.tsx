import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/sobre-mi")({
  head: () => ({
    meta: [
      { title: "Sobre mí — Marta Mariño Alvite" },
      { name: "description", content: "Perfil profesional, competencias, formación e idiomas de Marta Mariño Alvite." },
      { property: "og:title", content: "Sobre mí — Marta Mariño Alvite" },
      { property: "og:description", content: "Perfil profesional, competencias e idiomas." },
    ],
  }),
  component: SobreMi,
});

const competencias = [
  "Aprendizaje rápido",
  "Resolución de problemas",
  "Pensamiento lógico y analítico",
  "Adaptabilidad",
  "Trabajo en equipo",
  "Comunicación",
  "Organización",
  "Atención al detalle",
  "Liderazgo e iniciativa",
];

const idiomas = [
  { lang: "Español", lvl: "Nativo" },
  { lang: "Inglés", lvl: "B2 Trinity certificado · preparando C1 Cambridge" },
  { lang: "Francés", lvl: "Básico" },
  { lang: "Portugués", lvl: "Nociones básicas" },
];

const tech = [
  { cat: "Lenguajes", items: "Java (avanzado), Python (avanzado), JavaScript, HTML/CSS, C++, Kotlin, XML, GDScript" },
  { cat: "Backend & APIs", items: "Django (avanzado), APIs REST, JSON, XML, creación de APIs propias" },
  { cat: "Automatización & IA", items: "n8n (avanzado), Make, bots conversacionales, LLMs, generación de contenido con IA" },
  { cat: "Bases de datos", items: "SQL (avanzado), SQLite, MySQL, MariaDB, PostgreSQL, SQL Server, Redis" },
  { cat: "Cloud & DevOps", items: "Linux/VPS (avanzado), Docker, Easypanel, despliegue de servicios, FileZilla, PuTTY" },
  { cat: "Web & CMS", items: "WordPress, SEO, Meta API, Google APIs, automatización de leads" },
  { cat: "Datos & BI", items: "Power BI, Looker Studio, Excel, QGIS" },
  { cat: "Herramientas", items: "Git/GitHub, VS Code, Android Studio, PyCharm, IntelliJ, Eclipse, NetBeans, Postman" },
];

function SobreMi() {
  return (
    <>
      <section className="container-prose pt-20 pb-12">
        <p className="uppercase-eyebrow mb-6">Sobre mí</p>
        <h1 className="font-serif text-5xl md:text-6xl leading-tight max-w-4xl">
          Perfil profesional, formación y competencias.
        </h1>
      </section>

      <section className="border-t border-border">
        <div className="container-prose py-16 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <p className="uppercase-eyebrow">Resumen</p>
          </div>
          <div className="md:col-span-8 text-lg leading-relaxed text-foreground/85 space-y-5">
            <p>
              Desarrolladora junior de aplicaciones multiplataforma especializada en automatización de
              procesos, integración de APIs e IA aplicada. Actualmente finalizando el CFGS en
              Desarrollo de Aplicaciones Multiplataforma y realizando prácticas DUAL en ilatina.
            </p>
            <p>
              He impulsado la creación del área de automatización de la empresa, desarrollando
              soluciones con n8n, Make, bots de WhatsApp, Meta API, Google APIs, WordPress, VPS
              y servicios desplegados en servidor. Busco incorporarme a una empresa tecnológica
              donde seguir creciendo en desarrollo de software, automatización, IA, datos y
              consultoría tecnológica.
            </p>
          </div>
        </div>
      </section>

      {/* Formación */}
      <section className="border-t border-border">
        <div className="container-prose py-16 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <p className="uppercase-eyebrow">Formación</p>
          </div>
          <div className="md:col-span-8 space-y-10">
            <article>
              <p className="font-mono text-xs text-muted-foreground">2024 — 2026</p>
              <h3 className="font-serif text-2xl mt-1">
                CFGS Desarrollo de Aplicaciones Multiplataforma (DAM)
              </h3>
              <p className="text-muted-foreground">A Fundación / ABANCA · A Coruña</p>
              <ul className="mt-4 space-y-2 text-foreground/85 list-disc list-inside">
                <li>Desarrollo de software, bases de datos, programación multiplataforma, Android, interfaces, servicios y gestión de sistemas.</li>
                <li>Seleccionada entre el alumnado para entrevista de prácticas DUAL en empresa.</li>
                <li>Subdelegada durante ambos cursos.</li>
              </ul>
            </article>
            <article>
              <p className="font-mono text-xs text-muted-foreground">Anterior</p>
              <h3 className="font-serif text-2xl mt-1">Grado en Ingeniería Informática</h3>
              <p className="text-muted-foreground">1º curso realizado · formación universitaria previa.</p>
            </article>
          </div>
        </div>
      </section>

      {/* Competencias técnicas */}
      <section className="border-t border-border">
        <div className="container-prose py-16 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <p className="uppercase-eyebrow">Competencias técnicas</p>
          </div>
          <div className="md:col-span-8 divide-y divide-border">
            {tech.map((t) => (
              <div key={t.cat} className="py-5 grid grid-cols-3 gap-6">
                <p className="font-serif text-lg col-span-1">{t.cat}</p>
                <p className="col-span-2 text-foreground/80 text-sm leading-relaxed">{t.items}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Soft + Idiomas */}
      <section className="border-t border-border">
        <div className="container-prose py-16 grid md:grid-cols-2 gap-16">
          <div>
            <p className="uppercase-eyebrow">Competencias personales</p>
            <ul className="mt-6 space-y-3">
              {competencias.map((c) => (
                <li key={c} className="flex items-baseline gap-3 text-foreground/85">
                  <span className="text-gold font-mono text-xs">—</span>{c}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="uppercase-eyebrow">Idiomas</p>
            <ul className="mt-6 space-y-5">
              {idiomas.map((i) => (
                <li key={i.lang} className="border-b border-border pb-4">
                  <p className="font-serif text-xl">{i.lang}</p>
                  <p className="text-sm text-muted-foreground mt-1">{i.lvl}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
