function fibonacci(n) {
    let memo = {};
    return function recFib(n){
        if(n == 1 || n==2) return 1;
        else if(n in memo) {
            return memo[n];
        }
        else {
            memo[n] = recFib(n-1) + recFib(n-2);
            return memo[n];
        }
    }(n);
}

// function expensiveFibonacci(n) {
//     console.log('Hi', n);
//     if(n===1 || n===2) return 1;
//     else return expensiveFibonacci(n-1) + expensiveFibonacci(n-2);
// }


//Tests
var n = fibonacci(4);
var m = fibonacci(9);
console.log(n,m);