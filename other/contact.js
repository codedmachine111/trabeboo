const form = document.getElementById('form');
const submitbtn = document.querySelector('.sub-btn');
const parentdiv = document.querySelector('.contbox');
const inpvalues = document.getElementById('values');

form.addEventListener('submit', (e) => {
e.preventDefault();
clear();
showmsg();

});

function clear(ev){
    FormData(form).value = '';
}

function showmsg(e){
 
    console.log("hey")

    const msgdiv = document.createElement("div");
    msgdiv.classList.add("messagediv");

    const title = document.createElement("h2");
    title.classList.add("msgtitle");
    title.innerHTML = "We will get back to you!"
    msgdiv.appendChild(title);

const line = document.createElement("hr");
msgdiv.appendChild(line);

    const msgtxt2 = document.createElement("p");
    msgtxt2.classList.add("msgtxt");
    msgtxt2.innerHTML="Thankyou for contacting us. You will be notfied shortly."
    msgdiv.appendChild(msgtxt2);

    parentdiv.appendChild(msgdiv);
}


