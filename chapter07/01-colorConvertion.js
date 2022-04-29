function hexToRgb(hexString) {
    regexp = /^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})\s*$/i
    if(!regexp.test(hexString)) throw Error('Not a valid hexString')
    return 'Rgb(' + 
            hexString
            .match(regexp)
            .slice(1)
            .map(value => parseInt(value, 16))
            .join(", ") + ')';
} 


// Tests
let testColor =  '#3020ff';
console.log(hexToRgb(testColor));


// let testColor2 = '#wxy3020FF!!!'; //Not valid
// console.log(hexToRgb(testColor2));