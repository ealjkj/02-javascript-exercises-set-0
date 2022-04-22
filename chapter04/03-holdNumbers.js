class onlyNumber {
    #number;

    constructor(number) {
        this.value = number;
    }
    set value(number) {
        console.log(typeof number);
        if (typeof number === 'number') {
            this.#number = number;
        } else {
            console.log("you can only store a number");
        }    
    }
    get value() {
        return this.#number;
    }
}



//Tests
a = new onlyNumber(20);
console.log(a.value);


a = new onlyNumber(15);
a.value = 'hi'
console.log(a.value);
