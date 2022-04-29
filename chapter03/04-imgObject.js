'use strict';
class Image {
    constructor(data, width, height, name) {
        if(width*height !== data.length) throw Error('width * height sould represent the size of data');
        this.data = data;
        this.width = width;
        this.height = height;
        this.name = name;
    }

    pixelData(x,y) {
        if(x >= this.width || y >= this.height) throw Error('Position out of range'); 
        return this.data[this.width*y + x]; 
    }
}

// Tests
var  data = new Array(1600);
var img = new Image(data, 40, 40, 'myImage')
console.log(img.width);
console.log(img.height);
console.log(img.name);
console.log(img.pixelData(20, 4));
// console.log(img.pixelData(40, 35)); // Will throw an error