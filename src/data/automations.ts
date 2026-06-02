import img1 from "@/assets/projects/bot-wa-1.png.asset.json";
import img2 from "@/assets/projects/bot-wa-2.png.asset.json";
import img3 from "@/assets/projects/bot-wa-3.png.asset.json";
import img4 from "@/assets/projects/bot-wa-4.png.asset.json";
import img5 from "@/assets/projects/bot-wa-5.png.asset.json";
import img6 from "@/assets/projects/bot-wa-6.png.asset.json";
import img7 from "@/assets/projects/bot-wa-7.png.asset.json";

export type AutomationImage = { src: string; alt: string };
export type AutomationProject = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  useCase?: string;
  bullets?: string[];
  tags: string[];
  images: AutomationImage[];
};

export const automationProjects: AutomationProject[] = [
  {
    slug: "bot-whatsapp-ia",
    title: "Bot de WhatsApp con IA, transcripción de audios y derivación a humano",
    shortDescription:
      "Bot conversacional de WhatsApp con IA, transcripción de audios, memoria, registro automático en Google Sheets, seguimiento a las 72h y derivación a humano para casos complejos.",
    description:
      "Sistema de atención automatizada por WhatsApp conectado con Evolution API y Chatwoot. El bot se activa o desactiva mediante un atributo IA ON/OFF, detecta el país del usuario a partir de la extensión del teléfono para adaptar idioma y tono, procesa mensajes de texto y audios, transcribe grabaciones, responde mediante un agente de IA con memoria conversacional, guarda los datos del contacto en Google Sheets y realiza seguimiento automático cuando el usuario no responde durante más de 72 horas. Incluye además una herramienta de derivación a humano que avisa al gerente ante consultas complejas, preguntas sobre pagos o solicitudes de inscripción.",
    useCase: "Atención al cliente automatizada, captación y seguimiento de leads vía WhatsApp.",
    bullets: [
      "Responde mensajes de WhatsApp en tiempo real",
      "Procesa y transcribe audios",
      "Adapta idioma y tono según el país detectado",
      "Guarda contactos y conversaciones en Google Sheets",
      "Reaviso automático tras 72h sin respuesta",
      "Deriva a humano cuando es necesario",
    ],
    tags: [
      "n8n",
      "WhatsApp",
      "Evolution API",
      "Chatwoot",
      "OpenAI",
      "Google Sheets",
      "Automatización",
      "IA conversacional",
      "Audio transcription",
      "Human handoff",
    ],
    images: [
      { src: img1.url, alt: "Entrada del bot: webhook, tipo de evento, control ON/OFF y detección del país" },
      { src: img2.url, alt: "Agente IA con transcripción de audios, memoria, documentos y derivación a humano" },
      { src: img3.url, alt: "Registro y actualización de datos del contacto en Google Sheets" },
      { src: img4.url, alt: "Reaviso automático a las 72 horas — parte 1" },
      { src: img5.url, alt: "Reaviso automático a las 72 horas — parte 2" },
      { src: img6.url, alt: "Captura de formularios web desde Wix hacia Google Sheets" },
      { src: img7.url, alt: "Subworkflow de derivación a humano" },
    ],
  },
];
