// LOOPS
//=>DESCRIPTION OF CODE

//=>for(intialisation;cond;updation)
for(let i=1;i<=5;i++){              
    // console.log("hello");     
}      


// PRINT ALL ODD NUMBER FROM 1 TO 15

for(let i=1;i<=15;i=-2){
    // console.log(i); 
}
// console.log("IN BACKWARD FORM");

for(let a=15;a>=1;a=a-2){
    // console.log(a);
}


// PRINT ALL EVEN NUMBERS FROM 2 TO 20

for(let b=2;b<=20;b=b+2){
    // console.log(b);
}

for(let c=5;c<=50;c=c+5){
    // console.log(c);
}



let n=prompt("enter the number :")
n=parseInt(n)   //=>CONVERT STRING INTO INT
for(let d=n;d<=n*10;d=d+n){
    // console.log(d);
    
}



// NESTED LOOP

for(let e=1;e<=3;e++){
    for(let f=1;f<=3;f++){
        // console.log(f);
        
    }
}


// DO WHILE LOOP
  /* 
   while{cond}{
      code
   }
  */
 let x=1;
 while(x<=5){
    // console.log(x);
    x++
 }


//  BREAK KEYBOARD
   //=>LOOP EXECUTION STOP

let y=1;
while (y<=5) {
    if (y==3) {
        break;
    }
    // console.log(y);
}




// LOOP WITH ARRAYS

let fruit=["mango","apple","banana","litchi","orange"]
for (let v = 0; v < fruit.length; v++) {
    console.log(v,fruit[v]);    
}


// LOOPS WITH NESTED ARRAYS

let heroes=[["ironman","spiderman","thor"],["superman","wonder women","flash"]]
for(let r=0;r<heroes.length;r++){
    // console.log(heroes[r]);
for(l=0;l<heroes[l].length;l++) {
    // console.log(`l=${l},${heroes[r][l]}`);
    
}
}

// FOR-OF LOOP
  /*
    for(elements of collection){
       //do code 
    }
  */

let fruity=["mango","apple","banana","litchi","orange"]
for(fruits of fruity){
    // console.log(fruits);
}


// NESTED FOR-OF LOOP

let he=[["ironman","spiderman","thor"],["superman","wonder women","flash"]]
for(list of he){
    for(name of list){
    // console.log(name);
    }
}