// STRINGS
//=>DESCRIPTION OF CODE
//=>IMMUTABLE 

const name="dilpreet";
const price=5;

// console.log(name+price+"value");   
            
// console.log(`hey my name is ${name} and price I received is ${price}`);     //=> using backlash we can add string in a single line




const gameName=new String('dil')   //=>0-d   1-i   2-l

// console.log(gameName[0]);    //=>d
// console.log(gameName.__proto__);   //=>{}
// console.log(gameName.length);         //=>3
// console.log(gameName.toUpperCase());         //=>DIL
// console.log(gameName.charAt(1));          //=>i

const newString=gameName.substring(0,2)
// console.log(newString);   //=?di

const anotherString=gameName.slice(2,0)
// console.log(anotherString);

const newStringOne="   dilpreet      ";
// console.log(newStringOne);
// console.log(newStringOne.trim()); //=> remove extra spaces

const url="https://dil.com/dilpreet%12singh";
// console.log(url.replace('%12','-'));

// console.log(url.includes('dil'));

// console.log(gameName.split('-'));



// STRING INDICES

let Name="dilpreet singh"
// console.log(Name[Name.length-1]);         //end string word


// STRING METHOD


//1. TRIM METHOD
   //=>remove extra space 

let msg="  hello   "
// console.log(msg.trim());


//2. TOUPPERCASE METHOD
    //=>ALL UPPER CASE

// console.log(msg.toUpperCase());


//3. TOLOWERCASE METHOD
    //=>ALL UPPER CASE

// console.log(msg.toLowerCase());



// STRING SLICING

let string1="dilpreet singh"
// console.log(string1.slice(-11));

// REPLACE
// console.log(string1.replace("dilpreet","Dil"));

// REPEAT
// console.log(string1.repeat(3));


