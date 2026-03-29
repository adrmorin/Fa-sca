const assetBase = import.meta.env.BASE_URL;
const getAssetPath = (asset) => `${assetBase}${asset}`;

const services = [
  {
    title: "Diseño conceptual con IA",
    image: "servicio-ia-concepto.jfif",
    body:
      "Usamos Inteligencia Artificial para explorar propuestas visuales, acelerar iteraciones y desarrollar conceptos con más velocidad y precisión.",
  },
  {
    title: "Interiorismo y restauración",
    image: "servicio-interiorismo-restauracion.jfif",
    body:
      "Diseñamos espacios comerciales y proyectos de restauración con una dirección estética unificada, desde la idea inicial hasta la solución final.",
  },
  {
    title: "Rotulación en plotter",
    image: "servicio-plotter-rotulacion.jfif",
    body:
      "Cortamos y producimos vinilos, señalética, rotulación comercial y elementos gráficos de alta precisión para fachadas, interiores y vehículos.",
  },
  {
    title: "Gigantografías y gran formato",
    image: "servicio-gran-formato.jfif",
    body:
      "Desarrollamos banners, murales, panelería, displays y gigantografías impresas para retail, hostelería, eventos y espacios expositivos.",
  },
  {
    title: "Merchandising de marca",
    image: "merchandising-coleccion-premium.jfif",
    body:
      "Producimos colecciones y piezas de merchandising pensadas como extensión real de la marca: textil, bolsas, kits, regalo corporativo y producto para venta.",
  },
  {
    title: "Producción y arte final",
    image: "servicio-arte-final.jfif",
    body:
      "Preparamos cada archivo, material y solución técnica para que el resultado físico mantenga exactamente la intención del diseño.",
  },
  {
    title: "Gestión llave en mano",
    image: "servicio-llave-en-mano.jfif",
    body:
      "Coordinamos diseño, fabricación, rotulación, instalación y entrega final para que el cliente tenga un único interlocutor durante todo el proyecto.",
  },
];

const sectors = [
  {
    name: "Hostelería y turismo",
    image: "sector-hosteleria.jfif",
    detail:
      "Hoteles, restaurantes, bodegas y espacios hospitality que necesitan diseño ambiental, señalética y acabados con coherencia de marca.",
  },
  {
    name: "Retail y eventos",
    image: "merchandising-retail.jfif",
    detail:
      "Activaciones, promociones, ferias y lanzamientos que requieren montaje visual rápido, gran formato, merchandising y presencia física potente.",
  },
  {
    name: "Instituciones y corporativo",
    image: "sector-educacion.jfif",
    detail:
      "Centros educativos, administraciones y marcas que necesitan proyectos claros, reproducibles, bien documentados y con kits o soportes de marca para difusión.",
  },
  {
    name: "Interiorismo comercial",
    image: "sector-streetwear.jfif",
    detail:
      "Locales, showrooms y marcas que buscan transformar su espacio con una dirección visual contemporánea y ejecutable.",
  },
  {
    name: "Industria y señalización",
    image: "sector-industria.jfif",
    detail:
      "Entornos industriales, logísticos y técnicos que necesitan rotulación durable, señalética y piezas funcionales de gran visibilidad.",
  },
  {
    name: "Restauración y rehabilitación",
    image: "sector-comercio.jfif",
    detail:
      "Proyectos que combinan recuperación, actualización estética y producción material con un control integral de la ejecución.",
  },
];

const differentiators = [
  {
    title: "IA aplicada al diseño real",
    image: "merchandising-ia-concepto.jfif",
    copy:
      "La IA nos permite iterar antes, visualizar mejor y tomar decisiones de diseño con más rapidez sin perder criterio creativo ni técnico.",
  },
  {
    title: "Control integral del proceso",
    image: "diferencial-control-proceso.jfif",
    copy:
      "Centralizamos diseño, documentación, producción y montaje para reducir errores, ganar coherencia y llegar mejor a la entrega final.",
  },
  {
    title: "Llave en mano y gran formato",
    image: "diferencial-gran-formato.jfif",
    copy:
      "Unimos plotter, rotulación, gigantografías, interiorismo y ejecución final para resolver proyectos completos con un solo equipo.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Concepto visual con IA",
    text:
      "Empezamos explorando propuestas, atmósferas, composición y lenguaje visual con IA para acelerar la fase conceptual.",
  },
  {
    step: "02",
    title: "Definición técnica del proyecto",
    text:
      "Convertimos la idea en planos, materiales, medidas, artes finales y decisiones de producción listas para ejecutar.",
  },
  {
    step: "03",
    title: "Producción y fabricación",
    text:
      "Producimos gráfica, rotulación, vinilos, gran formato y elementos necesarios para interiorismo, retail o restauración.",
  },
  {
    step: "04",
    title: "Montaje y entrega llave en mano",
    text:
      "Coordinamos instalación, ajustes finales y entrega del proyecto terminado, listo para abrir, activar o presentar.",
  },
];

const packs = [
  {
    name: "Pack IA + Concepto",
    image: "pack-identidade-galega.jfif",
    price: "Desde 395€",
    audience: "Marcas, comercios y espacios que necesitan una dirección visual clara",
    summary:
      "Propuesta inicial para desarrollar la idea del proyecto con lenguaje visual, simulaciones y una ruta clara de ejecución.",
    items: [
      "Exploración de conceptos asistida por IA",
      "Moodboards, propuestas y dirección estética",
      "Aplicación inicial a espacio, soporte o marca",
      "Base lista para presupuesto y producción",
    ],
  },
  {
    name: "Pack Merchandising de Marca",
    image: "merchandising-kit-corporativo.jfif",
    price: "Desde 290€",
    audience: "Retail, hostelería, eventos y marcas que quieren activar o vender producto propio",
    summary:
      "Desarrollamos merchandising con criterio de marca para que funcione como regalo, soporte promocional o línea de producto vendible.",
    items: [
      "Selección de soportes y producto según objetivo",
      "Aplicación visual coherente con la identidad",
      "Mockups y validación antes de producir",
      "Producción lista para campaña, evento o venta directa",
    ],
  },
  {
    name: "Pack Rotulación + Gran Formato",
    image: "pack-ourense-emprende.jfif",
    price: "Desde 249€",
    audience: "Retail, eventos, hostelería y espacios comerciales",
    summary:
      "Solución para proyectos que necesitan presencia física rápida mediante plotter, vinilo, panelería y gigantografía.",
    items: [
      "Rotulación en plotter y corte de vinilo",
      "Banners, paneles y gigantografías impresas",
      "Ajuste técnico de piezas para producción",
      "Entrega lista para montaje o instalación",
    ],
  },
  {
    name: "Pack Llave en Mano",
    image: "pack-autor.jfif",
    price: "A medida",
    audience: "Locales, restauración, rehabilitación y proyectos integrales",
    summary:
      "Servicio integral para clientes que quieren un único equipo responsable del diseño, la producción y la entrega final.",
    items: [
      "Conceptualización, planificación y producción",
      "Interiorismo, restauración y acabados gráficos",
      "Coordinación de montaje e instalación final",
      "Proyecto entregado completamente resuelto",
    ],
  },
];

function renderCards() {
  renderCollection("services-grid", services, (item) => `
    <article class="info-card reveal">
      <img class="card-media" src="${getAssetPath(item.image)}" alt="${item.title}" loading="lazy" />
      <p class="info-card__index">0${services.indexOf(item) + 1}</p>
      <h3>${item.title}</h3>
      <p>${item.body}</p>
    </article>
  `);

  renderCollection("sectors-grid", sectors, (item) => `
    <article class="sector-card reveal">
      <img class="card-media" src="${getAssetPath(item.image)}" alt="${item.name}" loading="lazy" />
      <h3>${item.name}</h3>
      <p>${item.detail}</p>
    </article>
  `);

  renderCollection("differentiators-grid", differentiators, (item) => `
    <article class="value-card reveal">
      <img class="card-media" src="${getAssetPath(item.image)}" alt="${item.title}" loading="lazy" />
      <h3>${item.title}</h3>
      <p>${item.copy}</p>
    </article>
  `);

  renderCollection("process-grid", processSteps, (item) => `
    <article class="timeline-card reveal">
      <span class="timeline-card__step">${item.step}</span>
      <h3>${item.title}</h3>
      <p>${item.text}</p>
    </article>
  `);

  renderCollection("packs-grid", packs, (item) => `
    <article class="pack-card reveal">
      <img class="card-media" src="${getAssetPath(item.image)}" alt="${item.name}" loading="lazy" />
      <div class="pack-card__top">
        <p class="pack-card__name">${item.name}</p>
        <p class="pack-card__price">${item.price}</p>
      </div>
      <p class="pack-card__audience">${item.audience}</p>
      <p class="pack-card__summary">${item.summary}</p>
      <ul class="pack-card__list">
        ${item.items.map((feature) => `<li>${feature}</li>`).join("")}
      </ul>
    </article>
  `);
}

function renderCollection(id, collection, template) {
  const root = document.getElementById(id);
  if (!root) return;
  root.innerHTML = collection.map(template).join("");
}

function setupReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: "0px 0px -40px 0px",
    }
  );

  document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
}

function setupHeader() {
  const header = document.querySelector(".site-header");
  if (!header) return;

  window.addEventListener("scroll", () => {
    header.classList.toggle("site-header--scrolled", window.scrollY > 24);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderCards();
  setupReveal();
  setupHeader();
});
