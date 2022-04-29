class OnlyNumber {
    #number;
    constructor(number) {
        this.value = number;
    }
    set value(number) {
        if (typeof number === 'number') {
            this.#number = number;
        } else {
            throw Error("you can only store a number");
        }    
    }
    get value() {
        return this.#number;
    }
}



//Tests
a = new OnlyNumber(20);
console.log(a.value);

// a = new OnlyNumber(15);
// a.value = 'hi'
// console.log(a.value);
