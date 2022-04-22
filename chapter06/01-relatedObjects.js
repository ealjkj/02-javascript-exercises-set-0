class Shape {
    constructor(edges) {
        if(edges.length < 3) throw Error('You need at least three sides!')
        let counter = {};
        for(let edge of edges) {
            if(edge[0] in counter) counter[edge[0]] +=1;
            else counter[edge[0]] = 1;
            if(edge[1] in counter) counter[edge[1]] +=1;
            else counter[edge[1]] = 1;
        }
        console.log(counter);
        for(let key in counter) {
            if(counter[key] !== 2) throw Error('not a valid shape');
        }
        this.edges = edges
    }

    display() {
        const canvas = document.querySelector('#canvas');
        const ctx = canvas.getContext('2d');


        ctx.strokeStyle = 'brown';
        ctx.lineWidth = 3;

  
        ctx.beginPath();
        ctx.moveTo(...this.edges[0][0]);
        for(let edge of this.edges) {
            ctx.lineTo(...edge[1]);
        }
        ctx.stroke();
    }
}

class Quadrilateral extends Shape {
    constructor(edges){
        //quadrilateral validation
        if(edges.length!= 4) throw Error('please insert exactly 4 edges');
        super(edges)
    }

    get area() {
        return Math.abs(edges.map(edge=> {
            let [x1, y1] = edge[0];
            let [x2, y2] = edge[1];
            return x1*y2 - y1*x2;
        }).reduce((a,b)=> a+b)/2);
    }
}

class Square extends Quadrilateral {
    constructor(edges) {
        let [x1, y1] = edges[0][0];
        let [x2, y2] = edges[0][1];
        let size = Math.sqrt((x1-x2)*(x1-x2) + (y1-y2)*(y1-y2));  

        let isRomb = edges.reduce((actual,edge)=> {
            let [x1, y1] = edge[0];
            let [x2, y2] = edge[1];
            return actual && size === Math.sqrt((x1-x2)*(x1-x2) + (y1-y2)*(y1-y2));
        }, true);
       
        if (!isRomb) throw Error('The sizes must be the same');
        super(edges);
        this.size = size;

    }

    get area() {
        let [x1, y1] = edges[0][0];
        let [x2, y2] = edges[0][1];
        return this.size*this.size;
    }
}

class Triangle extends Shape {
    constructor(edges){
        //quadrilateral validation
        if(edges.length!= 3) throw Error('please insert exactly 3 edges');
        super(edges)
    }
    get area() {
        return Math.abs(edges.map(edge=> {
            let [x1, y1] = edge[0];
            let [x2, y2] = edge[1];
            return x1*y2 - y1*x2;
        }).reduce((a,b)=> a+b)/2);
    }
}

// Tests
let edges = [
    [[100,100],[100,200]],
    [[100,200],[200,200]],
    [[200,200],[200,100]], 
    [[200,100],[100,100]]
]
let myShape = new Square(edges)
myShape.display();
console.log('area', myShape.area);