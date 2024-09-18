function play(fn:Function, timeout:number){
    setTimeout(()=>{
        fn()
    }, timeout);
}

play(()=>{
    console.log("Hello Sam");
}, 1000)