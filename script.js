document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const newsletter = document.getElementById('newsletter').checked;

    if (name && email) {
        alert(`Obrigado, ${name}! Em breve você receberá novidades sobre preservação ambiental.`);
        // Aqui você pode adicionar código para enviar os dados ao servidor via AJAX, por exemplo.
    } else {
        alert('Por favor, preencha os campos obrigatórios.');
    }
});

const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');
const infoText = document.getElementById('carousel-info');
const carouselDots = document.querySelector('.carousel-dots');
const carouselContainer = document.querySelector('.carousel-container');

let currentSlide = 0;

function showSlide(index) {
    carouselSlide.style.transform = `translateX(-${index * 100}%)`;
    infoText.textContent = carouselImages[index].dataset.info;
    document.querySelector('.dot.active').classList.remove('active');
    carouselDots.children[index].classList.add('active');
}

document.querySelector('.carousel-next').addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % carouselImages.length;
    showSlide(currentSlide);
});

document.querySelector('.carousel-prev').addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + carouselImages.length) % carouselImages.length;
    showSlide(currentSlide);
});

// Criar os pontos do indicador
// Criar os pontos do indicador
for (let i = 0; i < carouselImages.length; i++) {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => {
        currentSlide = i;
        showSlide(currentSlide);
    });
    carouselDots.appendChild(dot);
}



// Autoplay (opcional)
let autoplayInterval;
function startAutoplay() {
    autoplayInterval = setInterval(() => {
        currentSlide = (currentSlide + 1) % carouselImages.length;
        showSlide(currentSlide);
    }, 5000); // Muda o slide a cada 5 segundos
}
startAutoplay();

// Pausar o autoplay ao passar o mouse sobre o carrossel
carouselContainer.addEventListener('mouseover', () => {
    clearInterval(autoplayInterval);
});
carouselContainer.addEventListener('mouseout', () => {
    startAutoplay();
});

showSlide(0); // Mostrar o primeiro slide inicialmente
