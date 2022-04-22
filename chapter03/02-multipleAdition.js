function add(...args) {
    return args.reduce((a,b)=> a+b)
}

// Tests
var answer = add(1,2) + add(1, 4, 6, 7, 2);
console.log(answer);