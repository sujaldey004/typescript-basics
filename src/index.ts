interface user {
    name : string,
    age : number
}

function SumOfAge(user1 : user, user2 : user){
    return user1.age + user2.age;
}

const result = SumOfAge({name : "sam", age : 20}, {name : "sujal", age: 30})
console.log(result);