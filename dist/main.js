(()=>{"use strict";function e(e){let n=document.createElement("div");n.classList.add("contactContainer");let t=document.createElement("div");t.classList.add("contactText"),t.innerHTML="Phone: 214-867-5309\n    <br> <br>Address: 3219 mcKinney Ave <br>\n    Dallas, TX 75204";let a=document.createElement("div");a.innerHTML='\n        <p> Contact Us! </p>\n        <form>\n        <label for="name">Name</label>\n        <br>\n        <input type="text" id="name" name="name" placeholder="Your name..">\n        <br>\n        <label for="email">Email</label>\n        <br>\n        <input type="email" id="email" name="email" placeholder="Your Email..">\n        <br>\n        <label for="message">Message</label>\n        <br>\n        <textarea id="message" name="message" placeholder="..."></textarea>\n        <br>\n        <input type="submit" value="Submit">\n        </form>';let s=document.createElement("div");s.classList.add("embededMap"),s.innerHTML='<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d780.4697943067644!2d-96.8001712164883!3d32.80380564862067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e992cd7f3d5e7%3A0xf20fd5e324d2d106!2s3219%20McKinney%20Ave%2C%20Dallas%2C%20TX%2075204!5e0!3m2!1sen!2sus!4v1621527001462!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>',e.appendChild(n),n.appendChild(a),n.appendChild(t),n.appendChild(s)}function n(e){let n=document.createElement("div");n.classList.add("menuContainer"),n.innerHTML="<b>Drinks</b>\n    <br> \n    <br>\n    Martini&nbsp&nbsp&nbsp&nbsp\n    &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp$15<br>\n    Old Fashion&nbsp&nbsp&nbsp&nbsp $15<br>\n    Gin & Tonic&nbsp&nbsp&nbsp&nbsp&nbsp $15<br>\n    <br>\n    <br>\n    <b>Appitizers</b>\n    <br>\n    <br>\n    Charcutierie&nbsp&nbsp&nbsp&nbsp&nbsp$15<br>\n    <br>\n    <br>\n    <b>Dessert </b>\n    <br>\n    <br>\n    Cheese Cake&nbsp&nbsp&nbsp&nbsp&nbsp $15<br>\n    Tiramisu&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp\n    &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp$15<br>\n    ",e.appendChild(n)}let t=document.getElementById("content"),a=document.getElementById("dynamicContent");function s(e){for(;a.firstChild;)a.removeChild(a.lastChild);e(a)}!function(e,n){let t=document.createElement("div");t.classList.add("logoHeader");let a=document.createElement("span");a.innerHTML="Marty's";let s=document.createElement("img");s.src="/styles/martini.png",s.alt="martini glass",s.width="100",s.height="100",s.classList.add("martiniIcon");let d=document.createElement("div");d.classList.add("buttonContainer");let i=document.createElement("button");i.classList.add("navButton"),i.classList.add("homeButon"),i.id="homeButton",i.innerHTML="Home";let l=document.createElement("button");l.classList.add("navButton"),l.classList.add("menuButton"),l.id="menuButton",l.innerHTML="Menu";let o=document.createElement("button");o.classList.add("navButton"),o.classList.add("contactButton"),o.id="contactButton",o.innerHTML="Contact";let r=document.createElement("div");r.classList.add("aboutBody");let c=document.createElement("div");c.classList.add("bio"),c.innerHTML="Marty's opened in 1993 and has been \n        serving the highest quality cocktails ever since. <br><br>Located in the heart of \n        Uptown Dallas, we are located along the McKinney Ave M trolly line. \n        <br><br> Join us any night of the week for a one of kind experince!";let p=document.createElement("img");p.classList.add("homePhotoOne"),p.src="/styles/homePhotoOne.jpg",p.alt="three martini photos",p.width="200",p.height="200";let m=document.createElement("img");m.classList.add("homePhotoTwo"),m.src="/styles/homePhotoTwo.jpg",m.alt="charcuterie board photo",m.width="200",m.height="200";let b=document.createElement("img");b.classList.add("homePhotoThree"),b.src="/styles/homePhotoThree.jpg",b.alt="charcuterie board photo",b.width="200",b.height="200";let h=document.createElement("div");h.classList.add("homePhotoContainer"),e.appendChild(t),t.appendChild(a),t.appendChild(s),e.appendChild(d),d.appendChild(i),d.appendChild(l),d.appendChild(o),n.appendChild(r),r.appendChild(c),r.appendChild(h),h.appendChild(p),h.appendChild(m),h.appendChild(b)}(t,a),window.addEventListener("click",(function(t){switch(t.target.id){case"homeButton":window.location.reload(!0);break;case"menuButton":s(n);break;case"contactButton":s(e);break;default:return}}))})();