'use-strict';

function addRec(arr) {
    if (arr.length === 1) return arr[0];
    return arr[0] + addRec(arr.slice(1));
}

function addRec2(array) {
    return function indexedAdd(arr, index) {
        if (index === arr.length-1) return arr[index];
        else return arr[index] + indexedAdd(arr, index + 1);
    }(array, 0);
}

//Tests
let arr = [1,3,5,7];
const sum = addRec(arr);
const sum2 = addRec2(arr);
console.log(sum);
console.log(sum2);