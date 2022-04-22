function printAttr(el, attrList) {
    for(let attribute of attrList){
        console.log(el.getAttribute(attribute));
    }
}

let el = document.getElementById("a");


//Tests
printAttr (el, ['id', 'class', 'style', 'val']);

