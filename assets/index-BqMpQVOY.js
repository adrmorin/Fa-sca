(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function o(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(a){if(a.ep)return;a.ep=!0;const r=o(a);fetch(a.href,r)}})();const n=[{title:"Branding y estrategia de marca",body:"Naming, identidad visual, arquitectura de marca y definición del lenguaje visual antes de pasar a producción."},{title:"Diseño digital y activación online",body:"Web, e-commerce, SEO, campañas y contenidos para que la marca tenga consistencia también en el entorno digital."},{title:"Serigrafía y producción gráfica",body:"Gestión de impresión textil, marcaje, acabados premium y asesoría técnica en soportes, tintas y materiales."},{title:"Merchandising y colecciones",body:"Prendas, tote bags, packaging y piezas de marca pensadas como producto, no solo como reclamo promocional."},{title:"Preimpresión y arte final",body:"Separación de colores, fuentes trazadas, fotolitos, mockups aprobados y fichas de medidas antes de imprimir."},{title:"Formación y workshops",body:"Talleres y experiencias divulgativas para monetizar conocimiento y posicionar a FAÍSCA como referente local."}],d=[{name:"Hostelería y turismo",image:"/sector-hosteleria.jfif",detail:"Bodegas, hoteles boutique, cafeterías y balnearios que necesitan branding táctil y merchandising con criterio."},{name:"Eventos y fiestas",image:"/sector-eventos.jfif",detail:"Entroido, festivales, bodas y activaciones que requieren prendas resistentes y diseño reconocible."},{name:"Instituciones y educación",image:"/sector-educacion.jfif",detail:"Campus, colegios, clubes y administraciones con campañas, uniformes y soportes promocionales de uso real."},{name:"Streetwear y marcas de autor",image:"/sector-streetwear.jfif",detail:"Drops, ediciones limitadas y colecciones para creadores que quieren fidelidad visual y tiradas cuidadas."},{name:"Industria y logística",image:"/sector-industria.jfif",detail:"Marcaje textil y ropa laboral durable para empresas del polígono y entornos de uso intensivo."},{name:"Comercio local con identidad",image:"/sector-comercio.jfif",detail:"Librerías, concept stores y negocios con lenguaje propio que quieren vender objetos con alma de marca."}],l=[{title:"Modelo híbrido cerebro + taller",copy:"La estrategia creativa y la ejecución técnica conviven en el mismo proceso, sin perder intención entre briefing y producción."},{title:"Proceso PPP",copy:"Todo trabajo pasa por vectorización, separación por tintas, mockup aprobado y validación de primera prenda."},{title:"Posicionamiento premium y local",copy:"FAÍSCA compite por valor: diseño, sostenibilidad, materiales y cercanía con el tejido empresarial de Ourense."}],p=[{step:"01",title:"Paquete digital preparado",text:"El diseño llega vectorizado, con fuentes trazadas, capas por color, marcas de registro y ficha de medidas."},{step:"02",title:"Orden de trabajo validada",text:"Administración y ventas consolidan referencia textil, tallas, mockup firmado y fecha de entrega antes de entrar en taller."},{step:"03",title:"Check-in de producción",text:"Diseño y taller revisan malla, color y nivel de detalle para evitar errores antes del insolado y la tirada."},{step:"04",title:"Primera prenda y control",text:"Se imprime una primera muestra, se compara con el mockup y se documenta en la carpeta de producción."}],u=[{name:"Identidade Galega",image:"/pack-identidade-galega.jfif",price:"395€ + IVA",audience:"Bodegas, hoteles boutique y cafeterías de especialidad",summary:"Pack premium para marcas que necesitan una presencia cuidada y piezas que funcionen como experiencia de marca.",items:["25 camisetas orgánicas con impresión a 1 color","25 tote bags coordinadas con el mismo diseño","Ajuste creativo para optimizar el logotipo sobre tela","Entrega en packaging craft con sello de estudio"]},{name:"Ourense Emprende",image:"/pack-ourense-emprende.jfif",price:"249€ + IVA",audience:"Pequeño comercio, asociaciones y eventos",summary:"Entrada accesible para negocios que buscan algo mejor que la solución de copistería sin disparar presupuesto.",items:["50 camisetas básicas de calidad con impresión a 1 color","Adaptación tipográfica y ajuste básico de logo","Pantalla guardada 6 meses para futuras reposiciones","Sin costes ocultos de setup para repetición inmediata"]},{name:"Pack Autor",image:"/pack-autor.jfif",price:"20€ reembolsables",audience:"Agencias, diseñadores y marcas de nicho",summary:"Muestrario de acabados para enseñar lo que FAÍSCA puede hacer cuando el proyecto exige más que tinta plana.",items:["Carpeta de muestras con 5 tejidos y acabados","Tintas especiales, relieve, metálicos y descarga","Descuento íntegro si el pedido final supera 200€","Herramienta comercial para prescriptores y colaboradores"]}];function m(){t("services-grid",n,e=>`
    <article class="info-card reveal">
      <p class="info-card__index">0${n.indexOf(e)+1}</p>
      <h3>${e.title}</h3>
      <p>${e.body}</p>
    </article>
  `),t("sectors-grid",d,e=>`
    <article class="sector-card reveal">
      <img class="card-media" src="${e.image}" alt="${e.name}" loading="lazy" />
      <h3>${e.name}</h3>
      <p>${e.detail}</p>
    </article>
  `),t("differentiators-grid",l,e=>`
    <article class="value-card reveal">
      <h3>${e.title}</h3>
      <p>${e.copy}</p>
    </article>
  `),t("process-grid",p,e=>`
    <article class="timeline-card reveal">
      <span class="timeline-card__step">${e.step}</span>
      <h3>${e.title}</h3>
      <p>${e.text}</p>
    </article>
  `),t("packs-grid",u,e=>`
    <article class="pack-card reveal">
      <img class="card-media" src="${e.image}" alt="${e.name}" loading="lazy" />
      <div class="pack-card__top">
        <p class="pack-card__name">${e.name}</p>
        <p class="pack-card__price">${e.price}</p>
      </div>
      <p class="pack-card__audience">${e.audience}</p>
      <p class="pack-card__summary">${e.summary}</p>
      <ul class="pack-card__list">
        ${e.items.map(i=>`<li>${i}</li>`).join("")}
      </ul>
    </article>
  `)}function t(e,i,o){const s=document.getElementById(e);s&&(s.innerHTML=i.map(o).join(""))}function f(){const e=new IntersectionObserver(i=>{i.forEach(o=>{o.isIntersecting&&(o.target.classList.add("is-visible"),e.unobserve(o.target))})},{threshold:.15,rootMargin:"0px 0px -40px 0px"});document.querySelectorAll(".reveal").forEach(i=>e.observe(i))}function g(){const e=document.querySelector(".site-header");e&&window.addEventListener("scroll",()=>{e.classList.toggle("site-header--scrolled",window.scrollY>24)})}document.addEventListener("DOMContentLoaded",()=>{m(),f(),g()});
