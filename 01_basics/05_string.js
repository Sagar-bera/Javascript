const name ="Sagar";
const repoCount = 10;
//console.log(name+repoCount+" value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
const gameName = new String("Sagar-bera")
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase);
console.log(gameName.charAt(2));
console.log(gameName.indexOf('g'));


const newStr=gameName.substring(0,4)
console.log(newStr);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   Sagar    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://sagar.com/sagar%20bera"

console.log(url.replace('%20', '-'))

console.log(url.includes('Sagar'))

console.log(gameName.split('-'));




