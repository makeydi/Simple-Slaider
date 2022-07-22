import pictures from "./dataImg.js";
import ChangePictures from "./process.js";
const container = document.querySelector('.container')
const slaider = document.createElement('div');
const right = document.createElement("button");
const left = document.createElement("button");
const slaiderFilm = document.createElement("div");
const arrowRight = document.createElement("img");
const arrowLeft = document.createElement("img");
slaider.className = 'slaider';
right.className = 'right';
left.className = 'left';
slaiderFilm.className = 'slaider-film';
arrowRight.className = "arrow-right";
arrowRight.src = "/img/arrow.png";
arrowLeft.className = "arrow-left";
arrowLeft.src = "/img/arrow.png";
container.append(slaider);
slaider.append(left,right, slaiderFilm);
right.append(arrowRight);
left.append(arrowLeft);
slaiderFilm.style.width = pictures.length*600 + 'px';
for (let i=0; i<pictures.length; i++) {
     const picture = document.createElement('img');
     picture.className = 'picture';
     slaiderFilm.append(picture);
     picture.src = pictures[i];
}
slaider.addEventListener('click', element =>  ChangePictures(element, slaiderFilm, left, right))