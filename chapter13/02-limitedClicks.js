let btn = document.getElementById("limitedButton");
let meter = document.getElementById("meter");
let maxClicks = 3;
let counter = 0;

function randomColor(){
    return "#"+ Math.floor(Math.random()*255*255*255).toString(16);
}

btn.addEventListener('click', function limitedClicking(e){
    document.body.style.backgroundColor = randomColor();
    counter++
    meter.setAttribute("value", `${counter/maxClicks}`);
    if(counter === maxClicks){
        btn.removeEventListener('click', limitedClicking);
    }
})