let btn = document.getElementById("limitedButton");
let meter = document.getElementById("meter");

function randomColor(){
    return "#"+ Math.floor(Math.random()*255*255*255).toString(16);
}

function limitedClicking(maxClicks) {
    let counter = 0;
    function limitedN(e) {
        document.body.style.backgroundColor = randomColor();
        counter++ 
        meter.setAttribute("value", `${counter/maxClicks}`);
        if(counter >= maxClicks){
            btn.removeEventListener('click', limitedN);
        }
    }
    return limitedN;
}
btn.addEventListener('click', limitedClicking(3))