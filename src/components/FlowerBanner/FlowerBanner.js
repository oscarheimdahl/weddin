import './flower-banner.scss';
import flowerBannerImg from 'Images/flower-banner.png';

export function FlowerBanner(rotated) {
  const img = document.createElement('img');
  img.src = flowerBannerImg;
  if (rotated) img.className = 'rotated';

  const img2 = document.createElement('img');
  img2.src = flowerBannerImg;
  if (rotated) img2.className = 'rotated';

  const img3 = document.createElement('img');
  img3.src = flowerBannerImg;
  if (rotated) img3.className = 'rotated';

  const img4 = document.createElement('img');
  img4.src = flowerBannerImg;
  if (rotated) img4.className = 'rotated';

  const banner = document.createElement('div');
  banner.id = 'flower-banner';
  banner.appendChild(img);
  banner.appendChild(img2);
  banner.appendChild(img3);
  banner.appendChild(img4);
  return banner;
}
