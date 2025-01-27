// STRINGS
//=>DESCRIPTION OF CODE


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

