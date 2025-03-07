const user ={
    username:"Sagar",
    price:999,

    welconeMsg:function(){
        console.log(`${this.username} welcome to website`);
        console.log(this);
        
        
    }
}
user.welconeMsg()
user.username="sam"
user.welconeMsg()
 
console.log(this);

// function chai(){
//     const username="Sagar"
//     console.log(this.username);  // we cannot access this in the function it only accessible in object
// }
// chai()

// const chai =function(){
//     let username="Sagar"
//     console.log(this.username);     //  we cannot access this in the function it only accessible in object
// }
// chai()

const chai =()=>{        //  Arrow function
    let username = "Sagar Bera"
    console.log(this);
    
}
chai()


// const addTwo=(num1,num2)=>{ // Explicitly return
//     return num1+num2
// }
// const addTwo=(num1,num2)=> num1+num2   // Implecit return
// const addTwo=(num1,num2)=> (num1+num2 )  // Implecit return
const addTwo=(num1,num2)=> ({username:"Sagar"})  // Implecit return

console.log(addTwo(10,11));