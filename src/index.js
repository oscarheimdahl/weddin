import './style/main.scss';
import './style/slide-show.scss';

import w1 from './images/weddin-1.png';
import w2 from './images/weddin-2.png';
import w3 from './images/weddin-3.png';
import w4 from './images/weddin-4.png';
import w5 from './images/weddin-5.png';
import w6 from './images/weddin-6.png';
import w7 from './images/weddin-7.png';
import w8 from './images/weddin-8.png';

const slideShow = document.createElement('div');
slideShow.id = 'slide-show';
const images = [w1, w2, w3, w4, w5, w6, w7, w8];

document.body.appendChild(slideShow);

let i = 0;
setInterval(() => {
  addRandomImage();
  i++;
  if (i > images.length - 1) i = 0;
}, Math.random() * 2000 + 2000);

function addRandomImage() {
  const imgContainer = document.createElement('div');
  imgContainer.className = 'image-container';
  imgContainer.style.opacity = '0';
  imgContainer.style.transform =
    'translateX(300px) translateY(300px) rotate(20deg)';
  const img = document.createElement('img');
  img.src = images[i];
  imgContainer.appendChild(img);
  slideShow.appendChild(imgContainer);
  setTimeout(() => {
    imgContainer.style.opacity = '1';
    imgContainer.style.transform =
      randRotation() + randTranslation() + 'translateY(0)';
  }, 100);
  setTimeout(() => (imgContainer.style.opacity = '0'), 20000);
  setTimeout(() => (imgContainer.style.display = 'none'), 21000);
}

function randRotation() {
  return `rotate(${Math.random() * 20 - 10}deg)`;
}

function randTranslation() {
  return `translateX(${Math.random() * 100 + 50}px)`;
}

function map(value, low2, high2) {
  return low2 + ((high2 - low2) * (value - 1)) / (10 - 1);
}
