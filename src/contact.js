function loadContact (dynamicContent) {
    let contactText  = document.createElement('div');
    contactText.classList.add('contactText');
    contactText.innerHTML = `ADDRESS EMAIL AND PHONE`;

    let contactFormContainer = document.createElement('div');
    contactFormContainer.innerHTML = `
        <form>
        <label for="name">Name</label>
        <br>
        <input type="text" id="name" name="name" placeholder="Your name..">
        <br>
        <label for="email">Email</label>
        <br>
        <input type="email" id="email" name="email" placeholder="Your Email..">
        <br>
        <label for="message">Message</label>
        <br>
        <textarea id="message" name="message" placeholder="..." style="height:200px"></textarea>
        <br>
        <input type="submit" value="Submit">
        </form>`;

    dynamicContent.appendChild(contactText);
    dynamicContent.appendChild(contactFormContainer);
}
export {loadContact};