function pageLoadHome (content) {
    let logoHeader = document.createElement('div');
    logoHeader.classList.add('logoHeader');
    
    let martys = document.createElement('span');
    martys.innerHTML = "Marty's";
    
    let martini = document.createElement('img');
    martini.src = '/styles/martini.jpeg';
    martini.alt = 'martini glass';
    martini.width = '100';
    martini.height = '100';

    let aboutBody = document.createElement('div');
    aboutBody.classList.add('aboutBody');

    let bio = document.createElement('div');
    bio.classList.add('bio');
    bio.innerHTML = `Marty's opened in 1991 and has been 
        serving the dirties of martinis every day since.`;

    let hours = document.createElement('div');
    hours.classList.add('hours');
    hours.innerHTML = 'Open 11:00am - 2:00am';

    content.appendChild(logoHeader);
    logoHeader.appendChild(martys);
    logoHeader.appendChild(martini);
    content.appendChild(aboutBody);
    aboutBody.appendChild(bio);
    aboutBody.appendChild(hours);

};

export {pageLoadHome};