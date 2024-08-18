//stack(Primitive) , Heap(Non-Primitive)
let myYoutube = "sagar.youtube.com"
let anothername = myYoutube

anothername = "SB Music";
console.log(myYoutube);
console.log(anothername);

let userOne = {
    email: "sagar@gmail.com",
    upi: "upi@sbi",
}
let userTwo = userOne;
userTwo.email = "bera@gmail.com";

console.log(userOne.email);
console.log(userTwo.email);

