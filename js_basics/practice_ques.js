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


// CREATE A NUMBER VAR NUM WITH SOME VALUE.NOW PRINT GOOD IF NUM IS DIVISIBLE BY 10 AND PRINT BAD IF NOT

let NUM=12;
if(NUM%10==0){
    console.log("good");
    
}
else{
    console.log("bad");
}


// TAKE USER'S NAME AND AGE FROM USER USING PROMPTS THEN RETURN BACK FOLLOWING STATEMENT TO USER AS AN ALERT 

let NAME=prompt("enter the name")
let AGE=prompt("enter the age")
alert(`${NAME} is ${AGE} year old`)


// A STRING IS A GOLDEN STRING IF IT STARTS WITH CHAR A OR a AND HAS TOTAL LENGTH GREATER THAN 5 AND NOT IF NOT

let str1="dilpreet"
if((str1[0]=='A'||str1[0]=='a')&&str1.length>5){
    console.log("golden string");
}
else{
    console.log("not good");
    
}


// WRITE A PROGRAM TO FIND THE LARGEST OF 3 NUMBERS

let a=1
let b=2
let c=3
if(a>b){
    if(a>c){
        console.log(a,"is largest");
    }
    else{
        console.log(c,"is largest");
    }
}
else{
    if(b>c){
        console.log(b,"is largest");
    }
    else{
        console.log(c,"is largest");
    }
}


// WAP TO CHECK IF 2 NUMBERS HAVE SAME LAST DIGIT.

let n1=32
let n2=47852
if((n1%10) == (n2%10)){
    console.log("number have same last digit which is",n1%10);
    
}else{
    console.log("numbers not have same last digit");
    
}