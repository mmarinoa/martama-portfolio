import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto — Marta Mariño Alvite" },
      { name: "description", content: "Información de contacto profesional de Marta Mariño Alvite." },
      { property: "og:title", content: "Contacto — Marta Mariño Alvite" },
      { property: "og:description", content: "Email, LinkedIn, GitHub y disponibilidad." },
    ],
  }),
  component: Contacto,
});

const links = [
  { k: "Email", v: "martamarinalvite@gmail.com", href: "mailto:martamarinalvite@gmail.com" },
  { k: "Teléfono", v: "+34 666 155 521", href: "tel:+34666155521" },
  { k: "LinkedIn", v: "linkedin.com/in/marta-marin-alvite", href: "https://linkedin.com/in/marta-marin-alvite" },
  { k: "GitHub", v: "github.com/mmarinoa", href: "https://github.com/mmarinoa" },
  { k: "Ubicación", v: "Bergondo, A Coruña — España" },
];

function Contacto() {
  return (
    <section className="container-prose pt-20 pb-16">
      <p className="uppercase-eyebrow mb-6">Contacto</p>
      <h1 className="font-serif text-5xl md:text-7xl leading-tight max-w-4xl">
        Hablemos sobre el próximo paso.
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
        Actualmente trabajando en la empresa ilatina de 8:00 a 15:00.
        No dudes en escribirme — respondo en menos de 24 horas.
      </p>

      <div className="mt-16 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-7 divide-y divide-border border-y border-border">
          {links.map((l) => (
            <div key={l.k} className="py-5 grid grid-cols-3 gap-4 items-baseline">
              <p className="uppercase-eyebrow">{l.k}</p>
              {l.href ? (
                <a
                  href={l.href}
                  target={l.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="col-span-2 font-serif text-xl md:text-2xl hover:text-gold transition-colors break-words"
                >
                  {l.v}
                </a>
              ) : (
                <p className="col-span-2 font-serif text-xl md:text-2xl">{l.v}</p>
              )}
            </div>
          ))}
        </div>

        <aside className="md:col-span-5 bg-muted/40 border border-border p-8">
          <p className="uppercase-eyebrow">Perfil objetivo</p>
          <ul className="mt-4 space-y-2 font-serif text-lg">
            <li>Software Engineering</li>
            <li>Automation &amp; AI</li>
            <li>Technology Consulting</li>
            <li>Data / BI junior</li>
            <li>Cloud &amp; integración de sistemas</li>
          </ul>
          <a
            href="mailto:martamarinalvite@gmail.com"
            className="mt-8 inline-flex w-full justify-center items-center px-6 py-3 bg-primary text-primary-foreground text-sm tracking-wide hover:opacity-90 transition"
          >
            Escribir un email →
          </a>
        </aside>
      </div>
    </section>
  );
}
