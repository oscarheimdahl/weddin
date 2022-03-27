import './flower-banner.scss';
import flowerBannerImg from 'Images/flower-banner.png';

export function FlowerBanner(rotated) {
  const img = document.createElement('img');
  img.src = flowerBannerImg;

  const img2 = document.createElement('img');
  img2.src = flowerBannerImg;

  const img3 = document.createElement('img');
  img3.src = flowerBannerImg;

  const img4 = document.createElement('img');
  img4.src = flowerBannerImg;

  const banner = document.createElement('div');
  banner.id = 'flower-banner';
  if (rotated) banner.className = 'rotated';
  banner.appendChild(img);
  banner.appendChild(img2);
  banner.appendChild(img3);
  banner.appendChild(img4);
  return banner;
}
