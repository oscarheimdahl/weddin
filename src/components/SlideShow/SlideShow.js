import './slide-show.scss';
import { waitForElm } from 'Resources/utils';

import w1 from 'Images/slideshow/1.jpg';
import w2 from 'Images/slideshow/2.jpg';
import w3 from 'Images/slideshow/3.jpg';
import w4 from 'Images/slideshow/4.jpg';
import w5 from 'Images/slideshow/5.jpg';
import h6 from 'Images/slideshow/6.jpg';
import h7 from 'Images/slideshow/7.jpg';
import h8 from 'Images/slideshow/8.jpg';
import h9 from 'Images/slideshow/9.jpg';
import h10 from 'Images/slideshow/10.jpg';
import h11 from 'Images/slideshow/11.jpg';
import h12 from 'Images/slideshow/12.jpg';
import h13 from 'Images/slideshow/13.jpg';
import h14 from 'Images/slideshow/14.jpg';
import h15 from 'Images/slideshow/15.jpg';

const SlideShow = document.createElement('div');
SlideShow.id = 'slide-show';

// const images = [];
const imageSrcs = [w1, w2, w3, w4, w5, h6, h7, h8, h9, h10, h11, h12, h13, h14, h15].sort(() => Math.random() - 0.5);

imageSrcs.forEach((imgSrc) => {
  const img = document.createElement('img');
  img.src = imgSrc;
  img.className = 'slideshow-img';
  SlideShow.appendChild(img);
  img.addEventListener('load', () => setHorizonal(img));
});

setTimeout(() => {
  const imgs = document.querySelectorAll('.slideshow-img');
  imgs.forEach((img) => {
    img.addEventListener('mouseover', () => {
      imgs.forEach((allImg) => {
        allImg.style.animationPlayState = 'paused';
      });
    });
    img.addEventListener('mouseout', () => {
      imgs.forEach((allImg) => {
        allImg.style.animationPlayState = 'running';
      });
    });
  });
});

function setHorizonal(img) {
  if (img.naturalWidth > img.naturalHeight) img.classList.add('horizontal');
}

export default SlideShow;
