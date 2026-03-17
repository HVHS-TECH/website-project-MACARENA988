const slides = document.querySelectorAll(".slide");
let current = 0;

function showSlide(index) {
    slides[current].classList.remove("active");
    current = (index + slides.length) % slides.length;
    slides[current].classList.add("active");
}

document.querySelector(".next").onclick = () => {
    showSlide(current -1);
}

document.querySelector(".prev").onclick = () => {
    showSlide(current +1);
}