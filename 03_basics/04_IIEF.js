// Immediately Invocked Function Expression (IIFE)

(function chai(){
    // Named iife
    console.log(`DB CONNECED`); // Global scope se problem hota hai kai bar so we use IIFE
    
})();

( (name)=>{
    console.log(`DB CONNECED TWO ${name}`);
    
})("Sagar");