function loadContact (dynamicContent) {
    let contactContainer = document.createElement('div');
    contactContainer.classList.add('contactContainer');

    let contactText  = document.createElement('div');
    contactText.classList.add('contactText');
    contactText.innerHTML = `Phone: 214-867-5309
    <br> <br>Address: 3219 mcKinney Ave <br>
    Dallas, TX 75204`;

    let contactFormContainer = document.createElement('div');
    contactFormContainer.innerHTML = `
        <p> Contact Us! </p>
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
        <textarea id="message" name="message" placeholder="..."></textarea>
        <br>
        <input type="submit" value="Submit">
        </form>`;

    let embededMap = document.createElement('div');
    embededMap.classList.add('embededMap');
    embededMap.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d780.4697943067644!2d-96.8001712164883!3d32.80380564862067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e992cd7f3d5e7%3A0xf20fd5e324d2d106!2s3219%20McKinney%20Ave%2C%20Dallas%2C%20TX%2075204!5e0!3m2!1sen!2sus!4v1621527001462!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`;
    
    dynamicContent.appendChild(contactContainer);
    contactContainer.appendChild(contactFormContainer);
    contactContainer.appendChild(contactText);
    contactContainer.appendChild(embededMap);
    
}
export {loadContact};