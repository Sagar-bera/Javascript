// Objects creation type -> Litrel and constructor
// Singleton(from ctor to Obj)

// Objects literals

// Object.create // Ctor singletone Method

const mySym=Symbol("key1")

const jsUser={
    name:"Sagar",
    "fullname":"Sagar Bera",
    age:22,
    [mySym]:"mykey1",        
    location:"kolkata",
    email:"Sagar@gmail.com",
    isLoggedIn:false,
    lastLogin:["Monday","saturday"]
}

console.log(jsUser.age);
console.log(jsUser["age"]);
console.log(jsUser["fullname"]);
console.log( jsUser[mySym]);

jsUser.email="sagar.me@gmail.com"
console.log(jsUser);
// Object.freeze(jsUser)
jsUser.email="bera.me@gmail.com"
console.log(jsUser);

jsUser.greeting=function(){
    console.log("Hello js user");
}
console.log(jsUser.greeting());
jsUser.greetingtwo=function(){
    console.log(`Hello js user,${this.name}`);
}
console.log(jsUser.greetingtwo());