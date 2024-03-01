// const btns = document.querySelectorAll(".nav-btn");
// const slides = document.querySelectorAll(".img-slide");
// const contents = document.querySelectorAll(".content");

// var sliderNav = function(manual){
//     btns.forEach((btn) => {
//         btn.classList.remove("active");
//     });

//     slides.forEach((slide) => {
//         slide.classList.remove("active");
//     });

//     contents.forEach((content) => {
//         content.classList.remove("active");
//     });

//     btns[manual].classList.add("active");
//     slides[manual].classList.add("active");
//     contents[manual].classList.add("active");
// }

//     btns.forEach((btn, i) => {
//         btn.addEventListener("click", () => {
//             sliderNav(i)
//         });
//     });

const btns = document.querySelectorAll(".navigation-btn");
const slides = document.querySelectorAll(".slider-img");
const contents = document.querySelectorAll(".content");
let interval;
let number = 0;

const slider = function (active) {
    btns.forEach((btn) => {
        btn.classList.remove("active")
    })

    slides.forEach((slide) => {
        slide.classList.remove("active")
    })

    contents.forEach((content) => {
        content.classList.remove("active")
    })

    btns[active].classList.add("active")
    slides[active].classList.add("active")
    contents[active].classList.add("active")
}

btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        stopSlider(); // Stop the interval
        number=i
        slider(i); // Slide to the clicked index
        startSlider(); // Restart the interval
    })
})

function startSlider () {
    interval = setInterval(() => {
        number += 1;
        if (number == btns.length) {
            number = 0;
        }
        slider(number)
    }, 6000)
}

function stopSlider() {
    clearInterval(interval);
}

startSlider()