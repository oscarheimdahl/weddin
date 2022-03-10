import './header.scss';

const header = document.createElement('header');
header.id = 'header';

header.appendChild(menuItem('Start'));
header.appendChild(menuItem('Om'));
header.appendChild(menuItem('Yay'));

document.body.appendChild(header);

function menuItem(text) {
  const item = document.createElement('button');
  item.innerText = text;
  return item;
}
