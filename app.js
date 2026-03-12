import { ebooks, courses, articles } from './data.js'

// Elementos do DOM
const catalogoGrid = document.getElementById('catalogo-grid')
const destaquesGrid = document.getElementById('destaques-grid')
const cursosSection = document.getElementById('cursos')
const artigosSection = document.getElementById('artigos')

// Modal de detalhes
const modalDetalhes = document.getElementById('modalDetalhesEbook')
const fecharModal = document.getElementById('fecharModalDetalhes')
const detalheTitulo = document.getElementById('detalheTitulo')
const detalheDescricao = document.getElementById('detalheDescricao')

// Função para abrir modal com dados do ebook
function abrirDetalhes(titulo, descricao) {
    if (modalDetalhes) {
        detalheTitulo.textContent = titulo
        detalheDescricao.textContent = descricao || 'Descrição detalhada em breve.'
        modalDetalhes.style.display = 'flex'
    }
}

// Fechar modal
if (fecharModal) {
    fecharModal.addEventListener('click', () => {
        modalDetalhes.style.display = 'none'
    })
}

// Fechar ao clicar fora
if (modalDetalhes) {
    modalDetalhes.addEventListener('click', (e) => {
        if (e.target === modalDetalhes) {
            modalDetalhes.style.display = 'none'
        }
    })
}

// Renderizar ebooks no catálogo e destaques
function renderEbooks() {
    if (catalogoGrid) {
        catalogoGrid.innerHTML = ebooks.map(book => `
            <div class="bg-brand-black border border-white/10 rounded-xl p-4 hover:scale-105 transition">
                <img src="${book.image}" alt="${book.title}" class="rounded mb-4">
                <h3 class="text-brand-white font-bold text-lg mb-2">${book.title}</h3>
                <p class="text-brand-gray text-sm mb-4">${book.description}</p>
                <p class="text-brand-gold font-bold mb-4">${book.price}</p>
                <button class="btn-detalhes-ebook w-full mb-2 flex items-center justify-center gap-2 bg-black text-white py-2 rounded font-semibold hover:bg-gray-800 transition" 
                    data-titulo="${book.title}" data-descricao="${book.description}">
                    <i data-lucide="info"></i> Ver detalhes
                </button>
                <a href="${book.hotmartLink}" target="_blank" class="block text-center bg-brand-gold text-black py-2 rounded font-bold hover:bg-brand-goldlight transition">
                    Comprar
                </a>
            </div>
        `).join('')
    }

    if (destaquesGrid) {
        // Mostrar apenas os primeiros 3 ebooks como destaque
        const destaques = ebooks.slice(0, 3)
        destaquesGrid.innerHTML = destaques.map(book => `
            <div class="bg-brand-black border border-white/10 rounded-xl p-4 hover:scale-105 transition">
                <img src="${book.image}" alt="${book.title}" class="rounded mb-4">
                <h3 class="text-brand-white font-bold text-lg mb-2">${book.title}</h3>
                <p class="text-brand-gray text-sm mb-4">${book.description}</p>
                <p class="text-brand-gold font-bold mb-4">${book.price}</p>
                <button class="btn-detalhes-ebook w-full mb-2 flex items-center justify-center gap-2 bg-black text-white py-2 rounded font-semibold hover:bg-gray-800 transition" 
                    data-titulo="${book.title}" data-descricao="${book.description}">
                    <i data-lucide="info"></i> Ver detalhes
                </button>
                <a href="${book.hotmartLink}" target="_blank" class="block text-center bg-brand-gold text-black py-2 rounded font-bold hover:bg-brand-goldlight transition">
                    Comprar
                </a>
            </div>
        `).join('')
    }

    // Adicionar eventos aos botões de detalhes
    document.querySelectorAll('.btn-detalhes-ebook').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault()
            const titulo = btn.getAttribute('data-titulo')
            const descricao = btn.getAttribute('data-descricao')
            abrirDetalhes(titulo, descricao)
        })
    })
}

// Renderizar cursos (se houver container, senão cria)
function renderCursos() {
    if (courses.length === 0) return

    let container = document.getElementById('courses-container')
    if (!container && cursosSection) {
        container = document.createElement('div')
        container.id = 'courses-container'
        container.className = 'grid grid-cols-1 md:grid-cols-3 gap-8 mt-8'
        // Insere após o título
        const titulo = cursosSection.querySelector('h2')
        if (titulo) {
            titulo.parentNode.insertBefore(container, titulo.nextSibling)
        } else {
            cursosSection.appendChild(container)
        }
    }
    if (container) {
        container.innerHTML = courses.map(course => `
            <div class="bg-brand-black border border-white/10 rounded-xl p-4">
                <img src="${course.image}" alt="${course.title}" class="rounded mb-4">
                <h3 class="text-brand-white font-bold">${course.title}</h3>
                <p class="text-brand-gray text-sm">${course.description}</p>
                <a href="${course.link}" class="block text-center bg-brand-gold text-black py-2 rounded mt-4">Ver Curso</a>
            </div>
        `).join('')
    }
}

// Renderizar artigos (similar)
function renderArtigos() {
    if (articles.length === 0) return

    let container = document.getElementById('articles-container')
    if (!container && artigosSection) {
        container = document.createElement('div')
        container.id = 'articles-container'
        container.className = 'grid grid-cols-1 md:grid-cols-3 gap-8 mt-8'
        const titulo = artigosSection.querySelector('h2')
        if (titulo) {
            titulo.parentNode.insertBefore(container, titulo.nextSibling)
        } else {
            artigosSection.appendChild(container)
        }
    }
    if (container) {
        container.innerHTML = articles.map(article => `
            <div class="bg-brand-black border border-white/10 rounded-xl p-4">
                <img src="${article.image}" alt="${article.title}" class="rounded mb-4">
                <h3 class="text-brand-white font-bold">${article.title}</h3>
                <p class="text-brand-gray text-sm">${article.date} - ${article.category}</p>
            </div>
        `).join('')
    }
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    renderEbooks()
    renderCursos()
    renderArtigos()
    
    // Atualizar ícones Lucide
    if (typeof lucide !== 'undefined') {
        lucide.createIcons()
    }
})
