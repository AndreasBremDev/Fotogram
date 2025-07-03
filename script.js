
let imgsLoad = [
    'band1.png',
    'band2.png',
    'band3.png',
    'band1.png',
    'band2.png',
    'band3.png',
    'band1.png',
    'band2.png',
    'band3.png',
    'band1.png',
    'band2.png',
    'band3.png'
];
const imgsRef = document.getElementById('imgsRef');



function renderImages() {
    // imgsRef = '';
    for (let i = 0; i < imgsLoad.length; i++) {
        console.log(imgsRef.innerHTML);
        imgsRef.innerHTML += renderTest(i);
    }
}
function renderTest(i) {
    return `<img src="./img/${imgsLoad[i]}" alt=picture${[i + 1]} class="img-elem">`;
}

