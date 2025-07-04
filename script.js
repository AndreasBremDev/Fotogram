
let imgsLoad = [
    'band1.png',
    'band2.png',
    'band3.png'
];

let imagesFotogram = [
    {
        filename: '01.webp',
        title: 'Schloss Burghausen',
        location: 'Burghausen'
    },
    {
        filename: '02.webp',
        title: 'Alpen Aussicht',
        location: 'Ostersehen'
    },
    {
        filename: '03.webp',
        title: 'Karlsfelder See',
        location: 'bei München'
    },
    {
        filename: '04.webp',
        title: 'Aussicht auf Bad Tölz',
        location: 'Bad Tölz'
    },
    {
        filename: '05.webp',
        title: 'krorriger Baum',
        location: 'Schlosspark Nymphenburg'
    },
    {
        filename: '06.webp',
        title: 'Palmen in Sahl Hasheesh',
        location: 'Ägypten'
    },
    {
        filename: '07.webp',
        title: 'Palmen in Sahl Hasheesh',
        location: 'Ägypten'
    },
    {
        filename: '08.webp',
        title: 'Fontaine',
        location: 'Olympiapark'
    },
    {
        filename: '09.webp',
        title: 'Olympiapark',
        location: 'München'
    },
    {
        filename: '10.webp',
        title: 'Amper',
        location: 'bei München'
    },
        {
        filename: '11.webp',
        title: 'Feldmochinger See',
        location: 'bei München'
    }
]

const imgSmallRef = document.getElementById('imgSmallRef');
const overlayRef = document.getElementById('overlay');
let myInterval;

function renderImagesSmall() {
    for (let i = 0; i < imagesFotogram.length; i++) {
        imgSmallRef.innerHTML += renderSmallImages(i, imagesFotogram);
    }
};

function renderSmallImages(i, imagesFotogram) {
    return `
    <span><a>
    <img onclick="overlayOn(${i})" src="./img/${imagesFotogram[i].filename}" alt=picture${[i + 1]} class="img-small">
    </a></span>`;
};


// ONLY UNTIL UP HERE

function overlayOn(i) {
    overlayRef.style.display = "block";
    if (i > imagesFotogram.length - 1) {
        i = 0;
    } else if (i < 0) {
        i = imagesFotogram.length - 1;
    }
    overlayRef.innerHTML = createOverlayContent(i, imagesFotogram);
};

function createOverlayContent(i, imagesFotogram) {
    return `
    <div onclick="stopBubbling(event)" id="overlayImgContainer" class="overlay-img-container">
        <div class="overlayTop">
            <button onclick="diashow(${i})" class="btn-diashow">
                <img src="./img/icons/favicon.svg">               
                <img id="playPause" onclick="diashowStop(), stopBubbling(event)" src="./img/icons/pause-solid.svg">
                Diashow
            </button> 
            <p>${imagesFotogram[i].title} - ${imagesFotogram[i].location}</p>
            <button onclick="overlayOff()" class="btn-close">X</button>
        </div>
        <img src="./img/${imagesFotogram[i]}" alt=picture${[i + 1]} class="img-overlay">
        <div class="overlayBottom">
            <button onclick="overlayOn(${i - 1}), diashowStop()" class="btn-prev">&lt;</button>
            <p>${i + 1} / ${imagesFotogram.length}</p>
            <button onclick="overlayOn(${i + 1}), diashowStop()" class="btn-next">&gt;</button>
        </div>
    </div>
    `;
}

function overlayOff() {
    overlayRef.style.display = "none";
    diashowStop();
}

function stopBubbling(event) {
    event.stopPropagation();
}


function diashow(i) {
    document.getElementById('playPause').src = "./img/icons/play-solid.svg";
    myInterval = setInterval(() => {
        i += 1;
        if (i > imagesFotogram.length - 1) {
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