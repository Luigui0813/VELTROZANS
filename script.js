// ===== NÚMERO DE WHATSAPP =====
const WHATSAPP_NUMBER = '573118378752'; // ← pon aquí el número correcto

// ===== IMÁGENES DE RESPALDO (mientras subes las fotos reales) =====
const IMAGEN_RESPALDO = {
    calzado: 'images/imagenes/zapatilla7.png',
    relojes: 'images/imagenes relojes/reloj1.svg.jpg',
    lociones: 'images/imagenes lociones/loción1.svg.jpg'
};

// ===== DATOS DE PRODUCTOS =====
// Formato: [nombre, precio, categoria, disponible, numeroDeImagen]
// La imagen busca en images/catalogo/<tipo>/<tipo>-XX.jpg — si no existe,
// cae automáticamente en la imagen de respaldo de arriba.

const productosCalzado = [
    ['Nike Air Max', 250000, 'tenis', true, 1],
    ['Adidas Runner', 230000, 'tenis', true, 2],
    ['New Balance 574', 280000, 'tenis', true, 3],
    ['Puma RS-X', 260000, 'tenis', true, 4],
    ['Reebok Classic', 210000, 'tenis', true, 5],
    ['Nike Revolution', 190000, 'tenis', false, 6],
    ['Adidas Superstar', 240000, 'tenis', true, 7],
    ['Converse Chuck Taylor', 175000, 'tenis', true, 8],
    ['Vans Old Skool', 200000, 'tenis', true, 9],
    ['Nike Air Force 1', 290000, 'tenis', true, 10],
    ['Zapato Oxford Clásico', 220000, 'casual', true, 11],
    ['Mocasín Cuero Café', 195000, 'casual', true, 12],
    ['Zapato Náutico Beige', 180000, 'casual', true, 13],
    ['Botín Casual Negro', 235000, 'casual', true, 14],
    ['Zapato Derby Formal', 245000, 'casual', false, 15],
    ['Mocasín Tejido Gris', 205000, 'casual', true, 16],
    ['Zapato Loafer Café', 215000, 'casual', true, 17],
    ['Botín Chelsea Negro', 260000, 'casual', true, 18],
    ['Zapato Casual Cuero Miel', 225000, 'casual', true, 19],
    ['Mocasín Elegante Azul', 210000, 'casual', true, 20],
    ['Sandalia Cuero Tostado', 130000, 'sandalia', true, 21],
    ['Sandalia Deportiva Negra', 110000, 'sandalia', true, 22],
    ['Sandalia Plana Café', 95000, 'sandalia', true, 23],
    ['Chancla Confort Gris', 80000, 'sandalia', true, 24],
    ['Sandalia Trekking Verde', 140000, 'sandalia', false, 25],
    ['Sandalia Elegante Beige', 120000, 'sandalia', true, 26],
    ['Chancla Slide Negra', 85000, 'sandalia', true, 27],
    ['Sandalia Tiras Cuero', 125000, 'sandalia', true, 28],
    ['Sandalia Playa Azul', 90000, 'sandalia', true, 29],
    ['Sandalia Urbana Café', 115000, 'sandalia', true, 30],
    ['Nike Air Zoom', 270000, 'tenis', true, 31],
    ['Adidas Ultraboost', 310000, 'tenis', true, 32],
    ['Puma Suede Classic', 195000, 'tenis', true, 33],
    ['Reebok Nano', 245000, 'tenis', false, 34],
    ['Nike Air Max 90', 275000, 'tenis', true, 35],
    ['Zapato Monk Strap', 230000, 'casual', true, 36],
    ['Mocasín Penny Loafer', 200000, 'casual', true, 37],
    ['Zapato Casual Gamuza', 210000, 'casual', true, 38],
    ['Botín Cuero Marrón', 250000, 'casual', true, 39],
    ['Zapato Brogue Negro', 240000, 'casual', false, 40],
    ['Sandalia Romana Cuero', 135000, 'sandalia', true, 41],
    ['Chancla Deportiva Azul', 95000, 'sandalia', true, 42],
    ['Sandalia Trenzada Beige', 125000, 'sandalia', true, 43],
    ['Sandalia Cuña Café', 145000, 'sandalia', true, 44],
    ['Chancla Comfort Negra', 88000, 'sandalia', true, 45],
    ['Tenis Casual Blanco', 185000, 'tenis', true, 46],
    ['Zapatilla Urbana Gris', 220000, 'tenis', true, 47],
    ['Zapato Slip-On Café', 190000, 'casual', true, 48],
    ['Sandalia Sport Negra', 100000, 'sandalia', false, 49],
    ['Botín Casual Café', 255000, 'casual', true, 50]
];

const productosRelojes = [
    ['Reloj Casio Clásico', 180000, 'hombre', true, 1],
    ['Reloj Fossil Cuero Café', 320000, 'hombre', true, 2],
    ['Reloj Citizen Acero', 410000, 'hombre', true, 3],
    ['Reloj Seiko Automático', 450000, 'hombre', false, 4],
    ['Reloj Tommy Hilfiger Negro', 350000, 'hombre', true, 5],
    ['Reloj Diesel Cronógrafo', 380000, 'hombre', true, 6],
    ['Reloj Armani Exchange', 360000, 'hombre', true, 7],
    ['Reloj Guess Hombre', 300000, 'hombre', true, 8],
    ['Reloj Lacoste Deportivo', 330000, 'hombre', true, 9],
    ['Reloj Casio Edifice', 250000, 'hombre', true, 10],
    ['Reloj Fossil Elegante', 320000, 'mujer', true, 11],
    ['Reloj Michael Kors Dorado', 400000, 'mujer', true, 12],
    ['Reloj Guess Mujer Rosa', 290000, 'mujer', true, 13],
    ['Reloj Casio Sheen', 220000, 'mujer', false, 14],
    ['Reloj Anne Klein', 270000, 'mujer', true, 15],
    ['Reloj Kate Spade', 350000, 'mujer', true, 16],
    ['Reloj Daniel Wellington', 380000, 'mujer', true, 17],
    ['Reloj Tommy Hilfiger Mujer', 340000, 'mujer', true, 18],
    ['Reloj Swatch Colorido', 190000, 'mujer', true, 19],
    ['Reloj Lacoste Mujer', 310000, 'mujer', true, 20],
    ['Reloj Deportivo Pro', 250000, 'deportivo', true, 21],
    ['Reloj Casio G-Shock', 280000, 'deportivo', true, 22],
    ['Reloj Garmin Fitness', 450000, 'deportivo', true, 23],
    ['Reloj Suunto Aventura', 420000, 'deportivo', false, 24],
    ['Reloj Casio Digital Deportivo', 150000, 'deportivo', true, 25],
    ['Reloj Timex Ironman', 230000, 'deportivo', true, 26],
    ['Reloj Polar Running', 390000, 'deportivo', true, 27],
    ['Reloj Nike Sport', 200000, 'deportivo', true, 28],
    ['Reloj Adidas Digital', 175000, 'deportivo', true, 29],
    ['Reloj Under Armour', 260000, 'deportivo', true, 30],
    ['Reloj Casio Vintage', 165000, 'hombre', true, 31],
    ['Reloj Fossil Grand', 340000, 'hombre', true, 32],
    ['Reloj Emporio Armani', 420000, 'hombre', true, 33],
    ['Reloj Casio Retro', 155000, 'hombre', false, 34],
    ['Reloj Diesel Mega Chief', 370000, 'hombre', true, 35],
    ['Reloj Michael Kors Runway', 390000, 'mujer', true, 36],
    ['Reloj Casio Baby-G', 210000, 'mujer', true, 37],
    ['Reloj Fossil Rose Gold', 330000, 'mujer', true, 38],
    ['Reloj Kate Spade Metro', 360000, 'mujer', false, 39],
    ['Reloj Anne Klein Cristal', 280000, 'mujer', true, 40],
    ['Reloj Casio Pro Trek', 300000, 'deportivo', true, 41],
    ['Reloj Suunto Core', 410000, 'deportivo', true, 42],
    ['Reloj Garmin Vivoactive', 460000, 'deportivo', true, 43],
    ['Reloj Timex Expedition', 240000, 'deportivo', true, 44],
    ['Reloj Polar Vantage', 430000, 'deportivo', false, 45],
    ['Reloj Casio Collection', 175000, 'hombre', true, 46],
    ['Reloj Guess Connect', 320000, 'mujer', true, 47],
    ['Reloj Nike Triax', 210000, 'deportivo', true, 48],
    ['Reloj Lacoste Classic', 290000, 'hombre', true, 49],
    ['Reloj Swatch Sport', 180000, 'deportivo', true, 50]
];

const productosLociones = [
    ['One Million Paco Rabanne', 120000, 'masculina', true, 1],
    ['Bleu de Chanel', 240000, 'masculina', true, 2],
    ['Sauvage Dior', 250000, 'masculina', true, 3],
    ['Acqua di Gio Armani', 200000, 'masculina', false, 4],
    ['Polo Blue Ralph Lauren', 180000, 'masculina', true, 5],
    ['Eros Versace', 150000, 'masculina', true, 6],
    ['Invictus Paco Rabanne', 130000, 'masculina', true, 7],
    ['Boss Bottled Hugo Boss', 170000, 'masculina', true, 8],
    ['Fahrenheit Dior', 220000, 'masculina', true, 9],
    ['Aventus Creed', 380000, 'masculina', true, 10],
    ['Coco Mademoiselle Chanel', 150000, 'femenina', true, 11],
    ['Good Girl Carolina Herrera', 210000, 'femenina', true, 12],
    ['La Vie Est Belle Lancôme', 190000, 'femenina', true, 13],
    ['Miss Dior', 230000, 'femenina', false, 14],
    ['Black Opium YSL', 200000, 'femenina', true, 15],
    ['Flowerbomb Viktor & Rolf', 240000, 'femenina', true, 16],
    ['Idôle Lancôme', 195000, 'femenina', true, 17],
    ['Alien Mugler', 205000, 'femenina', true, 18],
    ['Daisy Marc Jacobs', 160000, 'femenina', true, 19],
    ['Light Blue Dolce & Gabbana', 140000, 'femenina', true, 20],
    ['CK One Calvin Klein', 95000, 'unisex', true, 21],
    ['Molecule 01 Escentric', 175000, 'unisex', true, 22],
    ['Le Labo Santal 33', 350000, 'unisex', true, 23],
    ['Jo Malone Lime Basil', 300000, 'unisex', false, 24],
    ['Gucci Bloom', 210000, 'unisex', true, 25],
    ['Bvlgari Omnia', 185000, 'unisex', true, 26],
    ['Versace Eros Unisex', 165000, 'unisex', true, 27],
    ['Tom Ford Black Orchid', 400000, 'unisex', true, 28],
    ['Hermès Terre', 260000, 'unisex', true, 29],
    ['Diptyque Philosykos', 320000, 'unisex', true, 30],
    ['Dior Homme', 260000, 'masculina', true, 31],
    ['Chanel Allure Homme', 270000, 'masculina', true, 32],
    ['Versace Pour Homme', 190000, 'masculina', true, 33],
    ['Hugo Boss Bottled Night', 175000, 'masculina', false, 34],
    ['Giorgio Armani Code', 230000, 'masculina', true, 35],
    ['Chanel No. 5', 280000, 'femenina', true, 36],
    ["Dior J'adore", 260000, 'femenina', true, 37],
    ['Lancôme Trésor', 195000, 'femenina', true, 38],
    ['Carolina Herrera 212', 165000, 'femenina', false, 39],
    ['Versace Bright Crystal', 175000, 'femenina', true, 40],
    ['Calvin Klein Eternity Unisex', 155000, 'unisex', true, 41],
    ['Byredo Gypsy Water', 390000, 'unisex', true, 42],
    ['Maison Margiela Replica', 340000, 'unisex', true, 43],
    ['Comme des Garçons Unisex', 300000, 'unisex', true, 44],
    ['Tom Ford Tobacco Vanille', 420000, 'unisex', false, 45],
    ['Prada Luna Rossa', 245000, 'masculina', true, 46],
    ['Burberry Her', 210000, 'femenina', true, 47],
    ['Yves Saint Laurent Libre', 235000, 'femenina', true, 48],
    ['Jean Paul Gaultier Le Male', 180000, 'masculina', true, 49],
    ['Clean Reserve Unisex', 145000, 'unisex', true, 50]
];

// ===== RENDERIZADO DINÁMICO DE TARJETAS DE PRODUCTO =====
function crearProductoCard(nombre, precio, categoria, disponible, numImg, tipo) {
    const precioFormateado = '$' + precio.toLocaleString('es-CO');
    const imgPrincipal = `images/catalogo/${tipo}/${tipo}-${String(numImg).padStart(2, '0')}.jpg`;
    const imgRespaldo = IMAGEN_RESPALDO[tipo];
    const mensaje = encodeURIComponent(`Hola 👋 Me interesa *${nombre}* ¿Está disponible?`);

    return `
        <article class="producto-card" data-categoria="${categoria}" data-nombre="${nombre.toLowerCase()}">
            <img src="${imgPrincipal}" alt="${nombre}" onerror="this.onerror=null;this.src='${imgRespaldo}';">
            <div class="producto-info">
                <h3>${nombre}</h3>
                <span class="${disponible ? 'disponible' : 'agotado-badge'}">${disponible ? 'Disponible' : 'Agotado'}</span>
                <p>${precioFormateado}</p>
                <div class="producto-btns">
                    <a href="producto.html">Ver detalles</a>
                    <a class="btn-wa-card" href="https://wa.me/${WHATSAPP_NUMBER}?text=${mensaje}" target="_blank">
                        <i class="fa-brands fa-whatsapp"></i> WhatsApp
                    </a>
                </div>
            </div>
        </article>`;
}

function renderizarCatalogo() {
    const grid = document.getElementById('productos-grid');
    if (!grid) return;

    const tipo = grid.dataset.tipo;
    const datos = { calzado: productosCalzado, relojes: productosRelojes, lociones: productosLociones }[tipo];
    if (!datos) return;

    grid.innerHTML = datos
        .map(([nombre, precio, categoria, disponible, numImg]) => crearProductoCard(nombre, precio, categoria, disponible, numImg, tipo))
        .join('');
}

renderizarCatalogo();

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

// ===== CARRUSEL DE PROMOCIONES Y COMBOS =====
const promoSlides = document.querySelectorAll('.promo-slide');
const promoDots = document.querySelectorAll('.promo-dot');
let promoActual = 0;
let promoInterval;

function irAPromo(index) {
    promoSlides[promoActual].classList.remove('promo-activa');
    promoDots[promoActual].classList.remove('activa');
    promoActual = index;
    promoSlides[promoActual].classList.add('promo-activa');
    promoDots[promoActual].classList.add('activa');
}

function promoSiguiente() {
    irAPromo((promoActual + 1) % promoSlides.length);
}

function promoAnterior() {
    irAPromo((promoActual - 1 + promoSlides.length) % promoSlides.length);
}

if (promoSlides.length > 0) {
    promoInterval = setInterval(promoSiguiente, 5000);

    promoDots.forEach((dot, i) => {
        dot.addEventListener('click', () => {
            clearInterval(promoInterval);
            irAPromo(i);
            promoInterval = setInterval(promoSiguiente, 5000);
        });
    });

    const promoPrevBtn = document.getElementById('promo-prev');
    const promoNextBtn = document.getElementById('promo-next');

    if (promoPrevBtn) {
        promoPrevBtn.addEventListener('click', () => {
            clearInterval(promoInterval);
            promoAnterior();
            promoInterval = setInterval(promoSiguiente, 5000);
        });
    }

    if (promoNextBtn) {
        promoNextBtn.addEventListener('click', () => {
            clearInterval(promoInterval);
            promoSiguiente();
            promoInterval = setInterval(promoSiguiente, 5000);
        });
    }

    const promoSlider = document.getElementById('promos-slider');
    if (promoSlider) {
        promoSlider.addEventListener('mouseenter', () => clearInterval(promoInterval));
        promoSlider.addEventListener('mouseleave', () => {
            promoInterval = setInterval(promoSiguiente, 5000);
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
    btn.dataset.categoria = categoria;

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