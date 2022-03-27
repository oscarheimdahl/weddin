import './main-content.scss';
import { FlowerBanner } from '../../components/FlowerBanner/FlowerBanner';
import { pText } from 'Resources/pText';
import heartImg from 'Images/heart.png';

const introText = document.createElement('h1');
introText.innerText = 'Oscar + Tove = Sant!';

const intro = document.createElement('section');
intro.id = 'intro';
intro.appendChild(introText);

const heading = document.createElement('h2');
heading.innerHTML = '• Den 16 juli gifter vi oss<span>!</span> •';

const p = document.createElement('p');
p.innerHTML = pText;

const heart = document.createElement('img');
heart.src = heartImg;
heart.id = 'heart-img';

const container = document.createElement('section');
container.id = 'main-container';
container.appendChild(heading);
container.appendChild(p);
container.appendChild(heart);

const MainContent = document.createElement('div');
MainContent.id = 'main-content';
MainContent.appendChild(intro);
MainContent.appendChild(FlowerBanner());
MainContent.appendChild(container);
MainContent.appendChild(FlowerBanner(true));

export default MainContent;
