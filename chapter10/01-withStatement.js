var myLib = {
    math: {
        real:{
            add: function(a,b){ return a+b},
            sub: function(a,b){ return a-b},
            mul: function(a,b){ return a*b},
        },

        complex: {

            Num: function(real,img){
                this.real = real;
                this.img = img;
            },
            sub: function(a,b){
                return new myLib.math.complex.Num(a.real - b.real, a.img - b.img);
            },
            mul: function(a,b){
                return new myLib.math.complex.Num(a.real*b.real - a.img*b.img, a.real*b.img + b.real*a.img);
            },
        },

        matrix: {
            add: function(a,b){return `adding matrices ${a} and ${b}`},
            sub: function(a,b){return `substracting matrices ${a} and ${b}`},
            mul: function(a,b){return `multiplying matrices ${a} and ${b}`},
            eye: function(size){return `<I>_${size}`},
            dot: function(m,a){return `dot product of ${m} and ${a}`},
            times: function(a,b){return `Element-wise multiplication of ${a} and ${b}`},
        }
    }
}

// Original long calls
console.log("Long calls -----------------------------------------------------\n↓↓");
var answer = myLib.math.real.sub(
    myLib.math.real.add (20, 22), 
    myLib.math.real.mul(2,5));

var ans = myLib.math.matrix.times(
            myLib.math.matrix.eye(4),
            myLib.math.complex.sub(
                new myLib.math.complex.Num(
                    myLib.math.real.add(5,2),
                    -3
                ),
                new myLib.math.complex.Num(3,4)
            )
);

console.log(answer);
console.log(ans);
console.log("\n\n");

// Short Calls Using with
console.log("Short Calls using with ----------------------------------------------\n↓↓");
with(myLib.math.real) {
    var answer = sub(add(20,22), mul(2,5));
}

with(myLib.math) {
    var ans = matrix.times(
        matrix.eye(4),
        complex.sub(
            new complex.Num(real.add(5,2),-3), 
            new complex.Num(3,4)
        )
    )
}
console.log(answer)
console.log(ans);
console.log("\n\n");


// Short Calls using with second solution
console.log("Short Calls using with second solution ----------------------------------------------\n↓↓");
with(myLib.math) {
    var answer = real.sub(real.add(20,22), real.mul(2,5));

    var ans = matrix.times(
        matrix.eye(4),
        complex.sub(
            new complex.Num(real.add(5,2),-3), 
            new complex.Num(3,4)
        )
    )
}
console.log(answer)
console.log(ans);
console.log("\n\n");


// Short Calls using without the "with" statement
console.log("Short Calls using without the 'with' statement ----------------------------------------------\n↓↓");

let { real, complex, matrix} = myLib.math; 
var answer = real.sub(real.add(20,22), real.mul(2,5));

var ans = matrix.times(
    matrix.eye(4),
    complex.sub(
        new complex.Num(real.add(5,2),-3), 
        new complex.Num(3,4)
    )
)
console.log(answer)
console.log(ans);
console.log("\n\n");
