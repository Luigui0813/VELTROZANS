// ===== NÚMERO DE WHATSAPP =====
const WHATSAPP_NUMBER = '573145932554'; // ← pon aquí el número correcto

// ===== MENÚ HAMBURGUESA =====
const menuBtn = document.getElementById("menu-btn");
const menuNav = document.getElementById("menu-nav");

if (menuBtn && menuNav) {
    menuBtn.addEventListener("click", function(e) {
        e.stopPropagation();
        if (menuNav.style.right === "0px") {
            menuNav.style.right = "-100%";
        } else {
            menuNav.style.right = "0px";
        }
    });

    menuNav.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            menuNav.style.right = "-100%";
        });
    });

    document.addEventListener("click", function(e) {
        if (!menuNav.contains(e.target) && e.target !== menuBtn) {
            menuNav.style.right = "-100%";
        }
    });
}

// ===== SLIDER DE ZAPATOS =====
const slides = document.querySelectorAll('.shoes-slider .shoes-card');
const dots   = document.querySelectorAll('.slider-dot');
let currentSlide = 0;
let sliderInterval;

function goToSlide(index) {
    slides[currentSlide].classList.remove('slide-activa');
    dots[currentSlide].classList.remove('activa');
    currentSlide = index;
    slides[currentSlide].classList.add('slide-activa');
    dots[currentSlide].classList.add('activa');
}

function nextSlide() {
    goToSlide((currentSlide + 1) % slides.length);
}

if (slides.length > 0) {
    sliderInterval = setInterval(nextSlide, 4000);

    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => {
            clearInterval(sliderInterval);
            goToSlide(i);
            sliderInterval = setInterval(nextSlide, 4000);
        });
    });

    const slider = document.getElementById('shoes-slider');
    if (slider) {
        slider.addEventListener('mouseenter', () => clearInterval(sliderInterval));
        slider.addEventListener('mouseleave', () => {
            sliderInterval = setInterval(nextSlide, 4000);
        });
    }
}

// ===== CONTADOR DE VISITAS =====
async function updateVisitCount() {
    const counter = document.getElementById('visit-count');
    if (!counter) return;

    // Ya se contó esta visita en esta sesión del navegador,
    // solo mostramos el número guardado sin volver a incrementar.
    const yaContada = sessionStorage.getItem('veltrozan_visita_contada');

    try {
        const endpoint = yaContada
            ? 'https://api.counterapi.dev/v1/veltrozanstore/visits/'      // solo consulta
            : 'https://api.counterapi.dev/v1/veltrozanstore/visits/up';   // consulta + incrementa

        const response = await fetch(endpoint);
        const data = await response.json();

        if (!yaContada) {
            sessionStorage.setItem('veltrozan_visita_contada', '1');
        }

        const total = data.count + 1240;
        let current = 0;
        const increment = Math.ceil(total / 60);
        const timer = setInterval(() => {
            current += increment;
            if (current >= total) {
                current = total;
                clearInterval(timer);
            }
            counter.textContent = current.toLocaleString();
        }, 20);
    } catch (error) {
        counter.textContent = '1,240';
    }
}

updateVisitCount();

// ===== BOTÓN VOLVER ARRIBA =====
const backToTopBtn = document.getElementById('back-to-top');

if (backToTopBtn) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}
const tallasDetalle = document.querySelectorAll('.producto-detalle .talla-btn');
if (tallasDetalle.length > 0) {
    tallasDetalle.forEach(btn => {
        btn.addEventListener('click', function() {
            tallasDetalle.forEach(b => b.classList.remove('activa'));
            this.classList.add('activa');
        });
    });
}

// ===== FILTROS Y BÚSQUEDA DE CATÁLOGO =====
function filtrar(btn, categoria) {
    document.querySelectorAll('.filtro-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const busqueda = document.getElementById('buscador')?.value.toLowerCase() || '';

    document.querySelectorAll('.producto-card').forEach(card => {
        const coincideCategoria = categoria === 'todos' || card.dataset.categoria === categoria;
        const coincideBusqueda  = card.dataset.nombre?.toLowerCase().includes(busqueda);
        card.style.display = (coincideCategoria && coincideBusqueda) ? 'block' : 'none';
    });
}

function filtrarPorBusqueda() {
    const busqueda = document.getElementById('buscador')?.value.toLowerCase() || '';
    const categoriaActiva = document.querySelector('.filtro-btn.active')?.dataset?.categoria || 'todos';

    document.querySelectorAll('.producto-card').forEach(card => {
        const coincideCategoria = categoriaActiva === 'todos' || card.dataset.categoria === categoriaActiva;
        const coincideBusqueda  = card.dataset.nombre?.toLowerCase().includes(busqueda);
        card.style.display = (coincideCategoria && coincideBusqueda) ? 'block' : 'none';
    });
}