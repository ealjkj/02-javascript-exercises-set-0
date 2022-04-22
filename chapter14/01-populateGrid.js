let heightInputElement = document.getElementById('gridHeight');
let widthInputElement = document.getElementById('gridWidth');
let gridContainerElement = document.getElementById('grid')
let btn = document.getElementById('gridButton');

btn.addEventListener('click', function populateGrid(e) {
    while (gridContainerElement.lastChild) {
        gridContainerElement.removeChild(gridContainerElement.lastChild);
    }

    gridHeight = Number(heightInputElement.value);
    gridWidth = Number(widthInputElement.value);
    
    for(let i=0; i<gridHeight*gridWidth; i++){
        let element = document.createElement('div');
        gridContainerElement.appendChild(element);

        element.classList.add('square');
        element.style.width = `${100/gridWidth}\%`;
        element.style.paddingBottom = `${100/gridWidth}\%`;
    }
})