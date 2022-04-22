async function fill() {
    let data = await fetch("03-data.json");    
    data = await data.json();

    let listOfImgs = data["listOfImages"];
    

    listOfImgs.forEach((element, index) => {
        template.querySelector('.cake-img').setAttribute("src", element.url);
        template.querySelector('.cake-text').textContent = element.text.slice(0, 400)+'...';
        template.querySelector('.cake-title').textContent = element.title;
        template.querySelector('section').setAttribute('data-index', index.toString());
        
        
        let clone = document.importNode(template, true);
        fragment.appendChild(clone);
    });

    container.appendChild(fragment);


    container.addEventListener("click", function moveToTemplate2(e){
        let section = e.target.closest("section");
    
        let img = e.target.closest(".cake-img");    
        let info = e.target.closest(".info");
    
        if(img || info) {
            
            let src = section.querySelector('.cake-img').getAttribute("src");
            let title = section.querySelector('.cake-title').textContent;
            let elementIndex = Number(section.getAttribute('data-index'));
            let text = listOfImgs[elementIndex]['text'];

    
            localStorage.setItem("src", src);
            localStorage.setItem("title", title);
            localStorage.setItem("text", text);
            location.href = '03-cakeSection.html';
        }
    
    })  




}

let fragment = document.createDocumentFragment();
let template = document.getElementById('template1').content;
let container = document.querySelector(".container");


fill();






