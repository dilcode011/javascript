// NUMBER AND MATHS
//=>DESCRIPTION OF CODE


const balance= new Number(200)
// console.log(balance);         //=>number:200
// console.log(balance.toString().length);      //=>3
// console.log(balance.toFixed(2));      //=>200.00

const otherNumber=12233.3434
// console.log(otherNumber.toPrecision(3));  //=>round off

const hundreds=1000000
// console.log(hundreds.toLocaleString()); //=>1,000,000
// console.log(hundreds.toLocaleString('en-IN')); //=>10,00,000 (INDIAN)


//----------------------------------MATHS-----------------------------------------------//
//Math is a object

// console.log(Math);     //=>Object [Math] {}

// console.log(Math.abs(5)); //=>[Function: abs]
// console.log(Math.round(5.55)); //=>6
// console.log(Math.ceil(4.22));   //=>5   take upper rounded value
// console.log(Math.floor(4.22));    //=>4  take lower rounded value
// console.log(Math.max(2,3,4,5,6));    //=>6
// console.log(Math.min(2,3,4,5,6));    //=>2
// console.log(Math.random());     //=>random value
// console.log(Math.random()*10+1);
// console.log(Math.floor(Math.random()*10+1));  //=>9



const min=11
const max=22

// console.log(Math.floor(Math.random() *  (max-min+1)) + min);           //=>21


// RANDOM INTEGERS

let stepwise= Math.random()        //generate random number
num=num*10                      //give number in the range of 1 to 10
num=Math.floor(num)              //remove decimal number
num=num+1                        //to get 10 in this

    

//====>  let stepwise(Math.floor(Math.random()*10))+1
