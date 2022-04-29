'use-strict';
const gridDimention = 5; //5x5 grid;
const containerElement = document.getElementById("container");
const fragment = new DocumentFragment();

// Appending grid Elements
for(let i = 0; i< gridDimention*gridDimention; i++){
    // Create Element
    let element = document.createElement('div');
    fragment.appendChild(element);
    // containerElement.appendChild(element);
    
    element.innerHTML = `<p> ${i} </p>`;
    element.classList.add("square");
    element.style.width = `${100/gridDimention}\%`;

    
}

containerElement.appendChild(fragment);

containerElement.addEventListener("click", function alertNumber(e){
    let square = e.target.closest(".square");
    alert(square.textContent);
});