// TRAFFIC LIGHT


let color="green";
if(color=="red"){
    console.log("stop!");
}
if(color=="yellow"){
    console.log("slow down!");
}
if(color=="green"){
    console.log("go!");
    
}


// CALCULATE POPCORN PRICE BASED ON TH SIZE CUSTOMER ASKED  
// IF SIZE XL - 250
// SIZE L - 200
// SIZE M - 100
// SIZE S - 50 


let size='XL';
if(size==='XL'){
    console.log("price is RS.250");
}
else if(size==='L'){
    console.log("price is RS.200");
}
else if(size==='M'){
    console.log("price is RS.100");
}
else{
    console.log("price is RS.50");
}


// A "GOOD STRING" IS A STRING THAT STARTS WITH LETTER "a"& HAS A LENGTH >3.WRITE A PROGRAM TO FIND IF A STRING IS GOOD OR NOT.


let str="app";
if((str.startsWith('a'))&&(str.length>=3)){
    console.log("good string");
}
else{
console.log("not good string");
}


// USE SWITCH STATEMENT TO PRINT THE DAY OF THE WEEK USING A NUMBER VAR "day" WITH VALUE 1 TO 7
//1 - MONDAY  2 - TUESDAY.....

let DAY=1;
switch (DAY) {
    case 1:
        console.log("MONDAY");
        break;
    case 2:
            console.log("TUESDAY");
            break;
    case 3:
        console.log("WEDNESDAY");
        break;
    case 4:
        console.log("THURSDAY");
        break;
    case 5:
            console.log("FRIDAY");
            break;
    case 6:
        console.log("SATURDAY");
        break;
    case 7:
        console.log("SUNDAY");
        break;    
    default:
        console.log("wrong day!");
        
        break;
}