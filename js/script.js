const sliders = [
    {
        src: "assets/images/slide1.jpg",
        title: "New York City",
        des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis sint vero, deserunt, incidunt, aspernatur suscipit autem consequuntur doloremque deleniti tenetur maxime tempore quam eaque. Quisquam impedit distinctio velit mollitia eos maiores totam voluptate asperiores voluptatibus ipsam. Atque ut ex dolor sint alias, hic similique ratione voluptas, quod nesciunt vero dolore id velit dicta quibusdam reiciendis maiores blanditiis delectus inventore non possimus? Ipsum quasi fugit tenetur, nesciunt error voluptates officia repudiandae consequatur mollitia ducimus laborum illum enim voluptatibus similique porro tempora assumenda doloremque dolores. Ad, magnam non. Eligendi perferendis recusandae nisi atque dignissimos. Nulla repellendus neque dolorum at maxime, voluptates cum."
    },
    {
        src: "assets/images/slide2.jpg",
        title: "New York City",
        des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis sint vero, deserunt, incidunt, aspernatur suscipit autem consequuntur doloremque deleniti tenetur maxime tempore quam eaque. Quisquam impedit distinctio velit mollitia eos maiores totam voluptate asperiores voluptatibus ipsam. Atque ut ex dolor sint alias, hic similique ratione voluptas, quod nesciunt vero dolore id velit dicta quibusdam reiciendis maiores blanditiis delectus inventore non possimus? Ipsum quasi fugit tenetur, nesciunt error voluptates officia repudiandae consequatur mollitia ducimus laborum illum enim voluptatibus similique porro tempora assumenda doloremque dolores. Ad, magnam non. Eligendi perferendis recusandae nisi atque dignissimos. Nulla repellendus neque dolorum at maxime, voluptates cum."
    },
    {
        src: "assets/images/slide3.jpg",
        title: "New York City",
        des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis sint vero, deserunt, incidunt, aspernatur suscipit autem consequuntur doloremque deleniti tenetur maxime tempore quam eaque. Quisquam impedit distinctio velit mollitia eos maiores totam voluptate asperiores voluptatibus ipsam. Atque ut ex dolor sint alias, hic similique ratione voluptas, quod nesciunt vero dolore id velit dicta quibusdam reiciendis maiores blanditiis delectus inventore non possimus? Ipsum quasi fugit tenetur, nesciunt error voluptates officia repudiandae consequatur mollitia ducimus laborum illum enim voluptatibus similique porro tempora assumenda doloremque dolores. Ad, magnam non. Eligendi perferendis recusandae nisi atque dignissimos. Nulla repellendus neque dolorum at maxime, voluptates cum."
    },
]
let sliderImages = []
let sliderContent = []
let sliderPagination = []

const sliderContainer = document.getElementById("slider-container")

let interval;
let number = 0;

// Create navigation
const pagination = document.createElement("div")
pagination.classList.add("slider-navigation")

sliders.forEach((item) => {
    // Create slider images
    const img = document.createElement("img")
    img.setAttribute("src", item.src)
    img.classList.add("slider-img")
    sliderContainer.appendChild(img)
    sliderImages.push(img)
    console.log(sliderImages)

    // Create slider Content
    const content = document.createElement("div")
    content.classList.add("content")
    console.log(sliderContent)

    // Title
    let sliderTitle = document.createElement("h1")
    sliderTitle.innerText = item.title

    // Des
    let sliderDes = document.createElement("p")
    sliderDes.innerText = item.des

    content.appendChild(sliderTitle)
    content.appendChild(sliderDes)

    sliderContainer.appendChild(content)
    sliderContent.push(content)

    const paginationDots = document.createElement("span")
    paginationDots.classList.add("navigation-btn")
    pagination.appendChild(paginationDots)
    sliderPagination.push(paginationDots)
})
sliderContainer.appendChild(pagination)

sliderImages[0].classList.add("active")
sliderContent[0].classList.add("active")
sliderPagination[0].classList.add("active")

const slider = function (active) {
    sliderImages.forEach((img) => {
        img.classList.remove("active")
    })
    sliderContent.forEach((content) => {
        content.classList.remove("active")
    })
    sliderPagination.forEach((item) => {
        item.classList.remove("active")
    })
    sliderImages[active].classList.add("active")
    sliderContent[active].classList.add("active")
    sliderPagination[active].classList.add("active")
}

sliderPagination.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        stopSlider()
        number = i
        slider(i)
        startSlider()
    })
})

function startSlider () {
    interval = setInterval(() => {
        number += 1
        if (number == sliders.length) {
            number = 0
        }
        slider(number)
    }, 3000)
}

function stopSlider() {
    clearInterval(interval);
}

startSlider()