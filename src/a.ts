function play<T>(arg:T[]): T{
    return arg[0];
}

const value = play(["sam", "sujal"])
const anotherValue = play([1, 2])
console.log(value.toUpperCase());
console.log(anotherValue);