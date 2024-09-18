function play(age:number):boolean{
    if(age>18 || age ==18){
        return true;
    }

    return false;
}

const value = play(20);
console.log(value);