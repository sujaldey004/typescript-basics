interface User{
    firstName : String,
    lastName : String,
    age : number
}

function play(user : User){
    if(user.age > 18 || user.age == 18){
        return true;
    }

    return false;
}

const value = play({
    firstName: "Sujal",
    lastName: "Dey",
    age: 20
})

console.log(value);