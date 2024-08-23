const marval_heros=["Thor","Ironman","spiderman"]
const dc_heros=["superman","flash","batman"]
 
marval_heros.push(dc_heros)
//console.log(marval_heros);
//console.log(marval_heros[3][1]);

const allHeros= marval_heros.concat(dc_heros)
//console.log(allHeros);

const all_new_heros =[...marval_heros,...allHeros]  // Spread Operator
console.log(all_new_heros);

const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array=another_array.flat(Infinity) // Important
console.log(real_another_array);

console.log(Array.isArray("Sagar"));
console.log(Array.from("Sagar"));
console.log(Array.from({name:"Sagar"}));  //Interesting

const score1 =100
const score2 =200
const score3 =300
 
console.log(Array.of(score1,score2,score3));


