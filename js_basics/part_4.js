//STACK AND HEAP
//=>stack is primitive and heap is non primitive
//=>stack is faster than heap
//=>stack is used for local variables and heap is used for global variables
//=>stack is used for function calls and heap is used for dynamic memory allocation

let coderName="Dilpreet";
let anotherName="Dil";
anotherName="desilaw";
// console.log(anotherName);            
 //=> desilaw
//=>in stack desilaw is last value so it will print desilaw


let userDetails={
    name:"Dilpreet",
    age:20,
    Email:"dil@gamail.com"
}
let usertwo=userDetails;
// console.log(usertwo);         //=>copied to usertwo 

usertwo.Email="dilll@gmail.com";
// console.log(usertwo);             //=>changed the email of usertwo

// console.log(userDetails);            //=>also changed in original var 

