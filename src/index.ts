// type user = {
//     name : string,
//     age : number
// }

// const userProp : user = {
//     name : "sam",
//     age : 20
// }

// userProp.age = 21;  // we can change props of object and arrays like this 

// console.log(userProp.age);

type user = {
    name : string,
    age : number
}

const userProp : Readonly<user> = {
    name : 'sam',
    age : 20
}

userProp.age(21); // Now we can't change this because we used Readonly api here
console.log(userProp)