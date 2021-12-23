// contact modal box
const openModalBtn = document.getElementById("open-modal-btn")
const closeModalBtn = document.getElementById("close-modal-btn")
const overlay = document.getElementById("overlay")

openModalBtn.addEventListener("click", function () {
    overlay.style.display = "block"
})

closeModalBtn.addEventListener("click", function () {
    overlay.style.display = "none"
})

// image carousel
const prevBtn = document.getElementById("prev-btn")
const nextBtn = document.getElementById("next-btn")
const slides = document.getElementsByClassName("carousel-item")
const totalSlides = slides.length
let slidePosition = 0

prevBtn.addEventListener("click", function () {
    hideAllSlides()

    if (slidePosition === 0) {
        slidePosition = totalSlides - 1
    } else {
        slidePosition--
    }
    slides[slidePosition].classList.add("carousel-item-visible")
})

nextBtn.addEventListener("click", function () {
    hideAllSlides()

    if (slidePosition === totalSlides - 1) {
        slidePosition = 0
    } else {
        slidePosition++
    }
    slides[slidePosition].classList.add("carousel-item-visible")
})

function hideAllSlides() {
    for (let slide of slides) {
        slide.classList.remove("carousel-item-visible")
        slide.classList.add("carousel-item-hidden")
    }
}


    
