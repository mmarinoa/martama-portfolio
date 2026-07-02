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

const wa = (n: number) => `/workflows/whatsapp/0${n}-bot-wa.png`;
const seo = (n: number) => `/workflows/seo/0${n}-seo-wp.png`;
const leads = (n: number) => `/workflows/leads/0${n}-leads-b2b.png`;

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
      { src: wa(1), alt: "Entrada del bot: webhook, tipo de evento, control ON/OFF y detección del país" },
      { src: wa(2), alt: "Agente IA con transcripción de audios, memoria, documentos y derivación a humano" },
      { src: wa(3), alt: "Registro y actualización de datos del contacto en Google Sheets" },
      { src: wa(4), alt: "Reaviso automático a las 72 horas — parte 1" },
      { src: wa(5), alt: "Reaviso automático a las 72 horas — parte 2" },
      { src: wa(6), alt: "Captura de formularios web desde Wix hacia Google Sheets" },
      { src: wa(7), alt: "Subworkflow de derivación a humano" },
    ],
  },
  {
    slug: "seo-articulos-wordpress-ia",
    title: "Sistema automático de creación y publicación de artículos SEO con IA",
    shortDescription:
      "Workflow de generación de artículos SEO con IA que recopila información desde Google, redacta el contenido con varios agentes, genera una imagen destacada y publica automáticamente el resultado en WordPress.",
    description:
      "Este proyecto automatiza la creación y publicación de contenido SEO a partir de una petición o tema definido por el usuario. El sistema busca información relevante en Google mediante SerpAPI, selecciona varias fuentes, extrae y limpia el contenido de diferentes URLs, concatena la información útil y la procesa con varios agentes de IA encargados de resumir, redactar y humanizar el artículo para optimizarlo de cara a su publicación. Además, el flujo genera automáticamente una imagen destacada mediante una API de generación de imágenes y, si la web destino está hecha en WordPress, publica el artículo directamente y asocia la imagen al post.",
    useCase: "Generación y publicación automatizada de contenido SEO en webs WordPress.",
    bullets: [
      "Busca fuentes relevantes en Google",
      "Extrae y limpia contenido desde varias URLs",
      "Resume y estructura la información",
      "Redacta y humaniza artículos con IA",
      "Genera una imagen destacada",
      "Publica automáticamente en WordPress",
    ],
    tags: [
      "n8n",
      "OpenAI",
      "SEO",
      "WordPress",
      "SerpAPI",
      "Google Sheets",
      "Replicate",
      "Web scraping",
      "IA generativa",
      "Automatización de contenido",
    ],
    images: [
      { src: seo(1), alt: "Fuente de información: SerpAPI, selección de resultados y extracción de contenido desde URLs" },
      { src: seo(2), alt: "Agentes de IA encargados de sintetizar, redactar y humanizar el contenido" },
      { src: seo(3), alt: "Generación de imagen destacada mediante la API de Replicate" },
      { src: seo(4), alt: "Publicación automática en WordPress y asociación de la imagen al post" },
    ],
  },
  {
    slug: "prospeccion-leads-b2b",
    title: "Sistema automatizado de prospección y enriquecimiento de leads B2B",
    shortDescription:
      "Pipeline de prospección B2B que localiza empresas por zona usando Google Maps, enriquece sus datos desde la web, identifica contactos relevantes y redacta correos personalizados con IA antes de enviarlos automáticamente.",
    description:
      "Workflow completo de prospección comercial que parte de una hoja de Google Sheets con localidades objetivo. El sistema consulta la API de Google Maps para encontrar empresas relacionadas con un sector concreto y extrae datos clave (nombre, dirección, teléfono, web, ubicación, valoraciones, horarios, tipo de negocio y enlace de Maps), guardándolos en MySQL sin duplicados. Después valida las webs encontradas, obtiene un resumen de la actividad de cada empresa con IA, detecta URLs relevantes (contacto, aviso legal, política de privacidad) y extrae emails, NIF y posibles personas responsables. Cuando los datos automáticos no son suficientes, recurre a fuentes externas y a agentes de IA con búsqueda web para identificar al contacto de interés. Finalmente selecciona empresas pendientes, redacta correos personalizados con un agente de IA especializado, los envía y actualiza la base de datos para evitar reenvíos duplicados.",
    useCase: "Prospección y enriquecimiento de leads B2B con comunicación personalizada automatizada.",
    bullets: [
      "Busca empresas por localidad y sector con Google Maps API",
      "Extrae datos comerciales relevantes de cada empresa",
      "Valida webs y resume su actividad con IA",
      "Detecta emails, teléfonos, NIF y páginas legales",
      "Identifica personas de interés o responsables",
      "Completa datos con IA cuando no se encuentran",
      "Redacta correos personalizados por lead",
      "Envía emails y evita duplicados en la base de datos",
    ],
    tags: [
      "n8n",
      "Google Maps API",
      "Google Sheets",
      "MySQL",
      "OpenAI",
      "Web scraping",
      "Lead generation",
      "B2B prospecting",
      "Email automation",
      "Data enrichment",
      "IA generativa",
      "Automatización comercial",
    ],
    images: [
      { src: leads(1), alt: "Descubrir, mapear y guardar empresas: lectura de localidades, consulta a Google Maps y almacenamiento en MySQL con estado NEW o NO_WEB" },
      { src: leads(2), alt: "Validación de webs y resumen de actividad de cada empresa mediante IA" },
      { src: leads(3), alt: "Búsqueda de emails en home y contacto y extracción de URLs relevantes (aviso legal, política de privacidad)" },
      { src: leads(4), alt: "Extracción de NIF desde aviso legal y política de privacidad" },
      { src: leads(5), alt: "Búsqueda de persona de interés / CEO mediante fuentes externas y agente IA con búsqueda web" },
      { src: leads(6), alt: "Redacción y envío de correos personalizados con IA y actualización del estado de mailing en MySQL" },
    ],
  },
];
