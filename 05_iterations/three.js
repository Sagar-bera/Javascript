// ["","",""]
// [{},{},{}]

const arr = [1,2,3,4,5]
for (const i of arr) {
    console.log(arr);
    
}
const grettings='hello world';
for (const i of grettings) {
    console.log(i);
}

//maps

const map = new Map()
map.set('IN',"India")
map.set('US',"United state of India")
map.set('FR',"France")
console.log(map);

for (const [key,value] of map) {
    console.log(key,':->',value);
    
}

const myObject={
     Game1:'NFS',
    game2:'Spiderman'
}
// for (const [key,value] of myObject) {  // Ye nehi chalega
//         console.log(key,':->',value);
    
//     }