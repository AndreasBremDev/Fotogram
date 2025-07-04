
let imgsLoad = [
    'band1.png',
    'band2.png',
    'band3.png'
    // 'band1.png',
    // 'band2.png',
    // 'band3.png',
    // 'band1.png',
    // 'band2.png',
    // 'band3.png',
    // 'band1.png',
    // 'band2.png',
    // 'band3.png',
    // 'band1.png',
    // 'band2.png',
    // 'band3.png'
];
const imgsRef = document.getElementById('imgsRef');
const largeImgsRef = document.getElementById('largeImgsRef')
const overlayRef = document.getElementById('overlay');

// SLIDE
const imageWrapper = document.querySelector('.image-wrapper');
const images = document.querySelectorAll('.image');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

let currentIndex = 0;
 // 
// Breite eines Bildes

let startX;
// Swipe-Funktionalität (Touch Events)


function renderImagesMain() {
    for (let i = 0; i < imgsLoad.length; i++) {
        imgsRef.innerHTML += renderSmallImages(i);
    }
}

function renderSmallImages(i) {
    return `<img onclick="renderLargeImagesFirst()" src="./img/${imgsLoad[i]}" alt=picture${[i + 1]} class="img-elem">`;
}

function renderLargeImagesFirst() {
    largeImgsRef.innerHTML = `
    <div class="image-container">
        <div id="wrapper" class="image-wrapper">

        </div>
        <button onclick="imageBack()" class="prev-button">&lt;</button>
        <button onclick="imageForw()" class="next-button">&gt;</button>
    </div>
    `;
    renderLargeImagesSecond();
}


function renderLargeImagesSecond() {
    let wrapper = document.getElementById('wrapper');
    for (let i = 0; i < imgsLoad.length; i++) {
        wrapper.innerHTML += renderLargeImages(i);
    }
}

function renderLargeImages(i) {
    renderOverlay();
    return `<img src="./img/${imgsLoad[i]}" alt=picture${[i + 1]} class="image">`
}

function renderOverlay() {
    overlayRef.classList.toggle('d_none');
}


function goToImage(index) {
    let imageWidth = images[0].offsetWidth;
    if (index < 0) {
        index = images.length - 1;
    } else if (index >= images.length) {
        index = 0;
    }
    currentIndex = index;
    const offset = -currentIndex * imageWidth;
    imageWrapper.style.transform = `translateX(${offset}px)`;
}

function imageBack() {
    goToImage(currentIndex - 1);
}

// prevButton.addEventListener('click', () => {
//     goToImage(currentIndex - 1);
// });

function imageForw() {
    goToImage(currentIndex + 1);
}

nextButton.addEventListener('click', () => {
    goToImage(currentIndex + 1);
});



// imageWrapper.addEventListener('touchstart', (e) => {
//     startX = e.touches[0].clientX;
// });

// imageWrapper.addEventListener('touchend', (e) => {
//     const endX = e.changedTouches[0].clientX;
//     let diffX = endX - startX;

//     if (diffX > 50) { // Swipe rechts
//         goToImage(currentIndex - 1);
//     } else if (diffX < -50) { // Swipe links
//         goToImage(currentIndex + 1);
//     }
// });