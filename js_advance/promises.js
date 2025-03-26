// PROMISES AND PROMISES CHAINING 
    //=>This Help To Create Asynchronous Js

function fetchData(){
    return new promise((resolve,reject)=>{
        setTimeout(()=>{
            let success=true;
            if(success){
                resolve("Data Fetched Successfully");
            } 
            else{
                reject("Error");
            }
        },3000)
    })
}
// let response=fetchData();
// console.log(response);


fetchData()
.then((data)=>{
    console.log(data)
    return data.toLowerCase();
})
.catch((error)=>console.error(error))



/*
   A Promise Is In One Of These States:
     1.PENDING -> initial state,neither fufilled nor rejected
     2.FULFILLED -> meaning that the operation was completed successfully.
     3.REJECTED -> meaning that the operation failed.
*/