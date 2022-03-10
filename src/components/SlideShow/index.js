import './slide-show.scss';

import w1 from 'Images/1.jpg';
import w2 from 'Images/2.jpg';
import w3 from 'Images/3.jpg';
import w4 from 'Images/4.jpg';
import w5 from 'Images/5.jpg';
import h6 from 'Images/6.jpg';
import h7 from 'Images/7.jpg';
import h8 from 'Images/8.jpg';

const SlideShow = document.createElement('div');
SlideShow.id = 'slide-show';

const images = [];
const imageSrcs = [w1, w2, w3, w4, w5, h6, h7, h8].sort((img) => Math.random() - 0.5);

imageSrcs.forEach((imgSrc) => {
  console.log(imgSrc);
  const img = document.createElement('img');
  img.src = imgSrc;
  img.style.opacity = '0';
  SlideShow.appendChild(img);
  images.push(img);
});

let i = 0;
setInterval(() => {
  addRandomImage();
  i++;
  if (i > images.length - 1) i = 0;
}, Math.random() * 3000 + 3000);

function addRandomImage() {
  const img = images[i];
  img.style.opacity = '0';
  setTimeout(() => {
    img.style.transition = '';
    SlideShow.removeChild(img);
    SlideShow.appendChild(img);
    img.style.transform = 'translateX(-300px) translateY(300px) rotate(20deg)';
    //
    img.style.transition = 'opacity 300ms, transform 700ms';
    img.style.opacity = '1';
    img.style.transform = randRotation() + randTranslation(img.width > img.height) + 'translateY(0)';
  }, 350);
  img.className = img.width > img.height ? 'horizontal-img' : '';
}

function randRotation() {
  return `rotate(${Math.random() * 20 - 10}deg)`;
}

function randTranslation(horizontal) {
  if (horizontal) return `translateX(${Math.random() * 100 - 100}px)`;
  return `translateX(${Math.random() * 100 - 50}px)`;
}

export default SlideShow;
