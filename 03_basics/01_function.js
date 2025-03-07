

function sayMyName(){
    console.log("S");
    console.log("A");
    console.log("G");
    console.log("A");
    console.log("R");
        
    }
    sayMyName() // sayMyName ->function refrence if we use () ye hai function execute
    
    // Add two numbers
    
    // function AddtwoNumbers(number1,number2) { // Parameters
    //      console.log( number1+number2);
    // }
    // const result=AddtwoNumbers(5,6) // Arguments
    // console.log(result);
    
    function AddtwoNumbers(number1,number2) { // Parameters
         return number1+number2;
    }
    const result=AddtwoNumbers(5,6) // Arguments
    console.log(result);
    
    function userloginMsg(username="sam"){
        if(username===undefined){ // if(!username)
            console.log("please enter  a user name");
            return
        }
        return `${username} Just logged in`
    }
    const name=userloginMsg("Sagar")
    console.log(name);
    
    function calculateCartprice(val1,val2,...num1){ // rest operator  in function -> spread operator in array,objects
         return num1
    }
    console.log(calculateCartprice(200,400,500,2000));
    
    const user={
        username:"Sagar",
        price:199
    }
    function handleObject(anyobject){
        console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    }
    // handleObject(user)
    handleObject({
        username:"sam",
        price:399
    })
    
    const myNewArray=[200,400,100,600]
    function returnSecondValue(getArray){
     return getArray[0]
    }
    // console.log(returnSecondValue(myNewArray))
    console.log(returnSecondValue([200,400,500,2000]))
    