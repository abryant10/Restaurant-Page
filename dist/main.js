(()=>{"use strict";let e=document.getElementById("content"),t=document.getElementById("dynamicContent");!function(e,t){let n=document.createElement("div");n.classList.add("logoHeader");let a=document.createElement("span");a.innerHTML="Marty's";let d=document.createElement("img");d.src="/styles/martini.jpeg",d.alt="martini glass",d.width="100",d.height="100";let l=document.createElement("div");l.classList.add("buttonContainer");let i=document.createElement("button");i.classList.add("navButton"),i.id="homeButton",i.innerHTML="Home";let o=document.createElement("button");o.classList.add("navButton"),o.id="menuButton",o.innerHTML="Menu";let m=document.createElement("button");m.classList.add("navButton"),m.id="contactButton",m.innerHTML="Contact";let c=document.createElement("div");c.classList.add("aboutBody");let r=document.createElement("div");r.classList.add("bio"),r.innerHTML="Marty's opened in 1991 and has been \n        serving the dirtiest of martinis every day since.";let s=document.createElement("div");s.classList.add("hours"),s.innerHTML="Open 11:00am - 2:00am",e.appendChild(n),n.appendChild(a),n.appendChild(d),e.appendChild(l),l.appendChild(i),l.appendChild(o),l.appendChild(m),t.appendChild(c),c.appendChild(r),c.appendChild(s)}(e,t),window.addEventListener("click",(function(e){switch(e.target.id){case"homeButton":window.location.reload(!0);break;case"menuButton":console.log("menu");break;case"contactButton":!function(){for(;t.firstChild;)t.removeChild(t.lastChild);!function(e){let t=document.createElement("div");t.classList.add("contactText"),t.innerHTML="ADDRESS EMAIL AND PHONE";let n=document.createElement("div");n.innerHTML='\n        <form>\n        <label for="name">Name</label>\n        <br>\n        <input type="text" id="name" name="name" placeholder="Your name..">\n        <br>\n        <label for="email">Email</label>\n        <br>\n        <input type="email" id="email" name="email" placeholder="Your Email..">\n        <br>\n        <label for="message">Message</label>\n        <br>\n        <textarea id="message" name="message" placeholder="..." style="height:200px"></textarea>\n        <br>\n        <input type="submit" value="Submit">\n        </form>',e.appendChild(t),e.appendChild(n)}(t)}();break;default:return}}))})();