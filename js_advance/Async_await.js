//ASYNC AWAIT

// function fetchUserData(){
//     return new Promise((resolve,reject) =>{
//         setTimeout(()=>{
//             resolve({name:"dilpreet"})
//         },3000)
//     })
// }
// async function getUserData() {
//     try{
//         console.log("Fetched User Data...");
//         const userData=await fetchUserData();        //wait here then print 
//         console.log("User Data :",userData);
//         console.log("Successfully Done");
        
//     }
//     catch(error){
//         console.log("Error Fetching Data",error);
        
//     }
// }
// getUserData();



//Promise All

function fetchPostData(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Post Data Fetched..")
        },2000)
    })
}
function fetchCommentData(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Comment Data Fetched...")
        },3000)
    })
}
async function getBlogData(){
    try{
        console.log("Fetching Blog Data.....");
        
        // const blogData=await fetchPostData();
        // const commentData=await fetchCommentData();
        // console.log(blogData);
        // console.log(commentData);
                     /*OR*/
        const[postData,commentData]= await Promise.all([fetchPostData(),fetchCommentData()])
        console.log("Successfully Fetched.");
        
    }
    catch(error){
        console.error("Error Fetching Data",error);
        
    }
}
getBlogData()