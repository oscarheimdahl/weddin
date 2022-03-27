import SlideShow from 'Components/SlideShow';
import './start-view.scss';

const welcomeInfo = document.createElement('section');
const welcome = document.createElement('h1');
const info = document.createElement('p');
welcome.innerText = 'Tove + Oscar = Sant';
info.innerText = 'Den 16 Juli gifter vi oss och vill fira den dagen med dig.';

welcomeInfo.appendChild(welcome);
welcomeInfo.appendChild(info);

welcome.innerText = 'Tove + Oscar = Sant';

const StartView = document.createElement('div');
StartView.id = 'start-view';
StartView.className = 'view';

StartView.appendChild(welcomeInfo);
StartView.appendChild(SlideShow);

export default StartView;
