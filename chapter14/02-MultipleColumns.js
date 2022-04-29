const layoutSelectionElement = document.getElementById('layout-selection');
const containerElement = document.getElementById('container');
layoutSelectionElement.addEventListener('click', function changeLayout(e) {
    let btn = e.target.closest("button");
    if(btn){
        containerElement.style.columnCount = btn.getAttribute("data-columns");
    }
})