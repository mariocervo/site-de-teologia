import { categories, ebooks, courses, articles, testimonials } from './data.js'


// MENU MOBILE
const menuBtn = document.getElementById("menu-btn")
const mobileMenu = document.getElementById("mobile-menu")

if (menuBtn && mobileMenu) {
menuBtn.addEventListener("click", () => {
mobileMenu.classList.toggle("hidden")
})
}


// RENDER EBOOKS
function renderEbooks() {

const container = document.getElementById("catalogo-grid")
if (!container) return

container.innerHTML = ebooks.map(book => `

<div class="bg-brand-black border border-white/10 rounded-xl p-4 hover:scale-105 transition">

<img src="${book.image}" alt="${book.title}" class="rounded mb-4">

<h3 class="text-brand-white font-bold text-lg mb-2">${book.title}</h3>

<p class="text-brand-gray text-sm mb-4">${book.description}</p>

<p class="text-brand-gold font-bold mb-4">${book.price}</p>

<a href="${book.hotmartLink}" target="_blank"
class="block text-center bg-brand-gold text-black py-2 rounded font-bold">

Comprar

</a>

</div>

`).join("")
}



// RENDER CURSOS
function renderCursos() {

const container = document.getElementById("courses-container")
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

const container = document.getElementById("articles-container")
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

const container = document.getElementById("depoimentos-grid")
if (!container) return

container.innerHTML = testimonials.map(t => `

<div class="bg-brand-black border border-white/10 p-6 rounded-xl">

<h4 class="text-brand-white font-bold">${t.name}</h4>

<p class="text-brand-gray text-sm mb-2">${t.role}</p>

<p class="text-brand-gray">"${t.text}"</p>

</div>

`).join("")
}



// SISTEMA DE AVALIAÇÃO (MODAL + ESTRELAS)

function initAvaliacoes() {

const btnAvaliar = document.getElementById("btnAvaliar")
const modal = document.getElementById("modalAvaliacao")
const fecharModal = document.getElementById("fecharModal")

if (!btnAvaliar || !modal || !fecharModal) return


// abrir modal
btnAvaliar.addEventListener("click", () => {

modal.classList.remove("hidden")
modal.classList.add("flex")

})


// fechar modal
fecharModal.addEventListener("click", () => {

modal.classList.add("hidden")
modal.classList.remove("flex")

})


// estrelas
const estrelas = modal.querySelectorAll('[data-lucide="star"]')

let nota = 0

estrelas.forEach((estrela, index) => {

estrela.style.cursor = "pointer"

estrela.addEventListener("click", () => {

nota = (index + 1) * 2   // 0 a 10

estrelas.forEach((e, i) => {

if (i <= index) {
e.classList.add("text-yellow-400")
} else {
e.classList.remove("text-yellow-400")
}

})

})

})

}



// INICIAR
document.addEventListener("DOMContentLoaded", () => {

renderEbooks()
renderCursos()
renderArtigos()
renderTestimonials()

initAvaliacoes()

if (typeof lucide !== "undefined") {
lucide.createIcons()
}

})
