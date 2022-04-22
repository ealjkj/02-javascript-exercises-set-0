function hexToRgb(hexString) {
    regexp = /([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})/
    return 'Rgb(' + 
            hexString
            .match(regexp)
            .slice(1)
            .map(value => parseInt(value, 16))
            .join(", ") + ')';
} 


// Tests
let testColor = '#3020ff';
console.log(hexToRgb(testColor));