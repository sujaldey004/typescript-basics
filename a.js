"use strict";
function play(fn, timeout) {
    setTimeout(() => {
        fn();
    }, timeout);
}
play(() => {
    console.log("Hello Sam");
}, 1000);
