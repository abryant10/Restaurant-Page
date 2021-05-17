import {pageLoadHome} from './home.js';
import {loadContact} from './contact.js';

let content = document.getElementById('content');
let dynamicContent = document.getElementById('dynamicContent');

pageLoadHome(content, dynamicContent);

function contactClicked () {
    while (dynamicContent.firstChild){
        dynamicContent.removeChild(dynamicContent.lastChild);
    }
    loadContact(dynamicContent);
}


window.addEventListener('click', function (e) {
    switch (e.target.id) {
        case 'homeButton':
            window.location.reload(true);
            break;
        case 'menuButton':
            console.log('menu');
            break;
        case 'contactButton':
            contactClicked();
            break;
        default:
            return;
    }
})



