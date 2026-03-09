import { categories, ebooks, courses, articles, testimonials } from './data.js'

// MENU MOBILE
const menuBtn = document.getElementById("menu-btn")
const mobileMenu = document.getElementById("mobile-menu")

if (menuBtn) {
menuBtn.addEventListener("click", () => {
mobileMenu.classList.toggle("hidden")
})
}


// RENDER EBOOKS
function renderEbooks() {
const container = document.getElementById("ebooks-grid")
if (!container) return

container.innerHTML = ebooks.map(book => `
<div class="card">
<img src="${book.cover}" alt="${book.title}">
<h3>${book.title}</h3>
<p>${book.description}</p>
<a href="${book.link}" class="btn">Comprar</a>
</div>
`).join("")
}


// RENDER CURSOS
function renderCursos() {
const container = document.getElementById("courses-grid")
if (!container) return

container.innerHTML = courses.map(course => `
<div class="card">
<img src="${course.image}" alt="${course.title}">
<h3>${course.title}</h3>
<p>${course.description}</p>
<a href="${course.link}" class="btn">Ver Curso</a>
</div>
`).join("")
}


// RENDER ARTIGOS
function renderArtigos() {
const container = document.getElementById("articles-grid")
if (!container) return

container.innerHTML = articles.map(article => `
<div class="card">
<img src="${article.image}" alt="${article.title}">
<h3>${article.title}</h3>
<p>${article.date}</p>
<span>${article.category}</span>
</div>
`).join("")
}


// RENDER TESTEMUNHOS
function renderTestimonials() {
const container = document.getElementById("testimonials-grid")
if (!container) return

container.innerHTML = testimonials.map(t => `
<div class="card">
<h4>${t.name}</h4>
<p>${t.role}</p>
<p>"${t.text}"</p>
</div>
`).join("")
}


// INICIAR
document.addEventListener("DOMContentLoaded", () => {

renderEbooks()
renderCursos()
renderArtigos()
renderTestimonials()

// ICONE LUCIDE
if (typeof lucide !== "undefined") {
lucide.createIcons()
}

})
