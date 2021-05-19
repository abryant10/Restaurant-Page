import {pageLoadHome} from './home.js';
import {loadContact} from './contact.js';
import {loadMenu} from './menu.js';

let content = document.getElementById('content');
let dynamicContent = document.getElementById('dynamicContent');

pageLoadHome(content, dynamicContent);

function buttonClicked (button) {
    while (dynamicContent.firstChild){
        dynamicContent.removeChild(dynamicContent.lastChild);
    }
    button(dynamicContent);
}

window.addEventListener('click', function (e) {
    switch (e.target.id) {
        case 'homeButton':
            window.location.reload(true);
            break;
        case 'menuButton':
            buttonClicked(loadMenu);
            break;
        case 'contactButton':
            buttonClicked(loadContact);
            break;
        default:
            return;
    }
})



