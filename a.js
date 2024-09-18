"use strict";
function play(age) {
    if (age > 18 || age == 18) {
        return true;
    }
    return false;
}
const value = play(20);
console.log(value);
