function dataType(...args) {
    console.log(args.map(value => extendedTypeOf(value)).join(", "));
}

function extendedTypeOf(value) {
    if (value instanceof Array) return 'array';
    else if(typeof value === 'number' && !Number.isInteger(value)) return 'float';
    return typeof value; 
}

// Tests
dataType(1, 6.2831, "pi*2", [function(){}, 1], {}, function () {});