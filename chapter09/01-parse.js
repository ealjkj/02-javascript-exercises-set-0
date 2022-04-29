'use strict';

function dataParse(stringWithCode) {
    let obj;
    eval('obj = ' + stringWithCode);
    return obj;
}


// Tests
var str1 = "{prop1: 42, myFn: function(a, b) { return a+b+this.prop1;}, myFn2: function(a, b) { return a+b+this.prop1;}}";
var str2 = "{myFn: function(a, b) { return a+b}}";
var str3 = "{prop1: 42}";
var str4 = "{myFn: () => {return 'hi'}}";

var obj1 = dataParse(str1);
var obj2 = dataParse(str2);
var obj3 = dataParse(str3);
var obj4 = dataParse(str4);



console.log(obj1.myFn2(3,4)); //49
console.log(obj2.myFn(5,6)); //11
console.log(obj3.prop1); //42
console.log(obj4.myFn()); // 'hi'

