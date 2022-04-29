'use-strict';
function A() {
    console.log("This is A");
}
function B() {
    console.log("Here it's B");
}
function C() {
    console.log("Don't forget about C");
}

function run() {
    let counter = 0;
    setInterval(()=>{
        counter++
        if(counter % 2 === 0) A();
        if(counter % 4 === 0) B();
        if(counter % 5 === 0) C();
    }, 100*15)
}

run();