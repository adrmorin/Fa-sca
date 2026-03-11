const projectsData = [
    {
        name: "Velora Studio",
        sector: "Ecommerce de moda premium",
        type: "Web Ecommerce",
        challenge: "Mejorar la experiencia de compra y las tasas de conversión.",
        solution: "Desarrollo headless con Next.js y Shopify para conseguir una carga instantánea y una UI inmersiva.",
        result: "+42% en conversión en el primer trimestre.",
        tech: ["Next.js", "React", "Shopify API", "CSS Grid"],
        icon: "V",
        badge: "ROI +42%"
    },
    {
        name: "Nova Dental",
        sector: "Clínica dental",
        type: "Web Corporativa",
        challenge: "Transmitir exclusividad y captar nuevos pacientes.",
        solution: "Diseño minimalista, integrando un sistema de reservas en tiempo real y tipografía elegante.",
        result: "Incremento del 60% en reservas online.",
        tech: ["HTML5", "CSS3", "JavaScript", "API Calendario"],
        icon: "N",
        badge: "+60% Reservas"
    },
    {
        name: "Umami 72",
        sector: "Restaurante gastronómico",
        type: "Web Experiencial",
        challenge: "Crear una experiencia visual que refleje la calidad de los platos.",
        solution: "Uso de fotografía de gran tamaño, scroll parallax y carga rápida para móvil.",
        result: "Posicionamiento experto y reservas aumentadas.",
        tech: ["Vite", "React", "GSAP"],
        icon: "U",
        badge: "Awwwards Nominee"
    },
    {
        name: "TaskPilot",
        sector: "SaaS",
        type: "Landing de Conversión",
        challenge: "Explicar producto complejo y optimizar demos.",
        solution: "Estructura narrativa clara con micro-animaciones en las funcionalidades clave.",
        result: "Reducción del Coste por Adquisición un 25%.",
        tech: ["Next.js", "TailwindCSS", "Framer Motion"],
        icon: "T",
        badge: "CPA -25%"
    },
    {
        name: "Aurea Living",
        sector: "Inmobiliaria de lujo",
        type: "Web Corporativa",
        challenge: "Mostrar propiedades con alta resolución sin afectar rendimiento.",
        solution: "Generación estática y optimización de imágenes dinámica.",
        result: "Tiempos de carga reducidos en 3 segundos.",
        tech: ["Astro", "Vanilla CSS", "Cloudinary"],
        icon: "A",
        badge: "Lighthouse 100"
    },
    {
        name: "Lexforma Abogados",
        sector: "Despacho legal",
        type: "Web Corporativa",
        challenge: "Transmitir credibilidad a un público corporativo.",
        solution: "Diseño sobrio, alto contraste y estructura orientada a generación de leads.",
        result: "100+ leads cualificados mensuales.",
        tech: ["WordPress Headless", "React"],
        icon: "L",
        badge: "Leads x3"
    },
    {
        name: "Nexo Academy",
        sector: "Educación online",
        type: "Plataforma EdTech",
        challenge: "Presentar el catálogo de 50+ cursos de forma clara.",
        solution: "Buscador instantáneo optimizado con IA y filtros dinámicos.",
        result: "Aumento del 200% en páginas vistas por sesión.",
        tech: ["TypeScript", "React", "Supabase"],
        icon: "E",
        badge: "IA Search"
    },
    {
        name: "Hotel Lumen",
        sector: "Hotel boutique",
        type: "Web Experiencial",
        challenge: "Experiencia visual tan inmersiva como las habitaciones.",
        solution: "Transiciones fluidas entre páginas y motor de reservas personalizado.",
        result: "Mayor ratio de reserva directa vs OTAs.",
        tech: ["Nuxt", "Vue", "CSS Animations"],
        icon: "H",
        badge: "Alta Conversión"
    },
    {
        name: "Elena Roig Consulting",
        sector: "Consultoría",
        type: "Marca Personal",
        challenge: "Posicionamiento experto y captación B2B.",
        solution: "Sección de blog SEO optimizada junto a un funnel de captación.",
        result: "Autoridad de marca reflejada y agendas llenas.",
        tech: ["Next.js", "Markdown", "Vercel"],
        icon: "E",
        badge: "SEO #1"
    },
    {
        name: "Orbit Frame",
        sector: "Estudio creativo",
        type: "Portfolio",
        challenge: "Portfolio visual dinámico e impactante.",
        solution: "WebGL para interacciones de alto nivel sin saturar el DOM.",
        result: "Premios Awwwards y CSS Design Awards.",
        tech: ["Three.js", "Vanilla JS", "GLSL"],
        icon: "O",
        badge: "Site of the Day"
    }
];

const testimonialsData = [
    {
        text: "Adrián no solo entendió nuestra visión, sino que la elevó a un nivel que no creíamos posible. Nuestra tasa de conversión se ha disparado desde el nuevo diseño.",
        author: "Carlos Méndez",
        role: "CEO de Velora Studio"
    },
    {
        text: "La atención al detalle es brutal. Cada transición, cada botón está pensado para funcionar perfectamente y ser estéticamente imbatible.",
        author: "Laura Gómez",
        role: "Directora en Orbit Frame"
    },
    {
        text: "Necesitábamos modernizar la imagen de la clínica sin perder seriedad. Adrián consiguió ese equilibrio y la captación de clientes ha crecido drásticamente.",
        author: "Dra. Elena Ruiz",
        role: "Fundadora de Nova Dental"
    },
    {
        text: "Trabajar con él ha sido mi mejor decisión tecnológica del año. Su código es limpio, entrega a tiempo y el diseño es absolutamente premium.",
        author: "Mario Vargas",
        role: "CTO en TaskPilot"
    },
    {
        text: "La web del hotel por fin refleja la calidad de nuestras suites. Hemos notado un incremento enorme en las reservas directas. Un profesional 10/10.",
        author: "Marta Vidal",
        role: "Directora Hotel Lumen"
    }
];

// Initialize DOM
document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
    renderTestimonials();
    setupScrollReveal();
    setupMagneticElements();
    setupGlowEffect();

    // Duplicate tech marquee for smooth infinite scroll
    const marqueeGroup = document.querySelector('.tech__group');
    if (marqueeGroup) {
        const clone = marqueeGroup.cloneNode(true);
        document.querySelector('.tech__marquee').appendChild(clone);
    }
});

function renderProjects() {
    const container = document.getElementById('projects-container');
    if (!container) return;

    projectsData.forEach((project, index) => {
        const delays = [0, 100, 200];
        const delay = delays[index % 3];

        const imgSrc = `/img${(index % 3) + 1}.png`;

        const techTags = project.tech.map(t => `<span class="tech-tag">${t}</span>`).join('');

        const card = `
            <article class="project-card reveal" style="transition-delay: ${delay}ms;">
                <div class="project-card__badge">${project.badge}</div>
                <div class="project-card__visual">
                    <img src="${imgSrc}" class="project-image" />
                </div>
                <div class="project-card__content">
                    <div class="project-card__sector">${project.sector}</div>
                    <h3 class="project-card__title">${project.name}</h3>
                    <p class="project-card__desc"><strong>Reto:</strong> ${project.challenge}</p>
                    <p class="project-card__desc"><strong>Solución:</strong> ${project.solution}</p>
                    <div class="project-card__tech">
                        ${techTags}
                    </div>
                </div>
            </article>
        `;
        container.innerHTML += card;
    });
}

function renderTestimonials() {
    const container = document.getElementById('testimonials-container');
    if (!container) return;

    testimonialsData.forEach((test, index) => {
        const card = `
            <div class="testimonial-card reveal" style="transition-delay: ${index * 100}ms;">
                <p class="testimonial-card__text">${test.text}</p>
                <div class="testimonial-card__author">
                    <span class="testimonial-card__name">${test.author}</span>
                    <span class="testimonial-card__role">${test.role}</span>
                </div>
            </div>
        `;
        container.innerHTML += card;
    });
}

// Scroll Reveal Intersection Observer
function setupScrollReveal() {
    // Add reveal class to sections
    const blocksToReveal = document.querySelectorAll('.section-title, .about__text p, .stat-card, .step-card, .adv-item, .service-tag');
    blocksToReveal.forEach(el => el.classList.add('reveal'));

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    });

    document.querySelectorAll('.reveal').forEach(el => {
        observer.observe(el);
    });
}

// Interacciones dinámicas y de alto impacto (Magnetic & Glow Elements)
function setupMagneticElements() {
    const magneticElements = document.querySelectorAll('.btn, .service-tag, .tech-badge, .stat-card');

    magneticElements.forEach(elem => {
        elem.addEventListener('mousemove', (e) => {
            const { left, top, width, height } = elem.getBoundingClientRect();
            const centerX = left + width / 2;
            const centerY = top + height / 2;
            const dx = e.clientX - centerX;
            const dy = e.clientY - centerY;

            // Intensidad del imán
            const strength = 0.2;

            elem.style.transform = `translate(${dx * strength}px, ${dy * strength}px) scale(1.05)`;
            elem.style.transition = 'transform 0.1s ease-out';
            elem.style.zIndex = '10';
        });

        elem.addEventListener('mouseleave', () => {
            elem.style.transform = 'translate(0, 0) scale(1)';
            elem.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
            elem.style.zIndex = '1';
        });
    });
}

function setupGlowEffect() {
    const glowingElements = document.querySelectorAll('.btn--primary, .service-tag, .adv-item, .project-card');

    glowingElements.forEach(elem => {
        elem.addEventListener('mousemove', (e) => {
            const rect = elem.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            // Aplicamos variables CSS personalizadas con la posición del ratón dentro del botón/tarjeta
            elem.style.setProperty('--mouse-x', `${x}px`);
            elem.style.setProperty('--mouse-y', `${y}px`);
        });
    });
}
