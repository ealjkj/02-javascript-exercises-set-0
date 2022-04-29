const heightInputElement = document.getElementById('gridHeight');
const widthInputElement = document.getElementById('gridWidth');
const containerElement = document.getElementById('container');
const btn = document.getElementById('gridButton');

let gridContainerElement = document.getElementById('grid');

btn.addEventListener('click', function populateGrid(e) {
    let fragment = new DocumentFragment();
    containerElement.removeChild(gridContainerElement);

    gridContainerElement = document.createElement('div');
    gridContainerElement.setAttribute('id', 'grid');

    let gridHeight = Number(heightInputElement.value);
    let gridWidth = Number(widthInputElement.value);

    // Making a square to clone;
    let square = document.createElement('div');
    square.classList.add('square');
    square.style.width = `${100/gridWidth}\%`;
    square.style.paddingBottom = `${100/gridWidth}\%`;

    for(let i=0; i<gridHeight*gridWidth; i++){
        let element = square.cloneNode(true);
        gridContainerElement.appendChild(element);
    }
    fragment.appendChild(gridContainerElement);
    containerElement.appendChild(fragment);
})