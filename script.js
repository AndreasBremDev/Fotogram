let imagesFotogram = [
    {
        filename: '01.webp',
        title: 'Schloss Burghausen',
        location: 'Burghausen',
        link: 'https://maps.app.goo.gl/5ZPRLdBbWwADJn2k8'
    },
    {
        filename: '02.webp',
        title: 'Alpen Aussicht',
        location: 'Ostersehen',
        link: 'https://maps.app.goo.gl/sABHa2Gd9QH1vC3cA'
    },
    {
        filename: '03.webp',
        title: 'Karlsfelder See',
        location: 'bei München',
        link: 'https://maps.app.goo.gl/ZHnxHNwMkcTT72eQ6'
    },
    {
        filename: '04.webp',
        title: 'Aussicht auf Bad Tölz',
        location: 'Bad Tölz',
        link: 'https://maps.app.goo.gl/ZHnxHNwMkcTT72eQ6'
    },
    {
        filename: '05.webp',
        title: 'krorriger Baum',
        location: 'Schlosspark Nymphenburg',
        link: 'https://maps.app.goo.gl/jTiU8soPa3z7erte8'
    },
    {
        filename: '06.webp',
        title: 'Palmen in Sahl Hasheesh',
        location: 'Ägypten',
        link: 'https://maps.app.goo.gl/MTMGsdN7wdDxfnwW8'
    },
    {
        filename: '07.webp',
        title: 'Strandansicht in Sahl Hasheesh',
        location: 'Ägypten',
        link: 'https://maps.app.goo.gl/j1oeZArXBzig42iW7'
    },
    {
        filename: '08.webp',
        title: 'Fontaine',
        location: 'Olympiapark',
        link: 'https://maps.app.goo.gl/j1oeZArXBzig42iW7'
    },
    {
        filename: '09.webp',
        title: 'Olympiapark',
        location: 'München',
        link: 'https://maps.app.goo.gl/uQV3R6MFkL4y3EyYA'
    },
    {
        filename: '10.webp',
        title: 'Amper',
        location: 'bei München',
        link: 'https://maps.app.goo.gl/1ZXi24K3S4MDhDPS9'
    },
    {
        filename: '11.webp',
        title: 'Fasaneriesee',
        location: 'München',
        link: 'https://maps.app.goo.gl/qHz5VMKTujmKhzy98'
    }
]

const imgSmallRef = document.getElementById('imgSmallRef');
const overlayRef = document.getElementById('overlay');
let myInterval;
let diashowCalled = false;

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

function overlayOn(i) {
    overlayRef.style.display = "block";
    if (i > imagesFotogram.length - 1) {
        i = 0;
    } else if (i < 0) {
        i = imagesFotogram.length - 1;
    }
    overlayRef.innerHTML = createOverlayContent(i, imagesFotogram);
    document.body.classList.add('no-scroll');
};

function createOverlayContent(i, imagesFotogram) {
    return `
    <div onclick="stopBubbling(event)" id="overlayImgContainer" class="overlay-img-container">
        <div class="overlayTop">
            <button onclick="diashow(${i}), stopBubbling(event)" class="btn-diashow">
                <img src="./img/icons/favicon.svg">               
                <img id="playPause" onclick="diashowStop(), stopBubbling(event)" src="./img/icons/pause-solid.svg">
                Diashow
            </button> 
            <button onclick="overlayOff()" class="btn-close">X</button>
        </div>
        <div class="overlayTitle">
            <p>${imagesFotogram[i].title} -&nbsp<a href="${imagesFotogram[i].link}" target="_blank" class="a-location">${imagesFotogram[i].location}</a></p>
        </div>
        <img src="./img/${imagesFotogram[i].filename}" alt="picture${[i + 1]}" class="img-overlay">
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
    document.body.classList.remove('no-scroll');
    diashowStop();
}

function stopBubbling(event) {
    event.stopPropagation();
}

function diashow(i) {
    if (!diashowCalled) {
        diashowCalled = true;
        myInterval = setInterval(() => {
            i += 1;
            if (i > imagesFotogram.length - 1) {
                i = 0;
            }
            overlayOn(i);
            document.getElementById('playPause').src = "./img/icons/play-solid.svg";
        }, 2500);
    } else {
        diashowStop();
        
    }
}

function diashowStop() {
    clearInterval(myInterval);
    diashowCalled = false;
    document.getElementById('playPause').src = "./img/icons/pause-solid.svg";
}