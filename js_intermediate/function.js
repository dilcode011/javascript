// FUNCTIONS IN JS
    /*
    FUNCTION DEFINITION 

       function funcName(){
           code.....
       } 
           
    FUNCTION CALLING 

        funcName();
    */

function hello() {
    console.log("hello dilpreet");
}
// hello()    //CALLING


function isadult() {
    let age =12
    if(age>=18){
        console.log("adult");
    }
    else{
        console.log("not adult");
        
    }
}
// isadult()



// FUNCTION WITH ARGUMENTS
       /*
          function funcName(arg1,arg2,...){
              code....
          }

       */

function printname(name){
    console.log(name);
}
// printname("dilpreet")


// RETURN KEYWORD
    //=>used to return value from the function
    /*
      function funcName(arg1,arg2,..){
           code...
      return value;
    }
   
    */

function sum(a,b){
    return a+b;
}
// console.log(sum(2,3));

    //=>WE CANT PRINT AFTER RETURN KEYWORD  



//SCOPE 
/*
    1.FUNCTION --> defined inside the function and not visible from outside
    2.BLOCK  --> var declared inside a {} block cannot be accessed from outside the block
    3.LEXICAL --> A var defined outside a function can be accessible inside another func defined after the var declaration
                  The opposite is NOT true
*/

function calsum(a,b){
    let sum=a+b
}
// console.log(sum);          //not accessible from the outside the function


let age=23
if (age>=18) {
    let str="adult"
}
// console.log(str);


function outrfunc(){
    let x=1
    let y=2
    function innerfunc(){
        console.log(x);
    }
    innerfunc()
}



// FUNCTION EXPRESSIONS
       /*
          const variable=function(arg1,arg2,...){
               code....
          }
       */

let name=function(a,b){
    return a+b;
}
// console.log(name(1,2));            //called by var name



// HIGHER ORDER FUNCTIONS

// 1.take one or multiple func as arguments
function multiplegreet(func,n){
    for(let i=1;i<=n;i++){
        func()
    }
}
let greet=function(){
    console.log("hello");
}
multiplegreet(hello,40)


// 2.returns a function
function oddeven(request){
    if(request=="odd"){
        return function(n){
            console.log(!(n%2==0));
        }
    }
    else if(request=="even"){
        return function(n){
            console.log(n%2==0);
            
        }
    }
    else{
        console.log("wrong request");
        
    }
}