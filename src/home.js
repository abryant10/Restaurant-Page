function pageLoadHome (content, dynamicContent) {
    let logoHeader = document.createElement('div');
    logoHeader.classList.add('logoHeader');
    
    let martys = document.createElement('span');
    martys.innerHTML = "Marty's";
    
    let martini = document.createElement('img');
    martini.src = 'styles/martini.png';
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
        serving the highest quality cocktails ever since. <br><br>Located in the heart of 
        Uptown Dallas, we are located along the McKinney Ave M trolly line. 
        <br><br> Join us any night of the week for a one of kind experince!`;

    let homePhotoOne = document.createElement('img');
    homePhotoOne.classList.add('homePhotoOne');
    homePhotoOne.src = 'styles/homePhotoOne.jpg';
    homePhotoOne.alt = 'three martini photos';
    homePhotoOne.width = '200';
    homePhotoOne.height = '200';

    let homePhotoTwo = document.createElement('img');
    homePhotoTwo.classList.add('homePhotoTwo');
    homePhotoTwo.src = 'styles/homePhotoTwo.jpg';
    homePhotoTwo.alt = 'charcuterie board photo';
    homePhotoTwo.width = '200';
    homePhotoTwo.height = '200';

    let homePhotoThree = document.createElement('img');
    homePhotoThree.classList.add('homePhotoThree');
    homePhotoThree.src = 'styles/homePhotoThree.jpg';
    homePhotoThree.alt = 'charcuterie board photo';
    homePhotoThree.width = '200';
    homePhotoThree.height = '200';

    let homePhotoContainer = document.createElement('div');
    homePhotoContainer.classList.add('homePhotoContainer');

    content.appendChild(logoHeader);
    logoHeader.appendChild(martys);
    logoHeader.appendChild(martini);
    content.appendChild(buttonContainer);
    buttonContainer.appendChild(homeButton);
    buttonContainer.appendChild(menuButton);
    buttonContainer.appendChild(contactButton);
    dynamicContent.appendChild(aboutBody);
    aboutBody.appendChild(bio);
    aboutBody.appendChild(homePhotoContainer);
    homePhotoContainer.appendChild(homePhotoOne);
    homePhotoContainer.appendChild(homePhotoTwo);
    homePhotoContainer.appendChild(homePhotoThree);

};

export {pageLoadHome};