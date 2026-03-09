import { categories, ebooks, courses, articles, testimonials } from './data.js';

/* ========================= */
/* INICIALIZAÇÃO */
/* ========================= */

document.addEventListener("DOMContentLoaded", () => {
    criarNavbarScroll();
    renderDestaques();
    renderCatalogo();
    renderCursos();
    renderArtigos();
    renderDepoimentos();
    iniciarSistemaAvaliacoes();   // igual ao primeiro site
    iniciarComentarios();          // igual ao primeiro site
    initScrollReveal();            // para animações ao rolar
    lucide.createIcons();          // atualiza ícones após inserções dinâmicas
});

/* ========================= */
/* NAVBAR SCROLL */
/* ========================= */
function criarNavbarScroll() {
    const navbar = document.getElementById("navbar");
    if (!navbar) return;

    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.add("py-2");
            navbar.classList.remove("py-4");
        } else {
            navbar.classList.add("py-4");
            navbar.classList.remove("py-2");
        }
    });
}

/* ========================= */
/* CARD DE EBOOK (igual ao primeiro) */
/* ========================= */
function criarCardEbook(ebook) {
    return `
        <div class="ebook-card">
            <img loading="lazy" src="${ebook.image}" alt="${ebook.title}">
            <h3>${ebook.title}</h3>
            <p>${ebook.description}</p>
            <span>${ebook.price}</span>
            <a href="${ebook.hotmartLink}" target="_blank">Comprar</a>
        </div>
    `;
}

/* ========================= */
/* DESTAQUES (bestsellers) */
/* ========================= */
function renderDestaques() {
    const grid = document.getElementById("destaques-grid");
    if (!grid) return;

    const bestsellers = ebooks.filter(e => e.bestseller);
    grid.innerHTML = bestsellers.map(criarCardEbook).join("");
}

/* ========================= */
/* CATÁLOGO COM FILTROS */
/* ========================= */
function renderCatalogo(categoria = "todos") {
    const grid = document.getElementById("catalogo-grid");
    const filtrosDiv = document.getElementById("category-filters");
    if (!grid) return;

    // Cria os botões de filtro (igual ao primeiro site, mas adaptado)
    if (filtrosDiv) {
        filtrosDiv.innerHTML = categories.map(cat => 
            `<button class="category-filter px-4 py-2 rounded-full text-sm font-medium transition-all
                ${cat.id === categoria ? 'bg-brand-gold text-brand-black' : 'bg-brand-dark text-brand-gray border border-white/10 hover:border-brand-gold/50'}"
                data-category="${cat.id}">
                ${cat.name}
            </button>`
        ).join('');

        // Adiciona eventos
        document.querySelectorAll('.category-filter').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const cat = e.target.dataset.category;
                renderCatalogo(cat);
                // Atualiza classe ativa
                document.querySelectorAll('.category-filter').forEach(b => {
                    b.classList.remove('bg-brand-gold', 'text-brand-black');
                    b.classList.add('bg-brand-dark', 'text-brand-gray', 'border', 'border-white/10');
                });
                e.target.classList.add('bg-brand-gold', 'text-brand-black');
                e.target.classList.remove('bg-brand-dark', 'text-brand-gray', 'border', 'border-white/10');
            });
        });
    }

    let lista = ebooks;
    if (categoria !== "todos") {
        lista = ebooks.filter(e => e.category === categoria);
    }

    grid.innerHTML = lista.map(criarCardEbook).join("");
}

/* ========================= */
/* CURSOS */
/* ========================= */
function renderCursos() {
    const container = document.getElementById("courses-container");
    if (!container) return;

    container.innerHTML = courses.map(curso => `
        <div class="flex flex-col md:flex-row bg-brand-dark/60 border border-white/5 rounded-2xl overflow-hidden hover:border-brand-gold/30 transition-all">
            <div class="md:w-2/5 h-48 md:h-auto overflow-hidden">
                <img src="${curso.image}" alt="${curso.title}" class="w-full h-full object-cover">
            </div>
            <div class="p-6 md:w-3/5 flex flex-col">
                <div class="flex flex-wrap gap-2 mb-3">
                    ${curso.tags.map(tag => `<span class="text-xs bg-brand-gold/10 text-brand-gold px-2 py-1 rounded-full">${tag}</span>`).join('')}
                </div>
                <h3 class="text-xl font-bold text-brand-white mb-2">${curso.title}</h3>
                <p class="text-brand-gray text-sm mb-4 flex-1">${curso.description}</p>
                <a href="${curso.link}" target="_blank" class="inline-flex items-center gap-2 text-brand-gold hover:text-brand-goldlight font-medium mt-auto">
                    Matricular agora <i data-lucide="arrow-right" class="w-4 h-4"></i>
                </a>
            </div>
        </div>
    `).join('');

    lucide.createIcons(); // recria ícones dentro dos novos elementos
}

/* ========================= */
/* ARTIGOS */
/* ========================= */
function renderArtigos() {
    const container = document.getElementById("articles-container");
    if (!container) return;

    container.innerHTML = articles.map(art => `
        <a href="#" class="group block">
            <div class="rounded-xl overflow-hidden aspect-video mb-4 relative">
                <img src="${art.image}" alt="${art.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700">
                <span class="absolute top-3 left-3 bg-brand-black/70 backdrop-blur-sm text-brand-gold text-xs font-medium px-3 py-1 rounded-full border border-white/10">
                    ${art.category}
                </span>
            </div>
            <div class="flex items-center gap-2 text-xs text-brand-gray mb-2">
                <i data-lucide="calendar" class="w-3 h-3"></i>
                ${art.date}
            </div>
            <h4 class="text-lg font-bold text-brand-white group-hover:text-brand-gold transition-colors line-clamp-2">${art.title}</h4>
        </a>
    `).join('');

    lucide.createIcons();
}

/* ========================= */
/* DEPOIMENTOS (fixos + localStorage) */
/* ========================= */
function renderDepoimentos() {
    const grid = document.getElementById("depoimentos-grid");
    if (!grid) return;

    // Depoimentos fixos
    let html = testimonials.map(t => `
        <div class="depoimento">
            <h4>${t.name}</h4>
            <p>${t.text}</p>
            ⭐ ${t.rating}
        </div>
    `).join('');

    // Adiciona depoimentos do localStorage (aprovados)
    const comentarios = JSON.parse(localStorage.getItem("comentarios")) || [];
    comentarios.forEach(c => {
        if (c.aprovado) {
            html += `
                <div class="depoimento">
                    <h4>${c.nome}</h4>
                    <p>${c.texto}</p>
                    ⭐ ${c.nota}
                </div>
            `;
        }
    });

    grid.innerHTML = html;
}

/* ========================= */
/* SISTEMA DE AVALIAÇÕES (igual ao primeiro site) */
/* ========================= */
function iniciarSistemaAvaliacoes() {
    // Código idêntico ao do primeiro app.js (função iniciarSistemaAvaliacoes)
    // (omitido aqui para brevidade, mas deve ser mantido)
    // Inclui abertura do modal, seleção de estrelas e envio.
    // ...
}

function iniciarComentarios() {
    // Código idêntico ao do primeiro app.js (função iniciarComentarios)
    // ...
}

/* ========================= */
/* SCROLL REVEAL (animação) */
/* ========================= */
function initScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}