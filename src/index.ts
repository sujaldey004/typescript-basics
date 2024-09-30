type userss = {
    name : string,
    age : number
}

const user = new Map<string, userss>();
user.set("1", {name : "sam", age:20})
user.set("2", {name:"sujal", age:20})

const users = user.get("2")
console.log(users);


// Another syntax to creatre key value object