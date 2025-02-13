// THIS KEYWORD 
        //It refers to an object that is executing the current piece of code

const student ={
    name:"dil",
    age:19,
    eng:98,
    hind:98,
    phy:89,
    getavg(){
        // console.log(this);             //IN THIS "THIS" HAS VALUES WITH KEYS
        
        let avg=(this.eng+this.hind+this.phy)/3
        console.log(`${this.name}got average marks=${avg}`);
    }
}

function getavg(){
    console.log(this);         //IN THIS "THIS" HAS VALUES WITH KEYS OF WINDOWS
}



// TRY AND CATCH

console.log(a);    //IT WILL TRHOUGH ERROR BECUZ IT IS NOT DEFINED


try {
    conxsole.log(x);
}
//=>FIRST IT WILL TRY IF IT IS TRUE THEN CATCH WILL NOT RUN

catch{
    console.log("variable x is not defined");
}
//=>IF TRY STATEMENT IS FALSE THEN CATCH WILL RUN



// ARROY FUNCTION

    //=> IT IS DEFINED USING   " => "
    /* 
        const func=(arg1,arg2,..)=>{function defintion}
    */

const sum=(a,b)=>{
    console.log(a+b);
}


// ARROY FUNCTION (IMPLICIT RETURN)

    /* 
        const func=(arg1,arg2,..)=>{Value}
    */



// SET TIMEOUT FUNCTION

    /* 
        settimeout(function,timeout)
    */

console.log("hello");
setTimeout(()=>{                 //()=>    IT IS ARROW FUNCTION
    console.log("hello dil");
    
},4000);        //TIME IS IN MILISECOND
console.log("welcome");



// SET INTERVAL FUNCTION
    //=>IT PRINT STATEMENT AFTER EVERY "TIMEOUT"
    /* 
        setinterval(function,timeout)
    */

setInterval(()=>{
    console.log("hello dil");
},2000);


// TO TERMINATE THE STATEMENT

let id=setInterval(()=>{
    console.log("hello dil");
},2000);

console.log(id);
console.log(clearInterval(id));


// THIS WITH ARROW FUNCTION

const stu={
    name:"dilpreet",
    marks:45,
    prop:this,           //Global Scope     //IN THIS IT WILL GIVE WINDOW PROPERTIES
    
    getName:function(){
        return this.name;
    },

    getMarks:()=>{
        console.log(this);   //Parents Scope -> window 
        return this.marks;
    },


 getInfo: function(){   //this is chidren of stu object  //<------------------------|
    setTimeout(()=>{                                                      //        | 
        console.log(this);   //student--> for this "THIS" is children of his outer parent
    },2000);
 },

 getInfo2: function(){
    setTimeout(function(){        //this function is parent of "THIS"
        console.log(this);     //window
    },2000);
 }

}


