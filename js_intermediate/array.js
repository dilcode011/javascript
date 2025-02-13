// ARRAY
//=>DESCRIPTION OF CODE
//=>LINEAR
//=>MUTABLE

let student=["dilpreet","manmeet","dillu"]
// console.log(student.length);  //3
// console.log(student[0]);   //dilpreet
// console.log(student[1]);      //manmeet


let info=["dil",19,8.53];
// console.log(info);

// EMPTY ARRAY
let EMPTYarr=[]
// console.log(EMPTYarr);


// ARRAY METHODS
  /*
     1.push - add to end
     2.pop  - delete from end and return it
     3.unshift  - add to start
     4.shift  - delete from start and return it
  */

let car=[]
// console.table(car.push("audi","bmw","xuv","toyota"));
// console.table(car);


// INDEXOF
let color=["red","blue","green","white","black"]
// console.log(color.indexOf("white"));


// INCLUDES
// console.log(color.includes("pink"));


// CONCATENATE

let primary=["red","blue","green","white","black"]
let secondary=["pink","orange","brown"]
// console.log(primary.concat(secondary));


// REVERSE
// console.log(primary.reverse());



// ARRAY SLICE

let colors=["red","blue","green","white","black","pink","orange","brown"]
// console.log(colors.slice(0,3));
   //=>(START,END,STOP)


// SPLICE METHOD
  //=>SPLICE(START,DLTCOUNT,ITEM0...ITEM-N)
  //=>CUT FROM PARTICULAR INDEX

// console.log(colors.splice(4));
//  console.log(colors.splice(0,0,"purple","grey"));
 

// SORTING METHOD
   //=> USED ON THE BASIS OF STRING

let days=["mon","tue","wed","thur","fri","sat","sun"]
// console.log(days.sort());



// ARRAY REFERENCES
    //=>ADDRESS IN MEMORY

let arr1=['a','b']
let arr2=arr1;
// console.log(arr1==arr2);    //TRUE


// CONST ARRAY

const arrr=[1,2,3]
// console.log(arrr.push(4));    //4
// console.log(arrr);         // [ 1, 2, 3, 4 ]


// NESTED ARRAY

let num=[[1,2],[3,4],[5,6]]
// console.log(num[1]);        //[ 3, 4 ]



// ARRAY METHODS

//ForEach
     /*
        arr.forEach(some function definition or name);
     */

let arr=[1,2,3,4,5];

let print=function(el){
   // console.log(el);
};
arr.forEach(print)



arr.forEach(function(el){
   // console.log(el);
   
});



arr.forEach((el)=>{
   // console.log(el);
   
});


let array=[{
   name:"dil",
   marks:78
},
{
   name:"preet",
   marks:89
},
{
   name:"singh",
   marks:98
}];

array.forEach((students) => {
   // console.log(students.marks);
   
});


// MAP
     /*
        let newarr=arr.map(some function definition or name);
     */

        let number=[1,2,3,4];
        let double=number.map(function(el){
         return el*2;
        });
      //   console.log(double);
        

      // array
let gpa=students.map((el)=>{
   return marks/10;
});
console.log(gpa);


// FILTER
     /*
        let newarr=arr.filter(some function definition or name);
     */

let numbers=[2,4,1,5,6,7,8,9];
let even=numbers.filter((numbs)=>{
   return numbs%2==0;
});
console.log(even);
