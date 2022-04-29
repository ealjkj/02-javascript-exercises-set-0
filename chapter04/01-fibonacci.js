'use strict';
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


//Tests
const n = fibonacci(4);
const m = fibonacci(9);
console.log(n,m);