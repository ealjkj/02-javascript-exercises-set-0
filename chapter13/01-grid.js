let gridDimention = 5; //5x5 grid;
let containerElement = document.getElementById("container");

// Appending grid Elements
for(let i = 0; i< gridDimention*gridDimention; i++){
    // Create Element
    let element = document.createElement('div');
    containerElement.appendChild(element);

    element.innerHTML = `<p> ${i} </p>`;
    element.classList.add("square");
    element.style.width = `${100/gridDimention}\%`;
    element.style.height = `${element.clientWidth}px`;
}


containerElement.addEventListener("click", function alertNumber(e){
    square = e.target.closest(".square");
    alert(square.textContent);
});