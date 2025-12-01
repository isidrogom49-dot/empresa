/* SCROLL ANIMATION */
const scrollElements = document.querySelectorAll('.scroll-animation, .fade-in');
const elementInView = (el, offset = 0) =>
    el.getBoundingClientRect().top <= (window.innerHeight - offset);
const displayScrollElement = el => el.classList.add('visible');
const hideScrollElement = el => el.classList.remove('visible');
const handleScrollAnimation = () => {
    scrollElements.forEach(el => {
        elementInView(el, 100) ? displayScrollElement(el) : hideScrollElement(el);
    });
};

/* BOTÓN WHATSAPP */
const whatsappBtn = document.querySelector('.whatsapp-float');
window.addEventListener('scroll', () => {
    handleScrollAnimation();
    whatsappBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});
document.addEventListener('DOMContentLoaded', handleScrollAnimation);

/* SLIDER HERO */
let slides = document.querySelectorAll('.slide');
let currentSlide = 0;

const nextSlide = () => {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
};

const prevSlide = () => {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
};

document.querySelector('.next').addEventListener('click', nextSlide);
document.querySelector('.prev').addEventListener('click', prevSlide);
setInterval(nextSlide, 5000);

/* MENU HAMBURGUESA */
const menuBtn = document.getElementById('menu-btn');
const nav = document.querySelector('nav ul');
menuBtn.addEventListener('click', () => {
    nav.classList.toggle('active');
    menuBtn.classList.toggle('open');
});
