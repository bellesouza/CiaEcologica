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

    // Carousel functionality
const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');
const infoText = document.getElementById('carousel-info');

let counter


});
