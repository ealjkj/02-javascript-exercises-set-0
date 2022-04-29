let fragment = document.createDocumentFragment();
let template = document.getElementById('template1').content;
let template2 = document.getElementById('template2').content;
let container = document.querySelector(".container"); 


fill();


function renderTemplate1(arrOfContent) {
    arrOfContent.forEach((element, index) => {
        template.querySelector('.cake-img').setAttribute("src", element.url);
        template.querySelector('.cake-text').textContent = element.text.slice(0, 400)+'...';
        template.querySelector('.cake-title').textContent = element.title;
        template.querySelector('section').setAttribute('data-index', index.toString());
        
        
        let clone = document.importNode(template, true);
        fragment.appendChild(clone);
    });

    let cloneOfFragment = document.importNode(fragment, true);
    container.appendChild(cloneOfFragment);

    container.addEventListener("click", function moveToTemplate2(e){
        let section = e.target.closest("section");
    
        let img = e.target.closest(".cake-img");    
        let info = e.target.closest(".info");

        if(img || info) {
            let elementIndex = Number(section.getAttribute('data-index'));
            location.hash = elementIndex.toString();
        }
    
    });  
}


function renderTemplate2(arrOfContent, hash) {
    let content = arrOfContent[Number(hash.slice(1))];
    let viewContainer = document.createElement('div');
    viewContainer.classList.add('cake-view-container');
    document.body.appendChild(viewContainer);

    template2.querySelector('.cake-img').setAttribute("src", content.url);
    template2.querySelector('.cake-title').textContent = content.title;
    template2.querySelector('.cake-text').textContent = content.text;
    viewContainer.appendChild(template2.cloneNode(true));


    let btn = document.getElementById('back-btn');
    btn.addEventListener('click', ()=> {
        location.hash = '';
    });
}

async function fill() {
    let data = await fetch("data.json");    
    data = await data.json();

    let listOfImgs = data["listOfImages"];
    display(listOfImgs);

    addEventListener('hashchange', () => {
        display(listOfImgs);
    });
}

function display(arrOfContent) {
    let numHash = location.hash ? Number(location.hash.slice(1)) : -1;
    if (0 <= numHash  && numHash < arrOfContent.length) {
        document.body.removeChild(container);
        renderTemplate2(arrOfContent, location.hash);
    } else {
        let viewContainers =  document.getElementsByClassName('cake-view-container');
        if(viewContainers.length !== 0) document.body.removeChild(viewContainers[0]);
        if(container.children.length === 0)  {
            renderTemplate1(arrOfContent);
        }
        document.body.appendChild(container);
    }
}
