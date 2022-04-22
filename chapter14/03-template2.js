let container =  document.getElementsByClassName('cake-view-container')[0];
let template2 = document.getElementById('template2').content;

template2.querySelector('.cake-img').setAttribute("src", localStorage.getItem("src"));
template2.querySelector('.cake-title').textContent = localStorage.getItem("title");
template2.querySelector('.cake-text').textContent = localStorage.getItem("text");

container.appendChild(template2);