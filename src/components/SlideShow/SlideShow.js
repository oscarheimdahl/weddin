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

const SlideShow = document.createElement('div');
SlideShow.id = 'slide-show';

// const images = [];
const imageSrcs = [w1, w2, w3, w4, w5, h6, h7, h8].sort(() => Math.random() - 0.5);

imageSrcs.forEach((imgSrc) => {
  const img = document.createElement('img');
  img.src = imgSrc;
  SlideShow.appendChild(img);
  img.addEventListener('load', () => setHorizonal(img));
});

function setHorizonal(img) {
  console.log(img.width, img.height);
  img.className = img.naturalWidth > img.naturalHeight ? 'horizontal' : '';
}

export default SlideShow;
