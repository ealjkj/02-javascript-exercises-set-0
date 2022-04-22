function printObjProp(obj, justOwnProps) {
    let props = []
    for(let prop in obj) {
        if (justOwnProps && !obj.hasOwnProperty(prop)) continue;
        props.push(prop)
    }
    console.log(props.join(" "));
}


//Tests
function CustomObject (a, b) {
    this.a = a;
    this.b = b;
}
CustomObject.prototype.c = function () { return this.a + this.b; };

var obj = new CustomObject (1, 2);
printObjProp (obj); // output: a, b, c
printObjProp (obj, false); // output: a, b, c
printObjProp (obj, true); // output: a, b
