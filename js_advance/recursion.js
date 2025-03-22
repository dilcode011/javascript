// RECURSION
//=> Calling itself 


// for(let i=0;i<=10;i++){
//     console.log(i);  
// }

// RECURSIVE (Print number 1 to 10)
function printrecursivenumber(n){
    if(n<=10){
        console.log(n);
        printrecursivenumber(n+1);
    }
    
}
printrecursivenumber(1)


// RECURSIVE (Print factorial of 5 and 4)
function fact(n){
    if(n==0){
        return 1;
    }
    else{
        return n*fact(n-1);
    }
}
console.log(fact(5));
 