import './header.scss';

const Header = document.createElement('header');
Header.id = 'header';

Header.appendChild(menuItem('Start'));
Header.appendChild(menuItem('Om'));
Header.appendChild(menuItem('Yay'));

function menuItem(text) {
  const item = document.createElement('button');
  item.innerText = text;
  return item;
}

export default Header;
