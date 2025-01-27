//DATE AND TIME
//>DESCRIPTION OF CODE



//DATE//
let myDate =new Date()
// console.log(myDate());
// console.log(myDate.toISOString());
//console.log(myDate.toString());
// console.log(myDate.toLocaleDateString()); //=>undefined
// console.log(myDate.toTimeString());
// console.log(myDate.toDateString()); //=>Mon Jan 27 2025
// console.log(typeof (myDate));   //=>object

let mycreateddate= new Date(2025,0,26)
// console.log(mycreateddate.toString());
// console.log(mycreateddate.toDateString());  //=>Sun Jan 26 2025
// console.log(mycreateddate.toLocaleString());     //=>1/26/2025, 12:00:00 AM





//TIME//
let mytime=Date.now()
// console.log(mytime);   //=>1737994867969   milisec
// console.log(mycreateddate.getTime()); //=>milisec time from created this date code
// console.log(Math.floor(Date.now()/1000));   //=>floor value


let newdate=new Date()
// console.log(newdate.getDay());   //=>1
// console.log(newdate.getHours());   
// console.log(newdate.getMonth()+1);

// console.log(newdate.toLocaleString('default',{weekday:"long"}));    adjust the data to get


