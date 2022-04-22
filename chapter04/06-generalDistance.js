function distance(...args) {
    let points;
    if(args[0] instanceof Array && args[0].length === args[1].length) points = args[0].concat(args[1]);
    else points = args;
    
    if(points.length === 4) {
        let [x1, y1, x2, y2] = points;
        return Math.sqrt((x1-x2)*(x1-x2) + (y1-y2)*(y1-y2));
    }

    else if(points.length === 6){
        let [x1, y1, z1, x2, y2, z2] = points;
        return Math.sqrt((x1-x2)*(x1-x2) + (y1-y2)*(y1-y2) + (z1-z2)*(z1-z2));
    } 
    else {
        throw Error('Incompatible point data');
    }
}



// Tests
var delta1 = distance (1, 2, 2, 2); // returns 1 (done as part of exercise 5)
var delta2 = distance ([1,2], [2,2]); // returns 1

console.log(delta1)
console.log(delta2)

distance ([1,2], [2,2,4]); // error: incompatible point data
