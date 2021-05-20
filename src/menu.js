function loadMenu (dynamicContent) {
    let menuContainer  = document.createElement('div');
    menuContainer.classList.add('menuContainer');
    menuContainer.innerHTML = `<b>Drinks</b>
    <br> 
    <br>
    Martini&nbsp&nbsp&nbsp&nbsp
    &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp$15<br>
    Old Fashion&nbsp&nbsp&nbsp&nbsp $15<br>
    Gin & Tonic&nbsp&nbsp&nbsp&nbsp&nbsp $15<br>
    <br>
    <br>
    <b>Appitizers</b>
    <br>
    <br>
    Charcutierie&nbsp&nbsp&nbsp&nbsp&nbsp$15<br>
    <br>
    <br>
    <b>Dessert </b>
    <br>
    <br>
    Cheese Cake&nbsp&nbsp&nbsp&nbsp&nbsp $15<br>
    Tiramisu&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
    &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp$15<br>
    `;

    dynamicContent.appendChild(menuContainer);
}
export {loadMenu};