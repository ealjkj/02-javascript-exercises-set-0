function distance(...args) {
    if(args.length   === 4) {
        let [x1, y1, x2, y2] = args;
        return Math.sqrt((x1-x2)*(x1-x2) + (y1-y2)*(y1-y2));
    }

    else if(args.length === 6){
        let [x1, y1, z1, x2, y2, z2] = args;
        return Math.sqrt((x1-x2)*(x1-x2) + (y1-y2)*(y1-y2) + (z1-z2)*(z1-z2));
    } 
    else if(args.length < 4) throw Error('Insufficient parameters');
    else {
        throw Error('Invalid input');
    }
}



// Tests
var x1 = 1, y1 = 2, z1 = 1;
var x2 = 2, y2 = 2, z2 = 4;
var delta1 = distance (x1, y1, x2, y2); // delta = 1
var delta2 = distance (x1, y1, z1, x2, y2, z2); // delta = 3.1622…

console.log(delta1)
console.log(delta2)

