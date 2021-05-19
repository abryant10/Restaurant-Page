function loadMenu (dynamicContent) {
    let menuContainer  = document.createElement('div');
    menuContainer.classList.add('menuContainer');
    menuContainer.innerHTML = `Drinks
    <br> 
    Appitizers
    <br>
    Entres
    `;

    dynamicContent.appendChild(menuContainer);
}
export {loadMenu};