function addRec(arr) {
    console.log(arr);
    if (arr.length === 1) return arr[0];
    return arr[0] + addRec(arr.slice(1));
}

//Tests
var arr = [1,3,5,7];
var sum = addRec(arr);
console.log(sum);