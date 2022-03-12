import './flower-banner.scss';
export function FlowerBanner(rotated) {
  const banner = document.createElement('div');
  banner.id = 'flower-banner';
  if (rotated) banner.className = 'rotated';
  return banner;
}
