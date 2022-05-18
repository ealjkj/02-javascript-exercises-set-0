'use-strict';
const gridDimention = 5; //5x5 grid;
const containerElement = document.getElementById("container");
const fragment = new DocumentFragment();

// create initial div
let initialDiv = document.createElement('div');
let indexTextElement = document.createElement('p');
initialDiv.appendChild(indexTextElement);
initialDiv.classList.add("square");
initialDiv.style.width = `${100/gridDimention}\%`;


// Appending grid Elements
for(let i = 0; i< gridDimention*gridDimention; i++){
    // Create Element
    let element = initialDiv.cloneNode(true);
    fragment.appendChild(element);    
    element.querySelector('p').textContent = i.toString();
}

containerElement.appendChild(fragment);

containerElement.addEventListener("click", function alertNumber(e){
    let square = e.target.closest(".square");
    alert(square.textContent);
});