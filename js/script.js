/* SCROLL ANIMATION */
const scrollElements = document.querySelectorAll('.scroll-animation, .fade-in');
const elementInView = (el, offset = 0) => el.getBoundingClientRect().top <= (window.innerHeight - offset);
const displayScrollElement = el => el.classList.add('visible');
const hideScrollElement = el => el.classList.remove('visible');
const handleScrollAnimation = () => {
    scrollElements.forEach(el => {
        elementInView(el, 120) ? displayScrollElement(el) : hideScrollElement(el);
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

/* HAMBURGUESA */
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
    hamburger.classList.toggle('toggle');
});

/* HEADER SCROLL EFECTO */
const header = document.querySelector('.sticky-header');
window.addEventListener('scroll', () => {
    if(window.scrollY > 50){
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

/* BOTÓN TOP */
const topBtn = document.getElementById("topBtn");
window.onscroll = function() {
    topBtn.style.display = (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) ? "block" : "none";
};
topBtn.addEventListener('click', () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
});
