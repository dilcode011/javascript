// ASYNCHRONOUS JS
     //=>JS IS SYNCHRONOUS
    //=>ONE BY ONE  
    /*
               Having Pause
                    |
        ---                   ---
        |           |            |
    Network    Write/Read     Time Fn
    Calls         Files
    */



// IT IS IN SERIALWISE
console.log("THIS");
console.log("IS");
console.log("SYNCHRONOUS");


// TO OVERCOME THIS SYNCHRONOUS , WE USE "SetTimeout"

setTimeout(fun,0)         //We can globally define the function

console.log("THIS");
function fun(){               //calling
    console.log("ASYNCHRONOUS");
}
console.log("IS");



// (OR)
console.log("THIS");
setTimeout(()=>{
    console.log("ASYNCHRONOUS");
},1000)
console.log("IS");



function sayHello(){
    console.log("i love her");
}
setTimeout(()=>{
    console.log();
    
})