class Image {
    constructor(data, width, height, name) {
        this.data = data;
        this.width = width;
        this.height = height;
        this.name = name;
    }

    pixelData(x,y) {
       return this.width*y + x; 
    }
}