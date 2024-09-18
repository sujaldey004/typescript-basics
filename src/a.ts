// Basic ts file
function play(fn:()=>void, timeout:number){
    setTimeout(()=>{
        fn()
    }, timeout);
}

play(()=>{
    console.log("Hello Sam");
}, 1000)