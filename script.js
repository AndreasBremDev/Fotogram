
let imgsLoad = [
    'band1.png',
    'band2.png',
    'band3.png'
]
arrImgs = [];

function renderTest() {
    let imgsRef = document.getElementById('imgsRef');
    imgsRef = '';
    for (let i = 0; i < imgsLoad.length; i++) {
        imgsRef.innerHTML += /* renderImages(i); */
        `<div class="img-elem-container">
    <img src="./img/${imgsLoad[i]}" alt=picture${[i+1]} class="img-elem">
    </div>`;
    }
}
 function renderImages(i) {
    return `<img src="./img/${imgsLoad[i]}" alt=picture${[i+1]} class="img-elem">
    </div>`
 }