interface user {
    name : string,
    age : number
}

type userProps = Pick<user, 'age'>

function SumOfAge (user1 : userProps, user2 : userProps){
    return user1.age + user2.age;
}

const result = SumOfAge({age: 20}, {age: 20})
console.log(result);