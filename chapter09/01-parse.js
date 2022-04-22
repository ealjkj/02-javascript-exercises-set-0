function dataParse(stringWithCode) {
    arrOfFuncs = [];
    // match = stringWithCode.match(/(\w+\s*:\s*(function|\(\)).*),.*:/);
    let regexForFuncsAtTheMiddle = /(\w+)\s*:\s*((function|\().*),(.*:)/
    let regexForFuncsAtTheEnd = /(\w+)\s*:\s*((function|\().*)}$/
    match = regexForFuncsAtTheMiddle.exec(stringWithCode);
    methods = {}
    // Store functions in the middle of the String, and remove them from the string
    while (regexForFuncsAtTheMiddle.test(stringWithCode)) {
        [fnName, fnDef] = stringWithCode.match(regexForFuncsAtTheMiddle).slice(1,3);
        methods[fnName] = fnDef;
        stringWithCode = stringWithCode.replace(regexForFuncsAtTheMiddle, '$4');
    }   
    // Store the last function if Any
    if(regexForFuncsAtTheEnd.test(stringWithCode)) {
        [fnName, fnDef] = stringWithCode.match(regexForFuncsAtTheEnd).slice(1,3);
        methods[fnName] = fnDef;
        stringWithCode = stringWithCode.replace(regexForFuncsAtTheEnd, '}');
    }
    
    // Remove the last coma in case is needed
    lastCommaIndex = stringWithCode.lastIndexOf(',');
    if (lastCommaIndex !== -1) {
        stringWithCode = stringWithCode.slice(0,lastCommaIndex) + '}';
    }

    // We add "" to all prop names in order to parse
    stringWithCode = stringWithCode.replace(/(\w+): /g, '"$1":');
    obj = JSON.parse(stringWithCode);

    for(let methodName in methods) {
        eval('obj.' + methodName +'='+methods[methodName]);
    }
    return obj;
}  

// Tests
var str1 = "{prop1: 42, myFn: function(a, b) { return a+b+this.prop1;}, myFn2: function(a, b) { return a+b+this.prop1;}}"
var str2 = "{myFn: function(a, b) { return a+b}}"
var str3 = "{prop1: 42}"
var str4 = "{myFn: () => {return 'hi'}}"

var obj1 = dataParse(str1);
var obj2 = dataParse(str2);
var obj3 = dataParse(str3);
var obj4 = dataParse(str4);



console.log(obj1.myFn2(3,4)); //49
console.log(obj2.myFn(5,6)); //11
console.log(obj3.prop1); //42
console.log(obj4.myFn()); // 'hi'

