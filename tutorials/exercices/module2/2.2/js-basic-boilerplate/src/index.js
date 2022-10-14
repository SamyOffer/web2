import 'bootstrap/dist/css/bootstrap.min.css';
import './stylesheets/main.css';

import popSmoke from './img/popsmoke.jpg';

import kendrick from './img/kendrick.jpg';

renderPizzaImg(popSmoke);
renderPizzaImg(kendrick);

function renderPizzaImg(img){
    const image =  document.createElement('img');
    image.src = img;
    image.height = 500;
    const wrapper = document.getElementById('wrapper');
    wrapper.appendChild(image);
}