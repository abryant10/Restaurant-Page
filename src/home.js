function pageLoadHome (content, dynamicContent) {
    let logoHeader = document.createElement('div');
    logoHeader.classList.add('logoHeader');
    
    let martys = document.createElement('span');
    martys.innerHTML = "Kaila";
    
    let martini = document.createElement('img');
    martini.src = '/styles/martini.png';
    martini.alt = 'martini glass';
    martini.width = '100';
    martini.height = '100';
    martini.classList.add('martiniIcon');

    let buttonContainer = document.createElement('div');
    buttonContainer.classList.add('buttonContainer');

    let homeButton = document.createElement('button');
    homeButton.classList.add('navButton');
    homeButton.classList.add('homeButon');
    homeButton.id = 'homeButton';
    homeButton.innerHTML = 'Home';

    let menuButton = document.createElement('button');
    menuButton.classList.add('navButton');
    menuButton.classList.add('menuButton');
    menuButton.id = 'menuButton';
    menuButton.innerHTML = 'Menu';

    let contactButton = document.createElement('button');
    contactButton.classList.add('navButton')
    contactButton.classList.add('contactButton');
    contactButton.id = 'contactButton';
    contactButton.innerHTML = 'Contact';

    let aboutBody = document.createElement('div');
    aboutBody.classList.add('aboutBody');

    let bio = document.createElement('div');
    bio.classList.add('bio');
    bio.innerHTML = `Marty's opened in 1993 and has been 
        serving the dirtiest of martinis ever since.`;

    let hours = document.createElement('div');
    hours.classList.add('hours');
    hours.innerHTML = 'Open 11:00am - 2:00am';

    content.appendChild(logoHeader);
    logoHeader.appendChild(martys);
    logoHeader.appendChild(martini);
    content.appendChild(buttonContainer);
    buttonContainer.appendChild(homeButton);
    buttonContainer.appendChild(menuButton);
    buttonContainer.appendChild(contactButton);
    dynamicContent.appendChild(aboutBody);
    aboutBody.appendChild(bio);
    aboutBody.appendChild(hours);

};

export {pageLoadHome};