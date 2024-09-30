interface user {
    name : string,
    age : number
    email : string,
    address: string
}

type userProps = Pick<user, 'age' | 'name'>


type userPropsOptional = Partial<userProps>

function SumOfAge (user1 : userPropsOptional, user2 : userPropsOptional){
    const age1 = user1.age ?? 0;
    const age2 = user2.age ?? 0;
    return age1 + age2;
}

const result = SumOfAge({age: 10}, {age: 20})
console.log(result);