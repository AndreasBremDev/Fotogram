
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
const imgSmallRef = document.getElementById('imgSmallRef');
const overlayRef = document.getElementById('overlay');
let myInterval;

function renderImagesSmall() {
    for (let i = 0; i < imgsLoad.length; i++) {
        imgSmallRef.innerHTML += renderSmallImages(i, imgsLoad);
    }
};

function renderSmallImages(i, imgsLoad) {
    return `
    <span><a>
    <img onclick="overlayOn(${i})" src="./img/${imgsLoad[i]}" alt=picture${[i + 1]} class="img-small">
    </a></span>`;
};

function overlayOn(i){
    overlayRef.style.display = "block";
    if (i > imgsLoad.length - 1) {
        i = 0;
    } else if (i < 0) {
        i = imgsLoad.length -1;
    }
    overlayRef.innerHTML = createOverlayContent(i, imgsLoad);
};

function createOverlayContent(i, imgsLoad) {
    return `
    <div onclick="stopBubbling(event)" id="overlayImgContainer" class="overlay-img-container">
        <div class="overlayTop">
            <button onclick="diashow(${i})" class="btn-diashow">
                <img src="./img/icons/favicon.svg">               
                <img id="playPause" onclick="diashowStop(), stopBubbling(event)" src="./img/icons/pause-solid.svg">
                Diashow
            </button> 
            <p>${imgsLoad[i].slice(0,-4)}</p>
            <button onclick="overlayOff()" class="btn-close">X</button>
        </div>
        <img src="./img/${imgsLoad[i]}" alt=picture${[i + 1]} class="img-overlay">
        <div class="overlayBottom">
            <button onclick="overlayOn(${i - 1}), diashowStop()" class="btn-prev">&lt;</button>
            <p>${i +1} / ${imgsLoad.length}</p>
            <button onclick="overlayOn(${i + 1}), diashowStop()" class="btn-next">&gt;</button>
        </div>
    </div>
    `;
}

function overlayOff(){
    overlayRef.style.display = "none";
    diashowStop();
}

function stopBubbling(event){
    event.stopPropagation();
}


function diashow(i){
    document.getElementById('playPause').src = "./img/icons/play-solid.svg";
    myInterval = setInterval(() => {
        i += 1;
        if (i > imgsLoad.length - 1) {
            i = 0;
        }
        overlayOn(i);
        document.getElementById('playPause').src = "./img/icons/play-solid.svg";
    }, 2500);
    
}

function diashowStop() {
    clearInterval(myInterval);
    playPause.src = "./img/icons/pause-solid.svg";
}


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