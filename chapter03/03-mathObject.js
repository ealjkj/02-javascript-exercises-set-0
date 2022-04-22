myMath = {
    add: function(...args) {
        return args.reduce((a,b)=> a+b)
    },

    mul: function(...args) {
        return args.reduce((a,b)=> a*b)
    },

    fact: function(n) {
       ans = 1;
       for(let i = 1; i <= n; i++){
           ans*=i;
       } 
       return ans;
    }
}


//Tests
var a = myMath.add(1,2,3);
var b = myMath.mul(1,2,3);
var c = myMath.fact(3);

console.log(a,b,c);
