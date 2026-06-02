import { createFileRoute } from "@tanstack/react-router";
import { WorkflowProject } from "@/components/WorkflowProject";
import { automationProjects } from "@/data/automations";

export const Route = createFileRoute("/automatizaciones")({
  head: () => ({
    meta: [
      { title: "Automatizaciones y agentes IA — Marta Mariño Alvite" },
      { name: "description", content: "Selección de automatizaciones, bots de WhatsApp, workflows en n8n y agentes de IA desarrollados para procesos reales de atención, captación y operaciones." },
      { property: "og:title", content: "Automatizaciones y agentes IA — Marta Mariño Alvite" },
      { property: "og:description", content: "Workflows reales en n8n, bots conversacionales con IA, integraciones y derivación a humano." },
    ],
  }),
  component: Automatizaciones,
});

function Automatizaciones() {
  return (
    <>
      <section className="container-prose pt-20 pb-12">
        <p className="uppercase-eyebrow mb-6">Workflows · n8n · IA</p>
        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.02] tracking-tight max-w-5xl">
          Automatizaciones y agentes IA
        </h1>
        <p className="mt-8 max-w-3xl text-lg text-foreground/80 leading-relaxed">
          Una selección de automatizaciones, bots y sistemas de IA que he desarrollado para resolver
          procesos reales de atención al cliente, captación, seguimiento y operaciones.
        </p>
      </section>

      {automationProjects.map((p, i) => (
        <WorkflowProject key={p.slug} project={p} index={i} />
      ))}

      <section className="border-t border-border">
        <div className="container-prose py-16 text-sm text-muted-foreground">
          Esta sección se irá ampliando con nuevos workflows y agentes a medida que se incorporen.
        </div>
      </section>
    </>
  );
}
