// object destructuring

const person = {
    name : "Habib",
    age : 10,
    friends : ["Korim", "Rahim", "Jabbar"],
}

// const age = person.age;
// console.log(age);


// const {age, friends} = person;

// console.log(age);
// console.log(friends);
// console.log(friend); // undefined


// array destructuring

const names = ["korim", 10, "hey, how are you?"];

// const name = names[0];
// const age = names[1];


const [age, name, description] = names;

console.log(age, name, description);