// OBJECT LITERALS
//=>DESCRIPTION OF CODE
   
   //=>used to store keyed collections and complex entities
   /*
     property=>(key,value) pair
       ->object are a collection of properties
     
            |STUDENT|(object)
        NAME    -   "DILPREET"      
        AGE    -       19      
        MARKS    -     8.34(CGPA)  
           
         ||              || 
         ||              ||
         ||              ||
        KEYS            VALUE
   
--------------SYNTAX----------------

NOTE : key:value

const student ={
   name:"dil", 
   age:19,
   marks:8.89,
   city:"delhi"
};    

*/


// OBJECT
const student ={
    name:"dil", 
    age:19,
    marks:8.89,
    city:"delhi"
 };   

// ARRAY
let student2=["dil",19,8.89,"delhi"] 
//=>BOTH ARE SAME BUT OBJECT IS MUCH CLEAR AND WITH KEYS
//=>WE CAN ALSO USE ARRAY IN OBJECT


// console.log(student.name);        //=>TO ACCESS VALUE


// ADD OR UPDATE

// ADD
// console.log(student.city="punjab");

// UPDATE
  //=>make new variable 
// console.log(student.gender);            //undefined
// console.log(student.gender="male");      //male



// NESTED OBJECT

const classInfo = {
   dil :{
      grade:"A",
      city:"punjab"
   },
   preet :{
      grade:"B",
      city:"delhi"
   },
   karan :{
      grade:"C",
      city:"bengal"
   }
};

// console.log(classInfo);          //can access every data 
// console.log(classInfo.dil);     //give access of dil
// console.log(classInfo.city);         //undefined        
// console.log(classInfo.dil.city);          //city of dil



// ARRAYS OF OBJECTS
   //=> [] ----> square bracket is used

   const classInformation = [
      {
         name:"dil",
         grade:"A",
         city:"punjab"
      },
      {
         name:"preet",
         grade:"B",
         city:"delhi"
      },
      {
         name:"karan",
         grade:"C",
         city:"bengal"
      }
   ];
// console.log(classInformation[1].name);            //in array index is used


